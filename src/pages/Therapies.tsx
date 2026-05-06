import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Dna, Zap, FlaskConical, Apple, Sun, Wind, Activity, Brain, HeartPulse, type LucideProps } from "lucide-react";
import { useTina, tinaField } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import type { TherapiesQuery } from "../../tina/__generated__/types";
import therapiesJson from "../../content/therapies.json";

// Icon lookup — maps icon name strings stored in JSON to Lucide components.
type IconComponent = React.ComponentType<LucideProps>;
const iconMap: Record<string, IconComponent> = {
  Sun, Wind, Dna, Zap, FlaskConical, Apple, Activity, Brain, HeartPulse,
};

export default function Therapies() {
  const [tinaProps, setTinaProps] = useState<{
    data: { therapies: TherapiesQuery["therapies"] };
    query: string;
    variables: object;
  }>({
    data: { therapies: therapiesJson as unknown as TherapiesQuery["therapies"] },
    query: "",
    variables: {},
  });

  useEffect(() => {
    client.queries
      .therapies({ relativePath: "therapies.json" })
      .then((res) => setTinaProps(res as typeof tinaProps))
      .catch(() => {});
  }, []);

  const { data } = useTina(tinaProps) as { data: { therapies: TherapiesQuery["therapies"] } };
  const d = data.therapies;

  return (
    <div className="pt-32 bg-soft-cream min-h-screen flex flex-col">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 leading-tight mb-6"
          data-tina-field={tinaField(d, "pageHeading")}
        >
          {d.pageHeading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-navy-700 max-w-2xl mx-auto"
          data-tina-field={tinaField(d, "pageSubheading")}
        >
          {d.pageSubheading}
        </motion.p>
      </section>

      {/* Service Grid */}
      <section className="px-6 md:px-12 pb-12 max-w-5xl mx-auto flex-grow">
        <div className="bg-white p-8 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="mb-6">
            <h3
              className="font-serif text-[24px] text-navy-900 mb-2"
              data-tina-field={tinaField(d, "cardBlockTitle")}
            >
              {d.cardBlockTitle}
            </h3>
            <p
              className="text-[13px] text-navy-700"
              data-tina-field={tinaField(d, "cardBlockSubtitle")}
            >
              {d.cardBlockSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {d.therapyList?.map((therapy, index) => {
              const IconComponent = iconMap[therapy?.icon ?? ""] ?? Sun;
              return (
                <motion.div
                  key={therapy?.title ?? index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 border border-[#f0f0f0] rounded-[8px] group"
                  data-tina-field={tinaField(d, "therapyList")}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-500 w-10 h-10 flex items-center justify-center bg-sage-300/20 rounded-full">
                    <IconComponent size={28} className="text-sage-600" />
                  </div>
                  <h4
                    className="text-[12px] uppercase text-sage-500 mb-2 tracking-[0.5px]"
                    data-tina-field={therapy ? tinaField(therapy, "title") : undefined}
                  >
                    {therapy?.title}
                  </h4>
                  <p
                    className="text-[13px] leading-[1.4] text-navy-700"
                    data-tina-field={therapy ? tinaField(therapy, "description") : undefined}
                  >
                    {therapy?.description}
                  </p>
                </motion.div>
              );
            })}
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
            src={d.ctaBannerImage ?? ""}
            alt={d.ctaBannerImageAlt ?? ""}
            className="w-full h-full object-cover"
            data-tina-field={tinaField(d, "ctaBannerImage")}
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
            data-tina-field={tinaField(d, "ctaBannerHeadline")}
          >
            {d.ctaBannerHeadline}
          </motion.h4>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-sage-500 text-white px-8 py-4 text-sm rounded-sm uppercase tracking-[1px] font-medium transition-all hover:bg-sage-600 shadow-xl shadow-navy-900/40"
            >
              <span data-tina-field={tinaField(d, "ctaBannerButtonLabel")}>{d.ctaBannerButtonLabel}</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
