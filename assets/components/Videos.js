// Videos component
(function(){
  window.Videos = function(){
    const cards = window.__APP_DATA__.videos.map((v, idx) => {
      const hasLink = v.href && v.href !== '#';
      const action = hasLink
        ? `<a class="btn small light" href="${v.href}" target="_blank" rel="noopener">Watch</a>`
        : `<span class="btn small light disabled">Add link</span>`;
      return `<article class="video-card">
        <p class="story-meta">Clip ${String(idx + 1).padStart(2,'0')}</p>
        <div class="video-thumb">${v.title}</div>
        ${action}
      </article>`;
    }).join('');
    return `<section class="section">
      <h3>Workflow Clips</h3>
      <p>Short walkthroughs (30-90s) that demonstrate specific workflow checkpoints for Developer Success reviews.</p>
      <div class="video-grid">${cards}</div>
    </section>`;
  }
})();
