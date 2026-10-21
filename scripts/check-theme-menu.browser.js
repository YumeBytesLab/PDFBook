// Playwright browser_run_code_unsafe; run against an isolated Astro preview.
async (page) => {
  const origin = 'http://127.0.0.1:4396';
  const browser = page.context().browser(), results = [];
  const check = (value, message) => { if (!value) throw Error(message); };
  for (const locale of ['en','ja','zh','ko','es','fr','de','pt','ru','it','id','vi']) {
    const context = await browser.newContext({ viewport: {width:1280,height:900}, colorScheme:'dark' });
    const p = await context.newPage(), errors = [];
    p.on('pageerror', e => errors.push(e.message));
    try {
      await p.goto(origin + (locale === 'en' ? '/settings/' : '/' + locale + '/settings/'));
      await p.evaluate(() => customElements.whenDefined('wiki-theme-menu'));
      const menu = p.locator('.wiki-header wiki-theme-menu');
      check(!await menu.locator('select').isVisible(), 'Native select must stay hidden');
      await menu.locator('summary').click();
      check(await menu.locator('button').count() === 3, 'Three localized theme choices');
      await menu.locator('[data-theme-choice="light"]').click();
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'light');
      check(await p.evaluate(() => localStorage.getItem('starlight-theme')) === 'light', 'Preference persisted');
      check(await p.locator('wiki-theme-menu [aria-pressed="true"]').evaluateAll(items => items.every(item => item.dataset.themeChoice === 'light')), 'Desktop/mobile selection stays in sync');
      await p.reload();
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'light');
      await menu.locator('summary').focus();
      await p.keyboard.press('ArrowUp');
      check(await p.evaluate(() => document.activeElement?.getAttribute('data-theme-choice')) === 'auto', 'ArrowUp selects last choice from trigger');
      await p.keyboard.press('Escape');
      check(await menu.locator('details').evaluate(el => !el.open), 'Escape dismisses panel');
      check(await menu.locator('summary').evaluate(el => el === document.activeElement), 'Escape returns focus');
      await menu.locator('summary').click();
      await menu.locator('[data-theme-choice="auto"]').click();
      await p.emulateMedia({colorScheme:'light'});
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'light');
      await p.emulateMedia({colorScheme:'dark'});
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'dark');
      await menu.locator('summary').click();
      await p.locator('.wiki-language summary').click();
      check(await menu.locator('details').evaluate(el => !el.open), 'Language control dismisses theme panel');
      await p.locator('.wiki-language summary').click();
      await p.setViewportSize({width:390,height:844});
      await p.locator('wiki-menu-button button').click();
      const mobile = p.locator('.wiki-mobile-theme wiki-theme-menu');
      await mobile.locator('summary').scrollIntoViewIfNeeded();
      await mobile.locator('summary').click();
      await mobile.locator('[data-theme-choice="light"]').click();
      await p.waitForFunction(() => document.documentElement.dataset.theme === 'light');
      await mobile.locator('summary').click();
      const bounds = await mobile.locator('.wiki-theme-panel').boundingBox();
      check(bounds && bounds.x >= 0 && bounds.y >= 0 && bounds.x + bounds.width <= 390 && bounds.y + bounds.height <= 844, 'Mobile panel stays inside viewport');
      await p.keyboard.press('Escape');
      check(await p.locator('wiki-menu-button button').getAttribute('aria-expanded') === 'true', 'First Escape keeps sidebar open');
      check(!await p.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'No horizontal overflow');
      check(errors.length === 0, errors.join('; '));
      results.push({locale,desktop:true,mobile:true,persistence:true,systemTheme:true,keyboard:true,pageErrors:0});
    } finally { await context.close(); }
  }
  return results;
}
