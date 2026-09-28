document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      })
    );
  }

  // Contact form: pre-select the topic from links like /contact?topic=speaking
  const topic = document.getElementById('topic');
  if (topic) {
    const wanted = new URLSearchParams(window.location.search).get('topic');
    if (wanted) {
      const match = Array.from(topic.options).find((o) => o.value === wanted);
      if (match) topic.value = wanted;
    }
  }

  // "Copy bio" buttons on the Speaking page
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const target = document.getElementById(btn.getAttribute('data-copy'));
      if (!target) return;
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(target.innerText.trim());
        btn.textContent = 'Copied';
      } catch (e) {
        const range = document.createRange();
        range.selectNodeContents(target);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        btn.textContent = 'Selected: press Ctrl/Cmd+C';
      }
      setTimeout(() => (btn.textContent = original), 2500);
    });
  });
});
