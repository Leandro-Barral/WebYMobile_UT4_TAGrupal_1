import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import ContenedorColumnas from './components/ContendedorColumnas';
import Boton from './components/Boton';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Cargar la preferencia del tema desde localStorage al montar el componente
    const savedTheme = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
  }, []);

  const toggleDarkMode = () => {
    // Alternar entre modo claro y oscuro
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('dark-mode', newMode);  // Guardar preferencia en localStorage
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <Header 
            toggleDarkMode={toggleDarkMode} 
            isDarkMode={isDarkMode} 
          />
          <ContenedorColumnas />
          <Boton
            id="add-task-btn"
            className="button is-success is-fullwidth"
            onClick={handleOpenModal}
          >
            +
          </Boton>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
