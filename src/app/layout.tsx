import { AppProvider } from '@/contexts/AppContext';
import '../styles/globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata = {
    title: 'StreamChat',
    description: 'A simple chat application using Next.js, TypeScript, and Tailwind CSS.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <AppProvider>
                    <ThemeProvider>
                        <div className='min-h-screen flex flex-col'>
                            <main className='flex-1'>
                                {children}
                            </main>
                        </div>
                    </ThemeProvider>
                </AppProvider>
            </body>
        </html>
    );
};

export default Layout;
