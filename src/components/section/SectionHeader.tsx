interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

/**
 * 우측 카드의 각 섹션 상단에 들어가는 공통 헤더입니다.
 * 영문 제목과 한글 부제, 하단 구분선으로 구성됩니다.
 */
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-1">
        <h5 className="text-xl font-medium text-white">{title}</h5>
        <h6 className="text-sm font-extralight text-white">{subtitle}</h6>
      </div>
      <hr className="border-gray-150" />
    </div>
  );
};

export default SectionHeader;
