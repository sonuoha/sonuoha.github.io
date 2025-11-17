// Projects component
(function(){
  window.Projects = function(){
    const cards = window.__APP_DATA__.projects.map((p, idx) => {
      const chips = (p.chips||[]).map(c=>`<span class="chip">${c}</span>`).join('');
      const chipRow = chips ? `<div class="chip-row">${chips}</div>` : '';
      const repo = p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Repo</a>` : '';
      const pdf = p.pdf ? `<a href="${p.pdf}" target="_blank" rel="noopener">PDF Overview</a>` : '';
      const links = [repo, pdf].filter(Boolean).join('') || `<span class="muted-text">Private reference</span>`;
      return `<article class="project-card">
        <p class="story-meta">Case Study ${String(idx + 1).padStart(2,'0')}</p>
        <h4>${p.title}</h4>
        <p>${p.body}</p>
        ${chipRow}
        <div class="links link-row">${links}</div>
      </article>`;
    }).join('');
    return `<section class="section">
      <h3>Build Notes</h3>
      <p>Deep dives that back up the hero workflows with code, structure, and customer outcomes.</p>
      <div class="project-grid">${cards}</div>
    </section>`;
  }
})();
