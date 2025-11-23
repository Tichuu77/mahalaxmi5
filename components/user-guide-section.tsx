"use client"

import { ChevronDown, Home, Calendar, Briefcase, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const guides = [
  {
    number: "01",
    title: "Explore Properties",
    description: "Browse through our extensive collection of premium residential and commercial properties in Nagpur.",
    icon: Home,
    emoji: "🏠",
    details: [
      "Visit our website and create an account",
      "Filter properties by location, price, and amenities",
      "Save your favorite properties to a wishlist",
    ],
  },
  {
    number: "02",
    title: "Schedule Site Visit",
    description: "Book a personalized site visit with our expert consultants to experience the property firsthand.",
    icon: Calendar,
    emoji: "📅",
    details: [
      "Select your preferred date and time",
      "Our team will confirm your visit within 24 hours",
      "Receive directions and consultant contact details",
    ],
  },
  {
    number: "03",
    title: "Consultation & Financing",
    description: "Get expert advice on financing options and investment benefits from our experienced team.",
    icon: Briefcase,
    emoji: "💼",
    details: [
      "Discuss investment strategies with our experts",
      "Explore various financing and payment options",
      "Get personalized financial advice",
    ],
  },
  {
    number: "04",
    title: "Complete Purchase",
    description: "Finalize your investment with our transparent and hassle-free documentation process.",
    icon: CheckCircle,
    emoji: "✅",
    details: [
      "Sign all required legal documents",
      "Complete payment processing",
      "Receive your property documentation",
    ],
  },
]

export  function UserGuideSection() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="user-guide" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="h-0.5 sm:h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-primary mb-3 sm:mb-4 leading-tight px-4">
            Your Journey
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Starts Here
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-primary/70 leading-relaxed max-w-2xl mx-auto px-4">
            Follow our streamlined 4-step process to find and secure your dream property
          </p>
          
          <div className="flex items-center justify-center gap-3 mt-4 sm:mt-6">
            <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-primary/10 rounded-lg sm:rounded-xl border border-primary/30">
              <div className="text-xl sm:text-2xl font-black text-primary">04</div>
              <div className="text-[10px] sm:text-xs text-primary/60 font-semibold">Steps</div>
            </div>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-secondary/10 rounded-lg sm:rounded-xl border border-secondary/30">
              <div className="text-xl sm:text-2xl font-black text-secondary">100%</div>
              <div className="text-[10px] sm:text-xs text-secondary/60 font-semibold">Support</div>
            </div>
          </div>
        </div>

        {/* Steps - Single Column on Mobile, Row on Desktop */}
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-4 mb-12 sm:mb-16">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            const isExpanded = expandedIndex === index
            
            return (
              <div key={index} className="relative">
                {/* Card */}
                <div
                  onClick={() => setExpandedIndex(index)}
                  className={`cursor-pointer group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    isExpanded 
                      ? "border-primary shadow-primary/20 scale-[1.02]" 
                      : "border-primary/20 hover:border-primary/40"
                  }`}
                >
                  {/* Glowing effect */}
                  <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-xl transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm sm:text-base">{guide.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`mt-3 mb-3 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-6 scale-110' : 'rotate-0'}`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all leading-tight">
                    {guide.title}
                  </h3>

                  {/* Description - Hidden on mobile */}
                  <p className="hidden sm:block text-xs text-primary/60 leading-relaxed mb-3 min-h-[48px]">
                    {guide.description}
                  </p>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-between mt-3">
                    <div className={`h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${isExpanded ? 'w-full' : 'w-6 sm:w-8'}`} />
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expandable Details */}
                {isExpanded && (
                  <div 
                    className="mt-3 sm:mt-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-primary/20"
                    style={{ animation: 'slideIn 0.3s ease-out' }}
                  >
                    {/* Description on mobile only */}
                    <p className="sm:hidden text-xs text-primary/70 leading-relaxed mb-4">
                      {guide.description}
                    </p>
                    
                    <h4 className="text-xs sm:text-sm font-black text-primary mb-3 flex items-center gap-2">
                      <div className="w-0.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full" />
                      STEPS TO FOLLOW
                    </h4>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {guide.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-sm">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          </div>
                          <span className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Tips - Single Column on Mobile */}
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 lg:gap-6">
          <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl mb-3 shadow-lg">
                💡
              </div>
              <h4 className="text-base sm:text-lg font-black text-primary mb-2">Pro Tip</h4>
              <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                Compare multiple properties. Visit at different times of the day.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-2xl mb-3 shadow-lg">
                🎯
              </div>
              <h4 className="text-base sm:text-lg font-black text-primary mb-2">Best Practice</h4>
              <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                Review all documents carefully. Consult with our experts.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl mb-3 shadow-lg">
                📚
              </div>
              <h4 className="text-base sm:text-lg font-black text-primary mb-2">Resources</h4>
              <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                Contact our support team anytime for assistance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Compact */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary via-secondary to-primary p-0.5 sm:p-1 rounded-2xl sm:rounded-3xl shadow-xl">
            <div className="bg-white rounded-2xl sm:rounded-3xl px-6 py-5 sm:px-10 sm:py-7">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-primary mb-2 sm:mb-3">Ready to Begin?</h3>
              <p className="text-xs sm:text-sm text-primary/70 mb-4 sm:mb-5 max-w-md mx-auto">
                Start your property journey today with expert guidance
              </p>
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                Get Started Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}