import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function About() {
  const authorImageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753762563808_xojne6r9x4_Adam_Yasu.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: 'beforeChildren' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.95] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={imageVariants}
            className="w-full h-full flex justify-center"
          >
            <img
              src={authorImageUrl}
              alt="Adam Yasu, Writer"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div variants={textVariants}>
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              About the <span className="gradient-text">Author</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg text-primary/80 mb-6 leading-relaxed"
            >
              Adam Yasu is a passionate writer dedicated to crafting
              motivational literature that sparks change. With a unique ability
              to weave profound life lessons into compelling narratives, Adam's
              work serves as a beacon of hope and a catalyst for personal
              growth.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="text-lg text-primary/80 mb-8 leading-relaxed"
            >
              His mission is to empower readers to overcome obstacles, discover
              their purpose, and unlock their fullest potential. Each story is
              an invitation to look inward and ignite the powerful flame that
              resides within.
            </motion.p>
            <motion.div variants={textVariants}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 gradient-button font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-accent-start/40 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <BookOpen size={20} />
                Start Your Reading Journey
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
