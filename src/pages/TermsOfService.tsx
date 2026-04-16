import { motion } from "motion/react";
import { Clock, Construction } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-soft-white min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-8"
        >
          <Construction size={36} className="text-sage-600" />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 text-gold-600 text-[11px] uppercase tracking-[2px] font-semibold px-4 py-2 rounded-full mb-6"
        >
          <Clock size={12} />
          In Progress
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-4xl md:text-5xl font-serif text-navy-900 leading-tight mb-4"
        >
          Terms of Service
        </motion.h1>

        {/* Divider */}
        <div className="w-16 h-px bg-gold-400 mx-auto mb-6" />

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg text-navy-700 leading-relaxed font-light max-w-md mx-auto mb-4"
        >
          Our Terms of Service are being carefully prepared to reflect the standards of care and transparency we uphold at Innergy Care.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-sm text-navy-500 font-light"
        >
          This page will be available soon. For any questions in the meantime, please contact us at{" "}
          <a href="mailto:Innergyhealth1@gmail.com" className="text-sage-600 hover:text-sage-500 transition-colors">
            Innergyhealth1@gmail.com
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
