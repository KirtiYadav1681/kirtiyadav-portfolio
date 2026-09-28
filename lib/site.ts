const DESCRIPTION =
  "Kirti Yadav is a full-stack AI engineer. She builds production AI products — Crayon’s hiring workflows, and The Bridge as lead frontend.";

export const site = {
  name: "Kirti Yadav",
  title: "Full-Stack AI Engineer",
  documentTitle: "Kirti Yadav — Full-Stack AI Engineer",
  description: DESCRIPTION,
  email: "yadavkirti7745@gmail.com",
  phoneDisplay: "+91 62665 58859",
  phoneHref: "tel:+916266558859",
  location: "Indore, India",
  linkedin: "https://linkedin.com/in/kirti-yadav1681",
  github: "https://github.com/KirtiYadav1681",
  dek: "I build AI-powered products and the full-stack systems behind them.",
  resumes: {
    fullStack: {
      href: "/resume/Kirti_Yadav_3Yr_Exp_Full-Stack.pdf",
      label: "Full-stack resume",
      shortLabel: "Resume",
    },
    ai: {
      href: "/resume/Kirti_Yadav_AI_Engineer.pdf",
      label: "AI Engineer resume",
    },
  },
} as const;

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
] as const;

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function getJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.name,
        jobTitle: site.title,
        description: site.description,
        url,
        image: `${url}/images/kirti-hero-new.png`,
        email: `mailto:${site.email}`,
        telephone: "+91-62665-58859",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressCountry: "IN",
        },
        sameAs: [site.linkedin, site.github],
        affiliation: {
          "@type": "Organization",
          name: "Crayon Jobs Platform",
          url: "https://crayon.jobs/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "RGPV University, Indore",
        },
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "LLM integration",
          "Prompt engineering",
          "RAG",
          "Embeddings",
          "Vector search",
          "MongoDB",
          "AWS",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Full Stack AI Engineer",
          credentialCategory: "certification",
          description:
            "AI engineering, Python, LLM applications, RAG, vector databases, embeddings, AI agents, and production AI workflows.",
        },
      },
      {
        "@type": "WebSite",
        name: site.documentTitle,
        url,
        description: site.description,
        author: {
          "@type": "Person",
          name: site.name,
        },
      },
    ],
  };
}
