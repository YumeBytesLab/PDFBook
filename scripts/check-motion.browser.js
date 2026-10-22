// Playwright browser_run_code_unsafe; use the production preview to exercise Pagefind too.
async (page) => {
  const origin = 'http://127.0.0.1:4396';
  const browser = page.context().browser(), results = [];
  const check = (value, message) => { if (!value) throw Error(message); };
  const checkTextStill = async p => {
    check(await p.evaluate(() => [...document.querySelectorAll('.wiki-article-heading, .content-panel, .wiki-hero-copy > *, .wiki-hero-product')].every(el => {
      const style = getComputedStyle(el);
      return style.animationName === 'none' && style.transform === 'none' && style.opacity === '1';
    })), 'Reading content must stay visible and stationary, including after a transition ends');
  };
  for (const reducedMotion of ['no-preference', 'reduce']) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: 'dark', reducedMotion });
    const p = await context.newPage(), errors = [];
    p.on('pageerror', error => errors.push(error.message));
    try {
      await p.addInitScript(() => {
        addEventListener('pagereveal', event => { sessionStorage.setItem('wiki-test-page-transition', String(!!event.viewTransition)); });
      });
      await p.goto(origin + '/ja/settings/');
      await p.evaluate(() => customElements.whenDefined('wiki-theme-menu'));
      await checkTextStill(p);
      const menu = p.locator('.wiki-header wiki-theme-menu');
      await menu.locator('summary').click();
      check(await menu.locator('.wiki-theme-panel').evaluate(el => !el.inert), 'Open theme menu is interactive');
      const panelMotion = await menu.locator('.wiki-theme-panel').evaluate(el => {
        const animations = el.getAnimations();
        return { opacity: getComputedStyle(el).opacity, properties: animations.map(animation => animation.transitionProperty) };
      });
      if (reducedMotion === 'no-preference') check(panelMotion.properties.includes('opacity') && panelMotion.properties.includes('transform'), 'Pointer menu has real opacity and transform transitions');
      await menu.locator('[data-theme-choice="light"]').click();
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'light');
      await p.waitForFunction(() => !document.documentElement.hasAttribute('data-wiki-theme-transition'));
      await checkTextStill(p);
      check(await menu.locator('.wiki-theme-panel').evaluate(el => el.inert && el.getAttribute('aria-hidden') === 'true'), 'Closed menu leaves accessibility and focus trees');
      check(await p.evaluate(() => localStorage.getItem('starlight-theme')) === 'light', 'Animated theme choice persists');

      // Interrupt the native transition with another choice before it finishes.
      await menu.locator('summary').click();
      await menu.locator('[data-theme-choice="dark"]').click();
      await p.evaluate(() => {
        const theme = document.querySelector('.wiki-header wiki-theme-menu');
        theme.querySelector('summary').click();
        theme.querySelector('[data-theme-choice="light"]').click();
      });
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'light' && !document.documentElement.hasAttribute('data-wiki-theme-transition'));
      check(await p.evaluate(() => localStorage.getItem('starlight-theme')) === 'light', 'Rapid theme changes settle on latest choice');
      await p.evaluate(() => {
        const theme = document.querySelector('.wiki-header wiki-theme-menu');
        theme.querySelector('[data-theme-choice="dark"]').click();
        theme.querySelector('[data-theme-choice="light"]').click();
      });
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'light' && !document.documentElement.hasAttribute('data-wiki-theme-transition'));

      const language = p.locator('.wiki-language');
      await language.locator('summary').click();
      await p.keyboard.press('Escape');
      check(await language.locator('.wiki-language-panel').evaluate(el => el.inert), 'Escaped language panel is inert during exit');
      check(await language.locator('summary').evaluate(el => el === document.activeElement), 'Language Escape returns focus');

      await menu.locator('summary').focus();
      await p.keyboard.press('ArrowDown');
      check(await p.evaluate(() => document.activeElement?.getAttribute('data-theme-choice')) === 'dark', 'Keyboard opens menu and focuses its first choice immediately');
      check(await menu.locator('.wiki-theme-panel').evaluate(el => getComputedStyle(el).transitionDuration === '0s'), 'Keyboard menu has no animation delay');
      await p.keyboard.press('Escape');

      await p.waitForSelector('#starlight__search input', { state: 'attached' });
      await p.keyboard.press('Control+k');
      const dialog = p.locator('site-search dialog');
      check(await dialog.evaluate(el => el.open && getComputedStyle(el).transitionDuration === '0s'), 'Search shortcut opens instantly');
      await p.keyboard.press('Escape');
      await p.locator('button[data-open-modal]').click();
      await dialog.locator('input').fill('PDF');
      await p.waitForSelector('.pagefind-ui__result-link');
      check(await dialog.locator('input').evaluate(el => el === document.activeElement), 'Search keeps input focus while results load');
      await p.keyboard.press('Escape');

      // Real document navigation must leave the custom elements and Pagefind working.
      await p.locator('.sidebar-content a[href="/ja/features/reader/"]').click();
      await p.waitForURL('**/ja/features/reader/');
      await p.waitForSelector('#starlight__search input', { state: 'attached' });
      if (reducedMotion === 'no-preference') check(await p.evaluate(() => sessionStorage.getItem('wiki-test-page-transition')) === 'true', 'Navigation uses a real cross-document transition');
      else check(await p.evaluate(() => sessionStorage.getItem('wiki-test-page-transition')) === 'false', 'Reduced motion opts out of cross-document animation');
      await p.evaluate(async () => { await document.activeViewTransition?.finished; });
      await checkTextStill(p);
      await menu.locator('summary').click();
      await menu.locator('.wiki-theme-panel').waitFor({ state: 'visible' });
      await p.keyboard.press('Escape');
      await p.goBack();
      await p.waitForURL('**/ja/settings/');
      check(await p.evaluate(() => document.documentElement.dataset.theme === 'light'), 'Browser Back keeps theme');

      await p.setViewportSize({ width: 390, height: 568 });
      const toggle = p.locator('wiki-menu-button button'), pane = p.locator('#starlight__sidebar');
      await toggle.click();
      check(await pane.evaluate(el => !el.inert), 'Opening mobile sidebar is interactive');
      check(await p.locator('.main-frame').evaluate(el => el.inert), 'Mobile sidebar isolates reading content');
      await toggle.click();
      check(await pane.evaluate(el => el.inert), 'Closing mobile sidebar is inert immediately');
      await toggle.click();
      await toggle.click();
      await toggle.click();
      await p.waitForFunction(() => getComputedStyle(document.querySelector('#starlight__sidebar')).opacity === '1');
      const group = p.locator('.sidebar-content .top-level details').first();
      await group.locator('summary').scrollIntoViewIfNeeded();
      if (await group.evaluate(el => !el.open)) await group.locator('summary').click();
      await group.locator('summary').click();
      await p.waitForFunction(() => document.querySelector('.sidebar-content .top-level details > ul').inert);
      await group.locator('summary').click();
      await p.waitForFunction(() => !document.querySelector('.sidebar-content .top-level details > ul').inert);
      const mobile = p.locator('.wiki-mobile-theme wiki-theme-menu');
      await mobile.locator('summary').scrollIntoViewIfNeeded();
      await mobile.locator('summary').click();
      const panel = mobile.locator('.wiki-theme-panel');
      await p.waitForFunction(() => getComputedStyle(document.querySelector('.wiki-mobile-theme .wiki-theme-panel')).opacity === '1');
      const bounds = await panel.boundingBox();
      check(bounds && bounds.x >= 0 && bounds.y >= 0 && bounds.x + bounds.width <= 390 && bounds.y + bounds.height <= 568, 'Animated mobile theme panel stays in short viewport');
      check(await panel.evaluate(el => !el.inert), 'Mobile theme remains interactive');
      if (reducedMotion === 'reduce') check(await panel.evaluate(el => getComputedStyle(el).transform === 'none'), 'Reduced motion removes panel movement');
      await p.keyboard.press('Escape');
      check(await toggle.getAttribute('aria-expanded') === 'true', 'Menu Escape keeps sidebar open');
      await p.keyboard.press('Escape');
      check(await pane.evaluate(el => el.inert), 'Second Escape closes sidebar');
      const toc = p.locator('#starlight__mobile-toc');
      await toc.locator('summary').click();
      await toc.locator('.dropdown').waitFor({ state: 'visible' });
      check(await toc.locator('.dropdown').evaluate(el => !el.inert), 'Open mobile contents are interactive');
      await toc.locator('a').first().click();
      check(await toc.locator('.dropdown').evaluate(el => el.inert), 'Mobile contents leave focus tree after selection');
      check(!await p.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'No horizontal overflow');
      check(errors.length === 0, errors.join('; '));
      results.push({ reducedMotion, stationaryText: true, themes: true, interruption: true, keyboard: true, search: true, navigation: true, mobile: true, pageErrors: 0 });
    } catch (error) { throw Error(`${reducedMotion}: ${error.message}`); }
    finally { await context.close(); }
  }

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  try {
    const p = await context.newPage();
    await p.addInitScript(() => { document.startViewTransition = undefined; });
    await p.goto(origin + '/settings/');
    await p.locator('.wiki-header wiki-theme-menu summary').click();
    await p.locator('.wiki-header [data-theme-choice="dark"]').click();
    await p.waitForFunction(() => document.documentElement.dataset.theme === 'dark');
    results.push({ viewTransitionFallback: true });
  } finally { await context.close(); }

  const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1280, height: 900 } });
  try {
    const p = await noScript.newPage();
    await p.goto(origin + '/ja/');
    await checkTextStill(p);
    await p.locator('.wiki-language summary').click();
    // Poll from the host: browser rAF callbacks do not run when JavaScript is disabled.
    for (let attempt = 0; attempt < 20; attempt++) {
      if (await p.locator('.wiki-language-panel').evaluate(el => getComputedStyle(el).opacity === '1')) break;
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    await p.keyboard.press('Tab');
    check(await p.evaluate(() => document.activeElement?.getAttribute('lang')) === 'en', 'Native menu exposes its first language without scripts');
    await p.keyboard.press('Enter');
    await p.waitForURL(origin + '/');
    check(await p.locator('h1').isVisible(), 'Content and language navigation work without scripts');
    results.push({ noScriptNavigation: true });
  } finally { await noScript.close(); }
  return results;
}
