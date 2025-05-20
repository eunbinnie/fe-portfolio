'use client';

import Lottie from 'react-lottie-player';
import lottieJson from 'public/lotties/404.json';
import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="grid h-dvh place-content-center place-items-center gap-10">
      <div className="w-full max-w-80">
        <Lottie
          animationData={lottieJson}
          play
          loop
          speed={0.5}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>
      <div className="grid w-full place-items-center gap-6 px-6">
        <p className="text-center text-white">
          앗! 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            router.push('/');
          }}
        >
          포트폴리오로 돌아가기
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
