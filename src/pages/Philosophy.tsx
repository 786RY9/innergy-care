import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <div className="pt-32 pb-24 bg-soft-white min-h-screen">
      {/* Header Section */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-6"
        >
          Adding Life to Your Years.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-sage-600 font-serif italic"
        >
          Because longevity isn't just about adding years to your life.
        </motion.p>
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
            className="relative h-[600px]"
          >
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Microscope and lab equipment"
              className="w-full h-full object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sage-300/20 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-navy-900/5 rounded-full -z-10 blur-3xl"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
