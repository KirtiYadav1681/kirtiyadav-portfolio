const DESCRIPTION =
  "Kirti Yadav is a full-stack AI engineer. She builds and ships AI-powered products across the frontend, backend, and AI layer, including a recruitment platform serving 175K+ users.";

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
  dek: "I build and ship AI-powered products across the frontend, backend, and AI layer.",
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

const SITE_URL = "https://kirtiyadav.in";

export function getSiteUrl() {
  return SITE_URL;
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
          name: "Crayon Technologies Pvt. Ltd.",
          url: "https://crayon.jobs/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "RGPV University, Indore",
        },
        knowsAbout: [
          "React.js",
          "TypeScript",
          "Next.js",
          "Node.js",
          "Express.js",
          "REST APIs",
          "MongoDB",
          "AWS",
          "OpenAI APIs",
          "WebRTC",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "B.Tech, Computer Science",
          credentialCategory: "degree",
          description: "RGPV University, Indore, 2019–2023. CGPA 8.9/10.",
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
