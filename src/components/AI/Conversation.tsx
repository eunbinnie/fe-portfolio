'use client';

import cn from '@/utils/cn';
import dynamic from 'next/dynamic';
import loadingJson from 'public/lotties/loading.json';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

interface ConversationProps {
  message: string;
  response: string;
}

const Conversation = ({ message, response }: ConversationProps) => {
  return (
    <div className="mb-5 flex flex-1 flex-col gap-5">
      {message && (
        <div className="flex justify-end">
          <p className="rounded-3xl rounded-br-none bg-gray-200 px-5 py-3 text-white">
            {message}
          </p>
        </div>
      )}
      <div className="flex">
        <div
          className={cn(
            'rounded-3xl rounded-bl-none bg-[#f5f5f5]',
            response === '' ? 'p-0' : 'px-5 py-3',
          )}
        >
          {response !== '' ? (
            <p>{response}</p>
          ) : (
            <Lottie
              animationData={loadingJson}
              play
              loop
              speed={0.75}
              style={{ width: '80px' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
