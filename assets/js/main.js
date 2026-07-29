/* ============================================================
   DR. BRYAN K. WILLIAMS — LANDING PAGE SCRIPTS
============================================================ */

(function () {
  'use strict';

  /* ── YEAR IN FOOTER ─────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── SCROLL-TRIGGERED ANIMATIONS ───────────────────── */
  if ('IntersectionObserver' in window) {
    const animTargets = document.querySelectorAll('.benefit-card, .testimonial-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger siblings slightly
            const siblings = [...entry.target.parentNode.children];
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    animTargets.forEach((el) => observer.observe(el));

    // Safety net: if the observer never fires (headless previews,
    // restricted iframes, crawlers, or a slow/stalled scroll), don't leave
    // content permanently invisible — force-reveal everything after a beat.
    setTimeout(() => {
      observer.disconnect();
      animTargets.forEach((el) => el.classList.add('visible'));
    }, 2000);
  } else {
    // Fallback: show all immediately
    document.querySelectorAll('.benefit-card, .testimonial-card').forEach((el) => {
      el.classList.add('visible');
    });
  }

  /* ── FORM HANDLING ──────────────────────────────────── */
  function handleFormSubmit(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const firstName = form.querySelector('input[name="first_name"]');
      const email     = form.querySelector('input[name="email"]');
      let valid = true;

      // Simple validation
      if (!firstName.value.trim()) {
        firstName.focus();
        firstName.reportValidity();
        valid = false;
      }

      if (valid && !isValidEmail(email.value.trim())) {
        email.focus();
        email.reportValidity();
        valid = false;
      }

      if (!valid) return;

      // Disable button while "submitting"
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';

      // ── INTEGRATE YOUR ESP HERE ──────────────────────
      // Replace the setTimeout below with a real fetch() call to your
      // email service provider (ConvertKit, Mailchimp, ActiveCampaign, etc.)
      //
      // Example (ConvertKit):
      // fetch('https://api.convertkit.com/v3/forms/FORM_ID/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     api_key: 'YOUR_PUBLIC_API_KEY',
      //     first_name: firstName.value.trim(),
      //     email: email.value.trim()
      //   })
      // })
      // .then(res => res.json())
      // .then(data => showSuccess(form, btn))
      // .catch(err => { btn.disabled = false; btn.textContent = originalText; });
      // ─────────────────────────────────────────────────

      // Demo: simulate success after 1s
      setTimeout(() => {
        showSuccess(form, btn, originalText);
      }, 1000);
    });
  }

  function showSuccess(form, btn, originalText) {
    // Hide the form fields
    [...form.children].forEach((child) => {
      if (!child.classList.contains('form-success')) {
        child.style.display = 'none';
      }
    });

    // Inject or show success message
    let successEl = form.querySelector('.form-success');
    if (!successEl) {
      successEl = document.createElement('div');
      successEl.className = 'form-success';
      successEl.innerHTML = '<p>You\'re in! Check your inbox — your first leadership tip is on its way.</p>';
      form.appendChild(successEl);
    }
    successEl.classList.add('visible');

    // Reset for safety
    btn.disabled = false;
    btn.textContent = originalText;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Attach to both forms
  document.querySelectorAll('.opt-in-form').forEach(handleFormSubmit);

  /* ── ANCHOR SMOOTH SCROLL (fallback for older browsers) */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

})();
