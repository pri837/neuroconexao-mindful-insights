import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        // Check local storage for saved preference
        const savedTheme = localStorage.getItem('dark-mode');
        return savedTheme === 'true';
    });

    const toggle = () => {
        setIsDark(prev => {
            const newState = !prev;
            // Save preference to local storage
            localStorage.setItem('dark-mode', newState);
            return newState;
        });
    };

    useEffect(() => {
        // Apply the theme
        document.body.classList.toggle('dark-mode', isDark);
    }, [isDark]);

    return { isDark, toggle };
};

export default useDarkMode;