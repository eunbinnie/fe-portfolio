export interface IProjectItem {
  id: number;
  title: string;
  tag: string;
  thumbnail: string;
  summary: string;
  headCount: number;
  duration: string[];
  description: string;
  role: string;
  githubLink?: string;
  demoLink: string[];
}
