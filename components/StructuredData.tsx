export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "SecureFundsFinance India Pvt Ltd",
    alternateName: "SecureFunds",
    url: "https://securefundsfinance.com",
    logo: "https://securefundsfinance.com/logo.png",
    description:
      "RBI-partnered financial institution providing institutional-grade lending solutions for enterprises and high-net-worth individuals",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bandra Kurla Complex (BKC), Financial District",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400051",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-22-800-SECURE",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/securefundsfinance",
      "https://twitter.com/securefunds",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SecureFundsFinance",
    url: "https://securefundsfinance.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://securefundsfinance.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Enterprise Liquidity",
      provider: {
        "@type": "FinancialService",
        name: "SecureFundsFinance",
      },
      areaServed: "IN",
      description:
        "Customized working capital solutions for mid-to-large scale operations",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Asset Financing",
      provider: {
        "@type": "FinancialService",
        name: "SecureFundsFinance",
      },
      areaServed: "IN",
      description: "High-value property and infrastructure financing",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Personal Credit",
      provider: {
        "@type": "FinancialService",
        name: "SecureFundsFinance",
      },
      areaServed: "IN",
      description: "Exclusive credit lines for high-net-worth individuals",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://securefundsfinance.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
