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
      <h3>Workflow Dispatch</h3>
      <p>Glanceable highlights from current Omniverse workflow builds, tuned for Developer Success reviews.</p>
      <ul class="story-list">${stories}</ul>
    </section>`;
  }
})();
