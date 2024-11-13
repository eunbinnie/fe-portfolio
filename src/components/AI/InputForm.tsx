import cn from '@/utils/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface InputFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const InputForm = ({ onSubmit, value, onChange }: InputFormProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(value.length === 0);
  }, [value]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-2 rounded-3xl border border-solid border-gray-100 bg-gray-50 p-2 duration-300 sm:pl-5"
    >
      <input
        value={value}
        onChange={onChange}
        placeholder="메시지를 입력해 주세요."
        className="w-full flex-1 bg-inherit px-2 py-1 text-sm outline-none placeholder:text-gray-100 sm:text-base"
      />
      <button
        type="submit"
        disabled={buttonDisabled}
        className={cn(
          'relative size-7 rounded-full transition-colors duration-300 sm:size-9',
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
  );
};

export default InputForm;
