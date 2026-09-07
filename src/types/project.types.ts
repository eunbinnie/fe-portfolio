export interface IProjectTag {
  tag: 'Frontend Development' | 'Web Publishing';
}

export interface IWorkDetail {
  title: string;
  trouble: string;
  solve: string;
}

export interface IProjectItem extends IProjectTag {
  id?: number;
  title: string;
  thumbnail: string;
  skills: string[];
  summary: string[];
  role?: IWorkDetail[];
  /** 직군 무관 전체 참여 인원 */
  headCount: number;
  /** 직군별 구성. 예: '프론트엔드 1 · 백엔드 1 · 디자이너 1' */
  teamComposition?: string;
  duration: string;
  githubLink?: string;
  demoLink?: string;
}
