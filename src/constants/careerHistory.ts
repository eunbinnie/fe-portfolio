type CareerType = '재직' | '인턴' | '경력' | '교육' | '학력';

interface CareerHistoryItem {
  period: string;
  title: string;
  /** '재직'은 현재 진행 중인 항목으로 강조 표시됩니다. */
  type: CareerType;
}

const CAREER_HISTORY: CareerHistoryItem[] = [
  {
    period: '2026.03 - 현재',
    title: '디오코 프론트엔드 개발자 (계약직)',
    type: '재직',
  },
  {
    period: '2025.02 - 2025.03',
    title: '아웃스탠더스 프론트엔드 체험형 인턴',
    type: '인턴',
  },
  {
    period: '2024.03 - 2024.09',
    title: '코드잇 스프린트 프론트엔드 트랙 6기 수료',
    type: '교육',
  },
  {
    period: '2023.04 - 2024.01',
    title: '엔트위즈소프트 웹 퍼블리셔',
    type: '경력',
  },
  {
    period: '2018.03 - 2022.02',
    title: '순천향대학교 컴퓨터소프트웨어공학과 졸업',
    type: '학력',
  },
];

export default CAREER_HISTORY;
