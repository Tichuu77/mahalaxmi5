"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Investing in a by Maha Laxmi  Infra transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
    name: "Rajkumar Gharjale",
    location: "Nagpur",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
    rating: 5,
  },
  {
    id: 2,
    content:
      "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi  Infra exceeded my expectations. Highly recommended!",
    name: "Priya Shah",
    location: "Mumbai",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Investing in residential plots with Mahalaxmi  Infra was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
    name: "Karan Akojwar",
    location: "Pune",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
    rating: 5,
  },
]

export  function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" style={{ animationDelay: '4s' }} />
        <Quote className="absolute top-10 left-10 w-24 h-24 text-primary/5 animate-float" />
        <Quote className="absolute bottom-10 right-10 w-32 h-32 text-secondary/5" style={{ animationDelay: '2s', transform: 'rotate(180deg)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              Testimonials
            </span>
          </div>

          <h2
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4"
          >
            What Our Clients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Say About Us
            </span>
          </h2>
          <p className="text-sm sm:text-base text-primary/70 max-w-2xl mx-auto">
            Real stories from real people who transformed their dreams into reality
          </p>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: Featured Testimonial Card */}
          <div className="relative">
            <div className="relative h-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === current ? "opacity-100 scale-100" : "absolute opacity-0 scale-95 pointer-events-none top-0 left-0 right-0"
                  }`}
                  style={index === current ? { animation: 'slideIn 0.5s ease-out' } : {}}
                >
                  <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-primary/20 overflow-hidden">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                    
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
                      <Quote className="w-10 h-10 text-white" />
                    </div>

                    <div className="relative">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6 pt-8">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 fill-amber-400 text-amber-400"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-base sm:text-lg text-primary/80 mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-6 border-t-2 border-primary/10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-md opacity-50" />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                        </div>
                        <div>
                          <p
                            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                            className="font-black text-primary text-lg sm:text-xl mb-1"
                          >
                            {testimonial.name}
                          </p>
                          <p className="text-primary/60 text-sm flex items-center gap-1">
                            📍 {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={goToPrevious}
                className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrent(index)
                      setAutoplay(false)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current 
                        ? "bg-gradient-to-r from-primary to-secondary w-8 shadow-md" 
                        : "bg-primary/30 w-2 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: All Testimonials Preview */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-primary mb-4 sm:mb-6">
              More Success Stories
            </h3>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`cursor-pointer group p-4 sm:p-5 rounded-2xl transition-all duration-300 border-2 ${
                  index === current
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary shadow-lg scale-[1.02]"
                    : "bg-white border-primary/10 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 rounded-full blur-md transition-opacity ${index === current ? 'opacity-50 bg-gradient-to-br from-primary to-secondary' : 'opacity-0'}`} />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 transition-all ${
                        index === current ? "border-primary shadow-lg" : "border-gray-200 group-hover:border-primary/50"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-primary text-sm sm:text-base truncate">
                        {testimonial.name}
                      </p>
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-primary/60 mb-2">📍 {testimonial.location}</p>
                    <p className="text-xs sm:text-sm text-primary/70 line-clamp-2 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border-2 border-primary/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
              500+
            </div>
            <div className="text-xs sm:text-sm text-primary/70 font-semibold">Happy Clients</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border-2 border-secondary/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-2">
              4.9
            </div>
            <div className="text-xs sm:text-sm text-primary/70 font-semibold">Average Rating</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border-2 border-primary/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
              98%
            </div>
            <div className="text-xs sm:text-sm text-primary/70 font-semibold">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}