export interface Skills {
  src: string;
  title: string;
  level: number;
}

const SKILLS: Skills[] = [
  {
    src: '/icons/typescript.svg',
    title: 'TypeScript',
    level: 80,
  },
  {
    src: '/icons/javascript.svg',
    title: 'JavaScript',
    level: 80,
  },
  {
    src: '/icons/react.svg',
    title: 'React',
    level: 75,
  },
  {
    src: '/icons/nextjs.svg',
    title: 'Next.js',
    level: 70,
  },
  {
    src: '/icons/tanstackQuery.png',
    title: 'TanStack Query',
    level: 65,
  },
  {
    src: '/icons/zustand.svg',
    title: 'Zustand',
    level: 70,
  },
  {
    src: '/icons/html.svg',
    title: 'HTML',
    level: 95,
  },
  {
    src: '/icons/css.svg',
    title: 'CSS',
    level: 80,
  },
  {
    src: '/icons/tailwindcss.svg',
    title: 'Tailwind CSS',
    level: 85,
  },
  {
    src: '/icons/storybook.svg',
    title: 'Storybook',
    level: 78,
  },
];

export default SKILLS;
