import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, CheckCircle, ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../../websiteProducts.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Friendly descriptions for product pages
const productMeta = {
  'self-priming-monoblock-pump': {
    metaDescription: 'CSR Industries Self Priming Monoblock Pump — high head, high discharge, powder-coated aluminum body with brass forged impellers. Available in ½ HP and 1 HP. Contact for pricing.',
    intro: 'The Self Priming Monoblock Pump from CSR Industries is a robust single-unit pump that combines the motor and pump in one compact, efficient package. Engineered for high head and high discharge performance, it features a powder-coated aluminium body and precision brass forged impellers — making it the go-to choice for domestic and commercial water supply in Coimbatore.',
    applications: ['Domestic water supply for homes and apartments', 'Multi-storey building water supply', 'Garden and landscape irrigation', 'Small commercial establishments'],
  },
  'openwell-submersible-pump': {
    metaDescription: 'CSR Industries Openwell Submersible Pump — stainless steel body, rust-proof SS shaft, low power consumption. Ideal for open well water extraction. Contact for bulk pricing.',
    intro: 'Built for durability in open well environments, the Openwell Submersible Pump by CSR Industries features a fully stainless steel body and rust-proof shaft. Designed for continuous heavy-duty operation, it delivers high head and high discharge while consuming less power — ideal for homes and farms drawing water from open wells.',
    applications: ['Open well water extraction', 'Agricultural and farm irrigation', 'Domestic water supply from wells', 'Multi-storey building sump filling'],
  },
  'dms-slow-speed-pump': {
    metaDescription: 'CSR Industries DMS Slow Speed Pump — extreme suction performer with brass forged impeller, heavy duty motor, and voltage variation tolerance. Available in ½ HP and 1 HP.',
    intro: 'The DMS Slow Speed Pump is engineered for applications demanding extreme suction performance and voltage tolerance. Its slow-speed motor design reduces wear and extends service life, while the brass forged impeller ensures consistent high-head discharge. A reliable choice for homes with fluctuating power supply.',
    applications: ['Domestic water supply with low-voltage tolerance', 'Water transfer in areas with power fluctuation', 'Ground-floor to overhead tank pumping', 'Agricultural water supply'],
  },
  'v-type-self-priming-pump': {
    metaDescription: 'CSR Industries V-Type Self Priming Pump — heavy duty motor, 130 feet head, carbon mechanical seal, voltage variation tolerance. Compact ½ HP model for domestic use.',
    intro: 'The V-Type Self Priming Pump delivers an impressive 130 feet of head from a compact ½ HP motor, making it one of the highest-head self-priming pumps in its class. The carbon mechanical seal prevents leakage and ensures long operational life, while its self-priming capability means no manual priming before every use.',
    applications: ['High-head domestic water supply', 'Multi-floor water transfer', 'Water supply for elevated tanks', 'Irrigation in sloped terrain'],
  },
  'centrifugal-monoblock-pump': {
    metaDescription: 'CSR Industries Centrifugal Monoblock Pump — high flow rate, powder-coated body, aluminum impellers, carbon mechanical seal. Available in ½ HP and 1 HP. Ideal for high-volume transfer.',
    intro: 'The Centrifugal Monoblock Pump from CSR Industries is optimised for high-volume water transfer. With aluminium impellers and a carbon mechanical seal housed in a powder-coated body, it delivers exceptional flow rates — up to 7590 LPH — making it ideal for applications that demand volume over head.',
    applications: ['High-volume domestic water supply', 'Swimming pool and water feature circulation', 'Flood control and drainage', 'Agricultural irrigation with large field coverage', 'Industrial water circulation'],
  },
  'borewell-submersible-pump': {
    metaDescription: 'CSR Industries Borewell Submersible Pump — stainless steel V4 design, available in ½ HP to 2 HP. Engineered for deep borewell water extraction. Contact for pricing.',
    intro: 'The Borewell Submersible Pump by CSR Industries uses a precision-engineered stainless steel V4 design for reliable deep-well water extraction. Suitable for 4-inch and 6-inch borewells, it delivers consistent performance even at significant depths. Available in four HP options to match borewell depth and water level requirements.',
    applications: ['Deep borewell water extraction', 'Multi-storey building water supply from borewell', 'Agricultural borewell irrigation', 'Industrial borewell water supply', 'Community water supply systems'],
  },
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#0a0f1e' }}>
        <p className="text-white text-xl mb-4">Product not found.</p>
        <Link to="/" className="text-blue-400 hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const meta = productMeta[slug] || {};
  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in your ${product.name}. Please share pricing and availability.`);

  // Prev / Next navigation
  const currentIndex = products.findIndex(p => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{`${product.name} | CSR Industries Coimbatore`}</title>
        <meta name="description" content={meta.metaDescription || `${product.name} by CSR Industries, Coimbatore. ${product.features?.join(', ')}.`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "image": [`https://www.csrindustries.in/${product.image}`],
          "description": meta.metaDescription || product.description,
          "brand": { "@type": "Brand", "name": "CSR Industries" },
          "offers": {
            "@type": "Offer",
            "url": `https://www.csrindustries.in/products/${slug}`,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b2a 100%)' }}>
        <Header />

        {/* Breadcrumb */}
        <div className="pt-24 pb-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-blue-400 transition-colors">Products</button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-300">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl scale-105 pointer-events-none"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square max-w-md mx-auto lg:mx-0">
                  <img
                    src={`/${product.image}`}
                    alt={`${product.name} - CSR Industries Coimbatore`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/50 to-transparent"></div>
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-400/30">
                    CSR Industries
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-xs text-blue-300">
                  Since 1986 · Made in Coimbatore
                </div>
                <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">{product.name}</h1>
                {meta.intro && <p className="text-gray-300 text-sm leading-relaxed">{meta.intro}</p>}

                {/* Specs table */}
                {product.specifications && product.specifications.specs?.length > 0 && (
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr style={{ background: 'rgba(59,130,246,0.1)' }} className="border-b border-white/10">
                          <th className="px-4 py-3 text-left font-semibold text-blue-300 text-xs uppercase tracking-wider">Spec</th>
                          {product.specifications.models?.map(m => (
                            <th key={m} className="px-4 py-3 text-center font-semibold text-gray-200">{m}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {product.specifications.specs.map((spec, i) => (
                          <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                            <td className="px-4 py-3 text-gray-400 font-medium text-xs border-r border-white/10">{spec.label}</td>
                            {spec.values.map((v, vi) => (
                              <td key={vi} className="px-4 py-3 text-gray-100 text-center font-semibold">{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href="tel:+919047438316"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
                  >
                    <Phone className="w-4 h-4" />
                    Call for Pricing
                  </a>
                  <a
                    href={`https://wa.me/919047438316?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Enquiry
                  </a>
                </div>
                <p className="text-xs text-gray-500">Bulk orders welcome · Custom configurations available on request</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features + Applications */}
        {(product.features?.length > 0 || meta.applications?.length > 0) && (
          <section className="py-12 border-t border-white/5">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {product.features?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl font-bold text-white mb-5">Key Features</h2>
                    <div className="space-y-3">
                      {product.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 border border-white/5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {meta.applications?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h2 className="text-xl font-bold text-white mb-5">Applications</h2>
                    <div className="space-y-3">
                      {meta.applications.map((a, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl px-4 py-3 border border-white/5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-200 text-sm">{a}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-12 border-t border-white/5">
          <div className="container mx-auto px-4 text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-2">Ready to order?</h2>
            <p className="text-gray-400 text-sm mb-6">Call us or send a WhatsApp message — we respond within minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919047438316"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <Phone className="w-4 h-4" />
                +91 90474 38316
              </a>
              <a
                href={`https://wa.me/919047438316?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        {(prevProduct || nextProduct) && (
          <section className="py-8 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl mx-auto">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 text-center">More Products</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                {prevProduct ? (
                  <Link
                    to={`/products/${prevProduct.slug}`}
                    className="flex items-center gap-3 group rounded-2xl border border-white/10 hover:border-blue-500/30 px-5 py-4 transition-all duration-300 flex-1"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Previous</p>
                      <p className="text-white font-semibold text-sm">{prevProduct.name}</p>
                    </div>
                  </Link>
                ) : <div className="flex-1" />}
                {nextProduct ? (
                  <Link
                    to={`/products/${nextProduct.slug}`}
                    className="flex items-center gap-3 group rounded-2xl border border-white/10 hover:border-blue-500/30 px-5 py-4 transition-all duration-300 flex-1 justify-end text-right"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <div>
                      <p className="text-xs text-gray-500">Next</p>
                      <p className="text-white font-semibold text-sm">{nextProduct.name}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                ) : <div className="flex-1" />}
              </div>
            </div>
          </section>
        )}

        <div className="pb-8">
          <div className="container mx-auto px-4 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetailPage;
