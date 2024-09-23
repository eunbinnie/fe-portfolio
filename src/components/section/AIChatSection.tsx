'use client';

import { useState } from 'react';
import InputForm from '../AI/InputForm';

const AIChatSection = () => {
  const [value, setValue] = useState('');

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(value);
    setValue('');
  };

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
        <InputForm
          onSubmit={handleSubmitForm}
          value={value}
          onChange={handleChangeInput}
        />
      </div>
    </section>
  );
};

export default AIChatSection;
