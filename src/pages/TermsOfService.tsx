import { motion } from "motion/react";
import { Sparkles, ToggleRight } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-soft-cream min-h-screen relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sage-300/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gold-400/10 blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={16} className="text-gold-500" />
            <span className="text-[10px] uppercase tracking-[3px] text-navy-700 font-semibold">Legal Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif text-navy-900 leading-tight mb-8">
            Terms of <span className="italic text-sage-600">Service</span>
          </h1>
          
          <div className="w-16 h-px bg-gold-500 mx-auto mb-12" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/60 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
            
            <div className="w-16 h-16 bg-sage-100/50 rounded-full flex items-center justify-center mx-auto mb-6 text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500">
              <ToggleRight size={28} className="animate-pulse" />
            </div>
            
            <h2 className="font-serif text-2xl text-navy-900 mb-4">In Progress</h2>
            <p className="text-navy-700 text-lg font-light leading-relaxed max-w-md mx-auto">
              We are currently establishing our terms to ensure the best experience for our clients. Please check back shortly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
