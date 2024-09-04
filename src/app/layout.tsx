import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '이은빈 | 프론트엔드 개발자 포트폴리오',
  description: '신입 프론트엔드 개발자 이은빈의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-[1200px] bg-black px-6">{children}</body>
    </html>
  );
}
