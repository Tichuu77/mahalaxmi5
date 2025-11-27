"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Award, Sparkles } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setFormState({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" style={{ animationDelay: '3s' }} />
        <Sparkles className="absolute top-10 left-20 w-20 h-20 text-primary/5 animate-float" />
        <Mail className="absolute bottom-10 right-20 w-24 h-24 text-secondary/5" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              Get in Touch
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 leading-tight">
            Let's Start a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Conversation
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-primary/70 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to get started? We'd love to hear from you and help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Contact Info & Details */}
          <div className="space-y-6">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href="tel:+919822172379"
                className="group block relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-primary text-lg mb-1 flex items-center gap-2">
                      Phone
                      <span className="text-xs font-normal px-2 py-0.5 bg-primary/10 text-primary rounded-full">Call Now</span>
                    </h3>
                    <p className="text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all font-bold text-lg">
                     +91 9822172379
                    </p>
                    <p className="text-primary/60 text-sm mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </div>
              </a>

              <a 
                href="mailto:rajeshgingle@gmail.com"
                className="group block relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-secondary/20 hover:border-secondary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-primary text-lg mb-1 flex items-center gap-2">
                      Email
                      <span className="text-xs font-normal px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">Write Us</span>
                    </h3>
                    <p className="text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary transition-all font-bold text-base break-all">
                     rajeshgingle@gmail.com
                    </p>
                    <p className="text-primary/60 text-sm mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Response in 24 hours
                    </p>
                  </div>
                </div>
              </a>

              <div className="relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-primary/20 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-primary text-lg mb-1">Visit Us</h3>
                    <p className="text-primary/80 font-semibold">
                      Nagpur, Maharashtra<br />India 441106
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Why Choose Us?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Quick Response Time</p>
                    <p className="text-xs text-white/80">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Free Consultation</p>
                    <p className="text-xs text-white/80">Expert advice at no cost</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Trusted by 500+ Clients</p>
                    <p className="text-xs text-white/80">Join our satisfied customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-white border-2 border-primary/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
              {submitStatus === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-primary/70 mb-6">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:scale-105 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-primary mb-2">Send Us a Message</h3>
                    <p className="text-sm text-primary/60">Fill out the form below and we'll get in touch shortly</p>
                  </div>

                  <div className="space-y-5">
                    {/* Name and Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-primary font-bold mb-2 text-sm">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:bg-white focus:outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-primary font-bold mb-2 text-sm">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:bg-white focus:outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-primary font-bold mb-2 text-sm">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:bg-white focus:outline-none transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-primary font-bold mb-2 text-sm">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:bg-white focus:outline-none transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 text-sm flex items-start gap-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Please fill in all required fields and try again.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}