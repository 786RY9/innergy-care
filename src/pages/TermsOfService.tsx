import { motion } from "motion/react";

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-soft-cream min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-[10px] uppercase tracking-[3px] text-gold-500 font-semibold">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-navy-900 leading-tight mb-4">
            Terms of Service
          </h1>
          <div className="w-16 h-px bg-gold-500 mb-6" />
          
          <div className="bg-white rounded-xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 mt-10">
            <h2 className="font-serif text-xl text-navy-900 mb-3">Document Status</h2>
            <div className="w-8 h-px bg-gold-400 mb-4" />
            <p className="text-navy-700 text-lg font-light leading-relaxed">
              In progress, not made yet.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
