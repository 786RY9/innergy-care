import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Book() {
  return (
    <div className="pt-32 pb-24 bg-soft-cream min-h-screen px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-[10px] uppercase tracking-[3px] text-gold-500 font-semibold">Get In Touch</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-navy-900 leading-tight mb-4">
            Book Your Consultation
          </h1>
          <p className="text-navy-700 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Ready to take the first step? Reach out to us directly and we'll get you scheduled for a comprehensive, personalized consultation.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Phone */}
          <motion.a
            href="tel:+17866181808"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-400">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">Call Us</p>
              <p className="text-navy-900 font-serif text-xl">(786) 618-1808</p>
              <p className="text-sm text-navy-700 font-light mt-1">We'd love to hear from you</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:innergyhealth1@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-400">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">Email Us</p>
              <p className="text-navy-900 font-serif text-lg break-all">innergyhealth1@gmail.com</p>
              <p className="text-sm text-navy-700 font-light mt-1">We typically respond within 24 hours</p>
            </div>
          </motion.a>

          {/* Address */}
          <motion.a
            href="https://maps.google.com/?q=2335+Tamiami+Trl+N+Suite+208+Naples+FL+34103"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-400">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">Visit Us</p>
              <p className="text-navy-900 font-serif text-lg leading-snug">
                2335 Tamiami Trl N<br />
                Suite 208<br />
                Naples, FL 34103
              </p>
            </div>
          </motion.a>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">Contact Us</p>
              <p className="text-navy-900 font-serif text-lg">By Appointment</p>
              <p className="text-sm text-navy-700 font-light mt-1">Call or email to schedule your visit</p>
            </div>
          </motion.div>

        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-navy-600 font-light"
        >
          All consultations are personalized and conducted by our care team. We look forward to connecting with you.
        </motion.p>

      </div>
    </div>
  );
}
