'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import dynamic from 'next/dynamic';

const FiGithub = dynamic(() => import('react-icons/fi').then(mod => mod.FiGithub), { ssr: false });
const FiMoon = dynamic(() => import('react-icons/fi').then(mod => mod.FiMoon), { ssr: false });
const FiSun = dynamic(() => import('react-icons/fi').then(mod => mod.FiSun), { ssr: false });

const Header = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <header className="bg-blue-500 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">StreamChat</h1>
            <div className="flex items-center space-x-4">
                <a
                    href="https://github.com/jahid-git/stream-chat.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                >
                    <FiGithub className="w-6 h-6" />
                </a>
                <button onClick={toggleTheme} className="ml-8 focus:outline-none" aria-label="Toggle theme">
                    {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
                </button>
            </div>
        </header>
    );
};

export default Header;