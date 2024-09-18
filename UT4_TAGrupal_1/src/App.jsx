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
      <Header />
      <ContenedorColumnas />
      <Boton id="add-task-btn" className="button is-success is-fullwidth" onClick={handleOpenModal}>
        +
      </Boton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>




    /* HTML Original No React
    <div className="App">
      <section class="section">
        <div class="container">
          <div id="barra">
            <div id="logo-container">
              <img id="fotologo" src="task.png" alt="Logo"></img>
              <div id="titulo">Gestor de Tareas</div>
            </div>
            <div id="buttonsContainer">
              <button id="btn-desktop" class="button is-rounded">
                Agregar Tarea
              </button>
              <button type="button" id="modo-oscuro"></button>
            </div>
          </div>

          <div class="columns-container">
            <div class="column">
              <div class="box">
                <h2 class="subtitle">Backlog</h2>
              </div>
            </div>

            <div class="column">
              <div class="box">
                <h2 class="subtitle">To Do</h2>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <h2 class="subtitle">In Progress</h2>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <h2 class="subtitle">Blocked</h2>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <h2 class="subtitle">Done</h2>
              </div>
            </div>
          </div>
        </div>
      </section>


      <button id="add-task-btn" class="button is-success is-fullwidth">+</button>


      <div id="task-modal" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Nueva Tarea</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <form id="task-form">
              <div class="field">
                <label class="label">Título *</label>
                <div class="control">
                  <input class="input" type="text" id="task-title" placeholder="Título de la tarea" required></input>
                </div>
              </div>
              <div class="field">
                <label class="label">Descripción</label>
                <div class="control">
                  <textarea class="textarea" id="task-description"
                    placeholder="Descripción de la tarea" required></textarea>
                </div>
              </div>
              <div class="field">
                <label class="label">Asignado</label>
                <div class="control">
                  <div class="select">
                    <select id="task-assigned" required>
                      <option value="Asignado 1">Asignado 1</option>
                      <option value="Asignado 2">Asignado 2</option>
                      <option value="Asignado 3">Asignado 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Prioridad</label>
                <div class="control">
                  <div class="select">
                    <select id="task-priority" required>
                      <option value="Alta">Alta</option>
                      <option value="Media">Media</option>
                      <option value="Baja">Baja</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Estado</label>
                <div class="control">
                  <div class="select">
                    <select id="task-status" required>
                      <option value="Backlog">Backlog</option>
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Blocked">Blocked</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Fecha límite</label>
                <div class="control">
                  <input class="input" type="date" id="task-due-date" required></input>
                </div>
              </div>
              <input type="submit" class="button is-success" id="save-task-btn" value="Guardar"></input>
            </form>
          </section>
          <footer class="modal-card-foot">

            <p id="mensajeError"></p>
            <button class="button" id="cancel-task-btn">Cancelar</button>
          </footer>
        </div>
      </div>
    </div>*/
  )
}

export default App
