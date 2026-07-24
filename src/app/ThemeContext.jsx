"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState('dark');
     const [mounted, setMounted] = useState(false);

     useEffect(() => {
          const saved = localStorage.getItem('portfolio-theme');
          if (saved) setTheme(saved);
          setMounted(true);
     }, []);

     useEffect(() => {
          if (mounted) localStorage.setItem('portfolio-theme', theme);
     }, [theme, mounted]);

     const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

     return (
          <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
               {children}
          </ThemeContext.Provider>
     );
};

// Usage in your root layout.jsx:
// import { ThemeProvider } from './ThemeContext';
// <ThemeProvider>{children}</ThemeProvider>

export const useTheme = () => {
     const context = useContext(ThemeContext);
     if (!context) throw new Error('useTheme must be used within a ThemeProvider');
     return context;
};

/*
  --- Example toggle button for your Navbar ---

  import { useTheme } from './ThemeContext';
  import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

  const { isDark, toggleTheme } = useTheme();

  <button
       onClick={toggleTheme}
       aria-label="Toggle theme"
       className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-110 ${
            isDark
                 ? 'bg-white/5 border-white/10 text-cyan-300 hover:border-cyan-400'
                 : 'bg-black/5 border-black/10 text-blue-600 hover:border-blue-500'
       }`}
  >
       {isDark ? <IoSunnyOutline className='w-5 h-5' /> : <IoMoonOutline className='w-5 h-5' />}
  </button>
*/