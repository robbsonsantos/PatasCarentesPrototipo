// Configuração do Tailwind CDN (extraída do <script id="tailwind-config"> original).
// Deve ser carregada DEPOIS do script https://cdn.tailwindcss.com
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-on-surface": "#f9efe7",
        "tertiary-fixed-dim": "#c3c6cf",
        "surface-variant": "#ebe1d9",
        "on-secondary-fixed-variant": "#4b463a",
        "surface-container": "#f6ece4",
        "on-primary": "#ffffff",
        "secondary": "#645e51",
        "surface-bright": "#fff8f4",
        "on-tertiary-fixed": "#181c22",
        "surface-dim": "#e2d8d0",
        "on-secondary-fixed": "#1f1b11",
        "surface": "#fff8f4",
        "on-primary-container": "#daccbb",
        "on-secondary": "#ffffff",
        "primary-container": "#605649",
        "tertiary": "#3d4147",
        "background": "#fff8f4",
        "on-secondary-container": "#6a6456",
        "primary": "#483f33",
        "error-container": "#ffdad6",
        "on-surface-variant": "#4c463e",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "on-tertiary-container": "#cbced7",
        "secondary-container": "#eae2d1",
        "surface-container-low": "#fcf2ea",
        "on-surface": "#1f1b16",
        "primary-fixed": "#efe0cf",
        "surface-container-highest": "#ebe1d9",
        "secondary-fixed-dim": "#cec6b5",
        "tertiary-container": "#54585f",
        "outline": "#7d766d",
        "surface-container-high": "#f1e6de",
        "secondary-fixed": "#eae2d1",
        "tertiary-fixed": "#dfe2eb",
        "inverse-primary": "#d2c4b4",
        "surface-tint": "#675d50",
        "on-tertiary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#cfc5bb",
        "on-error-container": "#93000a",
        "inverse-surface": "#352f2a",
        "primary-fixed-dim": "#d2c4b4",
        "on-tertiary-fixed-variant": "#43474e",
        "on-primary-fixed-variant": "#4f4539",
        "on-background": "#1f1b16",
        "on-primary-fixed": "#221a10"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        xl: "2.5rem",
        lg: "1.5rem",
        xs: "0.25rem",
        sm: "0.5rem",
        gutter: "1.5rem",
        "container-max": "1200px",
        md: "1rem"
      },
      fontFamily: {
        "display-lg": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "label-md": ["Work Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "body-md": ["Work Sans"],
        "body-lg": ["Work Sans"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }]
      }
    }
  }
};
