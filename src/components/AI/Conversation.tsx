interface ConversationProps {
  message?: string;
  response?: string;
}

const Conversation = ({ message, response }: ConversationProps) => {
  return (
    <div className="flex flex-1 flex-col gap-10 overflow-auto">
      {message && (
        <div className="flex justify-end">
          <p className="rounded-3xl rounded-br-none bg-gray-200 px-5 py-3 text-white">
            {message}
          </p>
        </div>
      )}
      <div className="flex">
        <p className="rounded-3xl rounded-bl-none bg-gray-100 px-5 py-3">
          {response}
        </p>
      </div>
    </div>
  );
};

export default Conversation;
