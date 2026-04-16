import { Link } from "react-router-dom";
import { ArrowRight, Activity, Brain, HeartPulse, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "../assets/image1.jpeg";
import approachImg from "../assets/image2.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Luxury Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden bg-soft-cream">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sage-300/30 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gold-400/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center pt-12 lg:pt-0"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-gold-500" />
              <span className="text-xs font-medium uppercase tracking-[2px] text-navy-700">Premium Longevity Clinic</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[64px] font-serif text-navy-900 leading-[1.1] mb-6">
              Advanced Care Meets How You <span className="italic text-sage-600">Actually</span> Want to Feel.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-navy-700 leading-[1.6] max-w-[520px] mb-10 font-light">
              Living longer should also mean living better. Reclaim your strength and optimize your health through a personalized, science-driven approach.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/book"
                className="group relative px-8 py-4 bg-navy-900 text-white text-[13px] font-medium uppercase tracking-[1px] overflow-hidden rounded-sm flex items-center justify-center gap-3 transition-all hover:shadow-xl hover:shadow-navy-900/20"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-navy-800 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
              <Link
                to="/therapies"
                className="px-8 py-4 bg-transparent border border-navy-200 text-navy-900 text-[13px] font-medium uppercase tracking-[1px] rounded-sm hover:border-navy-900 hover:bg-navy-900/5 transition-all flex items-center justify-center"
              >
                Explore Therapies
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={heroImg}
                alt="Premium wellness treatment"
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/40 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-navy-700 uppercase tracking-wider font-semibold">Precision</p>
                  <p className="text-sm font-serif text-navy-900">Cellular Care</p>
                </div>
              </div>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                  className="h-full bg-gold-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3-Column Feature Block */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">A Foundation of Lasting Vitality</h2>
            <div className="w-16 h-px bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500">
                <Activity size={24} />
              </div>
              <h3 className="text-lg font-serif text-navy-900 mb-3">Metabolic Care</h3>
              <p className="text-sm text-navy-700 leading-relaxed font-light">
                Supporting metabolism, energy, and hormones at a cellular level to build a foundation of lasting vitality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500">
                <Brain size={24} />
              </div>
              <h3 className="text-lg font-serif text-navy-900 mb-3">Targeted Therapies</h3>
              <p className="text-sm text-navy-700 leading-relaxed font-light">
                Advanced treatments including precision peptides and vagus nerve stimulation to optimize biological balance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-lg font-serif text-navy-900 mb-3">Personalized Plans</h3>
              <p className="text-sm text-navy-700 leading-relaxed font-light">
                Optimized nutrition, structured exercise, and lifestyle interventions tailored to your unique physiology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Content Block */}
      <section className="py-24 px-6 md:px-12 bg-navy-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <motion.img
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={approachImg}
              alt="Proactive Health Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/30 mix-blend-multiply"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-xs font-medium uppercase tracking-[2px] text-gold-500">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Proactive Health for the Future.
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
              Instead of just treating illness, we focus on prevention—empowering the body to function at its highest potential.
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
              Our goal is to help you feel better today while reducing your risk of chronic disease tomorrow. We bridge the gap between advanced medical science and daily wellbeing.
            </p>
            <Link
              to="/philosophy"
              className="group inline-flex items-center gap-3 text-gold-500 hover:text-gold-400 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              Read Our Philosophy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
