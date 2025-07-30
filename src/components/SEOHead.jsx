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

    // Schema.org structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CSR Industries",
      "description": "Leading motor pump manufacturers in Coimbatore since 1986. Premium water pump motors, submersible pumps, and industrial pumping solutions.",
      "url": "https://csrindustries.com",
      "logo": "https://csrindustries.com/logo.png",
      "foundingDate": "1986",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rajagopal Layout, Krishnarayapuram, Illango Nagar",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641006",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-90474-38316",
        "contactType": "Customer Service",
        "email": "csrindustries1968@gmail.com"
      },
      "sameAs": [
        "https://facebook.com/csrindustries",
        "https://twitter.com/csrindustries",
        "https://linkedin.com/company/csrindustries",
        "https://instagram.com/csrindustries"
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