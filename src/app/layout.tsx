import type { Metadata } from 'next';
import '@/styles/globals.css';
import Background from '@/components/StarContainer';

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
    <html lang="ko">
      <body className="bg-black">
        <>
          <Background />
          <main>{children}</main>
        </>
      </body>
    </html>
  );
}
