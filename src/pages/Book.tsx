import { motion } from "motion/react";

export default function Book() {
  return (
    <div className="pt-32 pb-24 bg-soft-white min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white p-12 rounded-sm shadow-sm text-center"
      >
        <h1 className="text-3xl font-serif text-navy-900 mb-4">Book Consultation</h1>
        <p className="text-navy-700 mb-8">
          Please contact us directly to schedule your comprehensive consultation.
        </p>
        <div className="space-y-4 text-left border-t border-gray-100 pt-8">
          <p className="text-navy-900 font-medium">Email: <a href="mailto:hello@aethelclinic.com" className="text-sage-600 hover:text-sage-500">hello@aethelclinic.com</a></p>
          <p className="text-navy-900 font-medium">Phone: <a href="tel:+15551234567" className="text-sage-600 hover:text-sage-500">+1 (555) 123-4567</a></p>
        </div>
      </motion.div>
    </div>
  );
}
