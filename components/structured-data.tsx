import Script from "next/script"

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shrijal Paudel",
    "givenName": "Shrijal",
    "familyName": "Paudel",
    "jobTitle": "Business Operations Manager",
    "description": "Experienced Business Operations Manager and Strategy Consultant specializing in business model innovation, operations management, and entrepreneurship.",
    "url": "https://shrijalpaudel.com.np",
    "image": "https://shrijalpaudel.com.np/placeholder-user.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lalitpur",
      "addressRegion": "Bagmati",
      "addressCountry": "Nepal"
    },
    "email": "mailto:shrijalp2016@gmail.com",
    "telephone": "+977-986-1611934",
    "sameAs": [
      "https://linkedin.com/in/shrijalpaudel",
      "https://github.com/username"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Nepal Can Group",
      "jobTitle": "Deputy Manager"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Presidential Graduate School",
      "description": "BBA in Entrepreneurship"
    },
    "knowsAbout": [
      "Business Strategy",
      "Operations Management", 
      "Entrepreneurship",
      "Business Development",
      "Leadership",
      "Team Management",
      "Market Research",
      "Financial Management",
      "Negotiation",
      "Event Management"
    ],
    "nationality": "Nepalese",
    "knowsLanguage": ["English", "Nepali"]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nepal Can Group",
    "description": "Leading business development and operations company in Nepal",
    "url": "https://nepalcan.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "Nepal"
    }
  }

  const professionalExperienceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Experience",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Organization",
          "name": "Nepal Can Group",
          "jobTitle": "Deputy Manager",
          "startDate": "2025-11",
          "description": "Leading Business Model Innovation and Leadership initiatives."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Organization", 
          "name": "Flagforge",
          "jobTitle": "Chief of Operations",
          "startDate": "2025-05",
          "description": "Advising on business strategy and operations."
        }
      }
    ]
  }

  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Skills",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "DefinedTerm",
          "name": "Business Strategy",
          "description": "Strategic planning and business model development"
        }
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "item": {
          "@type": "DefinedTerm",
          "name": "Operations Management",
          "description": "Process optimization and operational excellence"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "DefinedTerm",
          "name": "Business Development",
          "description": "Market analysis and business growth strategies"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "DefinedTerm",
          "name": "Entrepreneurship",
          "description": "Startup development and innovation management"
        }
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shrijal Paudel Portfolio",
    "description": "Business Operations Manager and Strategy Consultant Portfolio",
    "url": "https://shrijalpaudel.com.np",
    "author": {
      "@type": "Person",
      "name": "Shrijal Paudel"
    },
    "publisher": {
      "@type": "Person",
      "name": "Shrijal Paudel"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shrijalpaudel.com.np/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="experience-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalExperienceSchema)
        }}
      />
      <Script
        id="skills-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  )
}