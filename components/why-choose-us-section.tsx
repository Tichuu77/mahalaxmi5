"use client"

import { Check, Zap, Trophy, Users, Heart, Lightbulb, Star, Award, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"

const reasons = [
  {
    icon: Trophy,
    title: "Proven Excellence",
    description: "Award-winning solutions trusted by industry leaders"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technology and forward-thinking approach"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience"
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Your satisfaction is our top priority always"
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Tailored approaches for unique challenges"
  },
  {
    icon: Check,
    title: "Quality Assured",
    description: "Rigorous standards and quality control processes"
  },
]

export  function WhyChooseUsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 2px, transparent 2px, transparent 20px)',
          color: 'var(--primary)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 leading-tight">
              Why Partner
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                With Us?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-primary/70 leading-relaxed">
              Discover what sets us apart and makes us the trusted choice for thousands of satisfied clients
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-3xl font-black text-primary">10+</span>
              </div>
              <p className="text-sm text-gray-600 font-bold">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-secondary">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-3xl font-black text-secondary">500+</span>
              </div>
              <p className="text-sm text-gray-600 font-bold">Happy Clients</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-primary col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-3xl font-black text-primary">98%</span>
              </div>
              <p className="text-sm text-gray-600 font-bold">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Cards Grid - Mobile: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mb-12 lg:mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary/30 ${
                  isHovered ? 'lg:scale-105 lg:-translate-y-2' : ''
                }`}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Diagonal accent line */}
                <div className={`absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-10'}`}></div>
                
                <div className="relative z-10">
                  {/* Icon with pulsing ring */}
                  <div className="relative mb-2 sm:mb-5">
                     
                    <div className={`relative w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 ${isHovered ? 'rotate-6 scale-110' : 'rotate-0'}`}>
                      <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xs sm:text-lg lg:text-2xl font-black text-primary mb-1 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all line-clamp-2">
                    {reason.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {reason.description}
                  </p>

                  {/* Animated underline */}
                  <div className={`h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ${isHovered ? 'w-full' : 'w-8 sm:w-12'}`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Benefits Section - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Proven Track Record Card */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-100 overflow-hidden group">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-primary">Proven Track Record</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "10+ years industry experience",
                  "500+ satisfied clients",
                  "Industry-leading satisfaction rate"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-semibold group-hover/item:text-primary transition-colors">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comprehensive Support Card */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-100 overflow-hidden group">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-primary">Comprehensive Support</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "24/7 customer support",
                  "Regular updates & training",
                  "Dedicated account managers"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-semibold group-hover/item:text-primary transition-colors">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="relative z-10 text-center">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our solutions
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}