'use client';

import React from 'react';
import Image from 'next/image';
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <header className="bg-blue-700 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
                <h1 className="ml-12 text-xl font-bold">StreamChat</h1>
            </div>
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
