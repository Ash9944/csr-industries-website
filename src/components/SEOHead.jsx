import React,{ useEffect } from 'react';

// SEO Head Component
const SEOHead = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Schema.org structured data — LocalBusiness (per SEO brief Task 5)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CSR Industries",
      "url": "https://www.csrindustries.in",
      "description": "Water pump manufacturer in Coimbatore specialising in monoblock, submersible and self-priming pumps.",
      "foundingDate": "1986",
      "telephone": "+91-9047438316",
      "email": "csrindustries1968@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rajagopal Layout, Krishnarayapuram, Illango Nagar",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641006",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/share/1GEg3y2KrW/",
        "https://www.instagram.com/csr.industries"
      ]
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, keywords]);

  return null;
};

export default SEOHead;