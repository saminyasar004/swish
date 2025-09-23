// components/MessageContent.tsx
export const MessageContent = ({ messages }: { messages: any[] }) => {
  return (
    <div className="flex-1 bg-white p-6 overflow-auto">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "you" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-4 rounded-lg ${
                message.sender === "you"
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs text-muted-foreground">
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
