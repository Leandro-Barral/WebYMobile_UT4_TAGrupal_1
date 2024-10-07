import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal';
import Header from './components/Header';
import ContenedorColumnas from './components/ContendedorColumnas';
import Boton from './components/Boton';
import ModoOscuro from './components/ModoOscuro';

const App = () => {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <section class="section">
        <div class="container">
          <Header />
          <ContenedorColumnas />
          <Boton id="add-task-btn" className="button is-success is-fullwidth" onClick={handleOpenModal}>
            +
          </Boton>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default App
