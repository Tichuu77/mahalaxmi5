"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, Phone, CheckCircle, Sparkles } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      if (window.cloudinary && videoRef.current) {
        window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'auto',
        })
      }
    }

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
      if (document.head.contains(link)) document.head.removeChild(link)
    }
  }, [])

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Video Background - Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <div ref={videoRef} className="w-full h-full">
          <video
            id="cloudinary-player"
            className="cld-video-player"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              filter: 'brightness(0.8)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            
            {/* Badge */}
            <div className={`flex justify-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  RERA • NMRDA Approved
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className={`space-y-4 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Build Your
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-float">
                  Dream Home
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
              </div>
            </div>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl lg:text-2xl text-white/90 font-light leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Premium Residential & Commercial Plots in Heart of Nagpur
            </p>

            {/* Stats */}
            <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <div className="text-3xl font-black text-primary mb-1">15+</div>
                <div className="text-sm text-white/80">Projects</div>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <div className="text-3xl font-black text-secondary mb-1">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <div className="text-3xl font-black text-primary mb-1">100%</div>
                <div className="text-sm text-white/80">RERA Approved</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <button 
                onClick={() => handleScrollToSection("contact")}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-base transition-all duration-300 flex items-center gap-3 shadow-2xl hover:scale-105 hover:shadow-primary/50"
              >
                <Phone className="w-5 h-5" />
                Contact Us Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => handleScrollToSection("projects")}
                className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl font-bold text-base transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-lg hover:scale-105"
              >
                Explore Projects
              </button>
            </div>

            {/* Special Offer Banner */}
            <div className={`inline-block transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary via-primary to-secondary p-6 shadow-2xl border border-white/20">
                <div className="absolute inset-0 bg-white/5" />
                <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 animate-pulse" />
                    <span className="font-bold text-lg">Starting from ₹22 Lakh</span>
                  </div>
                  <div className="h-6 w-px bg-white/30 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Prime Locations Across Nagpur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 bg-black/20 backdrop-blur-sm animate-bounce">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}