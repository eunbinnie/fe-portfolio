'use client';
import Lottie from 'react-lottie-player';
import lottieJson from 'public/lotties/404.json';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="grid h-dvh place-content-center place-items-center gap-10">
      <Lottie animationData={lottieJson} play loop speed={0.5} />
      <Link href="/" className="mx-6 break-keep text-center text-white">
        포트폴리오로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
