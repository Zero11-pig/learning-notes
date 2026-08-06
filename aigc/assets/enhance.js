/* ============================================================
   AIGC 课程总结 · 界面增强脚本(第二档优化)
   主题切换 / 阅读进度 / 返回顶部 / 卡片渐显 / 目录高亮
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 主题切换 ---------- */
  var toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', '切换主题');
  toggle.innerHTML =
    '<span class="icon-sun">☀️</span>' +
    '<span class="icon-moon">🌙</span>';
  document.body.appendChild(toggle);

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem('aigc-theme');
    } catch (e) {
      return null;
    }
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // 初始化主题:优先已保存,其次系统偏好
  var saved = getSavedTheme();
  var initial = saved || (systemPrefersDark() ? 'dark' : 'light');
  applyTheme(initial);

  toggle.addEventListener('click', function () {
    var isDark = document.body.classList.contains('dark');
    var next = isDark ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem('aigc-theme', next);
    } catch (e) {}
  });

  /* ---------- 阅读进度条 ---------- */
  var progress = document.createElement('div');
  progress.className = 'read-progress';
  document.body.appendChild(progress);

  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  /* ---------- 返回顶部 ---------- */
  var backTop = document.createElement('button');
  backTop.className = 'back-top';
  backTop.setAttribute('aria-label', '返回顶部');
  backTop.innerHTML = '↑';
  document.body.appendChild(backTop);

  backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function toggleBackTop() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    backTop.classList.toggle('visible', scrollTop > 400);
  }
  window.addEventListener('scroll', toggleBackTop, { passive: true });
  toggleBackTop();

  /* ---------- 卡片滚动渐显 ---------- */
  function setupReveal() {
    var els = document.querySelectorAll('.chapter-card, .card, .step, .homework, .s-node, .check, .model-row, .focal, .light-card, .vs-side, .layer, .kw-group, .callout, .grid > .card, .prompt-box, figure.diagram');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
    els.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
  setupReveal();

  /* ---------- 章节页目录侧边栏高亮 ---------- */
  function setupToc() {
    var sections = document.querySelectorAll('section.chapter[id]');
    if (!sections.length) return;

    var toc = document.createElement('nav');
    toc.className = 'toc-side';
    toc.setAttribute('aria-label', '本章目录');
    var list = '';
    sections.forEach(function (sec) {
      var head = sec.querySelector('.sec-head h2');
      var idx = sec.querySelector('.sec-head .idx');
      if (!head) return;
      var text = (idx ? idx.textContent.trim() + ' ' : '') + head.textContent.trim();
      list += '<a href="#' + sec.id + '">' + text + '</a>';
    });
    toc.innerHTML = list;
    document.body.appendChild(toc);

    var links = toc.querySelectorAll('a');
    if ('IntersectionObserver' in window) {
      var activeMap = {};
      var secIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activeMap[entry.target.id] = true;
          } else {
            delete activeMap[entry.target.id];
          }
          // 高亮当前最靠上的可见章节
          var topmost = null;
          sections.forEach(function (sec) {
            if (activeMap[sec.id]) {
              var rect = sec.getBoundingClientRect();
              if (!topmost || rect.top < topmost.top) topmost = { id: sec.id, top: rect.top };
            }
          });
          links.forEach(function (a) {
            a.classList.remove('active');
            if (topmost && a.getAttribute('href') === '#' + topmost.id) {
              a.classList.add('active');
            }
          });
        });
      }, { rootMargin: '-70px 0px -65% 0px' });
      sections.forEach(function (sec) { secIO.observe(sec); });
    }
  }
  setupToc();

  /* ---------- 平滑锚点滚动 ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t.tagName !== 'A') t = t.parentNode;
    if (t && t.getAttribute('href') && t.getAttribute('href').charAt(0) === '#') {
      var target = document.querySelector(t.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
})();
