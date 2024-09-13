import Image from 'next/image';

const ResumeSection = () => {
  return (
    <div>
      <Image
        src="/icons/profile.png"
        alt="이은빈 프로필 이미지"
        width={160}
        height={160}
      />
    </div>
  );
};

export default ResumeSection;
