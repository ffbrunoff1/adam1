import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding bg-background"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="container mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-primary mb-6 leading-tight"
        >
          Ignite Your Inner Flame with{' '}
          <span className="gradient-text animate-gradient-text">Adam's</span>{' '}
          Writings.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg md:text-xl text-primary/70 mb-10"
        >
          Transform Your Life, One Page at a Time. Discover powerful stories and
          insights designed to inspire, motivate, and uplift you on your
          journey.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="#writings"
            className="inline-block gradient-button font-bold text-lg px-10 py-4 rounded-full hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Inspired Today
          </a>
        </motion.div>
      </motion.div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #e5e7eb 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
