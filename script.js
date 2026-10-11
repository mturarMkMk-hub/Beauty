/* =========================================================
   AURA & Co. — data
   ========================================================= */
const CATEGORIES = [
  { id: 'hair',  name: 'Парикмахерские услуги', icon: 'fa-scissors' },
  { id: 'nails', name: 'Ногти',                  icon: 'fa-hand-sparkles' },
  { id: 'brows', name: 'Брови и ресницы',        icon: 'fa-eye' },
  { id: 'cosmo', name: 'Косметология и макияж',  icon: 'fa-spa' },
];

const SERVICES = [
  // Hair
  { id: 's1',  cat: 'hair',  name: 'Женская стрижка',           desc: 'Консультация, мытьё, стрижка и укладка.',          price: 12000, duration: 60 },
  { id: 's2',  cat: 'hair',  name: 'Окрашивание в один тон',    desc: 'Профессиональные красители с защитой Olaplex.',      price: 28000, duration: 150 },
  { id: 's3',  cat: 'hair',  name: 'Сложное окрашивание',       desc: 'Airtouch, балаяж, шатуш — индивидуальный подбор.',   price: 65000, duration: 270 },
  { id: 's4',  cat: 'hair',  name: 'Уход Kérastase',            desc: 'Глубокое восстановление и блеск волос.',            price: 16000, duration: 60 },
  { id: 's5',  cat: 'hair',  name: 'Укладка / причёска',        desc: 'Локоны, голливудская волна или вечерняя причёска.',  price: 10000, duration: 60 },
  { id: 's6',  cat: 'hair',  name: 'Кератиновое выпрямление',   desc: 'Гладкость и послушность волос до 4 месяцев.',        price: 45000, duration: 180 },
  // Nails
  { id: 's7',  cat: 'nails', name: 'Маникюр + гель-лак',        desc: 'Аппаратный маникюр, покрытие, дизайн на 1–2 ногтя.', price: 9000,  duration: 90 },
  { id: 's8',  cat: 'nails', name: 'Классический маникюр',      desc: 'Обработка кутикулы, форма, уход за кожей рук.',      price: 6000,  duration: 60 },
  { id: 's9',  cat: 'nails', name: 'Педикюр + гель-лак',        desc: 'Комплексный уход за стопами и стойкое покрытие.',    price: 13000, duration: 100 },
  { id: 's10', cat: 'nails', name: 'Наращивание ногтей',        desc: 'Моделирование формы, укрепление, покрытие.',         price: 14000, duration: 150 },
  // Brows & lashes
  { id: 's11', cat: 'brows', name: 'Архитектура бровей',        desc: 'Коррекция, окрашивание хной или краской.',           price: 6500,  duration: 45 },
  { id: 's12', cat: 'brows', name: 'Ламинирование бровей',      desc: 'Идеальная форма и объём на 6–8 недель.',             price: 8000,  duration: 60 },
  { id: 's13', cat: 'brows', name: 'Наращивание ресниц',        desc: 'Классика, 2D, 3D — естественный или яркий взгляд.',  price: 12000, duration: 120 },
  { id: 's14', cat: 'brows', name: 'Ламинирование ресниц',      desc: 'Изгиб, питание и окрашивание ваших ресниц.',         price: 8500,  duration: 60 },
  // Cosmetology
  { id: 's15', cat: 'cosmo', name: 'Чистка лица',               desc: 'Ультразвуковая + механическая, успокаивающая маска.',price: 15000, duration: 75 },
  { id: 's16', cat: 'cosmo', name: 'Уход Dr. Hauschka',         desc: 'Био-уход с массажем лица, шеи и декольте.',          price: 19000, duration: 90 },
  { id: 's17', cat: 'cosmo', name: 'Вечерний макияж',           desc: 'Макияж Dior Beauty с учётом образа и повода.',       price: 14000, duration: 60 },
  { id: 's18', cat: 'cosmo', name: 'Биоревитализация',          desc: 'Увлажнение и сияние кожи, инъекции от косметолога.', price: 38000, duration: 60 },
];

