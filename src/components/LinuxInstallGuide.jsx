import React from 'react';

const LinuxInstallGuide = () => {
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-4 m-2 sm:m-4">
      <h2 className="text-2xl font-bold mb-4">Guía de Instalación de Linux</h2>
      <h3 className="text-xl font-semibold mb-2">Requisitos:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Un pendrive de al menos 4 GB.</li>
        <li>Una copia de una distribución de Linux (como Ubuntu) en formato ISO.</li>
        <li>La herramienta Rufus (disponible en <a href="https://rufus.ie" target="_blank" rel="noopener noreferrer" className="text-blue-500">rufus.ie</a>).</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Paso 1: Crear un Pendrive Booteable</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Descarga e instala Rufus desde su sitio web oficial.</li>
        <li>Inserta el pendrive en tu computadora.</li>
        <li>Abre Rufus y selecciona tu pendrive en la sección "Dispositivo".</li>
        <li>En la sección "Selección de arranque", elige la imagen ISO de Linux que descargaste.</li>
        <li>Deja las demás opciones por defecto y haz clic en "Empezar".</li>
        <li>Espera a que Rufus termine de crear el pendrive booteable.</li>
      </ol>
      <img src="/images/rufus.png" alt="Rufus Setup" className="mb-4 w-1/2 mx-auto" />

      <h3 className="text-xl font-semibold mb-2">Paso 2: Configurar la BIOS</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Reinicia tu computadora e ingresa al menú BIOS/UEFI (generalmente presionando F2, F10, DEL o ESC durante el arranque).</li>
        <li>Busca la opción de "Orden de arranque" y selecciona tu pendrive como el primer dispositivo de arranque.</li>
        <li>Guarda los cambios y reinicia la computadora.</li>
      </ol>
      <h3 className="text-xl font-semibold mb-2">Paso 3: Instalación de Linux</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Tu computadora debería arrancar desde el pendrive y mostrar el instalador de Linux.</li>
        <li>Selecciona "Instalar Ubuntu" (o la opción correspondiente para tu distribución de Linux).</li>
        <li>Sigue las instrucciones en pantalla para seleccionar el idioma, la distribución del teclado y las opciones de instalación.</li>
        <li>Selecciona "Borrar disco e instalar Ubuntu" para una instalación limpia. Si deseas conservar otros sistemas operativos, selecciona "Instalar junto a ellos" y ajusta las particiones según sea necesario.</li>
        <li>Sigue las instrucciones para configurar tu zona horaria y crear una cuenta de usuario.</li>
        <li>Haz clic en "Instalar ahora" y espera a que el instalador copie los archivos e instale el sistema operativo. Tu computadora se reiniciará al finalizar.</li>
      </ol>
      <h3 className="text-xl font-semibold mb-2">Paso 4: Configuración Inicial</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Una vez que la instalación haya finalizado, sigue las instrucciones en pantalla para configurar Ubuntu (configurar cuenta, red, privacidad, etc.).</li>
        <li>Instala las actualizaciones y los controladores necesarios.</li>
      </ol>
    </div>
  );
};

export default LinuxInstallGuide;
