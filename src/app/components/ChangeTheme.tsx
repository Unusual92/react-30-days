"use client";

import React, { useState, useEffect } from 'react';
import styles from '../styles/index.module.css';

const ChangeTheme: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ChangeTheme;
