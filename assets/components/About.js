// About component
(function(){
  window.About = function(){
    const data = window.__APP_DATA__;
    const a = data.about;
    const bullets = a.bullets.map(b=>`<li>${b}</li>`).join('');
    return `<section class="section">
      <div class="grid-2">
        <div>
          <h3>About</h3>
          <p>${a.blurb}</p>
          <ul class="bullets">${bullets}</ul>
        </div>
        <div class="card">
          <h4>Downloads</h4>
          <ul class="links">
            <li><a href="${data.links.portfolio}" target="_blank" rel="noopener">1-Page Portfolio</a></li>
            <li><a href="${data.links.repoBuildUSD}" target="_blank" rel="noopener">GitHub &middot; BuildUSD</a></li>
          </ul>
        </div>
      </div>
    </section>`;
  }
})();
