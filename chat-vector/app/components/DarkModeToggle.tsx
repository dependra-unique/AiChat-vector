"use client";
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing icons

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    };

    return (
        <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? <FaSun /> : <FaMoon />} {/* Toggle icon */}
        </button>
    );
};

export default DarkModeToggle;
