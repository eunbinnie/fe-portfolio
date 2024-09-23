import Image from 'next/image';

const FloatingButton = () => {
  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 size-14 cursor-pointer rounded-full bg-silver shadow-small transition-colors duration-300 ease-in-out hover:bg-white md:size-16"
    >
      <Image
        src="/icons/chatgpt.svg"
        alt="AI와 채팅하기"
        fill
        sizes="max-width:100%"
        priority
        className="object-cover p-4"
      />
    </button>
  );
};

export default FloatingButton;
