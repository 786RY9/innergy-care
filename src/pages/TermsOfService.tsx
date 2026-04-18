import { motion } from "motion/react";

const sections = [
  {
    title: "Acceptance of These Terms",
    content: `By visiting the Innergy Care website (innergycare.com) or contacting us for services, you agree to these Terms of Service. If you do not agree, please do not use our website. These terms apply to all visitors and users of our site.`,
  },
  {
    title: "About Our Services",
    content: `Innergy Care is a wellness and longevity clinic offering personalized health consultations and targeted therapies. The information on our website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before beginning any new health program.`,
  },
  {
    title: "Booking & Consultations",
    content: `All consultations are by appointment only. To book, contact us by phone at (786) 618-1808 or by email at innergyhealth1@gmail.com. We reserve the right to decline or reschedule appointments at our discretion. We ask that you provide at least 24 hours' notice if you need to cancel or reschedule.`,
  },
  {
    title: "Website Content",
    content: `All content on this website — including text, images, logos, and design — is the property of Innergy Care and is protected by applicable copyright laws. You may not copy, reproduce, or distribute any content from this site without our written permission.`,
  },
  {
    title: "Accuracy of Information",
    content: `We make every effort to ensure the information on our website is accurate and up to date. However, we cannot guarantee that all information is always current or error-free. We reserve the right to update or remove content at any time without notice.`,
  },
  {
    title: "No Medical Advice",
    content: `Nothing on this website constitutes medical advice. Innergy Care does not diagnose, treat, cure, or prevent any disease. Any health-related information shared on this website is intended for general wellness education only. Please consult your physician or a licensed healthcare provider for personalized medical guidance.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites for your convenience. Innergy Care is not responsible for the content, accuracy, or practices of any third-party sites. Visiting those links is entirely at your own risk.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, Innergy Care shall not be liable for any damages arising from your use of our website or services. This includes, but is not limited to, any errors or omissions in website content, or any loss or damage resulting from your reliance on information provided on the site.`,
  },
  {
    title: "Changes to These Terms",
    content: `We may update these Terms of Service from time to time. When we do, we will update the date at the top of this page. Your continued use of the website after any changes means you accept the updated terms.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about these Terms of Service, please reach out:\n\nInnergy Care\n2335 Tamiami Trl N, Suite 208\nNaples, FL 34103\nEmail: innergyhealth1@gmail.com\nPhone: (786) 618-1808`,
  },
];

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <div className="w-16 h-px bg-gold-500 mb-6" />
          <p className="text-navy-700 font-light leading-relaxed">
            Last updated: April 2025
          </p>
          <p className="text-navy-700 font-light leading-relaxed mt-3">
            Please read these terms carefully. They explain the rules for using our website and working with Innergy Care.
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
