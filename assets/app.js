// App bootstrap
(function(){
  const links = window.__APP_DATA__.links;
  // CTA buttons
  const cta = document.getElementById('cta');
  cta.innerHTML = `
    <a class="btn primary" href="${links.resumeUS}" target="_blank" rel="noopener">Resume (US Letter)</a>
    <a class="btn" href="${links.resumeA4}" target="_blank" rel="noopener">Resume (A4)</a>
    <a class="btn" href="${links.portfolio}" target="_blank" rel="noopener">One-Page Portfolio</a>
    <a class="btn" href="${links.repoIFCUSD}" target="_blank" rel="noopener">GitHub - IFC to USD Pipeline</a>
  `;

  // Router render mount
  const mount = document.getElementById('app');
  window.__renderView = function(view){
    const map = { Workflows, Projects, Videos, About, Contact };
    mount.innerHTML = (map[view] ? map[view]() : Workflows());
  };

  // Footer year
  document.getElementById('y').textContent = new Date().getFullYear();
})();
