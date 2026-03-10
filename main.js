// ===== VisionCoreGroup — Shared JS =====

// ---- Data Layer (localStorage as mock backend) ----
const DB = {
  get(key) {
    const raw = localStorage.getItem('vcg_' + key);
    return raw ? JSON.parse(raw) : null;
  },
  set(key, val) {
    localStorage.setItem('vcg_' + key, JSON.stringify(val));
  },
  init(key, defaultVal) {
    if (!this.get(key)) this.set(key, defaultVal);
    return this.get(key);
  }
};

// ---- Default Data ----
const DEFAULT_PROJECTS = [
  { id: 1, name: "TezLazzat Bot", description: "Premium fast food ordering platform. Full-stack Telegram bot with loyalty program, referral system, and role-based admin architecture.", version: "v2.1.0", status: "active", category: "food", bot_link: "https://t.me/tezlazzat_bot", tags: ["Aiogram", "PostgreSQL", "Payments"], views: 1240, featured: true },
  { id: 2, name: "LinguaBot", description: "Multilingual language learning platform with CEFR levels, XP progression, 5 languages, and certificate preparation.", version: "v1.3.0", status: "active", category: "education", bot_link: "https://t.me/lingua_learn_bot", tags: ["SQLite", "Aiogram", "NLP"], views: 890, featured: true },
  { id: 3, name: "AutoReact Bot", description: "Channel auto-reaction system with per-channel async queues, configurable emoji presets, and automatic admin assignment.", version: "v1.0.2", status: "active", category: "automation", bot_link: "https://t.me/autoreact_bot", tags: ["python-telegram-bot", "Async", "Queues"], views: 450, featured: false },
  { id: 4, name: "VisionCRM", description: "Lightweight CRM system for small businesses. Manage clients, deals, and tasks via Telegram interface.", version: "v0.9.0", status: "planned", category: "business", bot_link: null, tags: ["FastAPI", "SQLAlchemy", "Aiogram"], views: 210, featured: false }
];

const DEFAULT_TEAM = [
  { id: 1, username: "MuhammadRizo", full_name: "Muhammadrizo", role: "Creator", level: "Core", bio: "Founder & Lead Engineer. Full-stack architect specializing in Python ecosystems and Telegram bot platforms.", telegram: "@MuhammadRizo", avatar: "MR", skills: ["Python", "Aiogram", "FastAPI", "PostgreSQL"] },
  { id: 2, username: "AmirDev", full_name: "Amir Toshmatov", role: "Assist", level: "Senior", bio: "Backend engineer focused on database architecture, API design, and scalable async systems.", telegram: "@AmirDev", avatar: "AT", skills: ["PostgreSQL", "SQLAlchemy", "Redis", "Docker"] },
  { id: 3, username: "NodiraUX", full_name: "Nodira Karimova", role: "Veri", level: "Lead", bio: "UI/UX designer with a focus on conversion-driven interfaces and intuitive user flows.", telegram: "@NodiraUX", avatar: "NK", skills: ["Figma", "CSS", "User Research", "Prototyping"] },
  { id: 4, username: "SardorOps", full_name: "Sardor Rakhimov", role: "Support", level: "Junior", bio: "DevOps & support engineer. Manages deployments, monitors systems, and handles client onboarding.", telegram: "@SardorOps", avatar: "SR", skills: ["Docker", "Linux", "Vercel", "CI/CD"] },
  { id: 5, username: "ZafarPromo", full_name: "Zafar Mirzayev", role: "Promo", level: "Junior", bio: "Marketing & promotion specialist. Grows our community and manages content across channels.", telegram: "@ZafarPromo", avatar: "ZM", skills: ["SMM", "Content", "Analytics", "Growth"] },
  { id: 6, username: "LayloScout", full_name: "Laylo Yusupova", role: "Scout", level: "Junior", bio: "Talent scout and community manager. Finds new opportunities and builds partnerships.", telegram: "@LayloScout", avatar: "LY", skills: ["Research", "Networking", "HR", "Community"] }
];

const DEFAULT_BLOG = [
  { id: 1, title: "TezLazzat v2.1 — Yangi to'lov tizimi", slug: "tezlazzat-v2-1", excerpt: "TezLazzat botiga screenshot-based to'lov tizimi qo'shildi. Endi mijozlar to'lovni rasmini yuborib buyurtma tasdiqlata oladi.", content: "TezLazzat botining yangi versiyasi chiqdi...", date: "2026-03-05", author: "MuhammadRizo", category: "release", views: 342, image_emoji: "🚀" },
  { id: 2, title: "LinguaBot — 5 til qo'shildi", slug: "linguabot-5-languages", excerpt: "LinguaBot endi O'zbek, Rus, Ingliz, Turk va Koreys tillarini qo'llab-quvvatlaydi. CEFR darajalari bilan.", content: "LinguaBot kengaytirildi...", date: "2026-02-28", author: "MuhammadRizo", category: "update", views: 218, image_emoji: "🌍" },
  { id: 3, title: "VisionCoreGroup — 2026 rejalari", slug: "vcg-2026-plans", excerpt: "Yangi yil — yangi loyihalar. 2026 yilda VCG nimalar qilishni rejalashtirmoqda?", content: "2026 yilda biz VisionCRM, AI assistant va yana 3 ta bot platformasini chiqarishni rejalashtiryapmiz.", date: "2026-01-15", author: "MuhammadRizo", category: "news", views: 156, image_emoji: "📋" }
];

