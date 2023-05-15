

import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

import { FaRegMoon } from 'react-icons/fa'
import {IoMdSunny} from 'react-icons/io'

type Theme = 'light' | 'dark';

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
  
    const preferredTheme = localStorage.getItem('theme') as Theme | null;
    if (preferredTheme) {
      setTheme(preferredTheme);
    } else {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (userPrefersDark) {
        setTheme('dark');
      }
    }
  }, []);

  useEffect(() => {
    
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='toggle'>
     
      <button onClick={toggleTheme}>
        <span className="toggle-icon">
          {theme === 'light' ? <FaRegMoon /> : <IoMdSunny />}
        </span>
        <span className="toggle-text">
          {theme === 'light' ? "Dark " : "Light "}
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle;

