export interface Skills {
  src: string;
  title: string;
  level: number;
}

const SKILLS: Skills[] = [
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
    src: '/icons/javascript.svg',
    title: 'JavaScript',
    level: 80,
  },
  {
    src: '/icons/typescript.svg',
    title: 'TypeScript',
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
    src: '/icons/styledComponents.png',
    title: 'styled-components',
    level: 78,
  },
  {
    src: '/icons/tailwindcss.svg',
    title: 'Tailwind CSS',
    level: 85,
  },
  {
    src: '/icons/tanstackQuery.png',
    title: 'TanStack Query',
    level: 55,
  },
  {
    src: '/icons/zustand.svg',
    title: 'Zustand',
    level: 55,
  },
];

export default SKILLS;
