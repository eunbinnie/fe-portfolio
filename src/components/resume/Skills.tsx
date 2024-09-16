import SKILLS from '@/constants/skills';
import Image from 'next/image';

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
          <div className="h-2 w-full rounded-2xl bg-gray-150">
            <div
              className="h-full rounded-2xl bg-white-silver-gradient"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
