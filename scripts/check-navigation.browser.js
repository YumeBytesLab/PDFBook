// Playwright browser_run_code_unsafe; inspect actual snapshots, not just the DOM after they end.
async (page) => {
  const origin = 'http://127.0.0.1:4396';
  const results = [], browser = page.context().browser();
  const check = (condition, message) => { if (!condition) throw Error(message); };
  const boxes = p => p.evaluate(() => {
    const box = selector => {
      const el = document.querySelector(selector);
      if (!el || !el.getClientRects().length) return null;
      const { x, y, width, height } = el.getBoundingClientRect();
      return { x, y, width, height };
    };
    const links = [...document.querySelectorAll('.sidebar-content details[open] > ul a')].map(el => {
      const { x, y, width, height } = el.getBoundingClientRect();
      return { href: el.getAttribute('href'), x, y, width, height };
    });
    return { header: box('.page > .header'), brand: box('.wiki-header .wiki-brand'), actions: box('.wiki-header-actions'), sidebar: box('.sidebar-pane'), group: box('.sidebar-content .top-level > li:first-child summary'), links };
  });
  const sameBox = (a, b) => a && b && ['x', 'y', 'width', 'height'].every(key => Math.abs(a[key] - b[key]) < .5);
  const cases = ['en', 'ja', 'zh', 'ko', 'es', 'fr', 'de', 'pt', 'ru', 'it', 'id', 'vi'].map(locale => [locale, 1280]);
  cases.push(['ja', 390]);
  for (const [locale, width] of cases) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: 'dark' });
    const p = await context.newPage(), errors = [];
    // Home has no menu button; compare the toolbar area shared with article pages.
    const headerClip = rect => width < 800 ? { ...rect, width: rect.width - 47 } : rect;
    p.on('pageerror', error => errors.push(error.message));
    try {
      await p.addInitScript(() => {
        addEventListener('pagereveal', event => {
          if (!event.viewTransition || !sessionStorage.getItem('wiki-test-hold')) return;
          event.viewTransition.ready.then(() => {
            const animations = document.getAnimations();
            for (const animation of animations) { animation.pause(); animation.currentTime = 60; }
            document.documentElement.dataset.wikiTestSnapshot = 'ready';
          }).catch(() => {});
        });
      });
      const prefix = locale === 'en' ? '' : '/' + locale;
      await p.goto(origin + prefix + '/settings/');
      await p.evaluate(() => document.fonts.ready);
      if (width >= 800) {
        const group = p.locator('.sidebar-content .top-level > li:first-child details');
        await group.locator('summary').click();
        await p.waitForFunction(() => parseFloat(getComputedStyle(document.querySelector('.sidebar-content .top-level details'), '::details-content').blockSize) < .5);
        await group.evaluate(el => Promise.allSettled(el.getAnimations({ subtree: true }).map(animation => animation.finished)));
      }
      await p.mouse.move(width - 30, 850);
      const before = await boxes(p);
      const headerBefore = await p.screenshot({ clip: headerClip(before.header) });
      const groupBefore = width >= 800 ? await p.screenshot({ clip: before.group }) : null;
      await p.evaluate(() => sessionStorage.setItem('wiki-test-hold', 'yes'));
      if (width >= 800) await p.locator(`.sidebar-content a[href="${prefix}/features/reader/"]`).click();
      else {
        await p.locator('wiki-menu-button button').click();
        await p.locator(`.sidebar-content a[href="${prefix}/features/reader/"]`).click();
      }
      await p.waitForURL('**/features/reader/');
      await p.waitForFunction(() => document.documentElement.dataset.wikiTestSnapshot === 'ready');
      const during = await boxes(p);
      const snapshots = await p.evaluate(() => {
        const root = document.documentElement;
        return {
          headerName: getComputedStyle(document.querySelector('.page > .header')).viewTransitionName,
          groupAnimation: getComputedStyle(root, '::view-transition-group(wiki-header)').animationName,
          headerAnimation: getComputedStyle(root, '::view-transition-new(wiki-header)').animationName,
          oldContent: getComputedStyle(root, '::view-transition-old(wiki-page)').display,
          effects: document.getAnimations().map(a => ({ name: a.animationName, pseudo: a.effect?.pseudoElement, transforms: a.effect?.getKeyframes().some(frame => frame.transform || frame.width || frame.height) })),
        };
      });
      check(snapshots.headerName === 'wiki-header' && snapshots.groupAnimation === 'none' && snapshots.headerAnimation === 'none', 'Header snapshot must be static');
      check(snapshots.oldContent === 'none', 'Old article must not be rescaled into the new article');
      check(snapshots.effects.every(a => a.pseudo === '::view-transition-new(wiki-page)' && !a.transforms), 'Only incoming content opacity may animate during navigation');
      for (const key of ['header', 'brand', 'actions', ...(width >= 800 ? ['sidebar', 'group'] : [])]) check(sameBox(before[key], during[key]), `${locale}/${width}: ${key} moved during navigation`);
      if (width >= 800) check(before.links.length === during.links.length && before.links.every((link, i) => link.href === during.links[i].href && sameBox(link, during.links[i])), 'Sidebar link positions must stay fixed');
      const headerDuring = await p.screenshot({ clip: headerClip(during.header) });
      const groupDuring = width >= 800 ? await p.screenshot({ clip: during.group }) : null;
      await p.evaluate(async () => {
        sessionStorage.removeItem('wiki-test-hold');
        for (const animation of document.getAnimations()) animation.play();
        await document.activeViewTransition?.finished;
      });
      await p.evaluate(() => document.fonts.ready);
      const after = await boxes(p);
      for (const key of ['header', 'brand', 'actions', ...(width >= 800 ? ['sidebar', 'group'] : [])]) check(sameBox(before[key], after[key]), `${locale}/${width}: ${key} moved after navigation`);
      if (width >= 800) check(before.links.length === after.links.length && before.links.every((link, i) => link.href === after.links[i].href && sameBox(link, after.links[i])), 'Sidebar links must not reflow after navigation');
      if (width >= 800) check(await p.locator('.sidebar-content .top-level details').first().evaluate(el => !el.open), 'Collapsed sidebar state must survive without opening animation');
      const headerAfter = await p.screenshot({ clip: headerClip(after.header) });
      check(errors.length === 0, errors.join('; '));
      check(headerBefore.equals(headerDuring) && headerBefore.equals(headerAfter), `${locale}/${width}: header pixels must remain identical`);
      if (groupBefore) check(groupBefore.equals(groupDuring), `${locale}/${width}: unchanged sidebar heading pixels differ`);
      if (locale === 'en' || locale === 'ja') {
        for (const target of [prefix + '/', prefix + '/getting-started/']) {
          await p.evaluate(() => sessionStorage.setItem('wiki-test-hold', 'yes'));
          if (target === prefix + '/') await p.locator('.wiki-header .wiki-brand').click();
          else await p.locator('.wiki-hero-actions .wiki-button').click();
          await p.waitForURL(origin + target);
          await p.waitForFunction(() => document.documentElement.dataset.wikiTestSnapshot === 'ready');
          const chrome = await boxes(p);
          for (const key of ['header', 'brand', 'actions']) check(sameBox(before[key], chrome[key]), `${locale}/${width}: ${key} moved between home and article`);
          check(headerBefore.equals(await p.screenshot({ clip: headerClip(chrome.header) })), 'Home/article changes must preserve header pixels');
          await p.evaluate(async () => {
            sessionStorage.removeItem('wiki-test-hold');
            for (const animation of document.getAnimations()) animation.play();
            await document.activeViewTransition?.finished;
          });
        }
      }
      results.push({ locale, width, fixedChrome: true, onlyContentOpacity: true, collapsedState: width >= 800, headerPixelsDuring: true, headerPixelsAfter: true, sidebarPixelsDuring: !!groupBefore, pageErrors: 0 });
    } finally { await context.close(); }
  }
  return results;
}
