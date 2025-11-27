"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle, Sparkles, Phone, Mail } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What types of properties do you offer?",
    answer: "We offer a wide range of residential and commercial plots in prime locations across Nagpur, including Besa, Beltarodi, Shankarpur, Wardha Road, and more. All properties are NMRDA sanctioned and RERA approved.",
    category: "Properties"
  },
  {
    id: 2,
    question: "What is the price range for your plots?",
    answer: "Our plots start from ₹22 Lakh onwards, depending on the location, size, and amenities. We offer flexible payment plans and financing options to suit various budgets.",
    category: "Pricing"
  },
  {
    id: 3,
    question: "Are all your projects RERA approved?",
    answer: "Yes, all our projects are 100% RERA approved and NMRDA sanctioned. We ensure complete legal compliance and transparency in all our dealings.",
    category: "Legal"
  },
  {
    id: 4,
    question: "What financing options are available?",
    answer: "We offer multiple financing options including bank loans, in-house payment plans, and EMI facilities. Our team will help you choose the best option based on your financial situation.",
    category: "Finance"
  },
  {
    id: 5,
    question: "How can I schedule a site visit?",
    answer: "You can schedule a site visit by contacting us through our website, calling our helpline, or using the WhatsApp button. Our team will confirm your visit within 24 hours and provide all necessary details.",
    category: "Visits"
  },
  {
    id: 6,
    question: "What amenities are included?",
    answer: "Our properties come with world-class amenities including 24/7 security, power backup, green spaces, community halls, and more. Specific amenities vary by project location.",
    category: "Amenities"
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState(1)
  const [filter, setFilter] = useState("all")

  const filteredFaqs = filter === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category.toLowerCase() === filter)

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" style={{ animationDelay: '3s' }} />
        <HelpCircle className="absolute top-10 right-20 w-20 h-20 text-primary/5 animate-float" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <HelpCircle className="w-4 h-4 text-secondary animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              FAQ
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 leading-tight">
            Got Questions?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              We've Got Answers
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-primary/70 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our properties and services
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Left: Filter Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-4">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border-2 border-primary/20">
                <h3 className="text-lg font-black text-primary mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {["all", "properties", "pricing", "legal", "finance", "visits", "amenities"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        filter === category
                          ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md scale-[1.02]"
                          : "bg-primary/5 text-primary hover:bg-primary/10 border border-primary/20 hover:border-primary/40"
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-5 sm:p-6 shadow-xl text-white">
                <h3 className="text-lg font-black mb-2">Need More Help?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Our team is ready to assist you
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+919822172379"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-white/80 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 9822172379
                  </a>
                  <a
                    href="mailto:rajeshgingle@gmail.com"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-white/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id
                
                return (
                  <div
                    key={faq.id}
                    className={`group bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 shadow-md ${
                      isOpen 
                        ? "border-primary shadow-xl shadow-primary/20 scale-[1.01]" 
                        : "border-primary/10 hover:border-primary/30 hover:shadow-lg"
                    }`}
                    style={{ 
                      animation: 'fadeInUp 0.5s ease-out forwards',
                      animationDelay: `${index * 50}ms`,
                      opacity: 0
                    }}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full px-5 sm:px-6 py-5 sm:py-6 flex items-start gap-3 sm:gap-4 hover:bg-primary/5 transition-colors text-left"
                    >
                      {/* Question Number Badge */}
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-base transition-all duration-300 shadow-md ${
                        isOpen 
                          ? "bg-gradient-to-br from-primary to-secondary text-white scale-110 rotate-3" 
                          : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      }`}>
                        {faq.id}
                      </div>

                      {/* Question Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span
                            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                            className={`font-bold text-sm sm:text-base lg:text-lg leading-snug transition-all ${
                              isOpen 
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" 
                                : "text-primary"
                            }`}
                          >
                            {faq.question}
                          </span>
                          
                          {/* Chevron Icon */}
                          <ChevronDown
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        
                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary/70 rounded-full font-semibold border border-primary/20">
                          {faq.category}
                        </span>
                      </div>
                    </button>

                    {/* Answer Section */}
                    {isOpen && (
                      <div 
                        className="px-5 sm:px-6 pb-5 sm:pb-6 border-t-2 border-primary/10"
                        style={{ animation: 'slideDown 0.3s ease-out forwards' }}
                      >
                        <div className="pt-5 sm:pt-6">
                          <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
                            {/* Answer Icon */}
                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            {/* Answer Text */}
                            <p className="text-primary/80 leading-relaxed text-sm sm:text-base flex-1">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border-2 border-primary/20">
                <HelpCircle className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-primary/70 font-semibold">No questions found in this category</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-primary/20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-primary mb-3">
              Still Have Questions?
            </h3>
            <p className="text-primary/70 text-sm sm:text-base mb-6 sm:mb-8">
              Our team is here to help you. Get in touch with us for personalized assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
              </button>
              <a
                href="tel:+919822172379"
                className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-sm sm:text-base transition-all hover:scale-105 hover:bg-primary/5"
              >
                Call +91 9822172379
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}