const MASTERS = [
  { id: 'm1', name: 'Анна Ковалёва',   role: 'Топ-стилист, колорист',      exp: 11, rating: 5.0, cats: ['hair'],          hue: ['#f1e0b9', '#c9a66b'], img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80' },
  { id: 'm2', name: 'Мария Султанова', role: 'Стилист-парикмахер',         exp: 7,  rating: 4.9, cats: ['hair'],          hue: ['#f3d6d0', '#d8a79d'], img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80' },
  { id: 'm3', name: 'Дарина Ахметова', role: 'Мастер маникюра и педикюра', exp: 8,  rating: 4.9, cats: ['nails'],         hue: ['#ead7ae', '#b78f55'], img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80' },
  { id: 'm4', name: 'Елена Орлова',    role: 'Бровист и lash-мастер',      exp: 6,  rating: 5.0, cats: ['brows'],         hue: ['#e8c4bd', '#c58f86'], img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80' },
  { id: 'm5', name: 'Лейла Нургалиева',role: 'Косметолог, визажист',       exp: 12, rating: 4.9, cats: ['cosmo'],         hue: ['#f1e0b9', '#d8a79d'], img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80' },
  { id: 'm6', name: 'Софья Ли',        role: 'Мастер ногтевого сервиса',   exp: 5,  rating: 4.8, cats: ['nails', 'brows'],hue: ['#e8c4bd', '#b78f55'], img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80' },
];

const REVIEWS = [
  { name: 'Алина К.',   service: 'Окрашивание у Анны',   text: 'Наконец-то нашла своего колориста! Цвет получился точно как на референсе, а волосы остались мягкими. Атмосфера в салоне — как в бутике.' },
  { name: 'Камила Т.',  service: 'Маникюр + гель-лак',   text: 'Записалась с телефона за минуту, пришла — всё идеально по времени. Покрытие держится уже третью неделю без сколов. Очень чисто и уютно.' },
  { name: 'Ирина В.',   service: 'Уход Dr. Hauschka',    text: 'Это лучший отдых за последний год. Косметолог всё объяснила, кожа сияет. Угощали чаем с десертом — приятные мелочи, из которых и складывается премиум.' },
];

/* =========================================================
   Helpers
   ========================================================= */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmtPrice = n => n.toLocaleString('ru-RU') + ' ₸';
const fmtDur = m => { const h = Math.floor(m / 60), r = m % 60; return (h ? h + ' ч ' : '') + (r ? r + ' мин' : '').trim() || '0 мин'; };
const initials = name => name.trim()[0];
const catName = id => CATEGORIES.find(c => c.id === id)?.name || '';
const getService = id => SERVICES.find(s => s.id === id);
const getMaster  = id => MASTERS.find(m => m.id === id);

/* =========================================================
   Header, menu, reveal, sticky CTA
   ========================================================= */
const header = $('#header');
const mobileMenu = $('#mobileMenu');
const stickyCta = $('#stickyCta');

function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 40);
  stickyCta.classList.toggle('translate-y-full', window.scrollY < 500);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const openMenu  = () => { mobileMenu.classList.remove('translate-x-full'); document.body.classList.add('no-scroll'); };
const closeMenu = () => { mobileMenu.classList.add('translate-x-full'); document.body.classList.remove('no-scroll'); };
$('#burger').addEventListener('click', openMenu);
$('#burgerClose').addEventListener('click', closeMenu);
$$('#mobileMenu a').forEach(a => a.addEventListener('click', closeMenu));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
$$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 5) * 90 + 'ms'; io.observe(el); });

$('#year').textContent = new Date().getFullYear();

/* =========================================================
   Render: services
   ========================================================= */
let activeCat = 'hair';

function renderTabs() {
  $('#serviceTabs').innerHTML = CATEGORIES.map(c => `
    <button class="tab-btn ${c.id === activeCat ? 'active' : ''}" data-cat="${c.id}">
      <i class="fa-solid ${c.icon} mr-2 text-xs"></i>${c.name}
    </button>`).join('');
}

function renderServices() {
  const list = SERVICES.filter(s => s.cat === activeCat);
  $('#serviceGrid').innerHTML = list.map((s, i) => `
    <article class="service-card" style="animation-delay:${i * 60}ms">
      <h3 class="font-serif text-2xl leading-tight">${s.name}</h3>
      <p class="text-sm text-cream/60 mt-2 flex-1">${s.desc}</p>
      <div class="flex items-center justify-between mt-5 pt-4 border-t border-line">
        <span class="text-sm text-cream/60"><i class="fa-regular fa-clock text-gold mr-1.5"></i>${fmtDur(s.duration)}</span>
        <span class="font-serif text-2xl text-champagne">${fmtPrice(s.price)}</span>
      </div>
      <button class="btn-gold justify-center w-full mt-4" data-book data-service="${s.id}">Записаться</button>
    </article>`).join('');
}

$('#serviceTabs').addEventListener('click', e => {
  const b = e.target.closest('[data-cat]');
  if (!b) return;
  activeCat = b.dataset.cat;
  renderTabs(); renderServices();
});

/* =========================================================
   Render: masters & reviews
   ========================================================= */
function avatarHTML(m, cls = 'avatar') {
  return `<span class="${cls}" style="background:linear-gradient(135deg,${m.hue[0]},${m.hue[1]})">${initials(m.name)}<img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.remove()"></span>`;
}

function renderMasters() {
  $('#masterGrid').innerHTML = MASTERS.map(m => `
    <article class="master-card">
      <div class="master-photo" style="background:linear-gradient(135deg,${m.hue[0]},${m.hue[1]})">
        <span class="master-initial">${initials(m.name)}</span>
        <img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.remove()" />
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-ink/80 backdrop-blur text-xs"><i class="fa-solid fa-star text-gold mr-1"></i>${m.rating.toFixed(1)}</span>
      </div>
      <div class="p-5">
        <h3 class="font-serif text-2xl leading-tight">${m.name}</h3>
        <p class="text-sm text-gold mt-1">${m.role}</p>
        <p class="text-sm text-cream/55 mt-2">Стаж ${m.exp} ${m.exp >= 5 ? 'лет' : 'года'}</p>
        <button class="btn-ghost justify-center w-full mt-4 text-sm" data-book data-master="${m.id}">Записаться к мастеру</button>
      </div>
    </article>`).join('');
}

function renderReviews() {
  $('#reviewGrid').innerHTML = REVIEWS.map(r => `
    <article class="review-card">
      <div class="stars mb-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
      <p class="text-cream/80 leading-relaxed">${r.text}</p>
      <div class="mt-6 pt-4 border-t border-line flex items-center gap-3">
        <span class="w-10 h-10 rounded-full bg-gradient-to-br from-champagne to-gold text-ink flex items-center justify-center font-serif text-lg">${initials(r.name)}</span>
        <div><p class="font-medium text-sm">${r.name}</p><p class="text-xs text-cream/50">${r.service}</p></div>
      </div>
    </article>`).join('');
}

renderTabs(); renderServices(); renderMasters(); renderReviews();

/* =========================================================
   Booking modal
   ========================================================= */
const modal    = $('#booking');
const sheet    = $('#bookingSheet');
const bodyEl   = $('#bookingBody');
const nextBtn  = $('#bookingNext');
const backBtn  = $('#bookingBack');
const summary  = $('#bookingSummary');
const stepLbl  = $('#bookingStepLabel');
const footer   = $('#bookingFooter');
const bars     = $$('#bookingProgress span');

const STEP_NAMES = ['Выберите услугу', 'Выберите мастера', 'Дата и время', 'Ваши данные'];
const ANY = 'any';

let state;
let step = 1;
let modalCat = 'all';
let dayOffset = 0;

const freshState = () => ({ serviceId: null, masterId: null, date: null, time: null, name: '', phone: '' });

function openBooking({ serviceId = null, masterId = null } = {}) {
  state = freshState();
  modalCat = 'all';
  step = 1;

  if (serviceId) { state.serviceId = serviceId; modalCat = getService(serviceId).cat; }
  if (masterId) { state.masterId = masterId; modalCat = getMaster(masterId).cats[0]; }
  // Service preselected → jump straight to master step; master preselected → pick service first
  if (serviceId) step = 2;

  closeMenu();
  modal.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('open')));
  render();
}

