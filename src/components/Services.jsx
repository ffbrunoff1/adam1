import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const coreThemes = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      title: 'Building Resilience',
      description:
        'Discover the strength to face any challenge. My stories explore the power of perseverance and the art of bouncing back stronger from adversity.',
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: 'Finding Purpose',
      description:
        'Embark on a journey of self-discovery to find your true calling. Learn to align your actions with your deepest values for a more fulfilling life.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: 'Cultivating Growth',
      description:
        'Embrace a mindset of continuous improvement. My writings provide tools and inspiration to help you grow beyond your limits and achieve your dreams.',
    },
  ];

  return (
    <section id="writings" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Core <span className="gradient-text">Themes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary/70">
            My work revolves around three fundamental pillars designed to guide
            you toward a more empowered and meaningful existence.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {coreThemes.map((theme, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 w-16 h-16 rounded-full gradient-button flex items-center justify-center">
                {theme.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {theme.title}
              </h3>
              <p className="text-primary/80 leading-relaxed flex-grow">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
