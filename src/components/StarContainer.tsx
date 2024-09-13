'use client';

import { motion } from 'framer-motion';
import { getRandomNumber, getRandomPrimeNumber } from '@/utils/getRandomNumber';

import Star from './Star';
import useWindowSize from '@/hooks/useWindowSize';

const StarContainer = () => {
  const arr = Array.from({ length: 10 });
  const windowSize = useWindowSize();

  const getNumberRange = () => {
    if (windowSize < 424) {
      return getRandomNumber(40, 80);
    } else {
      return getRandomNumber(70, 130);
    }
  };

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
          size={getNumberRange()}
          top={getRandomNumber(0, 100)}
          left={getRandomNumber(0, 100)}
          blur={getRandomPrimeNumber(0, 0.3)}
          delay={getRandomPrimeNumber(1, 2)}
        />
      ))}
    </motion.div>
  );
};

export default StarContainer;
