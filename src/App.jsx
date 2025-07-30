import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Menu, X, Quote, Play } from 'lucide-react';

const CSRIndustries = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentFAQIndex, setCurrentFAQIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // SEO Meta tags data
  const seoData = {
    title: "CSR Industries | Best Pumps in Coimbatore",
    description: "CSR Industries - Leading motor pump manufacturers in Coimbatore since 1986. Quality water pump motors, submersible pumps, and centrifugal pumps for industrial, agricultural, and residential use.",
    keywords: "motor pumps, water pumps, submersible pumps, Coimbatore, CSR Industries, pump manufacturers",
    author: "CSR Industries",
    canonical: "https://csrindustries.com"
  };

  // Products data
  const products = [
    {
      id: 1,
      name: "Self Priming Monoblock Pump",
      image: "/imgs/selfPriming.png",
      features: [
        "Heavy Duty Motor",
        "High Head & High Discharge",
        "Powder-Coated Aluminum and Casting Body",
        "Brass Forged Impellers",
        "Tolerates Voltage Variations",
        "Low Power Consumption",
        "Built-In Non-Return Valve",
        "Reliability",
        "Carbon Mechanical Seal",
        "Thermal Overload Protector",
        "Rugged Design"
      ],
      description: "Boasts a range of impressive features designed to ensure high performance, durability, and efficiency in various applications."
    },
    {
      id: 2,
      name: "Openwell Submersible Pump",
      image: "/imgs/openwell.png",
      features: [
        "High Head & High Discharge",
        "Continuous Heavy Duty Motor",
        "Stainless Steel Body",
        "Rust-Proof SS Shaft",
        "Genuine Thrust Pad & Bush",
        "Reliability",
        "Low Power Consumption"
      ],
      description: "Engineered for effective and reliable water management with advanced features for optimal performance."
    },
    {
      id: 3,
      name: "Borewell Submersible Pump",
      image: "/imgs/borewell.png",
      features: [
        "Stainless Steel V4 Design",
        "Enhanced Performance",
        "Construction and Maintenance",
        "Innovative Design"
      ],
      description: "Advanced features and benefits, making it a standout choice for domestic water pumping needs with durability and efficiency."
    },
    {
      id: 4,
      name: "V-type Self Priming Pump",
      image: "/imgs/vType.png",
      features: [
        "Heavy Duty Motor",
        "High Head & High Discharge",
        "Powder-Coated Aluminum and Casting Body",
        "Brass Forged Impellers",
        "Tolerates Voltage Variations",
        "Built-In Non-Return Valve",
        "Reliability",
        "Carbon Mechanical Seal"
      ],
      description: "Impressive features designed to ensure high performance, durability, and efficiency in various applications."
    },
    {
      id: 5,
      name: "Centrifugal Monoblock Pump",
      image: "/imgs/centrifugal.png",
      features: [
        "Aluminium Impellers",
        "Powder-Coated Aluminum and Casting Body",
        "High Head & High Discharge",
        "Reliability",
        "Carbon Mechanical Seal"
      ],
      description: "Engineered to offer reliable and efficient performance in a variety of applications."
    }
  ];

  // Services data
  const services = [
    {
      title: "Customized Pump Solutions",
      image: "/imgs/Customized pump solution.png",
      description: "Tailored to fit specific industrial, agricultural, commercial, and residential requirements"
    },
    {
      title: "Quality Assurance",
      image: "/imgs/Quality assurance.png",
      description: "Rigorous testing and quality checks to ensure every product meets our high standards"
    },
    {
      title: "Timely Delivery",
      image: "/imgs/Time delivery.png",
      description: "We understand the importance of timely delivery and strive to ensure your orders reach you promptly"
    },
    {
      title: "Expert Advice",
      image: "/imgs/Expert advice.png",
      description: "We are always available to provide expert advice and guidance to help you make the right choice for your pumping needs"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Which motor pump is best for home usage?",
      answer: "For home usage, a motor pump with moderate power specifications like 1/2 HP or 1 HP is typically sufficient. Our Shelby water pumps in these power ranges offer reliable performance for household needs."
    },
    {
      question: "Which motor pump is best for Agricultural usage?",
      answer: "Agricultural usage often requires higher power. Our openwell submersible pumps, available in 1 HP, 3 HP, and 5 HP 3-phase models, are ideal for agricultural applications due to their high performance and durability."
    },
    {
      question: "Can I use a smaller hose on the pump suction?",
      answer: "While possible, using a smaller hose may restrict water flow, reducing pump efficiency and potentially causing damage. It's best to match hoses to pump specifications for optimal performance and longevity."
    },
    {
      question: "I have a three-story building, which is the best motor to buy?",
      answer: "For a three-story building, consider a motor pump with a higher power, such as our open well submersible pumps with 3 HP or 5 HP 3-phase models. These pumps can efficiently pump water to the upper floors."
    },
    {
      question: "What are the advantages of choosing Shelby water pumps from CSR Industries?",
      answer: "By choosing Shelby water pumps from CSR Industries, you benefit from superior quality, efficiency, and durability at the most competitive prices in Coimbatore."
    },
    {
      question: "What power specifications are available for Shelby water pumps?",
      answer: "Shelby water pumps are available in various power specifications, including 1.5 HP, 1/2 HP, and 1 HP, catering to diverse needs. Additionally, our openwell submersible pumps range from ½ HP to 5 HP in 3-phase models."
    },
    {
      question: "Do you offer customization options for water pumps to suit specific needs?",
      answer: "Yes, CSR Industries provides customizable pump solutions tailored to meet specific requirements, ensuring optimal performance and satisfaction."
    },
    {
      question: "How can I ensure the timely delivery of my water pump order?",
      answer: "At CSR Industries, we prioritize timely delivery, ensuring your water pump orders reach you promptly, and allowing you to proceed with your projects without delays."
    },
    {
      question: "Can I get expert advice on selecting the right water pump for my application?",
      answer: "Absolutely! Our knowledgeable professionals offer expert advice and guidance, helping you select the right water pump tailored to your specific application needs."
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Product carousel navigation
  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // FAQ navigation
  const nextFAQ = () => {
    setCurrentFAQIndex((prev) => (prev + 1) % faqs.length);
  };

  const prevFAQ = () => {
    setCurrentFAQIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Handle contact form
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you soon.');
    setContactForm({ name: '', phone: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-blue-500 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO Head */}
      <head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={seoData.canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CSR Industries",
            "description": seoData.description,
            "url": seoData.canonical,
            "telephone": "+91 9047438316",
            "email": "csrindustries1968@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rajagopal Layout, Krishnarayapuram, Illango Nagar",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "postalCode": "641006",
              "addressCountry": "IN"
            }
          })}
        </script>
      </head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-40 border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="/imgs/CC_20240708_002104.png" alt="CSR Industries Logo" className="h-12 w-auto" />
                <div className="hidden md:flex items-center text-blue-400">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9047438316
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
                <a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a>
                <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>

              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                className="lg:hidden p-2"
              >
                {sideMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {sideMenuOpen && (
            <div className="lg:hidden bg-gray-800 border-t border-gray-700">
              <div className="container mx-auto px-4 py-4 space-y-4">
                <a href="#home" className="block hover:text-blue-400 transition-colors" onClick={() => setSideMenuOpen(false)}>Home</a>
                <a href="#products" className="block hover:text-blue-400 transition-colors" onClick={() => setSideMenuOpen(false)}>Products</a>
                <a href="#reviews" className="block hover:text-blue-400 transition-colors" onClick={() => setSideMenuOpen(false)}>Reviews</a>
                <a href="#faq" className="block hover:text-blue-400 transition-colors" onClick={() => setSideMenuOpen(false)}>FAQ</a>
                <a href="#contact" className="block hover:text-blue-400 transition-colors" onClick={() => setSideMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  CSR <span className="block text-blue-400">Industries.</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Welcome to CSR Industries, a leader among motor pump manufacturers in Coimbatore. 
                  With decades of precision engineering experience since 1986, we excel in crafting 
                  superior water pump motors in India, setting the benchmark for quality and performance.
                </p>
                <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
              <div className="relative">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/images/IMG_20240724_200058.jpg" 
                    alt="CSR Industries Water Pump" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="text-blue-400">Creations</span>
              </h2>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentProductIndex * (100 / Math.min(products.length, 3))}%)`
                  }}
                >
                  {products.map((product, index) => (
                    <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                      <div className="bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-64 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                          <button 
                            onClick={() => setActiveModal(product)}
                            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevProduct}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextProduct}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Check our numbers <span className="block">over the past few years.</span>
                </h3>
                <p className="text-gray-300 text-lg">
                  Our commitment to excellence is reflected in our impressive track record 
                  of delivering quality products and services to our valued customers.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">456</div>
                  <div className="text-gray-300">Products Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">599</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">780</div>
                  <div className="text-gray-300">Hours Worked</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Image */}
        <section className="py-0">
          <div className="relative h-96 overflow-hidden">
            <img 
              src="/imgs/1722507399190-01.jpeg" 
              alt="CSR Industries Overview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </section>

        {/* Services Section */}
        <section id="reviews" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                At CSR Industries
                <span className="block text-blue-400">We prioritize customer satisfaction by offering a range of value-added services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center bg-gray-700 p-6 rounded-2xl hover:bg-gray-600 transition-colors">
                  <Quote className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-blue-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">FAQ's</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-2xl p-8 text-center min-h-[400px] flex flex-col justify-center">
                <div className="mb-8">
                  <p className="text-xl mb-6">{faqs[currentFAQIndex].question}</p>
                  <h3 className="text-blue-400 text-lg leading-relaxed">
                    {faqs[currentFAQIndex].answer}
                  </h3>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevFAQ}
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextFAQ}
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Questions? <span className="block text-blue-400">Let's Get In Touch</span>
                </h2>
                
                <div onSubmit={handleContactSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact No"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Type Your Message Here"
                    rows={6}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none resize-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleContactSubmit}
                    className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-full font-semibold transition-colors"
                  >
                    Submit Information
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold">Store Location</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">
                        Rajagopal Layout, Krishnarayapuram, Illango Nagar, Coimbatore, Tamil Nadu 641006
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <p className="text-gray-300">+91 90474 38316</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <p className="text-gray-300">csrindustries1968@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                    <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                    <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                    <Instagram className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{activeModal.name}</h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 hover:bg-gray-700 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={activeModal.image} 
                      alt={activeModal.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-6">{activeModal.description}</p>
                    <h4 className="text-xl font-semibold mb-4">Features:</h4>
                    <ul className="space-y-2">
                      {activeModal.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-lg transition-colors z-40"
        >
          <ChevronRight className="w-6 h-6 -rotate-90" />
        </button>

        {/* Footer */}
        <footer className="bg-gray-900 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2023 CSR Industries. All rights reserved. | Made with ❤️ in Coimbatore
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CSRIndustries;