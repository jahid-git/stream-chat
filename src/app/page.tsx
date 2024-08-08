import Header from '@/components/Header';
import ChatInput from '@/components/ChatInput';
import Response from '@/components/Response';

const ChatPage = () => {

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex-1 overflow-auto p-4">
                <Response />
            </div>
            <ChatInput />
        </div>
    );
};

export default ChatPage;