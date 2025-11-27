"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Phone, Building2, Sparkles, Star, Eye } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
}

const projects: {
  completed: Project[]
  ongoing: Project[]
  upcoming: Project[]
} = {
  ongoing: [
    {
      id: 2,
      title: "Mahalaxmi Nagar-31",
      image: "/ongoingProject8.webp",
      description: `This Project Ready to Move and Fully Residential Layout Are Located Besa-Pipla Road Opposite Zudio, Croma on Prime Location and upto 90% Bank Finance Available.`,
      location: `MOUZA - PIPLA`,
      status: "ongoing"
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar-39",
      image: "/ongoingProject5.webp",
      description: `Katol Road Mahalaxmi  Infra Launched Project Mahalaxmi Nagar-39 This Project Located Fetri (Chicholi) New Outer Ring Road Touch Layout.`,
      location: `MOUZA - CHICHOLI`,
      status: "ongoing"
    },
    {
      id: 4,
      title: "Mahalaxmi Nagar-41",
      image: "/ongoingProject3.webp",
      description: `Located Near Samruddhi Mahamarg on South Nagpur Premium Layout Mahalaxmi Nagar-41 This Premium Luxury Club House & Swimming Pool NMRDA & RL Project Aminities and Easy Bank Finance Available upto 90% 
A Prime Location in Nagpur for Smart Investment.`,
      location: `MOUZA - GOMGAON`,
      status: "ongoing"
    },
    {
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: `Mahalaxmi Nagar – 42, near Jamtha on Wardha Road, offers well-connected plots perfect for homes or businesses. Approved by NMRDA and equipped with RL, this project comes with excellent amenities and easy bank finance options.
Best for investment to buy plots in Nagpur.`,
      location: `MOUZA - JAMTHA`,
      status: "ongoing"
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar - 43",
      image: "/ongoingProject10.webp",
      description: `Ready to Move Project by Mahalaxmi Nagar-43 offering Residential Plot With Aminities Behind Royal Gondwana School & Singapure City Shankarpur, Nagpur 
An Affordable Price & Fully Developed NMRDA & RL upto 90% Bank Finance Available.`,
      location: `MOUZA - SHANKARPUR`,
      status: "ongoing"
    },
    {
      id: 7,
      title: "Mahalaxmi Nagar - 45",
      image: "/ongoingProject11.webp",
      description: `Mahalaxmi Nagar-45 is a Premium Residential Plotted Development Project Located South Nagpur Near Samruddhi Mahamarg
Location - The Project is Situated in Mouza - Sumthana Behind Godrej Properties Close to D- Mart Connectivity - The Location Offers Excellent Connectivity to Major City Hubs, Including Nagpur Airport, AIIMS, IIM, TCS, INFOSYS,TECH MAHINDRA, Patanjali as soon as Mihan.`,
      location: `MOUZA - SHANKARPUR`,
      status: "ongoing"
    },
    {
      id: 11,
      title: "Mahalaxmi Nagar - 47",
      image: "/ongoingProject12.jpg",
      description: `Mahalaxmi  Infra New Project Launch In Koradi Road,(Nanda) This Project Located are Behind Haldiram,AM Cinema,Rokde Jwellers & Naivedyam Hotel
This Project Fully NMRDA & RL Residential Plotted Project With upto 90% Bank Finance Available.`,
      location: `MOUZA - KORADI ROAD HALDIRAM & AM CINEMA BACKSIDE`,
      status: "ongoing"
    },
  ],
  completed: [
    {
      id: 12,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: `Mahalaxmi  Infra launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
      status: "completed"
    },
    {
      id: 13,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: `Mahalaxmi  Infra launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
      status: "completed"
    },
    {
      id: 14,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: `Mahalaxmi Infra launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - BAHADURA`,
      status: "completed"
    },
  ],
  upcoming: [
    {
      id: 15,
      title: "Mahalaxmi Nagar - 48",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
    {
      id: 16,
      title: "Mahalaxmi Nagar - 49",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
    {
      id: 17,
      title: "Mahalaxmi Nagar - 50",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
  ]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const statusConfig = {
    completed: { label: "Completed", color: "bg-primary" },
    ongoing: { label: "Ongoing", color: "bg-secondary" },
    upcoming: { label: "Upcoming", color: "bg-tcol" },
  }

  const config = statusConfig[project.status as keyof typeof statusConfig]
  const isLarge = index % 7 === 0 // Every 7th card is large

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${project.title}. Please share more details.`
    const url = `https://wa.me/+919822172379?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        isLarge ? 'rounded-3xl' : 'rounded-2xl'
      }`}
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Image section - Side by side layout for large cards */}
      <div className={`relative ${isLarge ? 'lg:flex' : ''}`}>
        <div className={`relative overflow-hidden ${isLarge ? 'lg:w-1/2' : 'w-full'} ${isLarge ? 'h-64 lg:h-auto' : 'h-48'}`}>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 rotate-2' : 'scale-100'}`}
          />
          
          {/* Diagonal overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/50 to-transparent opacity-80"></div>
          
          {/* Status badge - floating */}
          <div className="absolute top-4 right-4 z-20">
            <div className={`${config.color} text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-sm`}>
              {config.label}
            </div>
          </div>

          {/* Project number - large */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="text-white/30 text-6xl font-black leading-none">
              {project.title.split('-')[1] || project.id}
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className={`relative p-5 ${isLarge ? 'lg:w-1/2 lg:p-8' : ''}`}>
          {/* Title with underline */}
          <div className="mb-4">
            <h3 className={`font-black text-primary mb-2 ${isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
              {project.title}
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          {/* Location - horizontal layout */}
          {project.location && (
            <div className="flex items-start gap-2 mb-4 p-3 bg-secondary/10 rounded-xl">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-primary">{project.location}</p>
            </div>
          )}

          {/* Description with expand */}
          {project.description && (
            <div className="mb-4">
              <p className={`text-sm text-primary/70 leading-relaxed ${!isExpanded && !isLarge ? 'line-clamp-2' : ''}`}>
                {project.description}
              </p>
              {!isLarge && project.description.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-secondary text-xs font-bold mt-2 flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {isExpanded ? '− Less' : '+ More'}
                </button>
              )}
            </div>
          )}

          {/* Tags - stacked layout */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">NMRDA</span>
            <span className="px-3 py-1.5 bg-secondary text-white text-xs font-bold rounded-lg">90% Finance</span>
          </div>

          {/* CTA buttons - dual action */}
          <div className="flex gap-2">
            <button
              onClick={handleWhatsApp}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-xl font-bold text-sm hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact
            </button>
            
          </div>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/20 to-transparent ${isHovered ? 'scale-150' : 'scale-100'} transition-transform duration-500`}></div>
    </div>
  )
}

export  function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  const allProjects = [
    ...projects.ongoing,
    ...projects.completed,
    ...projects.upcoming,
  ]

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab)

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-primary mb-4 leading-tight">
              Our Latest
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Developments
              </span>
            </h2>
            <p className="text-base text-primary/70 leading-relaxed max-w-xl">
              Premium residential projects across Nagpur's most sought-after locations
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-l-4 border-primary">
              <div className="text-3xl font-black text-primary">{projects.ongoing.length}</div>
              <div className="text-xs text-gray-600 font-bold mt-1">Ongoing</div>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-l-4 border-secondary">
              <div className="text-3xl font-black text-secondary">{projects.completed.length}</div>
              <div className="text-xs text-gray-600 font-bold mt-1">Completed</div>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-l-4 border-tcol">
              <div className="text-3xl font-black text-primary">{projects.upcoming.length}</div>
              <div className="text-xs text-gray-600 font-bold mt-1">Upcoming</div>
            </div>
          </div>
        </div>

        {/* Horizontal filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "All Projects", value: "all" },
            { label: "Ongoing", value: "ongoing" },
            { label: "Completed", value: "completed" },
            { label: "Upcoming", value: "upcoming" }
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                  : "bg-white text-primary hover:bg-gray-50 border-2 border-gray-200 hover:border-primary/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className={index % 7 === 0 ? 'lg:col-span-2' : ''}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl">
              <div className="text-6xl mb-4">🏗️</div>
              <p className="text-primary font-bold text-xl">No projects found</p>
            </div>
          )}
        </div>

        {/* Full width CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-10 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="relative z-10 lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1 text-center lg:text-left mb-8 lg:mb-0">
              <Sparkles className="w-12 h-12 text-white mx-auto lg:mx-0 mb-4" />
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Ready to Find Your Perfect Plot?
              </h3>
              <p className="text-white/90 text-base max-w-xl mx-auto lg:mx-0">
                Connect with our expert team for personalized project recommendations and exclusive deals
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}