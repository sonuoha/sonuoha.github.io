// Contact component
(function(){
  window.Contact = function(){
    const l = window.__APP_DATA__.links;
    return `<section class="section"><h3>Contact</h3>
      <p><a href="${l.email}">samuel.onuoha@outlook.com</a> • <a href="${l.linkedin}" target="_blank" rel="noopener">linkedin.com/in/samuelonuoha</a></p>
    </section>`;
  }
})();