import { IProjectItem } from '@/types/project.types';

const PROJECTS: IProjectItem[] = [
  {
    id: 1,
    title: 'GlobalNomad',
    tag: 'Frontend Development',
    thumbnail: '/icons/globalNomad.svg',
    summary:
      '체험 등록/예약 프로젝트에서 체험 등록 및 수정, 내 정보 수정, 예약 내역 페이지 구현을 담당했습니다.',
    headCount: 5,
    duration: '2024.07.25 ~ 2024.08.30',
    description: '',
    role: '',
    githubLink: 'https://github.com/part4-team9/global-nomad',
    demoLink: 'https://sp-globalnomad-6-9.vercel.app/',
  },
  {
    id: 2,
    title: 'WekitBuket',
    tag: 'Frontend Development',
    thumbnail: '/icons/wekitbucket.svg',
    summary:
      '자유게시판 리스트와 상세 페이지, 로그인 페이지의 프론트엔드 화면 구현을 담당했습니다.',
    headCount: 5,
    duration: '2024.06.21 ~ 2024.07.19',
    description: '',
    role: '',
    githubLink: '',
    demoLink: '',
  },
  {
    id: 3,
    title: 'Fandom-K',
    tag: 'Frontend Development',
    thumbnail: '/icons/fandomK.svg',
    summary:
      'localStorage를 활용한 관심 아이돌 추가/삭제 기능이 있는 마이페이지 구현을 담당했습니다.',
    headCount: 5,
    duration: '2024.04.30 ~ 2024.05.17',
    description: '',
    role: '',
    githubLink: 'https://github.com/Sprint6-Fandom-K/Fandom-K',
    demoLink: 'https://sprint11fandom-k.netlify.app/',
  },
  {
    id: 4,
    title: 'Feelkeen',
    tag: 'Web Publishing',
    thumbnail: '/icons/feelkeen.svg',
    summary:
      '카페24 플랫폼을 기반으로 국내몰 및 해외몰을 지원하는 쇼핑몰 퍼블리싱을 담당했습니다.',
    headCount: 1,
    duration: '2023.07 ~ 2023.11',
    description: '',
    role: '',
    githubLink: '',
    demoLink: 'https://feelkeen.com/',
  },
  {
    id: 5,
    title: '그라운드시소',
    tag: 'Web Publishing',
    thumbnail: '/icons/groundseesaw.svg',
    summary:
      '그라운드시소 공식몰을 카페24 플랫폼으로 이전하는 작업을 진행했습니다.',
    headCount: 1,
    duration: '2023.09 ~ 2023.10',
    description: '',
    role: '',
    githubLink: '',
    demoLink: 'https://groundseesaw.co.kr/',
  },
  {
    id: 6,
    title: '워클로',
    tag: 'Web Publishing',
    thumbnail: '/icons/worclo.svg',
    summary:
      '카페24 플랫폼을 활용한 반응형 쇼핑몰 퍼블리싱 업무를 담당했습니다.',
    headCount: 2,
    duration: '2023.05 ~ 2023.06',
    description: '',
    role: '',
    githubLink: '',
    demoLink: 'https://worclo.co.kr/',
  },
];

export default PROJECTS;
