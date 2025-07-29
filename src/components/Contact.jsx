import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Connect with <span className="gradient-text">Adam</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary/70">
            Have a question or want to share your story? I'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary/80 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-accent-start"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary/80 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-accent-start"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary/80 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-accent-start"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 gradient-button font-bold text-lg px-10 py-4 rounded-full hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={24} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={22} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center h-6">
            {submitSuccess && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 flex items-center justify-center gap-2"
              >
                <CheckCircle size={20} /> Message sent successfully!
              </motion.p>
            )}
            {submitError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 flex items-center justify-center gap-2"
              >
                <AlertTriangle size={20} /> Error: {submitError}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
