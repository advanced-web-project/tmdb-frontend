import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Minimize2, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProcessingDots from './processing-dot';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
    }
  };

  const sendMessage = (text: string) => {
    const newMessage: Message = { type: 'user', content: text };
    setMessages([...messages, newMessage]);
    setMessage('');
    setIsProcessing(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = { type: 'bot', content: `You said: ${text}` };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsProcessing(false);
    }, 2000);
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        sendMessage(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      console.log('Web Speech API is not supported in this browser.');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[1100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 w-[320px] rounded-[10px] bg-white shadow-lg dark:bg-gray-800 md:w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-[10px] bg-gradient-to-r from-pink-500 to-purple-600 p-4">
              <div className="flex items-center space-x-2">
                <div className="rounded-[10px] bg-white/90 p-1">
                  <Bot className="h-5 w-5 text-purple-600" />
                </div>
                <span className="font-medium text-white">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-[10px] p-1 hover:bg-white/20">
                <Minimize2 className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={chatAreaRef} className="h-[300px] overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`rounded-[10px] p-2 ${
                      msg.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="rounded-[10px] bg-gray-100 p-2 dark:bg-gray-700">
                    <ProcessingDots />
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="border-t p-4 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-[10px] border bg-gray-50 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                />
                <button
                  type="button"
                  onClick={startListening}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                >
                  <Mic className="h-4 w-4" />
                </button>
                <button
                  type="submit"
                  disabled={!message.trim() && !isListening}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-purple-600 text-white transition-colors hover:bg-purple-700 disabled:bg-gray-400"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transition-transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <Bot className="h-6 w-6" />
            <motion.div
              className="absolute -right-1 -top-1 h-3 w-3 rounded-[10px] bg-green-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default Assistant;
