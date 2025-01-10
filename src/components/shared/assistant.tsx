import { useState } from 'react'
import { Bot, X, Send, Minimize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      console.log('Message sent:', message)
      setMessage('')
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[1100] rounded-[10px]">
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
                <div className="rounded-full bg-white/90 p-1">
                  <Bot className="h-5 w-5 text-purple-600" />
                </div>
                <span className="font-medium text-white">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/20"
              >
                <Minimize2 className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-[300px] rounded-[10px] overflow-y-auto p-4">
              <div className="rounded-[10px] bg-gray-100 p-3 dark:bg-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Hello! ? 👋
                </p>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="border-t rounded-[10px] p-4 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border bg-gray-50 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white transition-colors hover:bg-purple-700 disabled:bg-gray-400"
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
            <div className="relative">
            <X className="h-6 w-6" />
          </div>
          
        ) : (
          <div className="relative">
            <Bot className="h-6 w-6" />
            <motion.div
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        )}
      </motion.button>
    </div>
  )
}

