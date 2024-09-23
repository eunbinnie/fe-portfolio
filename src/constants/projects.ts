import { IProjectItem } from '@/types/project.types';

const PROJECTS: IProjectItem[] = [
  {
    id: 1,
    title: 'GlobalNomad',
    tag: 'Frontend Development',
    thumbnail: '/icons/globalNomad.svg',
    images: [''],
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
        title: '초기 로딩 시간 최적화',
        trouble:
          'API 호출 시 데이터 fetching이 pending 상태에 머물러, 초기 로딩 시간이 지연되는 문제가 발생했습니다.',
        solve:
          '초기 데이터 로딩 시간을 최소화하기 위해 SSR을 최대한 활용했습니다. Tanstack Query의 prefetching 기능을 사용해 서버에서 미리 데이터를 받아와 렌더링하여, 클라이언트에서 데이터를 로드할 때의 지연을 줄였습니다. 특히 체험 수정, 내 정보, 예약 내역 등 초기 데이터를 받아오는 경우 SSR을 적용했습니다. 또한, 특정 사용자 액션 후 데이터를 다시 가져와야 할 때는 invalidateQueries를 사용해 캐시된 데이터를 refetch하여 실시간으로 업데이트된 데이터를 제공했습니다.',
      },
      {
        title: '후기 작성 모달 리팩토링',
        trouble: `기존 후기 작성 모달은 '작성하기' 버튼을 클릭하면 별도의 확인 과정 없이 즉시 등록되었고, 후기 등록 시 성공 또는 실패 여부를 알 수 없는 문제가 있었습니다. 이로 인해 사용자 경험 측면에서 개선이 필요했습니다.`,
        solve:
          '후기 작성 모달에 기능과 애니메이션을 추가하여 완성도를 높였습니다. 후기는 등록 후 수정이나 삭제가 불가능하기 때문에, 이를 사용자에게 명확히 알릴 필요가 있었습니다. 이를 위해 모달 위에 Bottom Sheet를 추가하여 후기 등록 여부를 재확인하는 절차를 도입했습니다. 또한, Lottie 애니메이션을 사용해 후기 작성의 성공 또는 실패 여부를 시각적으로 표현함으로써 사용자 경험을 개선하고, 재미 요소를 더했습니다.',
      },
      {
        title: 'React-Quill SSR 미지원 이슈',
        trouble:
          'React-Quill은 SSR을 지원하지 않아 dynamic import가 필요했습니다. 하지만 이를 적용하면 다른 입력 필드는 SSR로 정상적으로 렌더링되는 반면, React-Quill은 CSR로 처리되어 로딩 속도가 느리고, 페이지에서 갑자기 툭 튀어나오는 것처럼 보이는 문제를 겪었습니다.',
        solve:
          '로딩 전후의 UI 일관성을 유지하기 위해 기존의 textarea 공통 컴포넌트를 활용했습니다. React-Quill이 로드되는 동안 동일한 크기의 textarea를 렌더링하여 사용자에게 로딩 이질감을 최소화하고, 자연스러운 전환을 구현했습니다.',
      },
      {
        title: '시작 시간이 종료 시간보다 늦은 스케줄 등록 이슈',
        trouble:
          '체험 예약 시 시작 시간이 종료 시간보다 늦어도 스케줄이 추가되는 문제가 발생했습니다. 이는 예약 가능한 시간대를 선택할 때 시간 유효성 검사가 없었기 때문입니다.',
        solve:
          '시간 유효성 검사를 추가하고 버튼 활성화/비활성화 로직을 적용하여 문제를 해결했습니다. 사용자가 날짜, 시작 시간, 종료 시간을 선택할 때마다 유효성 검사를 실행하고, 시작 시간이 종료 시간보다 빠를 때만 버튼을 활성화했습니다. 조건이 충족되지 않으면 버튼을 비활성화하고, 하단에 적절한 에러 메시지를 표시하여 사용자에게 문제를 명확히 전달하도록 수정했습니다.',
      },
      {
        title: '가격 필드 입력값 포맷 문제',
        trouble: `가격 입력 시 맨 앞에 '0'이 들어갈 수 있었고, 쉼표 구분이 없어 사용자가 금액을 쉽게 확인하거나 읽기 어려운 문제가 발생했습니다.`,
        solve:
          '유틸리티 함수를 추가하여 문제를 해결했습니다. 가격 필드에 입력할 때마다 toLocaleString 내장 함수를 사용하여 한국 기준으로 가격을 자동 포맷팅하도록 구현했습니다. 또한, API 요청 시에는 숫자 형식으로 전송해야 하므로, 쉼표를 제거하는 별도의 유틸리티 함수도 추가하여 데이터 전송 시 적절한 형식으로 변환했습니다.',
      },
      {
        title: '내 정보 수정 시 보안 강화',
        trouble:
          '기존에는 내 정보 수정 페이지에 접근하자마자 비밀번호 수정이 가능해, 보안 취약성이 존재했습니다.',
        solve:
          '내 정보 수정 페이지에 진입할 때 비밀번호 재확인 절차를 추가하여 보안을 강화했습니다. 로그인 API를 활용해 사용자에게 프로필 사진과 이메일만 표시하고, 비밀번호를 재입력하도록 요구했습니다. 비밀번호가 일치하면 쿠키에 authConfirm 키를 저장하고, 정보 수정 폼을 렌더링하도록 구현했습니다. 또한, 페이지를 벗어날 경우 해당 쿠키를 만료시켜 재진입 시 다시 비밀번호 확인 절차를 거치도록 했습니다.',
      },
    ],
    githubLink: 'https://github.com/part4-team9/global-nomad',
    demoLink: 'https://sp-globalnomad-6-9.vercel.app/',
  },
  {
    id: 2,
    title: 'WekitBucket',
    tag: 'Frontend Development',
    thumbnail: '/icons/wekitbucket.svg',
    images: [''],
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
        trouble: '',
        solve: '',
      },
    ],
    githubLink: 'https://github.com/eunbinnie/WeKitBucket',
    demoLink: 'https://wekitbucket.vercel.app/',
  },
  {
    id: 3,
    title: 'Fandom-K',
    tag: 'Frontend Development',
    thumbnail: '/icons/fandomK.svg',
    images: [''],
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
        trouble: '',
        solve: '',
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
    images: [''],
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      '카페24 플랫폼 기반 국내몰 및 해외몰 지원 쇼핑몰 퍼블리싱 담당',
      '회원 등급에 따른 페이지 리다이렉트 기능 구현',
    ],
    headCount: 1,
    duration: '2023.07 ~ 2023.11',
    demoLink: 'https://feelkeen.com/',
  },
  {
    id: 5,
    title: '그라운드시소',
    tag: 'Web Publishing',
    thumbnail: '/icons/groundseesaw.svg',
    images: [''],
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      '기존 사이트의 카페24 플랫폼 마이그레이션 작업 담당',
      '전시 날짜 선택 및 이전 날짜 선택 불가 기능 구현',
    ],
    headCount: 1,
    duration: '2023.09 ~ 2023.10',
    demoLink: 'https://groundseesaw.co.kr/',
  },
  {
    id: 6,
    title: '워클로',
    tag: 'Web Publishing',
    thumbnail: '/icons/worclo.svg',
    images: [''],
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      '카페24 플랫폼 기반 반응형 쇼핑몰 메인 페이지 제외 퍼블리싱 작업 담당',
    ],
    headCount: 2,
    duration: '2023.05 ~ 2023.06',
    demoLink: 'https://worclo.co.kr/',
  },
];

export const PROJECT_TOTAL_COUNT = PROJECTS.length;

export default PROJECTS;
