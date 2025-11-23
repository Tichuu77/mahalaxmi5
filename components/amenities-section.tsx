"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users, Sparkles, Star, ChevronRight } from "lucide-react"
import { useState } from "react"

const amenities = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration",
    category: "facilities"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym",
    category: "wellness"
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping",
    category: "wellness"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "24/7 power supply",
    category: "facilities"
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance",
    category: "facilities"
  },
  {
    icon: Users,
    title: "Community",
    description: "Social gathering spaces",
    category: "entertainment"
  },
  {
    emoji: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool",
    category: "wellness"
  },
  {
    emoji: "🎮",
    title: "Gaming Zone",
    description: "Indoor entertainment",
    category: "entertainment"
  },
  {
    emoji: "🧘",
    title: "Yoga & Meditation",
    description: "Wellness activities",
    category: "wellness"
  },
  {
    emoji: "🚗",
    title: "Covered Parking",
    description: "Multi-level parking",
    category: "facilities"
  },
  {
    emoji: "🎪",
    title: "Banquet Hall",
    description: "Event spaces",
    category: "entertainment"
  },
  {
    emoji: "👶",
    title: "Kids Play Area",
    description: "Safe playground",
    category: "entertainment"
  },
]

export  function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredAmenities = amenities.filter(amenity => {
    if (activeTab === "all") return true
    return amenity.category === activeTab
  })

  const categories = [
    { id: "all", label: "All", icon: Star, color: "from-primary to-secondary" },
    { id: "wellness", label: "Wellness", icon: Trees, color: "from-primary to-tcol" },
    { id: "entertainment", label: "Entertainment", icon: Users, color: "from-secondary to-primary" },
    { id: "facilities", label: "Facilities", icon: Shield, color: "from-tcol to-secondary" }
  ]

  return (
    <section id="amenities" className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      
      {/* Wavy background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Header - Left Aligned */}
        <div className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-4 leading-tight">
                Amenities That
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary">
                  Define Luxury
                </span>
              </h2>
              <p className="text-base sm:text-lg text-primary/70 leading-relaxed max-w-xl">
                Every feature thoughtfully designed to elevate your lifestyle and create unforgettable experiences
              </p>
            </div>

            {/* Stats Cards - Right Side */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 text-center">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">12+</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Amenities</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 text-center">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary">24/7</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Available</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 text-center">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-tcol">100%</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Premium</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Tab Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          
          
          {/* Left Sidebar - Category Tabs */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              {categories.map(tab => {
                const TabIcon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full group relative px-5 py-4 rounded-2xl text-left font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-xl scale-105"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        activeTab === tab.id 
                          ? "bg-white/20" 
                          : "bg-gray-100 group-hover:bg-primary/10"
                      }`}>
                        <TabIcon className={`w-5 h-5 ${
                          activeTab === tab.id ? "text-white" : "text-primary"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base">{tab.label}</div>
                        <div className={`text-xs ${activeTab === tab.id ? "text-white/80" : "text-gray-500"}`}>
                          {amenities.filter(a => tab.id === "all" || a.category === tab.id).length} items
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${
                        activeTab === tab.id ? "translate-x-1 text-white" : "text-gray-400"
                      }`} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Content - Amenities Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
              {filteredAmenities.map((amenity, index) => {
                const Icon = amenity.icon
                const isHovered = hoveredIndex === index
                
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary/30 overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      {/* Icon with animated ring */}
                      <div className="relative w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-5">
                        {/* Outer ring */}
                        <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary transition-transform duration-500 ${
                          isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
                        }`}></div>
                        {/* Inner white bg */}
                        <div className="absolute inset-0.5 sm:inset-1 bg-white rounded-lg sm:rounded-xl"></div>
                        {/* Icon container */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                          isHovered ? "scale-110" : "scale-100"
                        }`}>
                          {amenity.emoji ? (
                            <span className="text-xl sm:text-4xl">{amenity.emoji}</span>
                          ) : (
                            <Icon className="w-5 h-5 sm:w-9 sm:h-9 text-primary" />
                          )}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xs sm:text-base lg:text-lg font-black text-gray-900 mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {amenity.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 leading-relaxed mb-2 sm:mb-4 line-clamp-2">
                          {amenity.description}
                        </p>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2 sm:mb-3"></div>

                        {/* Category pill */}
                        <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-[9px] sm:text-xs font-bold rounded-full">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary"></div>
                          {amenity.category.charAt(0).toUpperCase() + amenity.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>

        {/* Bottom CTA Card - Full Width */}
        <div className="mt-10 lg:mt-12 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Want to Know More?
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Get detailed information about amenities specific to your preferred project location
              </p>
            </div>
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-white text-primary rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Contact Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      {/* Bottom Feature Highlights */}
     <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
  {[
    { label: "Vastu Compliant", value: "100%", gradient: "from-primary to-secondary" },
    { label: "Security", value: "24/7", gradient: "from-secondary to-primary" },
    { label: "Maintenance", value: "Premium", gradient: "from-primary to-tcol" },
    { label: "Warranty", value: "Assured", gradient: "from-primary to-secondary" }
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    >
      <div
        className={`text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-1`}
      >
        {item.value}
      </div>

      <div className="text-xs sm:text-sm text-gray-700 font-semibold">
        {item.label}
      </div>

      <div
        className={`h-1 w-10 bg-gradient-to-r ${item.gradient} rounded-full mt-2`}
      ></div>
    </div>
  ))}
</div>


        
      </div>
    </section>
  )
}