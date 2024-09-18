import React from 'react';
import Boton from '../Boton';
import Input from '../Input';
import Dropdown from '../Dropdown';

const Modal = ({ isOpen, onClose }) => {

    return (
        <div id="task-modal" className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Nueva Tarea</p>
                    <button className="delete" aria-label="close" onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <form id="task-form">
                        <Input id="task-title" label="Título *" placeholder="Título de la tarea" required type="text" />
                        <Input id="task-description" label="Descripción" placeholder="Descripción de la tarea" required type="textarea" />
                        <Dropdown id="task-assigned" options={[{ value: 'Asignado 1', label: 'Asignado 1' }, { value: 'Asignado 2', label: 'Asignado 2' }, { value: 'Asignado 3', label: 'Asignado 3' }]} required />
                        <Dropdown id="task-priority" options={[{ value: 'Alta', label: 'Alta' }, { value: 'Media', label: 'Media' }, { value: 'Baja', label: 'Baja' }]} required />
                        <Input id="task-due-date" label="Fecha límite" required type="date" />
                        <Boton id="save-task-btn" className="button is-success" type="submit">Guardar</Boton>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <Boton id="cancel-task-btn" className="button" onClick={onClose}>Cancelar</Boton>
                </footer>
            </div>
        </div>
    )
};

export default Modal;
