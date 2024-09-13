import Image from 'next/image';
import InfoItem from './InfoItem';
import MY_INFO from '@/constants/myInfo';
import Link from 'next/link';

const SideProfile = () => {
  return (
    <div className="grid gap-8 rounded-3xl border border-solid border-gray-100 p-8 pt-[60px]">
      <div className="grid place-items-center gap-6">
        <figure className="relative size-[150px] rounded-3xl bg-gray-300">
          <Image
            src="/icons/profile.png"
            alt="이은빈 프로필 이미지"
            fill
            className="object-contain p-4"
          />
        </figure>
        <div className="grid place-items-center gap-4">
          <h2 className="text-2xl font-medium text-white">
            이은빈 / LEE EUNBIN
          </h2>
          <p className="rounded-lg bg-gray-200 px-4 py-1 text-xs font-light text-white">
            Front-End Developer
          </p>
        </div>
      </div>
      <hr className="border-gray-100" />
      <div className="grid gap-[30px]">
        {MY_INFO.map((info, idx) => (
          <InfoItem key={idx} {...info} />
        ))}
        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/eunbinnie"
            target="_blank"
            className="relative size-[18px]"
          >
            <Image
              src="/icons/github.svg"
              alt="github"
              fill
              className="object-contain"
            />
          </Link>
          <Link
            href="https://iron-ton-192.notion.site/Resume-7f3bc17318574c589a25009123c1a522"
            target="_blank"
            className="relative size-[18px]"
          >
            <Image
              src="/icons/notion.svg"
              alt="github"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
