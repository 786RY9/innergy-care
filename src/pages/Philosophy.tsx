import { motion } from "motion/react";
import philImg from "../assets/image4.jpeg";
import precisionImg from "../assets/root_cause_cellular.png";

export default function Philosophy() {
  return (
    <div className="pt-32 pb-24 bg-soft-white min-h-screen">
      {/* Header Section */}
      <section className="relative px-6 md:px-12 py-32 md:py-48 max-w-full mx-auto text-center mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={philImg}
            alt="Our Philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
          >
            Adding Life to Your Years.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-sage-300 font-serif italic"
          >
            Because longevity isn't just about adding years to your life.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement Component */}
      <section className="px-6 md:px-12 py-24 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-sage-300 p-6 md:p-8 rounded-[8px] border-l-4 border-sage-600 text-[14px] leading-[1.5] text-sage-600 text-left"
          >
            "At the core of our mission is a simple belief: living longer should also mean living better. Every individual is unique, and so is every plan we create. This is not a one-size-fits-all solution."
          </motion.blockquote>
        </div>
      </section>

      {/* The 'Why' Section */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-8">
              Addressing the Root Cause.
            </h2>
            <div className="space-y-6 text-lg text-navy-700 leading-relaxed">
              <p>
                Our programs are designed to address the root causes of fatigue, decline, and imbalance. We don't just treat symptoms; we look at the complex interplay of your cellular health, metabolism, and lifestyle.
              </p>
              <p>
                We combine foundational health strategies to support lasting transformation, guiding you toward sustainable vitality and improved performance. By utilizing advanced diagnostics, we create a clear picture of your current state of health.
              </p>
              <p>
                This proactive approach allows us to intervene early, optimizing your body's natural resilience and extending your healthspan—the period of life spent in good health, free from the chronic diseases and disabilities of aging.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            {/* Background image with ken-burns */}
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              src={precisionImg}
              alt="Human DNA and cellular biology — root cause analysis"
              className="w-full h-full object-cover scale-110"
            />

            {/* Deep gradient — ensures readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-navy-900/10" />

            {/* Top stat bar — 3 pillars of the business */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-6 left-6 flex items-center gap-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
            >
              <span className="text-[9px] uppercase tracking-[2px] text-white font-semibold">Prevention</span>
              <span className="mx-3 w-px h-3 bg-white/40" />
              <span className="text-[9px] uppercase tracking-[2px] text-white font-semibold">Precision</span>
              <span className="mx-3 w-px h-3 bg-white/40" />
              <span className="text-[9px] uppercase tracking-[2px] text-white font-semibold">Personalized</span>
            </motion.div>

            {/* Glassmorphism text panel — bottom anchor */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-navy-900/20 backdrop-blur-md border border-white/10 rounded-xl p-6">

                {/* Gold divider + label row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold-400" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-[10px] uppercase tracking-[2.5px] text-gold-400 font-semibold"
                  >
                    Advanced Diagnostics
                  </motion.span>
                </div>

                {/* Large headline */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="font-serif text-4xl md:text-5xl text-white leading-tight mb-3"
                >
                  Precision Analysis.<br />
                  <span className="italic text-sage-300">Root Cause Clarity.</span>
                </motion.h3>

                {/* Body */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="text-sm text-gray-300 font-light leading-relaxed"
                >
                  Every decision we make is backed by the latest biomarker testing and rigorous scientific methodology.
                </motion.p>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
