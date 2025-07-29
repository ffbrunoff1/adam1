import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753762570776_0.png';
  const instagramUrl = 'https://www.instagram.com/adamyasu';

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-primary text-secondary"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <a href="#home" aria-label="Back to top">
              <img
                src={logoUrl}
                alt="Adam Logo"
                className="h-10 w-auto filter invert"
              />
            </a>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm text-secondary/70">
              &copy; {new Date().getFullYear()} Adam Yasu. All Rights Reserved.
            </p>
            <p className="text-sm text-secondary/70 mt-1">
              Crafting words that inspire action and ignite change.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Adam Yasu on Instagram"
              className="text-secondary/70 hover:text-white transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
