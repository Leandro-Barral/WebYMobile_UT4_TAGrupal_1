import React, { useState, useEffect } from 'react';
import Boton from '../Boton';
import Input from '../Input';
import Dropdown from '../Dropdown';
import { postTask, putTask } from '../../taskService.jsx';

const Modal = ({ isOpen, onClose, taskToEdit }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskStatus, setTaskStatus] = useState('Backlog');
    const [taskAssigned, setTaskAssigned] = useState('Asignado 1');
    const [taskPriority, setTaskPriority] = useState('Media');
    const [taskDueDate, setTaskDueDate] = useState('');

    // Cuando se está editando, rellenar los campos con la tarea existente
    useEffect(() => {
        if (taskToEdit) {
            setTaskTitle(taskToEdit.title);
            setTaskDescription(taskToEdit.description);
            setTaskStatus(taskToEdit.status);
            setTaskAssigned(taskToEdit.assignedTo);
            setTaskPriority(taskToEdit.priority);
            setTaskDueDate(taskToEdit.dueDate);
        }
    }, [taskToEdit]);

    const handleSave = async () => {
        const task = {
            title: taskTitle,
            description: taskDescription,
            status: taskStatus,
            assignedTo: taskAssigned,
            priority: taskPriority,
            dueDate: taskDueDate,
        };

        if (taskToEdit) {
            // Editar tarea existente
            await putTask(task);
        } else {
            // Crear nueva tarea
            await postTask(task);
        }

        onClose(); // Cierra el modal
    };

    return (
        <div id="task-modal" className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{taskToEdit ? 'Editar Tarea' : 'Nueva Tarea'}</p>
                    <button className="delete" aria-label="close" onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <form id="task-form" onSubmit={(e) => e.preventDefault()}>
                        <Input 
                            id="task-title" 
                            label="Título *" 
                            placeholder="Título de la tarea" 
                            required 
                            type="text" 
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />
                        <Input 
                            id="task-description" 
                            label="Descripción *" 
                            placeholder="Descripción de la tarea" 
                            required 
                            type="textarea" 
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                        />
                        <Dropdown 
                            id="task-status" 
                            options={[
                                { value: 'Backlog', label: 'Backlog' }, 
                                { value: 'To Do', label: 'To Do' }, 
                                { value: 'In Progress', label: 'In Progress' }, 
                                { value: 'Blocked', label: 'Blocked' }, 
                                { value: 'Done', label: 'Done' }
                            ]} 
                            required
                            value={taskStatus}
                            onChange={(e) => setTaskStatus(e.target.value)}
                        />
                        <Dropdown 
                            id="task-assigned" 
                            options={[
                                { value: 'Asignado 1', label: 'Asignado 1' }, 
                                { value: 'Asignado 2', label: 'Asignado 2' }, 
                                { value: 'Asignado 3', label: 'Asignado 3' }
                            ]} 
                            required
                            value={taskAssigned}
                            onChange={(e) => setTaskAssigned(e.target.value)}
                        />
                        <Dropdown 
                            id="task-priority" 
                            options={[
                                { value: 'Alta', label: 'Alta' }, 
                                { value: 'Media', label: 'Media' }, 
                                { value: 'Baja', label: 'Baja' }
                            ]}
                            required
                            value={taskPriority}
                            onChange={(e) => setTaskPriority(e.target.value)}
                        />
                        <Input 
                            id="task-due-date" 
                            label="Fecha límite *" 
                            required 
                            type="date" 
                            value={taskDueDate}
                            onChange={(e) => setTaskDueDate(e.target.value)}
                        />
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <Boton id="cancel-task-btn" className="button" onClick={onClose}>Cancelar</Boton>
                    <Boton id="save-task-btn" className="button" type="button" onClick={handleSave}>Guardar</Boton>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
