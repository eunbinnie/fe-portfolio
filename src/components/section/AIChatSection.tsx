'use client';

import cn from '@/utils/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AIChatSection = () => {
  const [value, setValue] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(value);
    setValue('');
  };

  useEffect(() => {
    setButtonDisabled(value.length === 0);
  }, [value]);

  return (
    <section>
      <div className="grid gap-8">
        <div className="grid gap-1">
          <h5 className="text-xl font-medium text-white">Chat with AI</h5>
          <h6 className="text-sm font-extralight text-white">
            저에 대해 궁금한 점이 있나요? 무엇이든 물어보세요! 친절하게
            답변해드릴게요.
          </h6>
        </div>
        <div>
          <form
            onSubmit={handleSubmitForm}
            className="flex items-center gap-2 rounded-3xl bg-gray-50 p-2 pl-5"
          >
            <input
              value={value}
              onChange={handleChangeInput}
              className="flex-1 bg-inherit px-2 py-1 outline-none"
            />
            <button
              type="submit"
              disabled={buttonDisabled}
              className={cn(
                'relative size-9 rounded-full transition-colors duration-300',
                buttonDisabled ? 'bg-gray-100' : 'bg-black',
              )}
            >
              <Image
                src="/icons/arrowTop.svg"
                alt="보내기"
                fill
                sizes="max-width:100%"
                priority
                className="p-2"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;
