import { IProjectItem } from '@/types/project.types';

const PROJECTS: IProjectItem[] = [
  {
    id: 1,
    title: 'GlobalNomad',
    tag: 'Frontend Development',
    thumbnail: '/icons/globalNomad.svg',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'TanStack Query',
      'Axios',
      'Tailwind CSS',
    ],
    summary: [
      'TanStack Query의 SSR Prefetching 및 refetch 기능을 활용한 데이터 업데이트 기능 구현',
      '마크다운 에디터와 이미지 DnD, 우편번호 API 연동을 통해 체험 등록/수정 페이지 구현',
      '내 정보 수정 시 데이터 유효성 검사와 쿠키 만료 처리로 보안 강화',
      '후기 작성 모달에 Lottie 애니메이션을 추가해 동적인 사용자 경험 제공',
      '사이트 소개 랜딩 페이지의 디자인 및 퍼블리싱 전담',
    ],
    headCount: 5,
    duration: '2024.07.25 ~ 2024.08.30',
    role: [
      {
        title: 'PROJECT REGISTER',
        image: '',
        description: '',
      },
    ],
    githubLink: 'https://github.com/part4-team9/global-nomad',
    demoLink: 'https://sp-globalnomad-6-9.vercel.app/',
  },
  {
    id: 2,
    title: 'WekitBuket',
    tag: 'Frontend Development',
    thumbnail: '/icons/wekitbucket.svg',
    skills: ['Next.js', 'React', 'TypeScript', 'Fetch API', 'Tailwind CSS'],
    summary: [
      '자유게시판 리스트 페이지 개발 및 공통 페이지네이션 컴포넌트 제작',
      'marked 라이브러리를 활용한 마크다운 파싱 및 상세 페이지 렌더링',
      '로그인 페이지 퍼블리싱 및 API 결과 기반 화면 구현',
    ],
    headCount: 5,
    duration: '2024.06.21 ~ 2024.07.19',
    role: [
      {
        title: '',
        image: '',
        description: '',
      },
    ],
    githubLink: '',
    demoLink: '',
  },
  {
    id: 3,
    title: 'Fandom-K',
    tag: 'Frontend Development',
    thumbnail: '/icons/fandomK.svg',
    skills: ['React', 'JavaScript', 'Fetch API', 'styled-components'],
    summary: [
      '마이페이지 퍼블리싱 및 전체 기능 구현 담당',
      'Swiper를 이용해 아이돌 리스트 슬라이드 변경 시마다 필요한 데이터만 호출, 대량의 데이터에서도 성능 최적화',
      'localStorage를 활용한 관심 아이돌 추가/삭제 기능 구현, 사이트 재방문 시에도 관심 아이돌 정보 유지',
    ],
    headCount: 5,
    duration: '2024.04.30 ~ 2024.05.17',
    role: [
      {
        title: '',
        image: '',
        description: '',
      },
    ],
    githubLink: 'https://github.com/Sprint6-Fandom-K/Fandom-K',
    demoLink: 'https://sprint11fandom-k.netlify.app/',
  },
  {
    id: 4,
    title: 'Feelkeen',
    tag: 'Web Publishing',
    thumbnail: '/icons/feelkeen.svg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      '카페24 플랫폼 기반 국내몰 및 해외몰 지원 쇼핑몰 퍼블리싱 담당',
      '회원 등급에 따른 페이지 리다이렉트 기능 구현',
    ],
    headCount: 1,
    duration: '2023.07 ~ 2023.11',
    role: [
      {
        title: '',
        image: '',
        description: '',
      },
    ],
    demoLink: 'https://feelkeen.com/',
  },
  {
    id: 5,
    title: '그라운드시소',
    tag: 'Web Publishing',
    thumbnail: '/icons/groundseesaw.svg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      '기존 사이트의 카페24 플랫폼 마이그레이션 작업 담당',
      '전시 날짜 선택 및 이전 날짜 선택 불가 기능 구현',
    ],
    headCount: 1,
    duration: '2023.09 ~ 2023.10',
    role: [
      {
        title: '',
        image: '',
        description: '',
      },
    ],
    demoLink: 'https://groundseesaw.co.kr/',
  },
  {
    id: 6,
    title: '워클로',
    tag: 'Web Publishing',
    thumbnail: '/icons/worclo.svg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      '카페24 플랫폼 기반 반응형 쇼핑몰 메인 페이지 제외 퍼블리싱 작업 담당',
    ],
    headCount: 2,
    duration: '2023.05 ~ 2023.06',
    role: [
      {
        title: '',
        image: '',
        description: '',
      },
    ],
    demoLink: 'https://worclo.co.kr/',
  },
];

export const PROJECT_TOTAL_COUNT = PROJECTS.length;

export default PROJECTS;
