// ===== Shared HTML Components =====

const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-brand">
    <span class="dot"></span>
    VisionCoreGroup
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="bots.html">Bots</a></li>
    <li><a href="team.html">Team</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="contact.html" class="nav-cta">Murojaat →</a>
  <button class="nav-toggle" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div>
    <p style="font-family:'Syne',sans-serif;font-size:0.95rem;font-weight:700;color:var(--white);margin-bottom:4px;">VisionCoreGroup</p>
    <p>© 2026 · Toshkent, O'zbekiston</p>
  </div>
  <ul class="footer-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="team.html">Team</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="admin.html">Admin</a></li>
  </ul>
  <div style="display:flex;gap:12px;">
    <a href="https://t.me/VisionCoreGroup" class="btn btn-sm btn-outline" target="_blank">Telegram</a>
    <a href="mailto:hello@visioncoregroup.com" class="btn btn-sm btn-ghost">Email</a>
  </div>
</footer>`;

const AI_HTML = `
<div id="ai-assistant">
  <button class="ai-toggle" title="VisionCore AI">🤖</button>
  <div class="ai-panel">
    <div class="ai-header">
      <span class="ai-header-dot"></span>
      <span class="ai-title">VisionCore AI</span>
      <button class="ai-close">✕</button>
    </div>
    <div class="ai-messages">
      <div class="ai-msg bot">Salom! Men VisionCore AI yordamchiman. Loyihalar, jamoa yoki botlar haqida savol bering 🤖</div>
    </div>
    <div class="ai-quick">
      <button class="ai-quick-btn">Loyihalar</button>
      <button class="ai-quick-btn">Jamoa kimlar?</button>
      <button class="ai-quick-btn">Bot linki</button>
      <button class="ai-quick-btn">Aloqa</button>
    </div>
    <div class="ai-input-wrap">
      <input class="ai-input" type="text" placeholder="Savol yozing...">
      <button class="ai-send">→</button>
    </div>
  </div>
</div>`;

// Inject into page
document.addEventListener('DOMContentLoaded', () => {
  const navTarget = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  const aiTarget = document.getElementById('ai-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
  if (aiTarget) aiTarget.outerHTML = AI_HTML;
});
