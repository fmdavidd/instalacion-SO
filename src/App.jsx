import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OperatingSystemsList from './components/OperatingSystemsList';
import WindowsInstallGuide from './components/WindowsInstallGuide';
import LinuxInstallGuide from './components/LinuxInstallGuide';
import MacOSInstallGuide from './components/MacOSInstallGuide';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<OperatingSystemsList />} />
              <Route path="/windows" element={<WindowsInstallGuide />} />
              <Route path="/linux" element={<LinuxInstallGuide />} />
              <Route path="/macos" element={<MacOSInstallGuide />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