const DEFAULT_STATS = {
  total_views: 8420,
  page_views: { home: 3200, projects: 1840, team: 980, bots: 1400, blog: 620, contact: 380 },
  messages: [
    { id: 1, name: "Jahongir", email: "j@example.com", message: "Telegram bot qilishingiz mumkinmi?", date: "2026-03-08", read: false },
    { id: 2, name: "Malika", email: "m@example.com", message: "LinguaBot haqida savol bor edi", date: "2026-03-07", read: true }
  ]
};

// Init data
function initDB() {
  DB.init('projects', DEFAULT_PROJECTS);
  DB.init('team', DEFAULT_TEAM);
  DB.init('blog', DEFAULT_BLOG);
  DB.init('stats', DEFAULT_STATS);
}

// ---- Navigation ----
function initNav() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace('.html', '');
    if (href.includes(currentPage) || (currentPage === 'index' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.navbar');
  if (toggle) {
    toggle.addEventListener('click', () => nav.classList.toggle('nav-mobile-open'));
  }
}

// ---- Scroll Reveal ----
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ---- AI Assistant ----
const AI_RESPONSES = {
  greet: ["Salom! Men VisionCore AI yordamchiman. Savollaringizga javob beraman 🤖", "VisionCore AI — xizmatdaman! Nima haqida bilmoqchisiz?"],
  projects: ["Bizda 4 ta asosiy loyiha bor: TezLazzat (ovqat buyurtma), LinguaBot (til o'rganish), AutoReact Bot (kanal avtomatlashtirish), va VisionCRM (biznes). Projects sahifasida barchasi ko'rinadi 📂"],
  team: ["Jamoamizda 6 nafar a'zo bor: Creator, Assist, Veri, Promo, Support va Scout rollari mavjud. Team sahifasida batafsil ko'ring 👥"],
  contact: ["Telegram: @VisionCoreGroup | Email: hello@visioncoregroup.com | Contact sahifasida forma orqali yozing ✉️"],
  bots: ["Hozirda 3 ta bot ishlayapti: TezLazzat, LinguaBot, AutoReact. Bots sahifasida barcha botlar ro'yxati va linklar mavjud 🤖"],
  default: ["Bu haqida ko'proq ma'lumot olish uchun Contact sahifasiga murojaat qiling.", "Savolingizni aniqroq yozing yoki asosiy sahifalardan birini tanlang."]
};

function getAIResponse(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('salom') || msg.includes('hello') || msg.includes('hi')) return AI_RESPONSES.greet[Math.floor(Math.random()*2)];
  if (msg.includes('loyiha') || msg.includes('project')) return AI_RESPONSES.projects[0];
  if (msg.includes('jamoa') || msg.includes('team') || msg.includes('kim')) return AI_RESPONSES.team[0];
  if (msg.includes('aloqa') || msg.includes('contact') || msg.includes('email') || msg.includes('telegram')) return AI_RESPONSES.contact[0];
  if (msg.includes('bot')) return AI_RESPONSES.bots[0];
  return AI_RESPONSES.default[Math.floor(Math.random()*2)];
}

function initAI() {
  const aiEl = document.getElementById('ai-assistant');
  if (!aiEl) return;

  const toggle = aiEl.querySelector('.ai-toggle');
  const panel = aiEl.querySelector('.ai-panel');
  const closeBtn = aiEl.querySelector('.ai-close');
  const input = aiEl.querySelector('.ai-input');
  const send = aiEl.querySelector('.ai-send');
  const msgs = aiEl.querySelector('.ai-messages');

  const addMsg = (text, type) => {
    const div = document.createElement('div');
    div.className = `ai-msg ${type}`;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  };

  toggle.addEventListener('click', () => panel.classList.toggle('open'));
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  const sendMsg = () => {
    const val = input.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';
    setTimeout(() => addMsg(getAIResponse(val), 'bot'), 600);
  };

  send.addEventListener('click', sendMsg);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });

  aiEl.querySelectorAll('.ai-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addMsg(btn.textContent, 'user');
      setTimeout(() => addMsg(getAIResponse(btn.textContent), 'bot'), 600);
    });
  });
}

// ---- Track page view ----
function trackView(page) {
  const stats = DB.get('stats') || DEFAULT_STATS;
  stats.total_views = (stats.total_views || 0) + 1;
  stats.page_views[page] = (stats.page_views[page] || 0) + 1;
  DB.set('stats', stats);
}

// ---- Helpers ----
function statusBadge(status) {
  const map = { active: ['active','● Ishlayapti'], planned: ['planned','◌ Rejada'], inactive: ['inactive','✕ To\'xtatilgan'] };
  const [cls, label] = map[status] || map.active;
  return `<span class="badge badge-${cls}">${label}</span>`;
}

function levelBadge(level) {
  return `<span class="badge badge-${level.toLowerCase()}">${level === 'Core' ? '⭐ ' : ''}${level}</span>`;
}

function roleBadge(role) {
  const colors = { Creator: 'badge-core', Assist: 'badge-lead', Veri: 'badge-lead', Promo: 'badge-senior', Support: 'badge-junior', Scout: 'badge-junior' };
  return `<span class="badge ${colors[role] || 'badge-junior'}">${role}</span>`;
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
}

function genId() { return Date.now(); }

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initDB();
  initNav();
  initReveal();
  initAI();
});
