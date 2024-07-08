import React from 'react';
import OperatingSystemCard from './OperatingSystemCard';
import { Link } from 'react-router-dom';

const OperatingSystemsList = () => {
  const operatingSystems = [
    { name: 'Windows', description: 'Instalación de Windows 10 y 11 en dispositivos compatibles.', link: '/windows' },
    { name: 'Linux', description: 'Instalación de distribuciones populares de Linux.', link: '/linux' },
    { name: 'macOS', description: 'Instalación de macOS en dispositivos compatibles.', link: '/macos' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">¿Qué sistema deseas instalar?</h1>
      <div className="flex flex-wrap justify-center">
        {operatingSystems.map((os, index) => (
          <Link key={index} to={os.link} className="w-full sm:w-auto">
            <OperatingSystemCard name={os.name} description={os.description} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OperatingSystemsList;
