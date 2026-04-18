import { motion } from "motion/react";

const sections = [
  {
    title: "Who We Are",
    content: `Innergy Care is a wellness clinic located at 2335 Tamiami Trl N, Suite 208, Naples, FL 34103. We offer personalized, science-driven health and longevity services. When you visit our website or contact us, you may share some personal information with us. This Privacy Policy explains what we collect, why we collect it, and how we keep it safe.`,
  },
  {
    title: "What Information We Collect",
    content: `We only collect information that is necessary to help you book a consultation or get in touch with us. This may include your name, email address, and phone number when you reach out via email or phone. We do not collect sensitive medical information through this website.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your contact information solely to respond to your inquiries and to help schedule consultations. We do not use your information for advertising, we do not sell it to anyone, and we do not share it with third parties except where required by law.`,
  },
  {
    title: "Cookies & Website Analytics",
    content: `Our website may use basic cookies to help the site function correctly. We may also use simple analytics tools to understand how visitors use our site (for example, which pages are visited most). This data is anonymous and cannot be used to identify you personally.`,
  },
  {
    title: "How We Protect Your Information",
    content: `We take reasonable precautions to keep any information you share with us secure. Our website uses standard security practices. However, no method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to ask us what information we hold about you, request that we correct or delete it, or ask us to stop contacting you. To exercise any of these rights, simply email us at innergyhealth1@gmail.com and we will respond promptly.`,
  },
  {
    title: "Links to Other Websites",
    content: `Our website may contain links to external sites (such as Google Maps). We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies separately.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will update the date at the bottom of this page. We encourage you to check back occasionally to stay informed.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy, please reach out:\n\nInnergy Care\n2335 Tamiami Trl N, Suite 208\nNaples, FL 34103\nEmail: innergyhealth1@gmail.com\nPhone: (786) 618-1808`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-soft-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12">

        {/* Header */}
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
            Privacy Policy
          </h1>
          <div className="w-16 h-px bg-gold-500 mb-6" />
          <p className="text-navy-700 font-light leading-relaxed">
            Last updated: April 2025
          </p>
          <p className="text-navy-700 font-light leading-relaxed mt-3">
            Your privacy matters to us. This page explains in plain language how Innergy Care handles any information you share with us.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100"
            >
              <h2 className="font-serif text-xl text-navy-900 mb-3">{section.title}</h2>
              <div className="w-8 h-px bg-gold-400 mb-4" />
              <p className="text-navy-700 text-[15px] font-light leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
