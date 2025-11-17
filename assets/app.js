// App bootstrap
(function(){
  const links = window.__APP_DATA__.links;
  // CTA buttons
  const cta = document.getElementById('cta');
  const ctas = [
    { label: "1-Page Portfolio", href: links.portfolio, accent: true },
    { label: "GitHub &middot; BuildUSD", href: links.repoBuildUSD }
  ];
  cta.innerHTML = ctas.map(item => `
    <a class="btn ${item.accent ? 'primary' : 'dark'}" href="${item.href}" target="_blank" rel="noopener">${item.label}</a>
  `).join('');

  // mobile nav toggle
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  if(toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
  document.querySelectorAll('.header-nav a').forEach(link => {
    link.addEventListener('click', () => nav && nav.classList.remove('open'));
  });
  const brand = document.querySelector('.brand');
  if(brand){
    brand.addEventListener('click', () => nav && nav.classList.remove('open'));
  }

  // Router render mount
  const mount = document.getElementById('app');
  window.__renderView = function(view){
    const map = { Workflows, Projects, Videos, About, Contact };
    mount.innerHTML = (map[view] ? map[view]() : Workflows());
  };

  // Footer year
  document.getElementById('y').textContent = new Date().getFullYear();
})();
