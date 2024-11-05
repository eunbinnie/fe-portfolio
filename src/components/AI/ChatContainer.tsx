import React from 'react';
import Drawer from '../modal/Drawer';

interface IChatContainerProps {
  active: boolean;
}

const ChatContainer = ({ active }: IChatContainerProps) => {
  return (
    <Drawer active={active}>
      <div className="grid gap-8">
        <div className="grid gap-1">
          <h5 className="text-xl font-medium">Chat with AI</h5>
          <h6 className="text-sm font-extralight">
            저에 대해 궁금한 점이 있나요? 무엇이든 물어보세요! 친절하게
            답변해드릴게요.
          </h6>
        </div>
        <div className="grid gap-16">
          {/* <Conversation message={message} />
          <InputForm
            onSubmit={handleSubmitForm}
            value={value}
            onChange={handleChangeInput}
          /> */}
        </div>
      </div>
    </Drawer>
  );
};

export default ChatContainer;
