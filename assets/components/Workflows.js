// Workflows component
(function(){
  window.Workflows = function(){
    const stories = window.__APP_DATA__.workflows.map((item, idx) => `
      <li class="story">
        <p class="story-meta">Dispatch ${String(idx + 1).padStart(2,'0')}</p>
        <h4 class="story-title">${item.title}</h4>
        <p>${item.summary}</p>
      </li>
    `).join('');
    return `<section class="section">
      <h3>Digital Engineering Dispatch</h3>
      <p>A snapshot of how I engineer, govern, and operationalize Omniverse workflows across asset operations and delivery teams.</p>
      <ul class="story-list">${stories}</ul>
    </section>`;
  }
})();
