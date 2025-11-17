// Central config so the app is data-driven
window.__APP_DATA__ = {
  links: {
    portfolio: "assets/files/Samuel_Onuoha_Omniverse_Portfolio.pdf",
    repoBuildUSD: "https://github.com/sonuoha/BuildUSD",
    linkedin: "https://www.linkedin.com/in/samuelonuoha",
    email: "mailto:samuel.onuoha@outlook.com",
    homepage: "https://sonuoha.github.io"
  },
  workflows: [
    {
      title: "IFC to USD conversion pipelines",
      summary: "Python + ifcopenshell automation that produces clean USD assets with reusable schemas for attributes, materials, and discipline layers."
    },
    {
      title: "Federated USD scenes",
      summary: "Variants, payload strategies, and time-sampled datasets tuned for on-demand loading across Omniverse Kit, Composer, and live collaboration sessions."
    },
    {
      title: "Geospatial alignment & Cesium context",
      summary: "Precise alignment of BIM models to MGA55/GDA2020 plus Cesium terrain streaming to navigate linear rail and airport precincts with confidence."
    },
    {
      title: "Customer enablement programs",
      summary: "Demo flows, enablement kits, and structured feedback loops that connect customers, product, and engineering for shipping better workflows."
    }
  ],
  projects: [
    {
      title: "IFC to USD Conversion and Federated Scenes",
      body: "End-to-end pipeline producing performant USD assets and a master federated stage. Supports discipline layers, time samples, and asset metadata for operations.",
      chips: ["Python","ifcopenshell","OpenUSD","Omniverse"],
      repo: "https://github.com/sonuoha/BuildUSD",
      pdf: "assets/files/Samuel_Onuoha_Omniverse_Portfolio.pdf"
    },
    {
      title: "Geospatial and Cesium Integration",
      body: "Alignment of BIM with survey coordinates (MGA55/GDA2020), streamed context in Cesium for accurate site visualization and navigation across large-scale assets.",
      chips: ["Cesium","MGA55/GDA2020","GIS"],
      repo: null,
      pdf: null
    }
  ],
  videos: [
    { title: "IFC to USD: Single File", href: "#" },
    { title: "Federated USD: Variants and Payloads", href: "#" },
    { title: "Geospatial: MGA55 plus Cesium", href: "#" }
  ],
  about: {
    bullets: [
      "MSc Global BIM Management - Zigurat",
      "Grad Cert Data Analytics - Deakin",
      "NVIDIA DLI - OpenUSD and Omniverse learning paths"
    ],
    blurb: "Digital engineering lead with 10+ years across rail, airports, and commercial sectors. Hands-on with USD, Omniverse, BIM/VDC, and data analytics. Comfortable working between customers and product teams to remove friction and ship better workflows."
  }
};
