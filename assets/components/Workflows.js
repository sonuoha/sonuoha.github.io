// Workflows component
(function(){
  window.Workflows = function(){
    const ul = window.__APP_DATA__.workflows.map(li => `<li>${li}</li>`).join('');
    return `<section class="section"><h3>Selected Omniverse / Workflow Highlights</h3><ul class="bullets">${ul}</ul></section>`;
  }
})();