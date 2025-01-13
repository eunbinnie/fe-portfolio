import { IProjectItem } from '@/types/project.types';

const PROJECTS: IProjectItem[] = [
  {
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
      'React Query의 SSR prefetching과 refetch를 활용해 초기 로딩 성능을 개선하고, LCP를 4.5초에서 1.0초로 단축',
      'ReactQuill의 SSR 미지원 문제를 dynamic import로 해결하고, UI 전환의 일관성을 확보',
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
        title: 'React-Quill SSR 미지원 이슈',
        trouble:
          'React-Quill은 SSR을 지원하지 않아 dynamic import가 필요했습니다. 하지만 이를 적용하면 다른 입력 필드는 SSR로 정상적으로 렌더링되는 반면, React-Quill은 CSR로 처리되어 로딩 속도가 느리고, 페이지에서 갑자기 툭 튀어나오는 것처럼 보이는 문제를 겪었습니다.',
        solve:
          '로딩 전후의 UI 일관성을 유지하기 위해 기존의 textarea 공통 컴포넌트를 활용했습니다. React-Quill이 로드되는 동안 동일한 크기의 textarea를 렌더링하여 사용자에게 로딩 이질감을 최소화하고, 자연스러운 전환을 구현했습니다.',
      },
      {
        title: '후기 작성 모달 리팩토링',
        trouble: `기존 후기 작성 모달은 '작성하기' 버튼을 클릭하면 별도의 확인 과정 없이 즉시 등록되었고, 후기 등록 시 성공 또는 실패 여부를 알 수 없는 문제가 있었습니다. 이로 인해 사용자 경험 측면에서 개선이 필요했습니다.`,
        solve:
          '후기 작성 모달에 기능과 애니메이션을 추가하여 완성도를 높였습니다. 후기는 등록 후 수정이나 삭제가 불가능하기 때문에, 이를 사용자에게 명확히 알릴 필요가 있었습니다. 이를 위해 모달 위에 Bottom Sheet를 추가하여 후기 등록 여부를 재확인하는 절차를 도입했습니다. 또한, Lottie 애니메이션을 사용해 후기 작성의 성공 또는 실패 여부를 시각적으로 표현함으로써 사용자 경험을 개선하고, 재미 요소를 더했습니다.',
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
    title: 'WekitBucket',
    tag: 'Frontend Development',
    thumbnail: '/icons/wekitbucket.svg',
    skills: ['Next.js', 'React', 'TypeScript', 'Fetch API', 'Tailwind CSS'],
    summary: [
      'SSR 전환 시 발생한 hydration 오류를 시간 불일치 문제로 진단하고, 커스텀 훅으로 시간을 통일해 렌더링 속도 개선',
      'useSearchParams로 새로고침 시 상태 유지 구현',
      'marked 라이브러리를 활용한 마크다운 파싱 및 상세 페이지 렌더링',
      'React.forwardRef()를 사용해 register 전달 오류를 해결 및 재사용 가능한 입력 컴포넌트를 구현',
      '로그인 페이지 퍼블리싱 및 API 결과 기반 화면 구현',
    ],
    headCount: 5,
    duration: '2024.06.21 ~ 2024.07.19',
    role: [
      {
        title: '자유게시판 SSR 문제',
        trouble:
          '자유게시판 페이지를 SSR로 전환했을 때, hydration 오류가 발생하여 초기 렌더링 속도가 저하되었고, CSR로 인해 사용자 경험이 악화되었습니다.',
        solve:
          'SSR을 통해 초기 렌더링 속도를 개선하는 작업을 진행했습니다. hydration 오류의 원인은 dayjs 라이브러리가 서버에서는 UTC 시간을, 클라이언트에서는 KST 시간을 사용하여 서버와 클라이언트 간 시간 불일치가 발생한 것이었습니다. 이를 해결하기 위해 시간 포맷팅 로직을 커스텀 훅으로 분리하고, 서버와 클라이언트 간 시간을 통일하여 문제를 해결했습니다.',
      },
      {
        title: '컴포넌트에 register 전달 시 발생하는 에러',
        trouble:
          '로그인 페이지를 react-hook-form을 사용해 구현했는데, 입력 필드를 별도 컴포넌트로 분리한 후 register를 전달할 때 에러가 발생하고 값 전달이 정상적으로 이루어지지 않는 문제가 있었습니다.',
        solve:
          '에러 메시지에서 React.forwardRef() 사용을 권장하고 있어 이를 적용해 문제를 해결했습니다. 문제의 원인은 register가 폼 필드에 직접 연결되지 않아 참조가 끊어진 것이었습니다. React.forwardRef()를 사용함으로써 부모 컴포넌트에서 전달된 ref를 자식 컴포넌트가 직접 참조할 수 있게 되어, register가 폼 필드에 올바르게 연결되었습니다. 이로써 react-hook-form과의 연결 문제를 해결하고, 값 전달도 정상적으로 이루어졌습니다.',
      },
      {
        title: '새로고침 시 데이터 초기화 문제',
        trouble:
          '자유게시판 리스트 페이지에서 정렬, 검색, 페이지네이션 기능을 사용한 후 다른 페이지로 이동했다가 다시 돌아오거나 새로고침했을 때, 해당 기능이 적용되지 않고 초기 상태로 돌아가는 문제가 발생했습니다.',
        solve:
          'useSearchParams를 활용하여 쿼리 문자열에 정렬, 검색, 페이지네이션 정보를 포함시킴으로써 문제를 해결했습니다. 이를 통해 서버에 GET 요청 시 해당 데이터를 쿼리 문자열로 전달하여, 페이지를 새로고침하거나 다시 방문하더라도 기존 상태가 유지되도록 수정했습니다.',
      },
    ],
    githubLink: 'https://github.com/eunbinnie/WeKitBucket',
    demoLink: 'https://wekitbucket.vercel.app/',
  },
  {
    title: 'Fandom-K',
    tag: 'Frontend Development',
    thumbnail: '/icons/fandomK.svg',
    skills: ['React', 'JavaScript', 'Fetch API', 'styled-components'],
    summary: [
      '마이페이지 퍼블리싱 및 전체 기능 구현 담당',
      'Swiper를 이용해 아이돌 리스트 슬라이드 변경 시마다 필요한 데이터만 호출, 대량의 데이터에서도 성능 최적화',
      '슬라이드 이동과 데이터 로드를 분리해 즉시 전환과 스켈레톤 UI로 딜레이 최소화',
      'localStorage를 활용한 관심 아이돌 추가/삭제 기능 구현, 사이트 재방문 시에도 관심 아이돌 정보 유지',
    ],
    headCount: 5,
    duration: '2024.04.30 ~ 2024.05.17',
    role: [
      {
        title: 'Swiper를 통해 API 데이터 동적 로딩 문제',
        trouble:
          '아이돌 리스트를 슬라이드 형식으로 구현해야 하는 요구사항이 있었습니다. 초기 데이터는 정상적으로 렌더링되었지만, 슬라이드 이동 또는 다음 버튼 클릭 시 새로운 데이터를 동적으로 가져와야 하는 문제가 발생했습니다.',
        solve:
          '모든 데이터를 한 번에 불러오면 불필요한 데이터를 로드하게 되므로, swiper의 기능을 활용하여 문제를 해결했습니다. swiper의 onSlideChange 옵션을 사용해 슬라이드가 변경될 때마다 필요한 데이터를 API로부터 가져오도록 수정했습니다. 좌우 이동 버튼도 swiper의 navigation 옵션과 연결해 슬라이드 변경 시 데이터 로딩을 트리거하도록 구현했습니다.',
      },
      {
        title: 'Next 슬라이드 이동 시 딜레이 문제',
        trouble:
          'Next 버튼을 클릭했을 때 슬라이드가 바로 넘어가지 않고, 여러 번 클릭해야 슬라이드가 이동하며 데이터를 가져오는 과정에서 반응이 느려지는 문제가 발생했습니다.',
        solve:
          '스켈레톤 UI를 추가하여 문제를 해결했습니다. 문제의 원인은 데이터를 가져오는 동안 pending 상태에서 발생하는 딜레이였습니다. 이를 해결하기 위해, Next 버튼이나 슬라이드 이동 시 데이터를 가져오는 중에도 슬라이드가 즉시 넘어가도록 처리하고, 데이터가 로딩 중일 때는 스켈레톤 UI를 표시하여 사용자에게 즉각적인 피드백을 제공했습니다.',
      },
      {
        title: '반응형 디자인에 따른 아이템 개수 변경 문제',
        trouble:
          '아이돌 리스트가 2차원 배열 형식으로 되어 있었는데, 화면 크기에 따라 한 화면에 렌더링되는 아이템의 개수가 달라져야 하는 상황에서, 이를 효율적으로 처리해야 하는 문제가 발생했습니다.',
        solve:
          '1차원 배열로 데이터를 평탄화한 후, 반응형 조건에 맞춰 다시 2차원 배열로 변환하는 방식으로 문제를 해결했습니다. 먼저 배열을 평탄화한 후, 현재 화면에 렌더링되어야 하는 아이템의 개수에 맞춰 페이지를 계산하고, 데이터를 페이지별로 다시 나누어 렌더링했습니다. 이를 통해 반응형 디자인에서도 아이템 개수가 유동적으로 변하도록 구현했습니다.',
      },
    ],
    githubLink: 'https://github.com/Sprint6-Fandom-K/Fandom-K',
    demoLink: 'https://sprint11fandom-k.netlify.app/',
  },
  {
    title: '그라운드시소',
    tag: 'Web Publishing',
    thumbnail: '/icons/groundseesaw.svg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      'JavaScript의 Date 객체를 활용해 날짜 선택 검증 로직을 구현하여 구매 프로세스 구축',
    ],
    headCount: 1,
    duration: '2023.09 ~ 2023.10',
    role: [
      {
        title: '달력 옵션 미제공 문제',
        trouble:
          '전시 날짜를 선택할 수 있는 달력 옵션을 구현해야 했지만, 카페24 플랫폼은 주로 쇼핑몰 기능을 제공하기 때문에 기본적으로 달력 옵션을 지원하지 않는 문제가 발생했습니다.',
        solve:
          '연/월/일을 각각 나누어 옵션으로 설정해 날짜를 선택할 수 있도록 구현했습니다. 그러나 카페24의 옵션 구조상, 품절 처리를 하지 않는 한 사용자가 선택하지 못하도록 하는 기능을 지원하지 않았습니다. 이를 보완하기 위해 사용자가 날짜를 선택한 후, Date 객체를 활용하여 데이터를 검증하고 이미 지난 날짜의 상품을 추가하려 할 경우, "지난 날짜의 상품은 구매할 수 없다"는 alert 메시지를 띄워 문제를 해결했습니다.',
      },
    ],
    demoLink: 'https://groundseesaw.co.kr/',
  },
  {
    title: 'Feelkeen',
    tag: 'Web Publishing',
    thumbnail: '/icons/feelkeen.svg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      'URL 쿼리 매개변수로 회원 등급을 판별하고, 등급별 맞춤 콘텐츠를 제공하는 리다이렉션 로직을 구현',
    ],
    headCount: 1,
    duration: '2023.07 ~ 2023.11',
    role: [
      {
        title: '회원 등급에 따른 렌더링 문제',
        trouble:
          '사이트의 회원 등급에 따라 상품 리스트와 게시판 리스트를 다르게 렌더링해야 하는 요구사항이 있었습니다. 그러나 카페24 플랫폼의 특성상 하나의 HTML 파일로 이 리스트들을 동적으로 렌더링해야 하는 문제가 발생했습니다.',
        solve:
          '회원 등급과 URL 쿼리의 카테고리 번호를 활용하여 문제를 해결했습니다. switch문을 사용해 회원 등급에 따라 다른 카테고리 번호를 렌더링하도록 구현했습니다. 또한, URL을 통해 직접 접근할 수 있는 가능성을 고려해, 사용 불가한 카테고리 번호에 접근할 경우 올바른 카테고리 번호 또는 메인 페이지로 리다이렉트 되도록 처리했습니다. 이를 통해 회원 등급에 맞는 리스트가 적절하게 렌더링되도록 했습니다.',
      },
    ],
    demoLink: 'https://feelkeen.com/',
  },
  {
    title: '워클로',
    tag: 'Web Publishing',
    thumbnail: '/icons/worclo.svg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: [
      'JavaScript를 활용한 iframe 접근 및 게시판 입력 양식 동적 설정',
      ' click 이벤트로 동적 대표 이미지 변경 구현',
    ],
    headCount: 2,
    duration: '2023.05 ~ 2023.06',
    role: [
      {
        title: '게시판 iframe 입력 양식 설정 문제',
        trouble:
          '게시판 페이지에서 카테고리에 따라 적합한 입력 양식을 제공해야 했지만, 카페24에서는 공통 입력 양식만 설정 가능하고 카테고리별로 개별 설정할 수 없었습니다.',
        solve:
          'JavaScript를 활용하여 게시판의 카테고리를 추출한 뒤, 사용자가 카테고리를 변경할 때마다 적합한 입력 양식이 동적으로 변경되도록 구현했습니다. 이를 위해 카테고리별 목업 데이터를 정의하고, iframe 내부에 접근하여 입력 양식을 자동 변환하는 기능을 추가했습니다.',
      },
      {
        title: '상품 이미지 Swiper 미리보기 문제 해결',
        trouble:
          '상품 페이지에서 대표 이미지 아래에 Swiper로 서브 이미지들을 나열하고, 서브 이미지를 클릭하면 대표 이미지가 변경되는 기능이 필요했습니다. 하지만, 카페24의 제한 사항으로 인해 상품의 대표 이미지를 하나만 설정할 수 있었습니다.',
        solve:
          'JavaScript의 click 이벤트를 활용하여, 사용자가 클릭한 서브 이미지의 URL을 가져와 동적으로 대표 이미지를 변경하는 방식으로 문제를 해결했습니다. 이를 통해 기존 플랫폼의 제약을 우회하여 요구사항을 충족할 수 있었습니다.',
      },
    ],
    demoLink: 'https://worclo.co.kr/',
  },
];

export const PROJECT_TOTAL_COUNT = PROJECTS.length;

PROJECTS.forEach((item, index) => {
  item.id = index + 1;
});

export default PROJECTS;
