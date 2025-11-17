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
      title: "Asset twin playbooks",
      summary: "USD asset templates that connect design, commissioning, and live telemetry so operators inherit a continuously updated digital thread for rail, aviation, and industrial assets."
    },
    {
      title: "Delivery control rooms",
      summary: "Omniverse-enabled coordination spaces where design, construction sequencing, and delivery KPIs land in one federated stage with governance baked into variants and payload policy."
    },
    {
      title: "Geospatial + systems integration",
      summary: "Geodesy, Cesium terrain, and operational data bus integrations that keep spatial context, simulation data, and maintenance records aligned down to centimeter precision."
    },
    {
      title: "Enablement + platform ops",
      summary: "Frameworks for training, support, and DevRel feedback loops that turn complex Omniverse proofs into repeatable services for Digital Project Delivery teams."
    }
  ],
  projects: [
    {
      title: "BuildUSD & Asset Ops Toolchain",
      body: "Reference implementation that ingests IFC, reality capture, and OT data into USD, then packages asset views for operations, maintenance, and immersive training.",
      chips: ["Python","ifcopenshell","OpenUSD","Omniverse"],
      repo: "https://github.com/sonuoha/BuildUSD",
      pdf: "assets/files/Samuel_Onuoha_Omniverse_Portfolio.pdf"
    },
    {
      title: "Geospatial Operations Fabric",
      body: "End-to-end alignment of BIM, SCADA alarms, and Cesium tiles so asset operators can interrogate incidents spatially, run playbooks, and push updates back to delivery teams.",
      chips: ["Cesium","MGA55/GDA2020","IoT"],
      repo: null,
      pdf: null
    },
    {
      title: "Digital Project Delivery Insights",
      body: "Dashboards, AI-assisted reviews, and USD snapshots that give leadership a living record of delivery KPIs, clashes, handover readiness, and asset readiness in one workspace.",
      chips: ["Analytics","USD","AI-Assisted QA"],
      repo: null,
      pdf: "assets/files/Samuel_Onuoha_Omniverse_Portfolio.pdf"
    }
  ],
  videos: [
    { title: "IFC to USD: Single File", href: "#" },
    { title: "Federated USD: Variants and Payloads", href: "#" },
    { title: "Geospatial: MGA55 plus Cesium", href: "#" }
  ],
  about: {
    introTitle: "Hi, I'm Samuel",
    introLead: "I build unified digital systems that connect engineering, automation, data, and simulation.",
    domains: [
      {
        title: "Digital Engineering & Information Models",
        bullets: [
          "BIM/VDC delivery across Revit, Navisworks, Civil 3D",
          "IFC/ifcopenshell automation aligned to ISO 19650 data standards",
          "OpenUSD + Omniverse pipelines (IFC → USD) and federated scenes",
          "Geometry automation with OpenCascade",
          "Geospatial alignment and digital twin governance"
        ]
      },
      {
        title: "Data Engineering & Analytics",
        bullets: [
          "Python (polars, pandas), SQL, Databricks, REST integrations",
          "Metadata modeling, data quality scoring, validation engines",
          "Power BI dashboards for delivery + operations KPIs",
          "ETL/ELT pipelines that blend BIM, GIS, IoT, and ERP systems"
        ]
      },
      {
        title: "IIoT, Automation & Operational Technologies",
        bullets: [
          `Certified KNX and LonTalk/LonWorks engineer (<a href="https://www.lonmark.org/technology/certification/certified-professionals-list/" target="_blank" rel="noopener">LonMark Certified Professional</a>) with BACnet experience`,
          "Controls + building automation integration into OT/IT flows",
          "Sensor and telemetry ingestion patterns that land in digital twins",
          "Edge-to-cloud data strategies for operations intelligence"
        ]
      },
      {
        title: "Multimethod Simulation (AnyLogic)",
        bullets: [
          "Agent-based, discrete event, system dynamics, and hybrid simulations",
          "Operations modeling for logistics, risk, pedestrian flow",
          "Scenario analysis and predictive behavior modeling that loops back into delivery"
        ]
      }
    ],
    whatIBuild: [
      "High-performance IFC → USD converters",
      "Federated, geospatially aligned digital twins",
      "Data engines connecting BIM/GIS/IoT/ERP systems",
      "OT–IT integration pipelines for operational intelligence",
      "AnyLogic simulation models for planning & optimization",
      "Geometry processing workflows powered by OpenCascade"
    ],
    mission: "Connect the physical environment, its digital model, its data, and its behavior — into one unified system for better decisions and better operations."
  }
};
