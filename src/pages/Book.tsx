import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import bookPageData from "../../content/bookPage.json";
import settings from "../../content/settings.json";

export default function Book() {
  const d = bookPageData;
  const s = settings;

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
            <span className="text-[10px] uppercase tracking-[3px] text-gold-500 font-semibold">{d.eyebrow}</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-navy-900 leading-tight mb-4">
            {d.heading}
          </h1>
          <p className="text-navy-700 font-light text-lg max-w-xl mx-auto leading-relaxed">
            {d.subheading}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Phone */}
          <motion.a
            href={`tel:${s.phoneHref}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-400">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">{d.phoneCardLabel}</p>
              <p className="text-navy-900 font-serif text-xl">{s.phone}</p>
              <p className="text-sm text-navy-700 font-light mt-1">{d.phoneCardSub}</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${s.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-400">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">{d.emailCardLabel}</p>
              <p className="text-navy-900 font-serif text-lg break-all">{s.email}</p>
              <p className="text-sm text-navy-700 font-light mt-1">{d.emailCardSub}</p>
            </div>
          </motion.a>

          {/* Address */}
          <motion.a
            href={s.mapsUrl}
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
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">{d.addressCardLabel}</p>
              <p className="text-navy-900 font-serif text-lg leading-snug">
                {s.addressLine1}<br />
                {s.addressLine2}<br />
                {s.addressCityStateZip}
              </p>
            </div>
          </motion.a>

          {/* Appointment */}
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
              <p className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1">{d.appointmentCardLabel}</p>
              <p className="text-navy-900 font-serif text-lg">{d.appointmentCardValue}</p>
              <p className="text-sm text-navy-700 font-light mt-1">{d.appointmentCardSub}</p>
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
          {d.footerNote}
        </motion.p>

      </div>
    </div>
  );
}
