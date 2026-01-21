'use client';

import SKILLS from '@/constants/skills';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <ul className="grid gap-x-4 gap-y-16 sm:grid-cols-3 md:grid-cols-5">
      {SKILLS.map((skill, idx) => (
        <li key={idx} className="grid place-items-center gap-4 px-3">
          <figure className="relative aspect-square size-[60px]">
            <Image
              src={skill.src}
              alt={skill.title}
              fill
              priority
              sizes="max-width:100%"
              className="object-contain"
            />
          </figure>
          <span className="text-xs text-white">{skill.title}</span>
          {/* <div className="h-2 w-full rounded-2xl bg-gray-150">
            <motion.div
              className="h-full rounded-2xl bg-white-silver-gradient"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{
                ease: 'easeInOut',
                duration: skill.level * 0.025,
              }}
              viewport={{ once: true }}
            />
          </div> */}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
