import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'; // Default to light mode
    });

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save preference
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark'); // Tailwind class
    }, [theme]);

    const values = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};
