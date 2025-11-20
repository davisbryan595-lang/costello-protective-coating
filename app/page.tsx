"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronDown, Phone, Mail, MapPin, Droplet, Palette, Shield, Zap, Award, Users, X } from "lucide-react"

interface GalleryItem {
  title: string
  description: string
  imageUrl: string
}

interface ModalImage {
  src: string
  alt: string
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState<ModalImage | null>(null)

  useEffect(() => {
    const testimonials = [
      {
        text: "Costello transformed our home's exterior completely. The attention to detail and professionalism exceeded our expectations.",
        client: "— Michael L., Lafayette",
        rating: 5,
      },
      {
        text: "Best investment we've made for our property's protection. The coating has held up perfectly through Louisiana summers.",
        client: "— Sarah K., Acadiana",
        rating: 5,
      },
      {
        text: "Professional team, exceptional results. They made the entire process seamless and stress-free from start to finish.",
        client: "— James P., Baton Rouge",
        rating: 5,
      },
      {
        text: "Outstanding service! The before and after difference is remarkable. Highly recommend Costello to anyone.",
        client: "— Jennifer T., New Iberia",
        rating: 5,
      },
    ]

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", phone: "", email: "", service: "", message: "" })
  }

  const testimonials = [
    {
      text: "Costello transformed our home's exterior completely. The attention to detail and professionalism exceeded our expectations.",
      client: "— Michael L., Lafayette",
      rating: 5,
    },
    {
      text: "Best investment we've made for our property's protection. The coating has held up perfectly through Louisiana summers.",
      client: "— Sarah K., Acadiana",
      rating: 5,
    },
    {
      text: "Professional team, exceptional results. They made the entire process seamless and stress-free from start to finish.",
      client: "— James P., Baton Rouge",
      rating: 5,
    },
    {
      text: "Outstanding service! The before and after difference is remarkable. Highly recommend Costello to anyone.",
      client: "— Jennifer T., New Iberia",
      rating: 5,
    },
  ]

  const galleryItems: GalleryItem[] = [
    {
      title: "Pressure Washing & Restoration",
      description: "Professional high-pressure cleaning and restoration services to bring weathered surfaces back to life. Our team uses state-of-the-art equipment to safely clean driveways, sidewalks, decks, and building exteriors.",
      imageUrl: "https://images.pexels.com/photos/14023343/pexels-photo-14023343.jpeg",
    },
    {
      title: "Roof Preservation & Coatings",
      description: "Advanced coating systems that extend roof life and enhance protection through Louisiana's challenging climate. Our specialized roof treatments prevent algae growth, UV damage, and extend the life of your roof by years.",
      imageUrl: "https://images.pexels.com/photos/34023076/pexels-photo-34023076.jpeg",
    },
    {
      title: "Premium Exterior Painting",
      description: "High-quality exterior finishes and accent colors designed to withstand Louisiana's weather conditions. Our painters deliver flawless results with premium paint systems that protect and beautify your property.",
      imageUrl: "https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg",
    },
    {
      title: "Driveway & Concrete Sealing",
      description: "Protect your investment with professional concrete sealing and restoration. Our sealers prevent cracking, discoloration, and extend the life of your concrete surfaces while enhancing their appearance.",
      imageUrl: "https://images.pexels.com/photos/17792954/pexels-photo-17792954.jpeg",
    },
    {
      title: "Metal Surface Protection",
      description: "Specialized coatings for metal surfaces including railings, gates, and structural elements. Our metal protection systems prevent rust and corrosion while maintaining a polished, professional appearance.",
      imageUrl: "https://images.pexels.com/photos/13672876/pexels-photo-13672876.jpeg",
    },
    {
      title: "Commercial Building Services",
      description: "Comprehensive exterior maintenance and protection for commercial properties. From storefront preparation to full-scale industrial coating applications, we deliver professional excellence.",
      imageUrl: "https://images.pexels.com/photos/11213206/pexels-photo-11213206.jpeg",
    },
  ]

  return (
    <main className="bg-white text-slate-900">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-500 z-50 shadow-lg shadow-blue-500/50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Header */}
      <header className="sticky top-1 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 drop-shadow-md hover:drop-shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4190207b58b5435387c7048034219577%2Fe59e9fce6e5a4081b7f0d28a2c01f6be?format=webp&width=800"
              alt="Costello Protective Coatings Logo"
              className="h-20 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#services" className="text-slate-700 hover:text-blue-700 transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-slate-700 hover:text-blue-700 transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-700 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-700 transition-colors">
              Contact
            </a>
          </nav>
          <button className="hidden md:block bg-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition-colors">
            Get Estimate
          </button>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/luxury-house-exterior-protection-coatings.jpg')`,
          }}
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-slate-900/80" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative w-72 h-24 drop-shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4190207b58b5435387c7048034219577%2Fe59e9fce6e5a4081b7f0d28a2c01f6be?format=webp&width=800"
                alt="Costello Protective Coatings"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Premium Protective Coatings
          </h1>

          {/* Decorative line */}
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto mb-8 shadow-xl shadow-blue-400/50 rounded-full" />

          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Professional protective coatings, pressure washing, and restoration services for Louisiana properties.
            Serving Lafayette and surrounding areas with excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group w-full sm:w-auto">
              <span className="relative z-10">Get Free Estimate</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 z-20 animate-bounce">
          <ChevronDown className="text-blue-300" size={40} strokeWidth={1} />
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-20 left-4 right-4 grid grid-cols-3 gap-4 max-w-md mx-auto z-20">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-black text-white">500+</div>
            <div className="text-sm text-blue-100">Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-black text-white">15+</div>
            <div className="text-sm text-blue-100">Years</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-black text-white">100%</div>
            <div className="text-sm text-blue-100">Satisfied</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Why Choose Costello?</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mb-8 rounded-full" />

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With over 15 years of experience protecting Louisiana properties, Costello Protective Coatings combines
                premium materials with expert craftsmanship. Our proven coating systems withstand the region's
                challenging climate while maintaining their pristine appearance.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Shield className="text-blue-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-black text-slate-900 mb-1">Premium Materials</h3>
                    <p className="text-slate-600">Industry-leading coatings engineered for durability</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Zap className="text-blue-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-black text-slate-900 mb-1">Expert Application</h3>
                    <p className="text-slate-600">Trained professionals ensuring perfect results</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Award className="text-blue-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-black text-slate-900 mb-1">Full Warranty</h3>
                    <p className="text-slate-600">Comprehensive coverage on all work</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <img
                src="/professional-coating-team-working-on-exterior.jpg"
                alt="Costello team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="font-black text-xl">Expert Craftsmanship</p>
                <p className="text-blue-100">Professional results every time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Background */}
      <section id="services" className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/industrial-coating-protection-premium.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-slate-900/90" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Our Services</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto shadow-lg shadow-blue-400/50 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Droplet className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Pressure Washing & Restoration</h3>
              <p className="text-blue-100 leading-relaxed">
                Professional high-pressure cleaning and restoration services to bring weathered surfaces back to life.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Roof Preservation & Coatings</h3>
              <p className="text-blue-100 leading-relaxed">
                Advanced coating systems that extend roof life and enhance protection through Louisiana's challenging
                climate.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Premium Exterior Painting</h3>
              <p className="text-blue-100 leading-relaxed">
                High-quality exterior finishes and accent colors designed to withstand Louisiana's weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 mb-4">Our Products & Services</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto shadow-lg shadow-blue-500/40 rounded-full" />
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              Explore our comprehensive range of protective coating services and solutions designed for Louisiana properties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group">
                <button
                  onClick={() => setPreviewImage({ src: item.imageUrl, alt: item.title })}
                  className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 h-80 w-full cursor-pointer mb-4"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold">Click to Preview</span>
                  </div>
                </button>
                <div className="px-2">
                  <h3 className="text-xl font-black text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/happy-customers-testimonials-success.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-4">Loved by Our Customers</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto mb-16 shadow-lg shadow-blue-400/50 rounded-full" />

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
            {/* Star rating */}
            <div className="flex justify-center gap-1 mb-8">
              {Array(testimonials[currentTestimonial].rating)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
            </div>

            {/* Quotation marks */}
            <span className="text-8xl text-blue-400/20 font-serif leading-none">{"„"}</span>

            <p className="text-2xl md:text-3xl text-white mb-8 leading-relaxed italic font-light -mt-8">
              {testimonials[currentTestimonial].text}
            </p>
            <p className="text-xl font-bold text-blue-300">{testimonials[currentTestimonial].client}</p>

            {/* Navigation dots */}
            <div className="flex gap-2 justify-center mt-12">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? "bg-blue-400 w-8" : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-blue-900 text-center mb-16">Why Louisiana Trusts Costello</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="font-black text-slate-900 mb-2">Trusted Partner</h3>
              <p className="text-slate-600">500+ satisfied customers across the region</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="font-black text-slate-900 mb-2">Industry Leader</h3>
              <p className="text-slate-600">15+ years of proven excellence</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="font-black text-slate-900 mb-2">Full Warranty</h3>
              <p className="text-slate-600">Comprehensive protection guaranteed</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="text-white" size={40} />
              </div>
              <h3 className="font-black text-slate-900 mb-2">Fast Service</h3>
              <p className="text-slate-600">Quick turnaround without quality compromise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/modern-contact-form-professional-office.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-slate-900/90 to-blue-900/95" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-white mb-4">Get Your Free Estimate</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 mx-auto shadow-lg shadow-blue-400/50 rounded-full" />
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                required
              >
                <option value="" className="bg-slate-900">
                  Select a Service
                </option>
                <option value="pressure-washing" className="bg-slate-900">
                  Pressure Washing & Restoration
                </option>
                <option value="roof-preservation" className="bg-slate-900">
                  Roof Preservation & Coatings
                </option>
                <option value="exterior-painting" className="bg-slate-900">
                  Premium Exterior Painting
                </option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleFormChange}
                rows={5}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Request</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-12 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <p className="text-blue-100 mb-2 font-semibold">Phone</p>
                  <a href="tel:+13375676072" className="text-blue-300 font-bold hover:text-blue-200 transition-colors">
                    +1 (337) 567-6072
                  </a>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <p className="text-blue-100 mb-2 font-semibold">Email</p>
                  <a
                    href="mailto:info@costello.com"
                    className="text-blue-300 font-bold hover:text-blue-200 transition-colors"
                  >
                    info@costello.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <p className="text-blue-100 mb-2 font-semibold">Service Area</p>
                  <p className="text-blue-300 font-bold">Lafayette & Acadiana Region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white py-12 px-4 border-t border-blue-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4190207b58b5435387c7048034219577%2Fe59e9fce6e5a4081b7f0d28a2c01f6be?format=webp&width=800"
                  alt="Costello Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-blue-100 text-sm">Premium protective coatings for Louisiana properties.</p>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>📞 +1 (337) 567-6072</li>
                <li>📧 info@costello.com</li>
                <li>📍 Lafayette, LA & Surrounding Areas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-900/50 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2025 Costello Protective Coatings. All rights reserved. Excellence in every coat.</p>
          </div>
        </div>
      </footer>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl max-h-screen w-full h-full flex items-center justify-center">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Close preview"
            >
              <X size={28} />
            </button>
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute inset-0 z-0"
              aria-label="Close preview by clicking outside"
            />
          </div>
        </div>
      )}
    </main>
  )
}
