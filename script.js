// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Copy Pix key to clipboard
const copyBtn = document.getElementById('copyPix');
const pixKeyEl = document.getElementById('pixKey');
const copiedMsg = document.getElementById('pixCopiedMsg');

if (copyBtn && pixKeyEl) {
  copyBtn.addEventListener('click', async () => {
    const rawKey = pixKeyEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(rawKey);
      copiedMsg.textContent = 'Chave copiada!';
    } catch (err) {
      copiedMsg.textContent = 'Não foi possível copiar. Copie manualmente: ' + rawKey;
    }
    setTimeout(() => { copiedMsg.textContent = ''; }, 3000);
  });
}
