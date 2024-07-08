import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl text-center">Instalación de Sistemas Operativos</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
