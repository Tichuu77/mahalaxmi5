import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden pt-16 pb-8">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-26 h-26 lg:w-36 lg:h-36  rounded-xl p-2 ">
                <img src="/Malaxmi-Final-Logo.-2png.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="font-black text-white text-lg leading-tight"
              >
                Mahalaxmi<br/> Infra
              </span>
            </div>
            <p className="text-white/80 lg:ml-5 text-sm leading-relaxed">
              Delivering premium real estate solutions with excellence and innovation since years.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:mt-10">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-black text-white text-lg mb-6 flex items-center gap-2"
            >
              <div className="w-1 h-6 bg-white rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                {href : "#about", label : "About Us"}, 
                {href : "#amenities", label : "Amenities"}, 
                {href : "#projects", label : "Projects"}, 
                {label: "Gallery", href: "#gallery"},
                {label: "User Guide", href: "#user-guide"},
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:mt-10">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-black text-white text-lg mb-6 flex items-center gap-2"
            >
              <div className="w-1 h-6 bg-white rounded-full" />
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                {label: "News & Updates", href: "#news"}, 
                {href: "#testimonials", label: "Testimonials"}, 
                {href: "#faq", label: "FAQ"},
                {href: "#contact", label: "Contact Us"},
                {href: "#why-choose-us", label: "Why Choose Us"},
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:mt-10">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-black text-white text-lg mb-6 flex items-center gap-2"
            >
              <div className="w-1 h-6 bg-white rounded-full" />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                Rajesh Ingle
              </li>
              <li>
                <a 
                  href="tel:+919822172379"
                  className="group flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Call Us</p>
                    <p className="text-sm font-semibold">+91 9822172379</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:rajeshgingle@gmail.com"
                  className="group flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/60 mb-0.5">Email Us</p>
                    <p className="text-sm font-semibold break-all">rajeshgingle@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-0.5">Visit Us</p>
                  <p className="text-sm font-semibold">Nagpur, Maharashtra<br/>India 441106</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center text-white/80 text-sm">
          <p className="flex items-center gap-1">
            © {currentYear} Mahalaxmi  Infra. Made with 
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-float" /> 
            in India
          </p>
        </div>
      </div>
    </footer>
  )
}