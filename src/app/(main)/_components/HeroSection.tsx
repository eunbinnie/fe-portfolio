'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="flex h-dvh items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="font-aespa metalic-text text-center text-6xl leading-[1.2] md:text-8xl"
      >
        WELCOME
        <br />
        TO MY
        <br />
        PORTFOLIO
      </motion.h1>
    </section>
  );
};

export default HeroSection;
