import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Dna, Zap, FlaskConical, Apple, Sun, Wind } from "lucide-react";
import ctaImg from "../assets/image1.jpeg";

export default function Therapies() {
  const therapies = [
    {
      title: "Red Light Therapy",
      description: "Non-invasive, light-based therapy that uses specific wavelengths to stimulate cellular repair, enhance collagen production, and reduce inflammation, supporting skin rejuvenation, tissue healing, and overall recovery.",
      icon: <Sun size={28} className="text-sage-600" />,
    },
    {
      title: "Therapeutic Leg Compression",
      description: "Dynamic compression therapy using rhythmic air pressure to enhance circulation, support efficient oxygen and nutrient delivery, and promote the removal of metabolic waste—accelerating recovery, reducing muscle soreness, and minimizing inflammation.",
      icon: <Wind size={28} className="text-sage-600" />,
    },
    {
      title: "Metabolic & Cellular Care",
      description: "Improving how your body functions at a cellular level to support resilience, energy production, and overall metabolic flexibility.",
      icon: <Dna size={28} className="text-sage-600" />,
    },
    {
      title: "Vagus Nerve Stimulation",
      description: "Advanced neurological therapies to restore energy, balance the nervous system, and promote deep recovery and stress resilience.",
      icon: <Zap size={28} className="text-sage-600" />,
    },
    {
      title: "Targeted Peptides",
      description: "Precision, science-driven medicine utilizing specific amino acid sequences to optimize your biological balance and tissue repair.",
      icon: <FlaskConical size={28} className="text-sage-600" />,
    },
    {
      title: "Foundational Strategies",
      description: "Optimized nutrition, structured exercise, and sleep architecture interventions designed for a longer, healthier, and more vibrant life.",
      icon: <Apple size={28} className="text-sage-600" />,
    },
  ];

  return (
    <div className="pt-32 bg-soft-cream min-h-screen flex flex-col">
      {/* Header Component */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 leading-tight mb-6"
        >
          Targeted Therapies &amp; Interventions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-navy-700 max-w-2xl mx-auto"
        >
          Comprehensive, individualized plans utilizing advanced science and foundational lifestyle strategies.
        </motion.p>
      </section>

      {/* Service Grid */}
      <section className="px-6 md:px-12 pb-12 max-w-5xl mx-auto flex-grow">
        <div className="bg-white p-8 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="mb-6">
            <h3 className="font-serif text-[24px] text-navy-900 mb-2">Targeted Interventions</h3>
            <p className="text-[13px] text-navy-700">Comprehensive, individualized medical plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {therapies.map((therapy, index) => (
              <motion.div
                key={therapy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 border border-[#f0f0f0] rounded-[8px] group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-500 w-10 h-10 flex items-center justify-center bg-sage-300/20 rounded-full">
                  {therapy.icon}
                </div>
                <h4 className="text-[12px] uppercase text-sage-500 mb-2 tracking-[0.5px]">{therapy.title}</h4>
                <p className="text-[13px] leading-[1.4] text-navy-700">
                  {therapy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call-to-Action Banner */}
      <section className="relative py-32 px-6 md:px-12 mt-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={ctaImg}
            alt="Clinic Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-white mb-8"
          >
            Ready to reclaim your strength?
          </motion.h4>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/book"
              className="inline-flex items-center justify-center bg-sage-500 text-white px-8 py-4 text-sm rounded-sm uppercase tracking-[1px] font-medium transition-all hover:bg-sage-600 shadow-xl shadow-navy-900/40"
            >
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
