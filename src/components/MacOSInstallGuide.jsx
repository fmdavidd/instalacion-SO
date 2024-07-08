import React from 'react';

const MacOSInstallGuide = () => {
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-4 m-2 sm:m-4">
      <h2 className="text-2xl font-bold mb-4">Guía de Instalación de macOS</h2>
      <h3 className="text-xl font-semibold mb-2">Requisitos:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Un Mac compatible.</li>
        <li>Una copia de macOS en formato de aplicación instalable.</li>
        <li>Un pendrive de al menos 16 GB.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Paso 1: Descargar macOS</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Abre la App Store en tu Mac y busca la versión de macOS que deseas instalar.</li>
        <li>Haz clic en "Obtener" para descargar la aplicación de instalación de macOS.</li>
      </ol>
      <h3 className="text-xl font-semibold mb-2">Paso 2: Crear un Pendrive Booteable</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Inserta el pendrive en tu Mac.</li>
        <li>Abre la Terminal (se encuentra en Aplicaciones {'>'} Utilidades).</li>
        <li>Escribe el siguiente comando en la Terminal, reemplazando `MyVolume` con el nombre de tu pendrive:
          <pre className="bg-gray-200 dark:bg-gray-800 p-2 rounded">
            sudo /Applications/Install\ macOS\ [Nombre de la versión].app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
          </pre>
        </li>
        <li>Presiona Enter y espera a que el proceso se complete.</li>
      </ol>
      <h3 className="text-xl font-semibold mb-2">Paso 3: Configurar la BIOS</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Reinicia tu Mac y mantén presionada la tecla Option (⌥) durante el arranque.</li>
        <li>Selecciona tu pendrive en el menú de arranque.</li>
      </ol>
      <h3 className="text-xl font-semibold mb-2">Paso 4: Instalación de macOS</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Tu Mac debería arrancar desde el pendrive y mostrar el instalador de macOS.</li>
        <li>Sigue las instrucciones en pantalla para seleccionar el idioma y continuar.</li>
        <li>En el menú de utilidades de macOS, selecciona "Utilidad de Discos" para formatear el disco donde deseas instalar macOS. Elige APFS o Mac OS Extended (Journaled) como formato.</li>
        <li>Después de formatear, cierra la Utilidad de Discos y selecciona "Instalar macOS".</li>
        <li>Sigue las instrucciones para completar la instalación. Tu Mac se reiniciará varias veces durante el proceso.</li>
      </ol>
      <h3 className="text-xl font-semibold mb-2">Paso 5: Configuración Inicial</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Una vez que la instalación haya finalizado, sigue las instrucciones en pantalla para configurar macOS (configurar cuenta, red, privacidad, etc.).</li>
        <li>Instala las actualizaciones y los controladores necesarios.</li>
      </ol>
    </div>
  );
};

export default MacOSInstallGuide;
