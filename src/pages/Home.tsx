import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Brain, HeartPulse, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useTina } from "tinacms/dist/react";
import { useTinaData } from "../lib/useTinaData";
import staticData from "../../content/homepage.json";

// Icon lookup — maps icon name strings (stored in JSON) to Lucide components.
// This lets the client pick icons via the CMS dropdown without touching code.
const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity size={24} />,
  Brain: <Brain size={24} />,
  HeartPulse: <HeartPulse size={24} />,
};

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
  const tinaResponse = useTinaData("homepage", "homepage.json");

  // Fallback to static data immediately, preventing a loading flash.
  // Once tinaResponse resolves, useTina connects to the CMS.
  const { data } = useTina(tinaResponse || ({
    query: "",
    variables: {},
    data: { homepage: staticData }
  } as any));

  const d = (data as any).homepage;

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
              <span className="text-xs font-medium uppercase tracking-[2px] text-navy-700">{d.heroEyebrow}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[64px] font-serif text-navy-900 leading-[1.1] mb-6">
              {d.heroHeadline} <span className="italic text-sage-600">{d.heroHeadlineEmphasis}</span> {d.heroHeadlineSuffix}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-navy-700 leading-[1.6] max-w-[520px] mb-10 font-light">
              {d.heroSubheading}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/book"
                className="group relative px-8 py-4 bg-navy-900 text-white text-[13px] font-medium uppercase tracking-[1px] overflow-hidden rounded-sm flex items-center justify-center gap-3 transition-all hover:shadow-xl hover:shadow-navy-900/20"
              >
                <span className="relative z-10">{d.heroCta1Label}</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-navy-800 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
              <Link
                to="/therapies"
                className="px-8 py-4 bg-transparent border border-navy-200 text-navy-900 text-[13px] font-medium uppercase tracking-[1px] rounded-sm hover:border-navy-900 hover:bg-navy-900/5 transition-all flex items-center justify-center"
              >
                {d.heroCta2Label}
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
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={d.heroImage}
                alt={d.heroImageAlt}
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay for visual depth */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-soft-cream/10" />
            </div>

            {/* Floating Badge */}
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
                  <p className="text-[10px] text-navy-700 uppercase tracking-wider font-semibold">{d.heroBadgeLabelTop}</p>
                  <p className="text-sm font-serif text-navy-900">{d.heroBadgeLabelBottom}</p>
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
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">{d.featureSectionHeading}</h2>
            <div className="w-16 h-px bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {d.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500">
                  {iconMap[feature.icon] ?? <Activity size={24} />}
                </div>
                <h3 className="text-lg font-serif text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-navy-700 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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
              src={d.approachImage}
              alt={d.approachImageAlt}
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
              <span className="text-xs font-medium uppercase tracking-[2px] text-gold-500">{d.approachEyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              {d.approachHeading}
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
              {d.approachParagraph1}
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
              {d.approachParagraph2}
            </p>
            <Link
              to="/philosophy"
              className="group inline-flex items-center gap-3 text-gold-500 hover:text-gold-400 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {d.approachLinkLabel} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
