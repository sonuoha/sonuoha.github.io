// Projects component
(function(){
  window.Projects = function(){
    const cards = window.__APP_DATA__.projects.map(p => {
      const chips = (p.chips||[]).map(c=>`<span class="chip">${c}</span>`).join('');
      const repo = p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Repo</a>` : '';
      const pdf = p.pdf ? `<a href="${p.pdf}" target="_blank" rel="noopener">PDF Overview</a>` : '';
      return `<div class="card"><h4>${p.title}</h4><p>${p.body}</p><div class="chip-row">${chips}</div><div class="links">${repo} ${pdf}</div></div>`
    }).join('');
    return `<section class="section"><div class="grid-2">${cards}</div></section>`;
  }
})();