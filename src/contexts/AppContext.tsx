'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
    displayedResponse: string;
    setDisplayedResponse: (response: string | ((prev: string) => string)) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [displayedResponse, setDisplayedResponse] = useState<string>('');

    return (
        <AppContext.Provider value={{ displayedResponse, setDisplayedResponse }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