function closeBooking() {
  modal.classList.remove('open');
  setTimeout(() => { modal.classList.add('hidden'); document.body.classList.remove('no-scroll'); }, 300);
}

/* ---------- Availability (deterministic pseudo-random) ---------- */
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1000) / 1000; };
}

const dateKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

function getSlots(date) {
  const key = dateKey(date);
  const rnd = seeded(key + (state.masterId || ANY) + (state.serviceId || ''));
  const dur = state.serviceId ? getService(state.serviceId).duration : 60;
  const lastStart = 21 * 60 - Math.min(dur, 180); // must finish by closing
  const now = new Date();
  const isToday = dateKey(now) === key;
  const nowMin = now.getHours() * 60 + now.getMinutes() + 60;
  const slots = [];
  for (let t = 10 * 60; t <= lastStart; t += 30) {
    const label = `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
    const busy = rnd() < (state.masterId === ANY ? 0.2 : 0.4);
    slots.push({ label, disabled: busy || (isToday && t < nowMin) });
  }
  return slots;
}

function upcomingDays(n = 14) {
  const out = [], base = new Date(); base.setHours(0, 0, 0, 0);
  for (let i = 0; i < n; i++) { const d = new Date(base); d.setDate(base.getDate() + i); out.push(d); }
  return out;
}

/* ---------- Render steps ---------- */
function render() {
  bars.forEach((b, i) => b.className = 'h-1 flex-1 rounded-full transition-colors ' + (i < step ? 'bg-gold' : 'bg-line'));
  stepLbl.textContent = step <= 4 ? `Шаг ${step} из 4 · ${STEP_NAMES[step - 1]}` : '';
  backBtn.style.visibility = step === 1 || step === 5 ? 'hidden' : 'visible';
  footer.style.display = step === 5 ? 'none' : '';
  bars.forEach(b => b.parentElement.style.display = step === 5 ? 'none' : '');

  if (step === 1) renderServiceStep();
  else if (step === 2) renderMasterStep();
  else if (step === 3) renderDateStep();
  else if (step === 4) renderFormStep();
  else renderSuccess();

  bodyEl.firstElementChild?.classList.add('step-in');
  updateFooter();
}

function updateFooter() {
  const s = state.serviceId ? getService(state.serviceId) : null;
  const m = state.masterId && state.masterId !== ANY ? getMaster(state.masterId) : null;
  const parts = [];
  if (s) parts.push(`<span class="text-cream">${s.name}</span> · ${fmtPrice(s.price)}`);
  if (state.date && step >= 3) parts.push(`${state.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}${state.time ? ', ' + state.time : ''}`);
  summary.innerHTML = parts.join(' · ');

  let ok = false, label = 'Продолжить';
  if (step === 1) ok = !!state.serviceId;
  if (step === 2) ok = !!state.masterId;
  if (step === 3) ok = !!(state.date && state.time);
  if (step === 4) { ok = true; label = 'Подтвердить запись'; }
  nextBtn.disabled = !ok;
  nextBtn.textContent = label;
}

/* Step 1 — services */
function renderServiceStep() {
  const masterCats = state.masterId && state.masterId !== ANY ? getMaster(state.masterId).cats : null;
  const cats = CATEGORIES.filter(c => !masterCats || masterCats.includes(c.id));
  if (modalCat !== 'all' && !cats.find(c => c.id === modalCat)) modalCat = 'all';
  const list = SERVICES.filter(s => (!masterCats || masterCats.includes(s.cat)) && (modalCat === 'all' || s.cat === modalCat));

  bodyEl.innerHTML = `
    <div>
      ${masterCats ? `<p class="text-sm text-cream/60 mb-3">Услуги мастера <span class="text-champagne">${getMaster(state.masterId).name}</span></p>` : ''}
      <div class="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-3">
        <button class="mini-tab ${modalCat === 'all' ? 'active' : ''}" data-mcat="all">Все</button>
        ${cats.map(c => `<button class="mini-tab ${modalCat === c.id ? 'active' : ''}" data-mcat="${c.id}">${c.name}</button>`).join('')}
      </div>
      <div class="space-y-2.5 mt-1">
        ${list.map(s => `
          <button class="opt ${state.serviceId === s.id ? 'selected' : ''}" data-service-pick="${s.id}">
            <span class="radio"><i class="fa-solid fa-check"></i></span>
            <span class="flex-1 min-w-0">
              <span class="block font-medium">${s.name}</span>
              <span class="block text-xs text-cream/50 mt-0.5"><i class="fa-regular fa-clock mr-1"></i>${fmtDur(s.duration)}</span>
            </span>
            <span class="font-serif text-xl text-champagne whitespace-nowrap">${fmtPrice(s.price)}</span>
          </button>`).join('')}
      </div>
    </div>`;
}

/* Step 2 — masters */
function renderMasterStep() {
  const s = getService(state.serviceId);
  const list = MASTERS.filter(m => m.cats.includes(s.cat));
  bodyEl.innerHTML = `
    <div class="space-y-2.5">
      <button class="opt ${state.masterId === ANY ? 'selected' : ''}" data-master-pick="${ANY}">
        <span class="avatar bg-gradient-to-br from-champagne to-gold"><i class="fa-solid fa-wand-magic-sparkles text-base"></i></span>
        <span class="flex-1">
          <span class="block font-medium">Любой свободный мастер</span>
          <span class="block text-xs text-cream/50 mt-0.5">Больше доступного времени</span>
        </span>
        <span class="radio"><i class="fa-solid fa-check"></i></span>
      </button>
      ${list.map(m => `
        <button class="opt ${state.masterId === m.id ? 'selected' : ''}" data-master-pick="${m.id}">
          ${avatarHTML(m)}
          <span class="flex-1 min-w-0">
            <span class="block font-medium">${m.name}</span>
            <span class="block text-xs text-cream/50 mt-0.5">${m.role} · стаж ${m.exp} л.</span>
          </span>
          <span class="text-sm text-champagne whitespace-nowrap"><i class="fa-solid fa-star text-gold text-xs mr-1"></i>${m.rating.toFixed(1)}</span>
          <span class="radio"><i class="fa-solid fa-check"></i></span>
        </button>`).join('')}
    </div>`;
}

/* Step 3 — date & time */
function renderDateStep() {
  const days = upcomingDays();
  if (!state.date) state.date = days[0];
  const slots = getSlots(state.date);
  const free = slots.filter(s => !s.disabled).length;
  const dow = d => d.toLocaleDateString('ru-RU', { weekday: 'short' }).replace('.', '');

  bodyEl.innerHTML = `
    <div>
      <p class="text-xs uppercase tracking-[0.2em] text-cream/50 mb-3">${state.date.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}</p>
      <div id="dayStrip" class="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-2">
        ${days.map(d => `
          <button class="day-btn ${dateKey(d) === dateKey(state.date) ? 'active' : ''}" data-day="${dateKey(d)}">
            <span class="dow block">${dow(d)}</span><span class="dnum block">${d.getDate()}</span>
          </button>`).join('')}
      </div>
      <div class="flex items-center justify-between mt-6 mb-3">
        <p class="font-medium">Доступное время</p>
        <p class="text-xs text-cream/50">${free ? `свободно: ${free}` : 'нет свободных окон'}</p>
      </div>
      <div class="grid grid-cols-4 gap-2">
        ${slots.map(s => `<button class="slot ${state.time === s.label ? 'active' : ''}" data-time="${s.label}" ${s.disabled ? 'disabled' : ''}>${s.label}</button>`).join('')}
      </div>
    </div>`;

  const active = $('.day-btn.active', bodyEl);
  active?.scrollIntoView({ inline: 'center', block: 'nearest' });
}

/* Step 4 — contact form */
function renderFormStep() {
  const s = getService(state.serviceId);
  const m = state.masterId === ANY ? null : getMaster(state.masterId);
  bodyEl.innerHTML = `
    <div>
      <div class="rounded-2xl border border-line bg-card p-4 mb-6 space-y-2 text-sm">
        <div class="flex justify-between gap-4"><span class="text-cream/50">Услуга</span><span class="text-right">${s.name}</span></div>
        <div class="flex justify-between gap-4"><span class="text-cream/50">Мастер</span><span class="text-right">${m ? m.name : 'Любой свободный'}</span></div>
        <div class="flex justify-between gap-4"><span class="text-cream/50">Дата и время</span><span class="text-right">${state.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}, ${state.time}</span></div>
        <div class="flex justify-between gap-4 pt-2 border-t border-line"><span class="text-cream/50">Стоимость</span><span class="font-serif text-xl text-champagne">${fmtPrice(s.price)}</span></div>
      </div>
      <label class="block text-sm text-cream/60 mb-2" for="fName">Ваше имя</label>
      <input id="fName" class="field mb-4" type="text" autocomplete="name" placeholder="Например, Алия" value="${state.name}" />
      <label class="block text-sm text-cream/60 mb-2" for="fPhone">Номер телефона</label>
      <input id="fPhone" class="field" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__" value="${state.phone}" />
      <p id="formError" class="text-sm text-[#e07a7a] mt-3 hidden"></p>
      <p class="text-xs text-cream/40 mt-4 leading-relaxed">Нажимая «Подтвердить запись», вы соглашаетесь на обработку персональных данных. Мы напомним о визите за день.</p>
    </div>`;
}

/* Success */
function renderSuccess() {
  const s = getService(state.serviceId);
  const m = state.masterId === ANY ? null : getMaster(state.masterId);
  bodyEl.innerHTML = `
    <div class="h-full flex flex-col items-center justify-center text-center py-6">
      <div class="success-ring"><i class="fa-solid fa-check"></i></div>
      <h4 class="font-serif text-4xl mt-6">Вы записаны!</h4>
      <p class="text-cream/60 mt-3 max-w-xs"></p>
      <div class="w-full rounded-2xl border border-line bg-card p-4 mt-6 space-y-2 text-sm text-left">
        <div class="flex justify-between gap-4"><span class="text-cream/50">Услуга</span><span class="text-right">${s.name}</span></div>
        <div class="flex justify-between gap-4"><span class="text-cream/50">Мастер</span><span class="text-right">${m ? m.name : 'Любой свободный'}</span></div>
        <div class="flex justify-between gap-4"><span class="text-cream/50">Когда</span><span class="text-right">${state.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'short' })}, ${state.time}</span></div>
        <div class="flex justify-between gap-4"><span class="text-cream/50">Адрес</span><span class="text-right">пр. Достык, 123</span></div>
      </div>
      <button id="successClose" class="btn-gold w-full justify-center py-4 mt-6">Отлично, жду визита</button>
    </div>`;
  // Safely insert user-provided name
  $('p.text-cream\\/60', bodyEl).textContent = `${state.name}, мы отправили подтверждение на ${state.phone}. Администратор свяжется с вами при необходимости.`;
  $('#successClose').addEventListener('click', closeBooking);
}

/* ---------- Phone mask ---------- */
function formatPhone(raw) {
  let d = raw.replace(/\D/g, '');
  if (d.startsWith('8')) d = '7' + d.slice(1);
  if (!d.startsWith('7')) d = '7' + d;
  d = d.slice(0, 11);
  let out = '+7';
  if (d.length > 1) out += ' (' + d.slice(1, 4);
  if (d.length >= 5) out += ') ' + d.slice(4, 7);
  if (d.length >= 8) out += '-' + d.slice(7, 9);
  if (d.length >= 10) out += '-' + d.slice(9, 11);
  return out;
}

/* ---------- Events ---------- */
document.addEventListener('click', e => {
  const trigger = e.target.closest('[data-book]');
  if (trigger) { openBooking({ serviceId: trigger.dataset.service || null, masterId: trigger.dataset.master || null }); return; }
});

bodyEl.addEventListener('click', e => {
  const mc = e.target.closest('[data-mcat]');
  if (mc) { modalCat = mc.dataset.mcat; renderServiceStep(); bodyEl.firstElementChild.classList.add('step-in'); return; }

  const sp = e.target.closest('[data-service-pick]');
  if (sp) {
    state.serviceId = sp.dataset.servicePick;
    // reset master if incompatible
    if (state.masterId && state.masterId !== ANY && !getMaster(state.masterId).cats.includes(getService(state.serviceId).cat)) state.masterId = null;
    state.time = null;
    $$('[data-service-pick]', bodyEl).forEach(b => b.classList.toggle('selected', b === sp));
    updateFooter();
    return;
  }

  const mp = e.target.closest('[data-master-pick]');
  if (mp) {
    state.masterId = mp.dataset.masterPick;
    state.time = null;
    $$('[data-master-pick]', bodyEl).forEach(b => b.classList.toggle('selected', b === mp));
    updateFooter();
    return;
  }

  const day = e.target.closest('[data-day]');
  if (day) {
    state.date = upcomingDays().find(d => dateKey(d) === day.dataset.day);
    state.time = null;
    const scroll = $('#dayStrip', bodyEl)?.scrollLeft;
    renderDateStep();
    bodyEl.firstElementChild.classList.remove('step-in');
    const strip = $('#dayStrip', bodyEl); if (strip && scroll != null) strip.scrollLeft = scroll;
    updateFooter();
    return;
  }

  const t = e.target.closest('[data-time]');
  if (t && !t.disabled) {
    state.time = t.dataset.time;
    $$('[data-time]', bodyEl).forEach(b => b.classList.toggle('active', b === t));
    updateFooter();
  }
});

bodyEl.addEventListener('input', e => {
  if (e.target.id === 'fPhone') {
    e.target.value = formatPhone(e.target.value);
    state.phone = e.target.value;
  }
  if (e.target.id === 'fName') state.name = e.target.value;
  e.target.classList?.remove('error');
  $('#formError')?.classList.add('hidden');
});

nextBtn.addEventListener('click', () => {
  if (step === 4) {
    const digits = state.phone.replace(/\D/g, '');
    const err = $('#formError');
    let msg = '';
    if (state.name.trim().length < 2) { $('#fName').classList.add('error'); msg = 'Пожалуйста, укажите ваше имя.'; }
    else if (digits.length < 11) { $('#fPhone').classList.add('error'); msg = 'Введите номер телефона полностью.'; }
    if (msg) { err.textContent = msg; err.classList.remove('hidden'); return; }
    state.name = state.name.trim();
    step = 5;
    render();
    bodyEl.scrollTop = 0;
    return;
  }
  step++;
  render();
  bodyEl.scrollTop = 0;
});

backBtn.addEventListener('click', () => { if (step > 1) { step--; render(); bodyEl.scrollTop = 0; } });
$('#bookingClose').addEventListener('click', closeBooking);
$('#bookingBackdrop').addEventListener('click', closeBooking);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (!modal.classList.contains('hidden')) closeBooking(); else closeMenu(); }
});
