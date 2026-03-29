(function () {
  "use strict";

  // Fix nav links: intercept clicks and scroll manually
  // This prevents wouter or any SPA router from hijacking hash navigation
  function fixNavLinks() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest("a[href^='#']");
      if (!link) return;

      var hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      var targetId = hash.substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        target.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", hash);
      }
    }, true); // useCapture to intercept before wouter
  }

  function addQuoteForm() {
    var contactSection = document.getElementById("contact");
    if (!contactSection) return;

    var container = contactSection.querySelector(".container");
    if (!container) return;

    var formWrapper = document.createElement("div");
    formWrapper.className = "quote-form-wrapper";
    formWrapper.innerHTML = '<h3>Request a Free Estimate</h3>' +
      '<p class="form-subtitle">Tell us about your project and we will get back to you within 24 hours.</p>' +
      '<form id="quote-form">' +
      '<div class="form-row">' +
      '<div><label for="qf-name">Full Name</label>' +
      '<input type="text" id="qf-name" name="name" placeholder="John Smith" required autocomplete="name" /></div>' +
      '<div><label for="qf-email">Email</label>' +
      '<input type="email" id="qf-email" name="email" placeholder="john@example.com" required autocomplete="email" inputmode="email" /></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div><label for="qf-phone">Phone Number</label>' +
      '<input type="tel" id="qf-phone" name="phone" placeholder="(902) 555-1234" autocomplete="tel" inputmode="tel" /></div>' +
      '<div><label for="qf-service">Service Needed</label>' +
      '<select id="qf-service" name="service" required>' +
      '<option value="" disabled selected>Select a service</option>' +
      '<option value="residential">Residential Construction</option>' +
      '<option value="commercial">Commercial Construction</option>' +
      '<option value="agricultural">Agricultural Buildings</option>' +
      '<option value="renovation">Renovations</option>' +
      '<option value="excavation">Excavation</option>' +
      '<option value="foundation">Foundations</option>' +
      '<option value="other">Other</option>' +
      '</select></div>' +
      '</div>' +
      '<div><label for="qf-message">Project Details</label>' +
      '<textarea id="qf-message" name="message" placeholder="Describe your project, timeline, and any specific requirements..." rows="4" required></textarea></div>' +
      '<div style="position:absolute;left:-9999px" aria-hidden="true" tabindex="-1">' +
      '<input type="text" name="website" tabindex="-1" autocomplete="off" /></div>' +
      '<button type="submit">Send Estimate Request</button>' +
      '</form>';

    container.appendChild(formWrapper);

    document.getElementById("quote-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = this.querySelector('input[name="website"]');
      if (hp && hp.value) return;
      formWrapper.innerHTML = '<div class="form-success">' +
        '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#d85900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>' +
        '<h4>Estimate Request Sent!</h4>' +
        '<p>Thanks! We will be in touch within 24 hours.</p>' +
        '</div>';
    });
  }

  // Fix nav immediately
  fixNavLinks();

  // Wait for React to render then add form
  var attempts = 0;
  var interval = setInterval(function () {
    attempts++;
    var contact = document.getElementById("contact");
    if (contact) {
      clearInterval(interval);
      setTimeout(addQuoteForm, 300);
    } else if (attempts >= 80) {
      clearInterval(interval);
    }
  }, 100);
})();
