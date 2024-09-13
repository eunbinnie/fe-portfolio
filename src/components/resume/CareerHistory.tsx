const CAREER_HISTORY = [
  {
    period: '2018.03 - 2022.02',
    title: '순천향대학교 컴퓨터소프트웨어공학과 졸업',
  },
  {
    period: '2023.04 - 2024.01',
    title: '엔트위즈소프트 웹 퍼블리셔 근무',
  },
  {
    period: '2024.03 - 2024.09',
    title: '코드잇 스프린트 프론트엔드 트랙 6기 수료',
  },
];

const CareerHistory = () => {
  return (
    <ul className="grid gap-1">
      {CAREER_HISTORY.map((data, idx) => (
        <li key={idx} className="flex items-center gap-5 text-sm">
          <span className="text-silver">{data.period}</span>
          <span className="font-medium text-white">{data.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CareerHistory;
