"use client"

import { useEffect, useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3x3 } from "lucide-react"

const galleryItems = [
  { id: 1, src: "/gallery1.jpg", alt: "Morning View", category: "exterior" },
  { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square", category: "amenities" },
  { id: 3, src: "/gallery3.jpg", alt: "Good Entrance", category: "exterior" },
  { id: 4, src: "/gallery4.jpg", alt: "Tree covered", category: "landscape" },
  { id: 5, src: "/gallery5.jpg", alt: "Night View", category: "exterior" },
  { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space", category: "interior" },
  { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors", category: "interior" },
  { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities", category: "amenities" },
  { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool", category: "amenities" },
  { id: 10, src: "/gallery10.jpg", alt: "Evening View", category: "exterior" },
  { id: 11, src: "/gallery11.jpg", alt: "Playground", category: "amenities" },
  { id: 12, src: "/gallery12.jpg", alt: "Top View", category: "exterior" },
]

export  function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const categories = ["all", "exterior", "interior", "amenities", "landscape"]

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId !== null) {
        const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
        if (e.key === "ArrowRight") {
          const newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
          setSelectedId(galleryItems[newIndex].id)
        }
        if (e.key === "ArrowLeft") {
          const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
          setSelectedId(galleryItems[newIndex].id)
        }
        if (e.key === "Escape") setSelectedId(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedId])

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedId === null) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    }
    setSelectedId(galleryItems[newIndex].id)
  }

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with side decoration */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Grid3x3 className="w-6 h-6 text-white" />
                </div>
                <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-3">
                Visual Gallery
              </h2>
              <p className="text-sm sm:text-base text-primary/70 max-w-xl">
                Explore our stunning collection of projects and developments
              </p>
            </div>
            
            {/* Stats */}
            <div className="hidden lg:flex gap-4">
              <div className="text-center px-6 py-4 bg-white rounded-2xl shadow-lg border-l-4 border-primary">
                <div className="text-3xl font-black text-primary">{galleryItems.length}</div>
                <div className="text-xs text-gray-600 font-bold mt-1">Photos</div>
              </div>
              <div className="text-center px-6 py-4 bg-white rounded-2xl shadow-lg border-l-4 border-secondary">
                <div className="text-3xl font-black text-secondary">{categories.length - 1}</div>
                <div className="text-xs text-gray-600 font-bold mt-1">Categories</div>
              </div>
            </div>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm capitalize transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-white text-primary border-2 border-gray-200 hover:border-primary/40 hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden -mx-4">
          <div className="relative px-4">
            <div className="overflow-hidden">
              <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className="flex-shrink-0 w-full snap-center px-2"
                  >
                    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Image */}
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                      {/* Content overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        {/* Category badge - top right */}
                        <div className="flex justify-end">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                            {item.category}
                          </span>
                        </div>

                        {/* Title - bottom */}
                        <div>
                          <h3 className="text-white font-black text-2xl mb-3 drop-shadow-lg">
                            {item.alt}
                          </h3>
                          <div className="flex items-center gap-2 text-white/90 text-sm">
                            <ZoomIn className="w-5 h-5" />
                            <span className="font-bold">Tap to expand</span>
                          </div>
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`h-2 rounded-full transition-all ${
                    index === 0 ? 'w-8 bg-gradient-to-r from-primary to-secondary' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Bento Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {filteredItems.map((item, index) => {
            // Create varied sizes: first item large, every 5th item wide
            const isLarge = index === 0
            const isWide = index % 5 === 0 && index !== 0
            
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(item.id)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isLarge ? 'col-span-2 row-span-2' : isWide ? 'col-span-2' : ''
                }`}
                style={{
                  height: isLarge ? '400px' : isWide ? '200px' : '190px'
                }}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                  hoveredId === item.id 
                    ? 'from-primary/90 via-primary/60 to-transparent opacity-100' 
                    : 'from-black/70 via-black/30 to-transparent opacity-90'
                }`}></div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Category badge - top right */}
                  <div className="flex justify-end">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Title - bottom */}
                  <div>
                    <h3 className={`text-white font-black drop-shadow-lg ${
                      isLarge ? 'text-xl sm:text-2xl' : 'text-sm sm:text-base'
                    }`}>
                      {item.alt}
                    </h3>
                    
                    {/* Zoom icon on hover */}
                    <div className={`mt-2 flex items-center gap-2 text-white text-xs transition-all duration-300 ${
                      hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <ZoomIn className="w-4 h-4" />
                      <span className="font-semibold">Click to expand</span>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )
          })}
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* View All CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-primary mb-2">
                Love What You See?
              </h3>
              <p className="text-sm text-gray-600">
                Visit our projects to experience the quality firsthand
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all whitespace-nowrap"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-6xl w-full h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Main image */}
            <img
              src={galleryItems.find((item) => item.id === selectedId)?.src}
              alt="Gallery"
              className="w-full h-full object-contain rounded-2xl"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={28} className="text-white" />
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image info bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-md rounded-b-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-lg sm:text-xl mb-1">
                    {galleryItems.find((item) => item.id === selectedId)?.alt}
                  </p>
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {galleryItems.find((item) => item.id === selectedId)?.category}
                  </span>
                </div>
                <div className="text-white/60 text-sm font-bold">
                  {galleryItems.findIndex(item => item.id === selectedId) + 1} / {galleryItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}