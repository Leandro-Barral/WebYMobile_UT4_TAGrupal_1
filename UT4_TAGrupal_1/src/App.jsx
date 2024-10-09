import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import ContenedorColumnas from './components/ContendedorColumnas';
import Boton from './components/Boton';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('dark-mode', newMode);
  };

  const handleOpenModal = (task = null) => {
    console.log("Tarea seleccionada para editar:", task);
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <Header
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            onButtonClick={() => handleOpenModal()}
          />
          <ContenedorColumnas onTaskClick={handleOpenModal} />
          <Boton
            id="add-task-btn"
            className="button is-success is-fullwidth"
            onClick={() => handleOpenModal()}
          >
            +
          </Boton>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} task={selectedTask} />
    </div>
  );
};

export default App;

