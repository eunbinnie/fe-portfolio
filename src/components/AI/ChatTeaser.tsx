'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const CHAT_TEASER_TEXT = [
  '지금 바로 클릭해 대화해보세요',
  '저에 대해 직접 물어볼 수 있어요',
  '학습된 AI가 저를 대신해 답해요',
  '궁금한 건 채팅으로 물어보세요',
];

const ChatTeaser = () => {
  return (
    <div className="speech-bubble w-full animate-fade-in-slow bg-left-top-gradient opacity-0">
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-4 w-[150px] text-xs"
      >
        {CHAT_TEASER_TEXT.map((text, index) => (
          <SwiperSlide key={text + index} className="truncate text-right">
            {text}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChatTeaser;
