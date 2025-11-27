"use client"

import { useState, useEffect } from "react"
import { Calendar, User, ChevronDown, ChevronUp, ArrowRight, Sparkles } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Mahalaxmi Launches New Luxury Residential Complex",
    excerpt:
      "Introducing our latest project featuring smart homes and sustainable living spaces in the heart of the city.",
    fullContent:
      "The Mahalaxmi Luxury Residential Complex marks a new milestone in sustainable architecture. Each unit is designed with eco-conscious materials, smart home integration, and green terraces for a natural lifestyle. Residents can enjoy modern amenities, lush gardens, and easy access to urban hotspots. This launch redefines urban luxury with purpose and sustainability at its core.",
    date: "March 15, 2025",
    author: "Mahalaxmi Team",
    category: "Project Launch",
    image: "/luxury-residential-complex.png",
  },
  {
    id: 2,
    title: "Sustainable Development: Our Commitment to Green Living",
    excerpt:
      "Learn how Mahalaxmi  Infra is pioneering eco-friendly construction practices and green spaces.",
    fullContent:
      "At Mahalaxmi  Infra, sustainability isn't just a trend — it's a commitment. From solar energy integration to rainwater harvesting, every project embraces green building standards. Our mission is to create living spaces that harmonize with nature while minimizing carbon footprint, offering a healthier and cleaner future for generations to come.",
    date: "March 10, 2025",
    author: "Sustainability Team",
    category: "Sustainability",
    image: "/green-sustainable-residential-development.jpg",
  },
  {
    id: 3,
    title: "Customer Success Story: From Dream to Reality",
    excerpt:
      "Meet the families who found their perfect home with Mahalaxmi. Read their inspiring stories.",
    fullContent:
      "For many families, Mahalaxmi projects have turned their dream homes into reality. Our customer-first approach ensures personalized experiences — from choosing the right floor plan to post-possession support. Their heartfelt testimonials remind us why we build not just homes, but lifelong happiness.",
    date: "March 5, 2025",
    author: "Marketing Team",
    category: "Success Stories",
    image: "/happy-family-new-home.jpg",
  },
]

export default function NewsArticles() {
  const [expandedId, setExpandedId] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  const toggleExpand = (id, event) => {
    event.stopPropagation()
    setExpandedId((prev) => (prev === id ? null : id))
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setExpandedId(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="news" className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" style={{ animationDelay: '3s' }} />
        <Sparkles className="absolute top-10 right-20 w-16 h-16 text-primary/5 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Enhanced Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              Latest Updates
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 leading-tight">
            News &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Articles
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-primary/70 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest news, project launches, and insights from Mahalaxmi  Infra
          </p>
        </div>

        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsArticles.map((article, index) => {
            const isExpanded = article.id === expandedId
            const isHovered = article.id === hoveredId
            
            return (
              <article
                key={article.id}
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer border-2 ${
                  isExpanded 
                    ? "border-primary shadow-2xl shadow-primary/20 scale-[1.02]" 
                    : "border-primary/10 hover:border-primary/30 hover:shadow-xl"
                }`}
              >
                {/* Gradient Overlay Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : ''}`} />
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
                      <div className="flex items-center gap-1.5 text-primary">
                        <Calendar className="w-3 h-3" />
                        <span className="text-xs font-semibold">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-5 sm:p-6">
                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl font-black text-primary mb-3 leading-tight transition-all duration-300 ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : ''}`}>
                    {article.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-sm text-primary/70 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-primary/10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary">{article.author}</p>
                      <p className="text-[10px] text-primary/60">Author</p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={(e) => toggleExpand(article.id, e)}
                    className="group/btn inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
                  >
                    {isExpanded ? (
                      <>
                        Show Less 
                        <ChevronUp className="w-4 h-4 group-hover/btn:transform group-hover/btn:-translate-y-1 transition-transform" />
                      </>
                    ) : (
                      <>
                        Read Full Story
                        <ArrowRight className="w-4 h-4 group-hover/btn:transform group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div
                      className="mt-5 pt-5 border-t-2 border-primary/10"
                      style={{ animation: 'slideDown 0.4s ease-out' }}
                    >
                      <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
                        <p className="text-sm text-primary/80 leading-relaxed">
                          {article.fullContent}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-500 ${isHovered || isExpanded ? 'opacity-100' : 'opacity-0'}`} />
              </article>
            )
          })}
        </div>

        
      </div>
    </section>
  )
}