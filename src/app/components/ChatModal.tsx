import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

interface ChatModalProps {
  onClose: () => void;
}

export default function ChatModal({ onClose }: ChatModalProps) {
  const { currentUser, selectedChat, messages, addMessage } = useAppContext();
  const [newMessage, setNewMessage] = useState("");

  if (!currentUser || !selectedChat) {
    return null;
  }

  const chatMessages = messages.filter(
    (m) =>
      (m.fromId === currentUser.id && m.toId === selectedChat.id) ||
      (m.fromId === selectedChat.id && m.toId === currentUser.id)
  );

  const handleSend = () => {
    if (newMessage.trim()) {
      addMessage({
        id: `msg${Date.now()}`,
        fromId: currentUser.id,
        toId: selectedChat.id,
        text: newMessage,
        timestamp: new Date(),
      });
      setNewMessage("");
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Chat with {selectedChat.name}</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded">
          {chatMessages.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              No messages yet. Start the conversation!
            </p>
          )}
          {chatMessages.map((message) => {
            const isMe = message.fromId === currentUser.id;
            return (
              <div
                key={message.id}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    isMe
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-900 border"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      isMe ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 mt-4">
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
          />
          <Button onClick={handleSend}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

