"use client"

import { useEffect, useState } from "react"
import { Award, Users, Building2, CheckCircle2, TrendingUp, Shield, Home, Target, Sparkles } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, sqft: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 50, clients: 1000, years: 20, sqft: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { projects: 0, clients: 0, years: 0, sqft: 0 }

    const timer = setInterval(() => {
      current.projects = Math.min(current.projects + targets.projects / steps, targets.projects)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.sqft = Math.min(current.sqft + targets.sqft / steps, targets.sqft)

      setCounters({
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        years: Math.floor(current.years),
        sqft: Math.floor(current.sqft)
      })

      if (
        current.projects >= targets.projects &&
        current.clients >= targets.clients &&
        current.years >= targets.years &&
        current.sqft >= targets.sqft
      ) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, increment)
  }

  const stats = [
    { value: counters.projects, suffix: "+", label: "Completed Projects", icon: Building2, color: "from-primary to-secondary" },
    { value: counters.clients, suffix: "+", label: "Happy Families", icon: Users, color: "from-secondary to-primary" },
    { value: counters.years, suffix: "+", label: "Years of Trust", icon: Award, color: "from-primary to-tcol" },
    { value: counters.sqft, suffix: "K+", label: "Total Area", icon: TrendingUp, color: "from-tcol to-secondary" }
  ]

  const features = [
    { icon: Award, title: "Premium Quality", desc: "Top-grade materials and construction" },
    { icon: Shield, title: "Fully Legal", desc: "Complete documentation & approvals" },
    { icon: Target, title: "Prime Locations", desc: "Strategic & accessible locations" },
    { icon: Home, title: "Modern Design", desc: "Contemporary style & architecture" }
  ]

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background via-gray-50 to-background relative overflow-hidden"
    >

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className={`text-center mb-10 sm:mb-14 transition-all ${isVisible ? "opacity-100" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-1 mb-4 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs sm:text-sm text-primary font-bold uppercase tracking-wider">
              About Mahalaxmi
            </span>
            <Sparkles className="w-3 h-3 text-secondary" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight">
            Building Dreams Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              Reality Since 20+ Years
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-primary/80 max-w-2xl mx-auto mt-4 leading-relaxed px-2">
            A legacy of excellence in real estate development across Nagpur’s prime locations.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">

          {/* IMAGE SECTION */}
          <div className={`lg:col-span-5 transition-all ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[400px] lg:h-[600px]">
              <img
                src="/aboutUs.webp"
                alt="About Mahalaxmi  Infra"
                className="w-full h-full object-cover"
              />

              {/* RERA TOP BADGE */}
              <div className="absolute top-4 right-4 bg-gradient-to-br from-primary to-secondary rounded-xl px-4 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-[10px] text-white/90 font-semibold">100%</div>
                    <div className="text-xs text-white font-bold">RERA</div>
                  </div>
                </div>
              </div>

              {/* BOTTOM INFO CARD */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-xl">
                <div className="flex justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {counters.years}+ 
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-semibold">Years of Excellence</div>
                  </div>

                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className={`lg:col-span-7 space-y-5 sm:space-y-8 transition-all ${isVisible ? "opacity-100" : "opacity-0 translate-x-6"}`}>

            {/* DESCRIPTION */}
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-l-4 border-primary">
                <p className="text-sm sm:text-base text-gray-700">
                  With <span className="font-bold text-primary">20+ years of excellence</span>, Mahalaxmi  Infra is a
                  <span className="font-semibold text-secondary"> trusted name</span> delivering premium
                  residential and commercial spaces across Nagpur.
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-l-4 border-secondary">
                <p className="text-sm sm:text-base text-gray-700">
                  We ensure <span className="text-primary font-semibold">legal transparency</span> and unmatched value,
                  helping <span className="font-bold text-secondary">1000+ families</span> find their dream homes.
                </p>
              </div>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-gray-900">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* FEATURES */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">Why Choose Us</h3>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, idx) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all flex gap-3"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CTA BUTTON */}
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-primary text-white rounded-xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              Explore Our Projects →
            </a>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="mt-10 sm:mt-14">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 sm:p-8">
            <h3 className="text-center text-lg sm:text-xl font-bold text-primary mb-3">Certified & Trusted</h3>

            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              {[
                { icon: Shield, title: "NMRDA", subtitle: "Sanctioned" },
                { icon: CheckCircle2, title: "RERA", subtitle: "Approved" },
                { icon: Award, title: "ISO", subtitle: "Certified" }
              ].map((b, idx) => (
                <div key={idx} className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-primary/5 hover:shadow-md">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <b.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs sm:text-sm font-bold text-gray-900">{b.title}</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">{b.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
