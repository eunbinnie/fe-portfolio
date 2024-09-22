export interface ProjectTag {
  tag: 'Frontend Development' | 'Web Publishing';
}

export interface IProjectItem extends ProjectTag {
  id: number;
  title: string;
  thumbnail: string;
  skills?: string[];
  summary: string[];
  headCount: number;
  duration: string;
  description: string;
  role: string;
  githubLink?: string;
  demoLink: string;
}
