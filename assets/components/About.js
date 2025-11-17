// About component
(function(){
  window.About = function(){
    const data = window.__APP_DATA__;
    const a = data.about;
    const domainBlocks = a.domains.map((domain, idx)=>`
      <div class="domain-block">
        <p class="story-meta">Domain ${String(idx + 1).padStart(2,'0')}</p>
        <h4>${domain.title}</h4>
        <ul class="bullets">${domain.bullets.map(item=>`<li>${item}</li>`).join('')}</ul>
      </div>
    `).join('');
    const buildList = a.whatIBuild.map(item=>`<li>${item}</li>`).join('');
    return `<section class="section">
      <div class="grid-2">
        <div>
          <h3>${a.introTitle}</h3>
          <p>${a.introLead}</p>
          ${domainBlocks}
        </div>
        <div class="card">
          <h4>Downloads</h4>
          <ul class="links">
            <li><a href="${data.links.portfolio}" target="_blank" rel="noopener">1-Page Portfolio</a></li>
            <li><a href="${data.links.repoBuildUSD}" target="_blank" rel="noopener">GitHub &middot; BuildUSD</a></li>
          </ul>
          <div class="card-divider"></div>
          <h4>What I build</h4>
          <ul class="bullets">${buildList}</ul>
        </div>
      </div>
      <div class="mission-callout">
        <span class="mission-label">Mission</span>
        <p>${a.mission}</p>
      </div>
    </section>`;
  }
})();
