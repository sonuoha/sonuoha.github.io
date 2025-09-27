// Simple hash router
(function(){
  const routes = {
    "/": "Workflows",
    "/workflows": "Workflows",
    "/projects": "Projects",
    "/videos": "Videos",
    "/about": "About",
    "/contact": "Contact"
  };
  function render(){
    const hash = location.hash.replace('#','') || '/workflows';
    const view = routes[hash] || "Workflows";
    document.querySelectorAll('.header-nav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + hash);
    });
    window.__renderView(view);
  }
  window.addEventListener('hashchange', render);
  window.addEventListener('load', render);
  window.__navigate = (path) => { location.hash = path; };
})();