const animatedDetails = '.wiki-theme-details, .wiki-language, #starlight__mobile-toc, .sidebar-content .top-level details';

function syncDetails(details: HTMLDetailsElement) {
  for (const child of details.children) {
    if (!(child instanceof HTMLElement) || child.tagName === 'SUMMARY') continue;
    // Closing surfaces may still be painted, but must leave the focus and accessibility trees now.
    child.inert = !details.open;
    child.setAttribute('aria-hidden', String(!details.open));
  }
}

export function setDetailsOpen(details: HTMLDetailsElement, open: boolean) {
  details.open = open;
  syncDetails(details);
}

for (const details of document.querySelectorAll<HTMLDetailsElement>(animatedDetails)) syncDetails(details);
new MutationObserver(records => {
  for (const { target } of records) {
    if (target instanceof HTMLDetailsElement && target.matches(animatedDetails)) syncDetails(target);
  }
}).observe(document.body, { attributes: true, attributeFilter: ['open'], subtree: true });

const root = document.documentElement;
document.addEventListener('pointerdown', () => { root.dataset.wikiInput = 'pointer'; }, { capture: true, passive: true });
document.addEventListener('keydown', () => { root.dataset.wikiInput = 'keyboard'; }, { capture: true });

let themeTransition: ViewTransition | undefined;
let themeRequest = 0;

export function switchTheme(select: HTMLSelectElement, value: string) {
  const request = ++themeRequest;
  const apply = () => {
    if (request !== themeRequest) return;
    select.value = value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  };
  const resolved = value === 'auto' ? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') : value;
  themeTransition?.skipTransition();
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches ||
      root.dataset.wikiInput === 'keyboard' || root.dataset.theme === resolved) {
    themeTransition = undefined;
    delete root.dataset.wikiThemeTransition;
    apply();
    return;
  }

  root.dataset.wikiThemeTransition = '';
  const transition = document.startViewTransition(apply);
  themeTransition = transition;
  // Rapid changes intentionally skip snapshots; their ready promise rejects in that case.
  void transition.ready.catch(() => {});
  void transition.finished.catch(() => {}).then(() => {
    if (themeTransition !== transition) return;
    delete root.dataset.wikiThemeTransition;
    themeTransition = undefined;
  });
}
