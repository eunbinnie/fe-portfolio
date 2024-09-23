export interface IProjectTag {
  tag: 'Frontend Development' | 'Web Publishing';
}

export interface IWorkDetail {
  title: string;
  trouble: string;
  solve: string;
}

export interface IProjectItem extends IProjectTag {
  id: number;
  title: string;
  thumbnail: string;
  images: string[];
  skills: string[];
  summary: string[];
  role?: IWorkDetail[];
  headCount: number;
  duration: string;
  githubLink?: string;
  demoLink: string;
}
