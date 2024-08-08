import { ChatRequest, ChatResponse } from '@/types/chat';

export const sendMessageToApi = async (message: string): Promise<string> => {
    const requestPayload: ChatRequest = { prompt: message };

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestPayload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data: ChatResponse = await response.json();
        return data.content;
    } catch (error) {
        console.error('Failed to send message to API:', error);
        throw error;
    }
};