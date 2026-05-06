import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTina, tinaField } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import type { BookPageQuery, SettingsQuery } from "../../tina/__generated__/types";
import bookPageJson from "../../content/bookPage.json";
import settingsJson from "../../content/settings.json";

export default function Book() {
  const [bookProps, setBookProps] = useState<{
    data: { bookPage: BookPageQuery["bookPage"] };
    query: string;
    variables: object;
  }>({
    data: { bookPage: bookPageJson as BookPageQuery["bookPage"] },
    query: "",
    variables: {},
  });

  const [settingsProps, setSettingsProps] = useState<{
    data: { settings: SettingsQuery["settings"] };
    query: string;
    variables: object;
  }>({
    data: { settings: settingsJson as SettingsQuery["settings"] },
    query: "",
    variables: {},
  });

  useEffect(() => {
    client.queries
      .bookPage({ relativePath: "bookPage.json" })
      .then((res) => setBookProps(res as typeof bookProps))
      .catch(() => {});

    client.queries
      .settings({ relativePath: "settings.json" })
      .then((res) => setSettingsProps(res as typeof settingsProps))
      .catch(() => {});
  }, []);

  const { data: bookData } = useTina(bookProps) as { data: { bookPage: BookPageQuery["bookPage"] } };
  const { data: settingsData } = useTina(settingsProps) as { data: { settings: SettingsQuery["settings"] } };
  const d = bookData.bookPage;
  const s = settingsData.settings;

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
            <span
              className="text-[10px] uppercase tracking-[3px] text-gold-500 font-semibold"
              data-tina-field={tinaField(d, "eyebrow")}
            >
              {d.eyebrow}
            </span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-serif text-navy-900 leading-tight mb-4"
            data-tina-field={tinaField(d, "heading")}
          >
            {d.heading}
          </h1>
          <p
            className="text-navy-700 font-light text-lg max-w-xl mx-auto leading-relaxed"
            data-tina-field={tinaField(d, "subheading")}
          >
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
              <p
                className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1"
                data-tina-field={tinaField(d, "phoneCardLabel")}
              >
                {d.phoneCardLabel}
              </p>
              <p
                className="text-navy-900 font-serif text-xl"
                data-tina-field={tinaField(s, "phone")}
              >
                {s.phone}
              </p>
              <p
                className="text-sm text-navy-700 font-light mt-1"
                data-tina-field={tinaField(d, "phoneCardSub")}
              >
                {d.phoneCardSub}
              </p>
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
              <p
                className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1"
                data-tina-field={tinaField(d, "emailCardLabel")}
              >
                {d.emailCardLabel}
              </p>
              <p
                className="text-navy-900 font-serif text-lg break-all"
                data-tina-field={tinaField(s, "email")}
              >
                {s.email}
              </p>
              <p
                className="text-sm text-navy-700 font-light mt-1"
                data-tina-field={tinaField(d, "emailCardSub")}
              >
                {d.emailCardSub}
              </p>
            </div>
          </motion.a>

          {/* Address */}
          <motion.a
            href={s.mapsUrl ?? "#"}
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
              <p
                className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1"
                data-tina-field={tinaField(d, "addressCardLabel")}
              >
                {d.addressCardLabel}
              </p>
              <p className="text-navy-900 font-serif text-lg leading-snug">
                <span data-tina-field={tinaField(s, "addressLine1")}>{s.addressLine1}</span>
                <br />
                <span data-tina-field={tinaField(s, "addressLine2")}>{s.addressLine2}</span>
                <br />
                <span data-tina-field={tinaField(s, "addressCityStateZip")}>{s.addressCityStateZip}</span>
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
              <p
                className="text-[11px] uppercase tracking-[2px] text-sage-600 font-semibold mb-1"
                data-tina-field={tinaField(d, "appointmentCardLabel")}
              >
                {d.appointmentCardLabel}
              </p>
              <p
                className="text-navy-900 font-serif text-lg"
                data-tina-field={tinaField(d, "appointmentCardValue")}
              >
                {d.appointmentCardValue}
              </p>
              <p
                className="text-sm text-navy-700 font-light mt-1"
                data-tina-field={tinaField(d, "appointmentCardSub")}
              >
                {d.appointmentCardSub}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-navy-600 font-light"
          data-tina-field={tinaField(d, "footerNote")}
        >
          {d.footerNote}
        </motion.p>

      </div>
    </div>
  );
}
