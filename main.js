/* ============================================================
   Thompson Ray Portfolio — main.js
   Skills data, Portfolio data, Render functions,
   Scroll effects, Mobile menu, Contact form, Admin utils
   ============================================================ */

/* ===== SKILLS DATA ===== */
const skills = [
  // 3D Design
  { name: 'Inventor',       cat: '3d',   icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Inventor.png',       label: '3D Design' },
  { name: 'Fusion 360',     cat: '3d',   icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Fusion360.png',      label: '3D Design' },
  { name: '3DS Max',        cat: '3d',   icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/3DSMax.png',         label: '3D Design' },
  { name: 'Maya',           cat: '3d',   icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Maya.png',           label: '3D Design' },
  { name: 'Blender',        cat: '3d',   icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Blender.png',        label: '3D Design' },
  // CAD / CAM
  { name: 'SolidWorks',     cat: 'cad',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/SolidWorks.png',     label: 'CAD' },
  { name: 'AutoCAD',        cat: 'cad',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/AutoCAD.png',        label: 'CAD' },
  { name: 'AutoCAD ELC',    cat: 'cad',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/ACAD_ELC.png',       label: 'CAD' },
  { name: 'Ultimaker Cura', cat: 'cad',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Ultimaker_Cura.png', label: 'CAM' },
  { name: 'MasterCAM',      cat: 'cad',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/MasterCAM.png',      label: 'CAM' },
  { name: 'FlatCAM',        cat: 'cad',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/FlatCAM.png',        label: 'CAM' },
  // PLC / HMI
  { name: 'TIA Portal',     cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/TIAPortal.png',      label: 'PLC' },
  { name: 'TwinCAT XAE',    cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/TwinCAT.png',        label: 'PLC' },
  { name: 'EcoStruxure',    cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/EcoStruxure.png',    label: 'PLC' },
  { name: 'CX-Programmer',  cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/CXP.png',            label: 'PLC' },
  { name: 'CodeSYS',        cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/CodeSYS.png',        label: 'PLC' },
  { name: 'EasyBuilder',    cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/EBPRO.png',          label: 'HMI' },
  { name: 'Vijeo Designer', cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Vijeo_Designer.png', label: 'HMI' },
  { name: 'CX-Designer',    cat: 'plc',  icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/CXD.png',            label: 'HMI' },
  // Electronics
  { name: 'Eagle',          cat: 'elec', icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/eagle.png',          label: 'Electronics' },
  { name: 'Proteus',        cat: 'elec', icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Proteus.png',        label: 'Electronics' },
  { name: 'Arduino IDE',    cat: 'elec', icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/Arduino.png',        label: 'Electronics' },
  // Others
  { name: 'VS Code',        cat: 'other',icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/VSCode.png',         label: 'Software' },
  { name: 'FL Studio',      cat: 'other',icon: 'https://consoekamti.github.io/portofolio/assets/images/skills/FLStudio.png',       label: 'Music' },
];

/* ===== PORTFOLIO DATA ===== */
const projects = window.projectItems || [];

let activeProjectIndex = null;

function getProjectPhotos(project) {
  if (project.photos?.length) return project.photos;

  return [{
    label: timelineDevelopmentMessage,
    src: '',
    icon: project.icon
  }];
}

function buildProjectPhoto(photo, index, total) {
  return photo.src
    ? `<img src="${photo.src}" alt="${photo.label}">`
    : `<div class="project-slide-template">
        <i class="fas ${photo.icon}"></i>
        ${photo.label === timelineDevelopmentMessage
          ? ''
          : `<div class="project-slide-label">Project photo ${index + 1} / ${total}</div>`}
        <div class="project-slide-title">${photo.label}</div>
      </div>`;
}

function buildProjectMedia(project, expanded = false) {
  const photos = getProjectPhotos(project);
  const visiblePhotos = expanded ? photos : photos.slice(0, 1);

  return `
    ${visiblePhotos.map((photo, photoIndex) => `
      <div class="project-slide ${photoIndex === 0 ? 'active' : ''}">
        ${buildProjectPhoto(photo, photoIndex, photos.length)}
      </div>
    `).join('')}
    <div class="pf-overlay">
      ${project.links.map(l => `
        <a href="${l.href}" target="_blank" class="pf-link">
          <i class="fas ${l.icon}"></i>
        </a>
      `).join('')}
      ${project.links.length === 0
        ? `<span style="color:#fff;font-family:var(--font-mono);font-size:11px;letter-spacing:2px;text-transform:uppercase;opacity:0.7;">Showcase</span>`
        : ''}
    </div>
    ${expanded ? `
      <button class="project-gallery-btn prev" type="button" data-project-slide="-1" aria-label="Previous project image">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="project-gallery-btn next" type="button" data-project-slide="1" aria-label="Next project image">
        <i class="fas fa-chevron-right"></i>
      </button>
    ` : ''}
  `;
}

/* ===== RENDER SKILLS ===== */
function buildSkillCards(items) {
  return items.map(s => `
    <div class="skill-card">
      <div class="skill-icon">
        <img
          src="${s.icon}"
          alt="${s.name}"
          onerror="this.parentElement.innerHTML='<i class=\\'fas fa-tools\\' style=\\'font-size:22px;color:var(--gray-light);margin:auto;\\'></i>'"
        />
      </div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-cat-label">${s.label}</div>
    </div>
  `).join('');
}

function renderSkills(cat = 'all') {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  const filtered = cat === 'all' ? skills : skills.filter(s => s.cat === cat);
  grid.innerHTML = buildSkillCards(filtered);
}

function updateSkillsGridMinHeight() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  const card = grid.querySelector('.skill-card');
  const cardHeight = card?.getBoundingClientRect().height || 0;
  const styles = window.getComputedStyle(grid);
  const columns = styles.gridTemplateColumns
    .split(/\s+/)
    .filter(column => column && column !== 'none').length || 1;
  const rowGap = parseFloat(styles.rowGap) || 0;
  const rows = Math.ceil(skills.length / columns);
  const height = Math.ceil((rows * cardHeight) + (Math.max(rows - 1, 0) * rowGap));

  if (height > 0) {
    grid.style.setProperty('--skills-grid-min-h', `${height}px`);
  }
}

function stabilizeSkillsGridHeight() {
  requestAnimationFrame(updateSkillsGridMinHeight);
}

function initSkillsGridResizeLock() {
  let resizeTimer = null;

  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(stabilizeSkillsGridHeight, 120);
  });
}

/* ===== SKILLS CATEGORY FILTER ===== */
function initSkillsFilter() {
  const cats = document.getElementById('skillsCats');
  if (!cats) return;
  renderSkills();
  stabilizeSkillsGridHeight();
  initSkillsGridResizeLock();
  cats.addEventListener('click', e => {
    const btn = e.target.closest('.skills-cat-btn');
    if (!btn) return;
    document.querySelectorAll('.skills-cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateSkillsGridMinHeight();
    renderSkills(btn.dataset.cat);
  });
}

/* ===== RENDER PORTFOLIO ===== */
function renderPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  activeProjectIndex = null;

  const projectList = projects.map((project, index) => ({ ...project, index }));
  const filtered = filter === 'all' ? projectList : projectList.filter(p => p.cat === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="portfolio-card" data-project-index="${p.index}" role="button" tabindex="0" aria-label="Open ${p.title} project details">
      <div class="pf-img" data-project-media>${buildProjectMedia(p, false)}</div>
      <div class="pf-body">
        <div class="pf-cat">${p.tag}</div>
        <div class="pf-title">${p.title}</div>
        <div class="pf-desc">${p.desc || timelineDevelopmentMessage}</div>
      </div>
    </div>
  `).join('');
}

function buildProjectDetail(project, highlights) {
  return `
    <div class="project-detail-head">
      <div>
        <div class="project-detail-tag">${project.tag}</div>
        <div class="project-detail-title">${project.title}</div>
      </div>
      <button class="project-detail-close" type="button" data-project-close aria-label="Close project detail">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="project-detail-body">
      <div class="project-detail-copy">
        <p>${project.desc || timelineDevelopmentMessage}</p>
        <ul class="project-detail-list">
          ${highlights.map(item => `
            <li><i class="fas fa-check-circle"></i><span>${item}</span></li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

function getProjectHighlights(project) {
  const defaults = {
    automation: [
      'PLC logic, debugging, and production-oriented automation workflow.',
      'Industrial control problem solving with clear technical documentation.',
      'System behavior prepared for reliability, commissioning, and review.'
    ],
    robotics: [
      'Mechanical, electrical, and control integration for competition use.',
      'Testing-focused workflow to improve consistency and performance.',
      'Project execution shaped around practical constraints and results.'
    ],
    design: [
      'Mechanical modeling and CAD presentation for technical inspection.',
      'Reusable design assets prepared with clean geometry and structure.',
      'Published work organized for portfolio and marketplace visibility.'
    ]
  };

  return defaults[project.cat] || [
    'Project scope, design decisions, and implementation details.',
    'Technical workflow prepared for review and future documentation.',
    'Outcome-focused presentation for portfolio use.'
  ];
}

function getScrollOffset() {
  const nav = document.querySelector('.nav');
  return (nav?.offsetHeight || 0) + 84;
}

function adjustScrollToCard(card) {
  if (!card) return;

  requestAnimationFrame(() => {
    const rect = card.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - getScrollOffset();

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth'
    });
  });
}

function preserveScrollPosition(anchor, mutate) {
  if (!anchor) {
    mutate();
    return;
  }

  const beforeTop = anchor.getBoundingClientRect().top;
  mutate();

  requestAnimationFrame(() => {
    const afterTop = anchor.getBoundingClientRect().top;
    window.scrollBy(0, afterTop - beforeTop);
  });
}

function resetProjectMedia(grid) {
  grid.querySelectorAll('.portfolio-card').forEach(card => {
    const index = Number(card.dataset.projectIndex);
    const project = projects[index];
    const media = card.querySelector('[data-project-media]');
    if (project && media) {
      media.dataset.slideIndex = '0';
      media.innerHTML = buildProjectMedia(project, false);
    }
  });
}

function closeProjectDetail(grid) {
  const activeCard = grid.querySelector('.portfolio-card.active');

  preserveScrollPosition(activeCard, () => {
    grid.querySelectorAll('.portfolio-detail').forEach(detail => detail.remove());
    resetProjectMedia(grid);
    activeProjectIndex = null;
    document.querySelectorAll('.portfolio-card').forEach(card => card.classList.remove('active'));
  });
}

function renderProjectDetail(index) {
  const grid = document.getElementById('portfolioGrid');
  const project = projects[index];
  if (!grid || !project) return;

  const activeCard = grid.querySelector(`.portfolio-card[data-project-index="${index}"]`);
  if (!activeCard) return;

  grid.querySelectorAll('.portfolio-detail').forEach(detail => detail.remove());
  resetProjectMedia(grid);
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.classList.toggle('active', Number(card.dataset.projectIndex) === index);
  });
  activeProjectIndex = index;

  const media = activeCard.querySelector('[data-project-media]');
  if (media) {
    media.dataset.slideIndex = '0';
    media.innerHTML = buildProjectMedia(project, true);
  }

  const highlights = getProjectHighlights(project);
  const detail = document.createElement('div');
  detail.className = 'portfolio-detail';
  detail.innerHTML = buildProjectDetail(project, highlights);

  activeCard.insertAdjacentElement('beforeend', detail);
  adjustScrollToCard(activeCard);
}

function moveProjectSlide(step) {
  const media = document.querySelector('.portfolio-card.active [data-project-media]');
  if (!media) return;

  const slides = Array.from(media.querySelectorAll('.project-slide'));
  if (slides.length < 2) return;

  const current = Number(media.dataset.slideIndex || 0);
  const next = (current + step + slides.length) % slides.length;

  slides.forEach(slide => slide.classList.remove('active', 'prev'));
  slides[current].classList.add('prev');
  slides[next].classList.add('active');
  media.dataset.slideIndex = String(next);
}

function getSwipeStep(startX, endX) {
  const distance = startX - endX;
  if (Math.abs(distance) < 45) return 0;
  return distance > 0 ? 1 : -1;
}

function initPortfolioDetails() {
  const grid = document.getElementById('portfolioGrid');

  if (grid) {
    grid.addEventListener('click', e => {
      const close = e.target.closest('[data-project-close]');
      if (close) {
        closeProjectDetail(grid);
        return;
      }

      const slideBtn = e.target.closest('[data-project-slide]');
      if (slideBtn) {
        e.stopPropagation();
        moveProjectSlide(Number(slideBtn.dataset.projectSlide));
        return;
      }

      if (e.target.closest('.portfolio-detail')) return;
      if (e.target.closest('a')) return;
      const card = e.target.closest('.portfolio-card');
      if (!card) return;
      const index = Number(card.dataset.projectIndex);
      if (index === activeProjectIndex) return;
      renderProjectDetail(index);
    });

    grid.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const slideBtn = e.target.closest('[data-project-slide]');
      if (slideBtn) {
        e.preventDefault();
        moveProjectSlide(Number(slideBtn.dataset.projectSlide));
        return;
      }

      if (e.target.closest('.portfolio-detail')) return;
      const card = e.target.closest('.portfolio-card');
      if (!card) return;
      e.preventDefault();
      const index = Number(card.dataset.projectIndex);
      if (index === activeProjectIndex) return;
      renderProjectDetail(index);
    });

    grid.addEventListener('pointerdown', e => {
      const media = e.target.closest('[data-project-media]');
      if (!media?.closest('.portfolio-card.active') || e.target.closest('button, a')) return;
      media.dataset.swipeStartX = String(e.clientX);
    });

    grid.addEventListener('pointerup', e => {
      const media = e.target.closest('[data-project-media]');
      if (!media?.closest('.portfolio-card.active') || e.target.closest('button, a')) return;
      const startX = Number(media.dataset.swipeStartX);
      if (!Number.isFinite(startX)) return;
      const step = getSwipeStep(startX, e.clientX);
      delete media.dataset.swipeStartX;
      if (step) moveProjectSlide(step);
    });
  }
}

/* ===== PORTFOLIO FILTER ===== */
function initPortfolioFilter() {
  const filterEl = document.getElementById('portfolioFilter');
  if (!filterEl) return;
  renderPortfolio();
  filterEl.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPortfolio(btn.dataset.filter);
  });
}

/* ===== TIMELINE DETAILS ===== */
const timelineDevelopmentMessage = 'Will update soon.';

function getTimelinePlaceholderPhotos() {
  return [{
    label: timelineDevelopmentMessage,
    src: ''
  }];
}

function buildTimelineItemMarkup(item, type, index) {
  return `
    <div class="timeline-item" data-timeline-type="${type}" data-timeline-index="${index}">
      <div class="tl-period">${item.period}</div>
      <div class="tl-title">${item.title}</div>
      <div class="tl-org">${item.org}</div>
      ${item.desc ? `<div class="tl-desc">${item.desc}</div>` : ''}
    </div>
  `;
}

function getTimelineDataItem(item) {
  const type = item.dataset.timelineType;
  const index = Number(item.dataset.timelineIndex);
  const source = type === 'achievement' ? window.achievementItems : window.experienceItems;
  return Array.isArray(source) ? source[index] : null;
}

function renderTimelineSections() {
  const experienceTimeline = document.querySelector('[data-experience-timeline]');
  const achievementTimeline = document.querySelector('[data-achievement-timeline]');

  if (experienceTimeline && Array.isArray(window.experienceItems)) {
    experienceTimeline.innerHTML = window.experienceItems
      .map((item, index) => buildTimelineItemMarkup(item, 'experience', index))
      .join('');
  }

  if (achievementTimeline && Array.isArray(window.achievementItems)) {
    achievementTimeline.innerHTML = window.achievementItems
      .map((item, index) => buildTimelineItemMarkup(item, 'achievement', index))
      .join('');
  }
}

function getTimelineDetail(title, org, desc) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes('plc')) {
    return [
      desc || 'Focused on PLC automation, sequence control, and industrial troubleshooting.',
      'Handled logic development, testing, and debugging for machine control workflows.',
      `Context: ${org}.`
    ];
  }

  if (lowerTitle.includes('manual')) {
    return [
      desc || 'Created technical documentation for industrial equipment operation.',
      'Structured machine information into practical manuals for users and technicians.',
      `Context: ${org}.`
    ];
  }

  if (lowerTitle.includes('mechanic')) {
    return [
      desc || 'Supported mechanical work for aeronautics research activities.',
      'Contributed to practical build, inspection, and preparation work for team projects.',
      `Context: ${org}.`
    ];
  }

    if (lowerTitle.includes('safmc 2026')) {
    return [
      desc || 'Judgements Commendation Award Singapore Amazing Flying Machine Competition (SAFMC) 2026.',
      'Received the Judgements Commendation award as a Project Manager of Team Cakrawala Skala at the Singapore Amazing Flying Machine Competition (SAFMC) 2026, an international UAV and aerospace competition organized by DSO National Laboratories and Science Centre Singapore. Contributed to the design, integration, testing, and operation of a UAV system in the Category D1: Man Machine. The award recognized the team innovation, technical excellence, and successful implementation of human-machine interaction in aerial robotics.',
      `Context: ${org}.`
    ];
  }

    if (lowerTitle.includes('wepc')) {
    return [
      desc || '2nd Place – Workshop Electro PLC Competition (WEPC) 2025',
      'Awarded 2nd Place as a member of the competition team at the Workshop Electro PLC Competition (WEPC) 2025, a national-level PLC programming competition organized by Politeknik Negeri Malang (POLINEMA) and sponsored by OMRON. Demonstrated expertise in industrial automation, PLC programming, troubleshooting, and control system implementation while competing against participants from various institutions across Indonesia.',
      `Context: ${org}.`
    ];
  }

    if (lowerTitle.includes('atmi')) {
    return [
      desc || '2nd Place – ATMI CUP PLC Competition 2025',
      'Awarded 2nd Place at the ATMI CUP PLC Competition 2025, a national-level industrial automation competition organized by Alpha Mechatronics, Schneider Electronic Indonesia, Polteknik ATMI Surakarta. Demonstrated strong competencies in PLC programming, industrial control systems, troubleshooting, and automation problem-solving while competing against teams from various universities and technical institutions across Indonesia.',
      `Context: ${org}.`
    ];
  }

    if (lowerTitle.includes('safmc 2025')) {
    return [
      desc || '2nd Place Award Singapore Amazing Flying Machine Competition (SAFMC) 2025.',
      'Received the 2nd Place awards a member of Team Cakrawala Skala at the Singapore Amazing Flying Machine Competition (SAFMC) 2025, an international UAV and aerospace competition organized by DSO National Laboratories and Science Centre Singapore. Contributed to the design, integration, testing, and operation of a UAV system in the Category D1: Man Machine. The award recognized the team innovation, technical excellence, implementation of human-machine interaction in aerial robotics, and successful to complete the missions.',
      `Context: ${org}.`
    ];
  }

    if (lowerTitle.includes('robocon')) {
    return [
      desc || '2nd Place Award Singapore Amazing Flying Machine Competition (SAFMC) 2025.',
      'Received the 2nd Place awards a member of Team Cakrawala Skala at the Singapore Amazing Flying Machine Competition (SAFMC) 2025, an international UAV and aerospace competition organized by DSO National Laboratories and Science Centre Singapore. Contributed to the design, integration, testing, and operation of a UAV system in the Category D1: Man Machine. The award recognized the team innovation, technical excellence, implementation of human-machine interaction in aerial robotics, and successful to complete the missions.',
      `Context: ${org}.`
    ];
  }

  return [
    timelineDevelopmentMessage
  ];
}

function getTimelinePhotos(title) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes('subcontractor')) {
    return [
      { label: 'ucm 1', src: 'Assets/experience/exp_12/1.jpeg' },
      { label: 'ucm 2', src: 'Assets/experience/exp_12/2.jpeg' },
    ];
  }

  if (lowerTitle.includes('safmc 2026')) {
    return [
      { label: 'SAFMC 2026 Photo 1', src: 'Assets/achievement/ach_15/1.jpeg' },
      { label: 'SAFMC 2026 Photo 2', src: 'Assets/achievement/ach_15/2.jpeg' },
      { label: 'SAFMC 2026 Photo 3', src: 'Assets/achievement/ach_15/3.jpeg' },
      { label: 'SAFMC 2026 Photo 4', src: 'Assets/achievement/ach_15/4.jpeg' },
    ];
  }

  if (lowerTitle.includes('wepc')) {
    return [
      { label: 'WEPC 2025 Photo 1', src: 'Assets/achievement/ach_14/1.jpeg' },
      { label: 'WEPC 2025 Photo 2', src: 'Assets/achievement/ach_14/2.jpeg' },
      { label: 'WEPC 2025 Photo 3', src: 'Assets/achievement/ach_14/3.jpeg' },
    ];
  }

    if (lowerTitle.includes('atmi')) {
    return [
      { label: 'ATMI 2025 Photo 1', src: 'Assets/achievement/ach_12/1.jpeg' },
      { label: 'ATMI 2025 Photo 2', src: 'Assets/achievement/ach_12/2.jpeg' },
      { label: 'ATMI 2025 Photo 3', src: 'Assets/achievement/ach_12/3.jpeg' },
      { label: 'ATMI 2025 Photo 4', src: 'Assets/achievement/ach_12/4.jpeg' },
      { label: 'ATMI 2025 Photo 5', src: 'Assets/achievement/ach_12/5.jpeg' },
      { label: 'ATMI 2025 Photo 6', src: 'Assets/achievement/ach_12/6.jpeg' },
      { label: 'ATMI 2025 Photo 7', src: 'Assets/achievement/ach_12/7.jpeg' },
      { label: 'ATMI 2025 Photo 8', src: 'Assets/achievement/ach_12/8.jpeg' },
    ];
  }

  if (lowerTitle.includes('safmc 2025')) {
    return [
      { label: 'SAFMC 2025 Photo 1', src: 'Assets/achievement/ach_13/1.jpeg' },
      { label: 'SAFMC 2025 Photo 2', src: 'Assets/achievement/ach_13/2.jpeg' },
      { label: 'SAFMC 2025 Photo 3', src: 'Assets/achievement/ach_13/3.jpeg' },
      { label: 'SAFMC 2025 Photo 4', src: 'Assets/achievement/ach_13/4.jpeg' },
      { label: 'SAFMC 2025 Photo 5', src: 'Assets/achievement/ach_13/5.jpeg' },
      { label: 'SAFMC 2025 Photo 6', src: 'Assets/achievement/ach_13/6.jpeg' },
    ];
  }  

  if (lowerTitle.includes('robocon')) {
    return [
      { label: 'robocon Photo 1', src: 'Assets/achievement/ach_9/1.jpeg' },
      { label: 'robocon Photo 2', src: 'Assets/achievement/ach_9/2.jpeg' },
      { label: 'robocon Photo 3', src: 'Assets/achievement/ach_9/3.jpeg' },
      { label: 'robocon Photo 4', src: 'Assets/achievement/ach_9/4.jpeg' },
    ];
  }  

  return getTimelinePlaceholderPhotos();
}

function buildTimelineDetail(item) {
  const timelineItem = getTimelineDataItem(item);
  const period = item.querySelector('.tl-period')?.textContent.trim() || '';
  const title = item.querySelector('.tl-title')?.textContent.trim() || 'Timeline item';
  const org = item.querySelector('.tl-org')?.textContent.trim() || 'Portfolio milestone';
  const desc = item.querySelector('.tl-desc')?.textContent.trim() || '';
  const detail = timelineItem
    ? (timelineItem.detail?.length ? timelineItem.detail : [timelineDevelopmentMessage])
    : getTimelineDetail(title, org, desc);
  const photos = timelineItem
    ? (timelineItem.photos?.length ? timelineItem.photos : getTimelinePlaceholderPhotos())
    : getTimelinePhotos(title);
  const detailLines = detail;

  return `
    <div class="tl-detail" data-tl-slide-index="0">
      <div class="tl-detail-head">
        <div>
          <div class="tl-detail-meta">${period}</div>
          <div class="tl-detail-title">${title}</div>
        </div>
        <button class="tl-detail-close" type="button" data-tl-close aria-label="Close journey detail">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <p>${desc || org}</p>
      <div class="tl-gallery" aria-label="${title} photo carousel">
        ${photos.map((photo, photoIndex) => `
          <div
            class="tl-photo-slide ${photoIndex === 0 ? 'active' : ''}"
            data-tl-photo-open
            data-photo-src="${photo.src}"
            data-photo-label="${photo.label}"
            tabindex="${photoIndex === 0 ? '0' : '-1'}"
            role="button"
            aria-label="Open ${photo.label}"
          >
            ${photo.src
              ? `<img src="${photo.src}" alt="${photo.label}">`
              : `<div class="tl-photo-placeholder">
                  <i class="fas fa-image"></i>
                  <span>${photo.label}</span>
                </div>`}
          </div>
        `).join('')}
        <button class="tl-gallery-btn prev" type="button" data-tl-slide="-1" aria-label="Previous journey photo">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="tl-gallery-btn next" type="button" data-tl-slide="1" aria-label="Next journey photo">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <ul>
        ${detailLines.map(line => `<li><span>${line}</span></li>`).join('')}
      </ul>
    </div>
  `;
}

function updateTimelineSlideFocus(detail, activeIndex) {
  detail.querySelectorAll('.tl-photo-slide').forEach((slide, index) => {
    slide.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
  });
}

function moveTimelineSlide(button, step) {
  const detail = button.closest('.tl-detail');
  if (!detail) return;

  const slides = Array.from(detail.querySelectorAll('.tl-photo-slide'));
  if (slides.length < 2) return;

  const current = Number(detail.dataset.tlSlideIndex || 0);
  const next = (current + step + slides.length) % slides.length;

  slides.forEach(slide => slide.classList.remove('active', 'prev'));
  slides[current].classList.add('prev');
  slides[next].classList.add('active');
  detail.dataset.tlSlideIndex = String(next);
  updateTimelineSlideFocus(detail, next);
}

function openTimelinePhoto(src, label) {
  document.querySelector('.photo-lightbox')?.remove();

  const lightbox = document.createElement('div');
  lightbox.className = 'photo-lightbox';
  lightbox.innerHTML = `
    <button class="photo-lightbox-close" type="button" data-photo-lightbox-close aria-label="Close photo preview">
      <i class="fas fa-times"></i>
    </button>
    <div class="photo-lightbox-stage">
      ${src
        ? `<img src="${src}" alt="${label}">`
        : `<div class="photo-lightbox-placeholder">
            <i class="fas fa-image"></i>
            <span>${label}</span>
          </div>`}
    </div>
  `;
  document.body.appendChild(lightbox);
  document.body.classList.add('lightbox-open');
}

function closeTimelinePhoto() {
  document.querySelector('.photo-lightbox')?.remove();
  document.body.classList.remove('lightbox-open');
}

function closeTimelineItem(item) {
  if (!item) return;
  item.classList.remove('active');
  item.setAttribute('aria-expanded', 'false');
  item.querySelector('.tl-toggle span').textContent = 'Details';
  item.querySelector('.tl-detail')?.remove();
}

function toggleTimelineItem(item) {
  const isActive = item.classList.contains('active');

  if (isActive) {
    closeTimelineItem(item);
    return;
  }

  item.classList.add('active');
  item.setAttribute('aria-expanded', 'true');
  item.querySelector('.tl-toggle span').textContent = 'Details';
  item.insertAdjacentHTML('beforeend', buildTimelineDetail(item));
}

function initTimelineDetails() {
  const experience = document.querySelector('.experience');
  if (!experience) return;

  experience.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.classList.add('is-expandable');
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-expanded', 'false');
    item.setAttribute('aria-label', `Open timeline detail ${index + 1}`);

    if (!item.querySelector('.tl-toggle')) {
      item.insertAdjacentHTML('beforeend', `
        <div class="tl-toggle">
          <i class="fas fa-plus"></i>
          <span>Details</span>
        </div>
      `);
    }
  });

  experience.addEventListener('click', e => {
    const closeBtn = e.target.closest('[data-tl-close]');
    if (closeBtn) {
      e.stopPropagation();
      const item = closeBtn.closest('.timeline-item');
      closeTimelineItem(item);
      return;
    }

    const slideBtn = e.target.closest('[data-tl-slide]');
    if (slideBtn) {
      e.stopPropagation();
      moveTimelineSlide(slideBtn, Number(slideBtn.dataset.tlSlide));
      return;
    }

    const photo = e.target.closest('[data-tl-photo-open]');
    if (photo) {
      e.stopPropagation();
      const gallery = photo.closest('.tl-gallery');
      if (gallery?.dataset.swiped === '1') {
        delete gallery.dataset.swiped;
        return;
      }
      openTimelinePhoto(photo.dataset.photoSrc, photo.dataset.photoLabel);
      return;
    }

    if (e.target.closest('.tl-detail')) return;

    const item = e.target.closest('.timeline-item');
    if (!item) return;
    if (item.classList.contains('active')) return;
    toggleTimelineItem(item);
  });

  experience.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const closeBtn = e.target.closest('[data-tl-close]');
    if (closeBtn) {
      e.preventDefault();
      const item = closeBtn.closest('.timeline-item');
      closeTimelineItem(item);
      return;
    }

    const slideBtn = e.target.closest('[data-tl-slide]');
    if (slideBtn) {
      e.preventDefault();
      moveTimelineSlide(slideBtn, Number(slideBtn.dataset.tlSlide));
      return;
    }

    const photo = e.target.closest('[data-tl-photo-open]');
    if (photo) {
      e.preventDefault();
      openTimelinePhoto(photo.dataset.photoSrc, photo.dataset.photoLabel);
      return;
    }

    if (e.target.closest('.tl-detail')) return;

    const item = e.target.closest('.timeline-item');
    if (!item) return;
    if (item.classList.contains('active')) return;
    e.preventDefault();
    toggleTimelineItem(item);
  });

  experience.addEventListener('pointerdown', e => {
    const gallery = e.target.closest('.tl-gallery');
    if (!gallery || e.target.closest('button')) return;
    gallery.dataset.swipeStartX = String(e.clientX);
  });

  experience.addEventListener('pointerup', e => {
    const gallery = e.target.closest('.tl-gallery');
    if (!gallery || e.target.closest('button')) return;
    const startX = Number(gallery.dataset.swipeStartX);
    if (!Number.isFinite(startX)) return;
    const step = getSwipeStep(startX, e.clientX);
    delete gallery.dataset.swipeStartX;
    if (!step) return;
    gallery.dataset.swiped = '1';
    const proxyButton = gallery.querySelector('[data-tl-slide]');
    if (proxyButton) moveTimelineSlide(proxyButton, step);
  });
}

document.addEventListener('click', e => {
  if (e.target.closest('[data-photo-lightbox-close]') || e.target.classList.contains('photo-lightbox')) {
    closeTimelinePhoto();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeTimelinePhoto();
});

/* ===== PROFILE SLIDESHOW ===== */
function initProfileSliders() {
  document.querySelectorAll('[data-profile-slider]').forEach(slider => {
    const slides = Array.from(slider.querySelectorAll('.profile-slide'));
    if (slides.length < 2) return;

    let current = slides.findIndex(slide => slide.classList.contains('active'));
    if (current < 0) {
      current = 0;
      slides[current].classList.add('active');
    }

    setInterval(() => {
      const next = (current + 1) % slides.length;

      slides.forEach(slide => slide.classList.remove('prev'));
      slides[current].classList.remove('active');
      slides[current].classList.add('prev');
      slides[next].classList.add('active');

      current = next;
    }, 4000);
  });
}

/* ===== CONTACT FORM ===== */
function submitForm() {
  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const subject = document.getElementById('fsubject').value.trim();
  const message = document.getElementById('fmessage').value.trim();
  const msgEl   = document.getElementById('formMsg');

  // Reset state
  msgEl.className = 'form-msg';

  if (!fname || !email || !message) {
    msgEl.className = 'form-msg error';
    msgEl.textContent = 'Please fill in your name, email, and message.';
    return;
  }

  const data = {
    name: `${fname} ${lname}`.trim(),
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    existing.push(data);
    localStorage.setItem('portfolio_messages', JSON.stringify(existing));

    msgEl.className = 'form-msg success';
    msgEl.textContent = `Thank you, ${fname}! Your message has been received. I'll get back to you soon.`;

    // Reset fields
    ['fname','lname','femail','fsubject','fmessage'].forEach(id => {
      document.getElementById(id).value = '';
    });

    console.log('%c📬 New Message Received', 'color:#E8600A;font-weight:bold;');
    console.log(data);
    console.log('%c📋 All Messages:', 'color:#2D6A4F;font-weight:bold;', existing);
  } catch (err) {
    msgEl.className = 'form-msg error';
    msgEl.textContent = 'There was an issue. Please email me directly at 69.thompsonray@gmail.com';
  }
}

/* ===== MOBILE MENU ===== */
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  const ham  = document.getElementById('hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ===== SCROLL EFFECTS ===== */
function initScrollEffects() {
  const nav     = document.getElementById('mainNav');
  const backTop = document.getElementById('backTop');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    const y = window.scrollY;

    // Nav shadow
    nav && nav.classList.toggle('scrolled', y > 50);

    // Back to top button
    backTop && backTop.classList.toggle('visible', y > 400);

    // Active nav link highlight
    sections.forEach(s => {
      const top = s.offsetTop - 100;
      const bottom = top + s.offsetHeight;
      if (y >= top && y < bottom) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${s.id}"]`);
        if (active) active.classList.add('active');
      }
    });

    // Reveal on scroll
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ===== BACK TO TOP ===== */
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ===== MESSAGES ADMIN (console utility) ===== */
window.viewMessages = function () {
  const msgs = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
  if (msgs.length === 0) {
    console.log('%c📭 No messages yet.', 'color:#7A7A7A;');
    return [];
  }
  console.log(`%c📬 ${msgs.length} message(s) received:`, 'color:#E8600A;font-weight:bold;font-size:14px;');
  console.table(msgs);
  return msgs;
};

window.clearMessages = function () {
  localStorage.removeItem('portfolio_messages');
  console.log('%c🗑️ All messages cleared.', 'color:#2D6A4F;');
};

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderTimelineSections();
  initProfileSliders();
  initSkillsFilter();
  initPortfolioFilter();
  initPortfolioDetails();
  initTimelineDetails();
  initScrollEffects();
  initBackTop();

  console.log('%c⚡ Thompson Ray Portfolio', 'color:#E8600A;font-size:16px;font-weight:bold;font-family:monospace;');
  console.log('%c> Type viewMessages() to see contact form submissions', 'color:#2D6A4F;font-size:12px;font-family:monospace;');
  console.log('%c> Type clearMessages() to clear all stored messages', 'color:#7A7A7A;font-size:12px;font-family:monospace;');
});
