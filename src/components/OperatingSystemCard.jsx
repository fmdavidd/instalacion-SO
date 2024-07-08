import React from 'react';

const OperatingSystemCard = ({ name, description }) => {
  // Obtener la ruta de la imagen basada en el nombre del sistema operativo
  const getImageUrl = (osName) => `/images/${osName.toLowerCase()}.png`;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <img className="w-full h-40 object-cover" src={getImageUrl(name)} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
      </div>
    </div>
  );
};

export default OperatingSystemCard;
