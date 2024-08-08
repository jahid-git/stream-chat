import { useState } from 'react';
import { sendMessageToApi } from '@/services/chatService';
import { useApp } from '@/contexts/AppContext';
import { parseMarkdown } from '@/utils/markdownUtils';

const useChat = () => {
    const { displayedResponse, setDisplayedResponse } = useApp();

    const sendMessage = async (message: string) => {
        try {
            const content: string = await sendMessageToApi(message);
            simulateStream(content);
        } catch (error) {
            setDisplayedResponse('Failed to get response from the server.');
        }
    };

    const simulateStream = (content: string) => {
        const words = parseMarkdown(content).split(' ');
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedResponse((prev: string) => {
                if (index >= words.length) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + words[index] + ' ';
            });
            index++;
        }, 200);
    };

    return { displayedResponse, sendMessage };
};

export default useChat;
