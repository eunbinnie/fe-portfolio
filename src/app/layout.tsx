import type { Metadata } from 'next';
import '@/styles/globals.css';
import Background from '@/components/StarContainer';
import FloatingButton from '@/components/FloatingButton';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/pretendard/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

const aespa = localFont({
  src: [
    {
      path: '../../public/fonts/aespa/aespa_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aespa',
});

const wiro = localFont({
  src: [
    {
      path: '../../public/fonts/wiro/NanumGangInHanWiRo.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'block',
  variable: '--font-wiro',
});

export const metadata: Metadata = {
  title: '이은빈 | 프론트엔드 개발자 포트폴리오',
  description: '신입 프론트엔드 개발자 이은빈의 포트폴리오입니다.',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${aespa.variable} ${wiro.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content, user-scalable=no"
        />
      </head>
      <body className="bg-black">
        <>
          <Background />
          <main>{children}</main>
          <FloatingButton />
        </>
      </body>
    </html>
  );
}
