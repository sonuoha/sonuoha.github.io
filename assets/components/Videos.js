// Videos component
(function(){
  window.Videos = function(){
    const cards = window.__APP_DATA__.videos.map(v => `
      <div class="video-card">
        <div class="video-thumb">${v.title}</div>
        <a class="btn small" href="${v.href}" target="_blank" rel="noopener">${v.href === '#' ? '(add link)' : 'Watch'}</a>
      </div>
    `).join('');
    return `<section class="section"><h3>Short Workflow Videos</h3><p>30–90s clips demonstrating specific workflows — ideal for Developer Success evaluation.</p><div class="video-grid">${cards}</div></section>`;
  }
})();