'use client';

import { KeyboardEvent, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import useChat from '@/hooks/useChat';

const ChatInput = () => {
    const { sendMessage } = useChat();
    const [input, setInput] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === '') return;
        await sendMessage(input.trim());
        setInput('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event as unknown as React.FormEvent);
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-200 dark:bg-gray-900 p-4 border-t border-gray-300 dark:border-gray-700">
            <div className="flex items-center space-x-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Type your message here..."
                />
                <button
                    onClick={handleSubmit}
                    className="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors flex items-center"
                >
                    <BiSend className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
