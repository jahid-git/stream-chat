'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useApp } from '@/contexts/AppContext';

const Response = () => {
    const { displayedResponse } = useApp();

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow-md">
            <ReactMarkdown>
                {displayedResponse}
            </ReactMarkdown>
        </div>
    );
};

export default Response;
