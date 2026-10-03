/* ============================================================
   Fides API Documentation — Internationalization (i18n)
   Loads language files from i18n/{lang}.js
   ============================================================ */

(function () {
  'use strict';

  var SUPPORTED = ['en', 'es', 'fr', 'de'];
  var DEFAULT_LANG = 'en';

  function detectLanguage() {
    var stored = localStorage.getItem('fides-docs-lang');
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    var browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(browserLang) !== -1) return browserLang;

    return DEFAULT_LANG;
  }

  function loadLanguageFiles(callback) {
    var loaded = 0;
    var total = SUPPORTED.length;
    SUPPORTED.forEach(function (code) {
      if (window.__fides_i18n && window.__fides_i18n[code]) {
        loaded++;
        if (loaded === total) callback();
        return;
      }
      var script = document.createElement('script');
      script.src = 'i18n/' + code + '.js';
      script.onload = function () {
        loaded++;
        if (loaded === total) callback();
      };
      script.onerror = function () {
        loaded++;
        if (loaded === total) callback();
      };
      document.head.appendChild(script);
    });
  }

  function applyTranslations(lang) {
    if (!window.__fides_i18n || !window.__fides_i18n[lang]) return;
    var dict = window.__fides_i18n[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.lang = lang;
  }

  function initLanguageSwitcher() {
    var current = detectLanguage();
    var switcher = document.querySelector('.lang-switcher');
    if (!switcher) return;

    var buttons = switcher.querySelectorAll('[data-lang]');
    buttons.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === current) {
        btn.classList.add('active');
      }
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        localStorage.setItem('fides-docs-lang', lang);
        applyTranslations(lang);
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var lang = detectLanguage();
    loadLanguageFiles(function () {
      applyTranslations(lang);
      initLanguageSwitcher();
    });
  });
})();
