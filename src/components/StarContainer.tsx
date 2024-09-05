'use client';

import { motion } from 'framer-motion';
import { getRandomNumber, getRandomPrimeNumber } from '@/utils/getRandomNumber';

import Star from './Star';

const StarContainer = () => {
  const arr = Array.from({ length: 15 });

  return (
    <motion.div
      className="fixed inset-0 z-[-1] size-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {arr.map((item, idx) => (
        <Star
          key={idx}
          size={getRandomNumber(70, 130)}
          top={getRandomNumber(0, 100)}
          left={getRandomNumber(0, 100)}
          blur={getRandomNumber(0, 1)}
          delay={getRandomPrimeNumber(1, 2)}
        />
      ))}
    </motion.div>
  );
};

export default StarContainer;
