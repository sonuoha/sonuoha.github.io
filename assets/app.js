// ====== CONFIGURABLE DATA ======
const DATA = {
  githubUser: "sonuoha", // ← your GitHub handle
  cvPdfUrl: "#",          // e.g. "assets/Samuel_Onuoha_CV.pdf"
  linkedInUrl: "https://www.linkedin.com/in/", // add your slug
  companyUrl: "https://tanech.com.au",
  experience: [
    {
      role: "Delivery Manager & Digital Engineering Lead",
      org: "(Consulting) – AECO",
      time: "2022 – Present",
      bullets: [
        "Led BIM/VDC delivery and asset-information pipelines across rail and aviation projects (AIS v3, SRLA).",
        "Designed IFC → USD pipeline for Omniverse; enabled selective payload loading and discipline layering.",
        "Instituted knowledge-share program improving idea diffusion and team velocity."
      ]
    },
    {
      role: "Senior Digital Engineer / BIM Manager",
      org: "Major VIC Infrastructure",
      time: "2018 – 2022",
      bullets: [
        "Drove asset handover readiness: data validation, Uniclass coding, DEMP/BMP authoring.",
        "Built dashboards (Polars → Atoti/Power BI) for QA and model-to-asset traceability.",
        "Coordinated 4D/5D deliverables and digital-twin readiness."
      ]
    },
    {
      role: "Founder",
      org: "Tanech Pty Ltd",
      time: "2024 – Present",
      bullets: [
        "Boutique digital engineering consultancy: BIM/VDC, analytics, digital twins.",
        "R&D on USD-centric asset-twin patterns (variants, instancing, time-sampled updates)."
      ]
    }
  ],
  research: [
    {
      title: "IFC → OpenUSD Conversion Patterns for AECO",
      summary: "Comparing custom IfcOpenShell pipelines vs Omniverse CAD Converter; strategies for materials, discipline layers, and payloading.",
      tags: ["IFC","OpenUSD","Omniverse"],
      links: [
        {label: "Repo", url: "https://github.com/sonuoha/usd_for_infratsructure"},
        {label: "Notes", url: "https://github.com/sonuoha"}
      ]
    },
    {
      title: "Asset Information Schema (AIS v3) Validation with Polars",
      summary: "High‑performance data validation and enrichment pipeline for SRLA handover attributes.",
      tags: ["Polars","Data Quality","SRLA"],
      links: [
        {label: "Repo", url: "https://github.com/sonuoha"}
      ]
    },
    {
      title: "USD Variants & Time Samples for Lifecycle Ops",
      summary: "Representing maintenance events and retrofits via time‑sampled geometry & metadata.",
      tags: ["OpenUSD","Digital Twin","Lifecycle"],
      links: [
        {label: "Concept", url: "https://openusd.org"}
      ]
    }
  ],
  featuredRepos: [
    {
      name: "usd_for_infratsructure",
      description: "Prototype IFC → USD pipeline for infrastructure models.",
      url: "https://github.com/sonuoha/usd_for_infratsructure",
      topics: ["openusd","ifc","aeco"]
    },
    {
      name: "aeco-ais-polars",
      description: "Polars-based AIS v3 validator (example repo – rename).",
      url: "https://github.com/sonuoha",
      topics: ["polars","data-validation","aeco"]
    }
  ]
};

// ====== HELPERS ======
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
function el(tag, attrs={}, children=[]) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==="class") node.className = v; else if(k==="html") node.innerHTML=v; else node.setAttribute(k,v);
  });
  children.forEach(c => node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
  return node;
}

// ====== RENDERERS ======
function renderExperience(){
  const xpRoot = document.querySelector("#xp-list");
  if(!xpRoot) return;
  DATA.experience.forEach(xp => {
    const li = el("li", {class:"t-item"}, [
      el("div", {class:"t-role"}, [document.createTextNode(`${xp.role}`)]),
      el("div", {class:"meta"}, [document.createTextNode(`${xp.org} • ${xp.time}`)]),
      el("ul", {}, xp.bullets.map(b => el("li", {}, [b])))
    ]);
    xpRoot.appendChild(li);
  });
}

function renderResearch(){
  const rRoot = document.querySelector("#research-grid");
  if(!rRoot) return;
  DATA.research.forEach(r => {
    const links = el("p", {}, r.links.map((lnk,i)=>{
      const a = el("a", {href:lnk.url, target:"_blank", rel:"noopener"}, [lnk.label]);
      if(i < r.links.length-1){ return [a, document.createTextNode(" · ")]; }
      return [a];
    }).flat());
    const tags = el("p", {}, r.tags.map(t=> el("span", {class:"tag"}, [t])));
    const card = el("article", {class:"card md-6"}, [
      el("h3", {}, [r.title]),
      el("p", {}, [r.summary]),
      tags,
      links
    ]);
    rRoot.appendChild(card);
  });
}

function renderRepos(){
  const repoRoot = document.querySelector("#repo-grid");
  if(!repoRoot) return;
  DATA.featuredRepos.forEach(repo => {
    const topics = el("p", {}, (repo.topics||[]).map(t=> el("span", {class:"tag"}, [t])));
    const card = el("article", {class:"card md-4"}, [
      el("h3", {}, [repo.name]),
      el("p", {}, [repo.description||""]),
      topics,
      el("p", {}, [el("a", {href:repo.url, target:"_blank", rel:"noopener"}, ["View on GitHub →"])])
    ]);
    repoRoot.appendChild(card);
  });
}

function wireMeta(){
  const gh = document.querySelector("#gh-handle");
  if(gh) gh.href = `https://github.com/${DATA.githubUser}`;
  const cv = document.querySelector("#cv-link");
  if(cv) cv.href = DATA.cvPdfUrl;
  const li = document.querySelector("#li-link");
  if(li) li.href = DATA.linkedInUrl;
  const co = document.querySelector("#co-link");
  if(co) co.href = DATA.companyUrl;
  const yr = document.querySelector("#year");
  if(yr) yr.textContent = new Date().getFullYear();
}

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  renderExperience();
  renderResearch();
  renderRepos();
  wireMeta();
});
