// Contact component
(function(){
  window.Contact = function(){
    const l = window.__APP_DATA__.links;
    return `<section class="section">
      <h3>Contact</h3>
      <p class="contact-line">
        <a href="${l.email}">samuel.onuoha@outlook.com</a>
        <span>&nbsp;&middot;&nbsp;</span>
        <a href="${l.linkedin}" target="_blank" rel="noopener">linkedin.com/in/samuelonuoha</a>
      </p>
      <p class="muted-text">Quickest responses via email; include a short note on the workflow or program you have in mind.</p>
    </section>`;
  }
})();
