const TEXT = {
  start: ['WELCOME', 'TO MY', 'PORTFOLIO'],
  end: ['THANKS FOR', 'VISITING', 'MY PORTFOLIO'],
};

/**
 * 포트폴리오 시작 문구와 마무리 문구를 표시하는 컴포넌트입니다.
 * TEXT 객체에서 'start'와 'end'에 해당하는 메시지를 관리하고,
 * 이를 기반으로 문구를 렌더링합니다.
 *
 * @param {'start'|'end'} message 'start'는 포트폴리오 시작 문구를, 'end'는 마무리 문구를 나타냅니다.
 */
const MessageSection = ({ message }: { message: 'start' | 'end' }) => {
  return (
    <section className="mx-auto flex min-h-dvh max-w-[1248px] items-center justify-center px-6">
      <p className="metalic-text grid break-all py-8 text-center font-aespa text-6xl leading-[1.2] md:text-9xl">
        {TEXT[message].map((message, idx) => (
          <span key={idx}>{message}</span>
        ))}
      </p>
    </section>
  );
};

export default MessageSection;
