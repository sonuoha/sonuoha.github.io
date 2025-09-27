// About component
(function(){
  window.About = function(){
    const a = window.__APP_DATA__.about;
    const bullets = a.bullets.map(b=>`<li>${b}</li>`).join('');
    return `<section class="section"><div class="grid-2">
      <div><h3>About</h3><p>${a.blurb}</p><ul class="bullets">${bullets}</ul></div>
      <div class="card compact"><h4>Downloads</h4><ul class="links">
        <li><a href="${window.__APP_DATA__.links.resumeUS}" target="_blank">Resume (US)</a></li>
        <li><a href="${window.__APP_DATA__.links.resumeA4}" target="_blank">Resume (A4)</a></li>
        <li><a href="${window.__APP_DATA__.links.portfolio}" target="_blank">1‑Page Portfolio</a></li>
      </ul></div></div></section>`;
  }
})();