/* =========================================================================
   Arnold's Fitness Gym — main.js
   Vanilla, dependency-free. Progressive enhancement: the page is fully
   functional without JS; this adds nav state, reveals, counters & parallax.
   ========================================================================= */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Footer year ---------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky nav: solid on scroll ------------------------------------ */
  var nav = document.getElementById("nav");
  function onScrollNav() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  onScrollNav();

  /* ---- Mobile menu ---------------------------------------------------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      menu.hidden = false;
    } else {
      menu.hidden = true;
    }
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    // Close when a link is tapped
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
    // Reset when resizing up to desktop
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (m) {
      if (m.matches) setMenu(false);
    });
  }

  /* ---- Scroll reveal (IntersectionObserver) --------------------------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var revObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { revObserver.observe(el); });
  }

  /* ---- Animated stat counters ----------------------------------------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced) {
      el.textContent = target.toLocaleString("en-US") + suffix;
      return;
    }
    var duration = 1600, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(eased * target).toLocaleString("en-US") + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCount);
    } else {
      var countObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { countObserver.observe(el); });
    }
  }

  /* ---- Hero parallax -------------------------------------------------- */
  var heroBg = document.querySelector(".hero__bg");
  if (heroBg && !prefersReduced) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight) {
          heroBg.style.transform = "translate3d(0," + (y * 0.35) + "px,0)";
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---- FAQ: single-open accordion ------------------------------------- */
  var accs = Array.prototype.slice.call(document.querySelectorAll(".accordion .acc"));
  accs.forEach(function (acc) {
    acc.addEventListener("toggle", function () {
      if (acc.open) {
        accs.forEach(function (other) {
          if (other !== acc) other.open = false;
        });
      }
    });
  });

  /* ---- Nav scroll listener (throttled) -------------------------------- */
  var navTicking = false;
  window.addEventListener("scroll", function () {
    if (navTicking) return;
    navTicking = true;
    requestAnimationFrame(function () {
      onScrollNav();
      navTicking = false;
    });
  }, { passive: true });
})();
