"use client"

import { useState, useEffect } from "react"
import { ArrowRight, MapPin, Phone, Building2, Sparkles, Star, Eye } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
  videoId?: string
}

const projects: {
  completed: Project[]
  ongoing: Project[]
  upcoming: Project[]
} = {
  ongoing: [
     {
      id: 7,
      title: "Mahalaxmi Nagar - 45",
      image: "/ongoingProject11.webp",
      description: `Mahalaxmi Nagar-45 is a Premium Residential Plotted Development Project Located South Nagpur Near Samruddhi Mahamarg
Location - The Project is Situated in Mouza - Sumthana Behind Godrej Properties Close to D- Mart Connectivity - The Location Offers Excellent Connectivity to Major City Hubs, Including Nagpur Airport, AIIMS, IIM, TCS, INFOSYS,TECH MAHINDRA, Patanjali as soon as Mihan.`,
      location: `MOUZA - SHANKARPUR`,
      status: "ongoing",
      videoId: "Mahalaxmi_Infra_bite_3_20-12-25mp4_dk19mt"
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
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: `Mahalaxmi Nagar – 42, near Jamtha on Wardha Road, offers well-connected plots perfect for homes or businesses. Approved by NMRDA and equipped with RL, this project comes with excellent amenities and easy bank finance options.
Best for investment to buy plots in Nagpur.`,
      location: `MOUZA - JAMTHA`,
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
  ],
  completed: [],
  upcoming: []
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [playerInstance, setPlayerInstance] = useState<any>(null)

  useEffect(() => {
    if (showVideo && project.videoId) {
      const initPlayer = () => {
        if ((window as any).cloudinary?.videoPlayer) {
          const player = (window as any).cloudinary.videoPlayer(`player-${project.id}`, {
            cloudName: 'dxujnm2sl',
            publicId: project.videoId,
            controls: true,
            autoplay: true,
            fluid: true,
            aspectRatio: '9:16',
            playbackRates: [0.5, 1, 1.5, 2]
          });
          setPlayerInstance(player);
        }
      };
      
      if ((window as any).cloudinary?.videoPlayer) {
        initPlayer();
      } else {
        setTimeout(initPlayer, 500);
      }
    }
    
    return () => {
      if (playerInstance) {
        try {
          playerInstance.dispose();
        } catch (e) {}
      }
    };
  }, [showVideo, project.videoId, project.id])
  
  const handleCloseVideo = () => {
    if (playerInstance) {
      try {
        playerInstance.pause();
      } catch (e) {}
    }
    setShowVideo(false);
  };

  const statusConfig = {
    completed: { label: "Completed", color: "bg-primary" },
    ongoing: { label: "Ongoing", color: "bg-secondary" },
    upcoming: { label: "Upcoming", color: "bg-tcol" },
  }

  const config = statusConfig[project.status as keyof typeof statusConfig]
  const isLarge = index % 7 === 0

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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className={`relative ${isLarge ? 'lg:flex' : ''} ${showVideo ? 'lg:min-h-[700px]' : ''}`}>
        <div className={`relative overflow-hidden ${isLarge ? 'lg:w-1/2' : 'w-full'} ${showVideo ? 'h-[500px] lg:h-[700px]' : isLarge ? 'h-64 lg:h-auto' : 'h-48'}`}>
          {project.videoId && showVideo ? (
            <div className="absolute inset-0 bg-black z-30 flex flex-col">
              <button
                onClick={handleCloseVideo}
                className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-xl transition-all text-lg font-bold"
              >
                ✕
              </button>
              <div className="flex-1 w-full">
                <video
                  id={`player-${project.id}`}
                  className="cld-video-player"
                  controls
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          ) : (
            <>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 rotate-2' : 'scale-100'}`}
              />
              
              {project.videoId && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </button>
              )}
            </>
          )}
          
          {!showVideo && (
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/50 to-transparent opacity-80"></div>
          )}
          
          <div className="absolute top-4 right-4 z-20">
            <div className={`${config.color} text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-sm`}>
              {config.label}
            </div>
          </div>

          <div className="absolute bottom-4 left-4 z-20">
            <div className="text-white/30 text-6xl font-black leading-none">
              {project.title.split('-')[1] || project.id}
            </div>
          </div>
        </div>

        <div className={`relative p-5 ${isLarge ? 'lg:w-1/2 lg:p-8' : ''} ${showVideo ? 'lg:flex lg:flex-col lg:justify-center' : ''}`}>
          <div className="mb-4">
            <h3 className={`font-black text-primary mb-2 ${isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
              {project.title}
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          {project.location && (
            <div className="flex items-start gap-2 mb-4 p-3 bg-secondary/10 rounded-xl">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-primary">{project.location}</p>
            </div>
          )}

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

          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">NMRDA</span>
            <span className="px-3 py-1.5 bg-secondary text-white text-xs font-bold rounded-lg">90% Finance</span>
          </div>

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

      <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/20 to-transparent ${isHovered ? 'scale-150' : 'scale-100'} transition-transform duration-500`}></div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  useEffect(() => {
    if (!document.getElementById('cloudinary-script')) {
      const script = document.createElement('script');
      script.id = 'cloudinary-script';
      script.src = 'https://unpkg.com/cloudinary-video-player@2.1.3/dist/cld-video-player.min.js';
      script.async = true;
      document.body.appendChild(script);
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/cloudinary-video-player@2.1.3/dist/cld-video-player.min.css';
      document.head.appendChild(link);
    }
  }, [])

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
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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