document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const applyTheme = (theme) => {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isLight ? '#f5f6f8' : '#0a0a0b');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
      themeToggle.querySelector('.theme-toggle-icon').textContent = isLight ? '◐' : '☼';
      themeToggle.querySelector('.theme-toggle-label').textContent = isLight ? 'DARK' : 'LIGHT';
    }
  };
  applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('arena13-theme', nextTheme);
    applyTheme(nextTheme);
  });

  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  }

  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.game-card').forEach(card => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
      });
    });
  });
});
