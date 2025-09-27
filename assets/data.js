// Central config so the app is data-driven
window.__APP_DATA__ = {
  links: {
    resumeUS: "assets/files/Samuel_Onuoha_Resume.pdf",
    resumeA4: "assets/files/Samuel_Onuoha_Resume.pdf",
    portfolio: "Samuel_Onuoha_Omniverse_Portfolio.pdf",
    repoIFCUSD: "https://github.com/sonuoha/usd_for_infratsructure",
    linkedin: "https://www.linkedin.com/in/samuelonuoha",
    email: "mailto:samuel.onuoha@outlook.com",
    homepage: "https://sonuoha.github.io"
  },
  workflows: [
    "IFC → USD pipelines (Python + ifcopenshell + USD APIs) with reusable schemas for attributes/materials.",
    "Federated USD scenes using variants and payload strategies for scalable, on-demand loading in Omniverse Composer/Kit.",
    "Geospatial alignment of BIM models (MGA55/GDA2020) and Cesium context streaming for linear rail and airport precincts.",
    "Customer enablement: demo flows, training assets, and structured feedback to product/engineering."
  ],
  projects: [
    {
      title: "IFC→USD Conversion & Federated Scenes",
      body: "End‑to‑end pipeline producing performant USD assets and a master federated stage. Supports discipline layers, time‑samples, and asset metadata for operations.",
      chips: ["Python","ifcopenshell","OpenUSD","Omniverse"],
      repo: "https://github.com/sonuoha/usd_for_infratsructure",
      pdf: "Samuel_Onuoha_Omniverse_Portfolio.pdf"
    },
    {
      title: "Geospatial & Cesium Integration",
      body: "Alignment of BIM with survey coordinates (MGA55/GDA2020), streamed context in Cesium for accurate site visualization and navigation across large‑scale assets.",
      chips: ["Cesium","MGA55/GDA2020","GIS"],
      repo: null,
      pdf: null
    }
  ],
  videos: [
    { title: "IFC→USD: Single File", href: "#" },
    { title: "Federated USD: Variants & Payloads", href: "#" },
    { title: "Geospatial: MGA55 + Cesium", href: "#" }
  ],
  about: {
    bullets: [
      "MSc Global BIM Management — Zigurat",
      "Grad Cert Data Analytics — Deakin",
      "NVIDIA DLI — OpenUSD & Omniverse learning paths"
    ],
    blurb: "Digital Engineering lead with 10+ years across rail, airports, and commercial sectors. Hands-on with USD/Omniverse, BIM/VDC, and data analytics. Comfortable working between customers and product/engineering to remove friction and ship better workflows."
  }
};
