import React, { useState, useEffect } from 'react';
import Boton from '../Boton';
import Input from '../Input';
import Dropdown from '../Dropdown';
import { postTask, putTask } from '../../taskService.jsx';


const Modal = ({ isOpen, onClose, task }) => {
    // Estados para almacenar los valores de los campos
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [dueDate, setDueDate] = useState('');

    console.log(task)

    // Este efecto se ejecuta cuando la tarea cambia (cuando estamos editando)
    useEffect(() => {
        console.log(task ? "La task cambió, es: " + task : "no hay task")
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setAssignedTo(task.assignedTo);
            setPriority(task.priority);
            setStatus(task.status);
            setDueDate(task.dueDate);
        } else {
            // Si no hay tarea, limpiamos los campos (para nueva tarea)
            setTitle('');
            setDescription('');
            setAssignedTo('');
            setPriority('');
            setStatus('');
            setDueDate('');
        }
    }, [task]);  // Se ejecuta cuando `task` cambia

    const handleSave = async () => {
        
        const possiblesStatus = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];
        const members = ["Asignado 1", "Asignado 2", "Asignado 3"];
        const priorities = ["Prioridad Baja", "Prioridad Media", "Prioridad Alta"];

        if (!(title == '' || description == '' || !possiblesStatus.includes(status) || !members.includes(assignedTo) || !priorities.includes(priority) || dueDate == '')){
            const taskData = {
                title: title,
                description: description,
                status: status,
                assignedTo: assignedTo,
                priority: priority,
                endDate: dueDate
            };
    
            if (task) {
                // Editar tarea existente
                taskData.id = task.id;
                await putTask(taskData);
            } else {
                // Crear nueva tarea
                await postTask(taskData);
            }

            onClose(); // Cierra el modal
        }
        else
        {
            alert("Hay campos sin valores o con valores inválidos");
        }
    };

    return (
        <div id="task-modal" className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{task ? 'Editar Tarea' : 'Nueva Tarea'}</p>
                    <button className="delete" aria-label="close" onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <form id="task-form" onSubmit={handleSave}>
                        <Input
                            id="task-title"
                            label="Título *"
                            placeholder="Título de la tarea"
                            required
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}  // Actualizar el estado
                        />
                        <Input
                            id="task-description"
                            label="Descripción"
                            placeholder="Descripción de la tarea"
                            required
                            type="textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Dropdown
                            id="task-assigned"
                            options={[{ value: 'Asignado 1', label: 'Asignado 1' }, { value: 'Asignado 2', label: 'Asignado 2' }, { value: 'Asignado 3', label: 'Asignado 3' }]}
                            required
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                        />
                        <Dropdown
                            id="task-priority"
                            options={[{ value: 'Prioridad Alta', label: 'Prioridad Alta' }, { value: 'Prioridad Media', label: 'Prioridad Media' }, { value: 'Prioridad Baja', label: 'Prioridad Baja' }]}
                            required
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                        <Dropdown
                            id="task-status"
                            options={[{value: 'Backlog', label: 'Backlog'}, {value: 'To Do', label: 'To Do'}, {value: 'In Progress', label: 'In Progress'}, {value: 'Blocked', label: 'Blocked'}, {value: 'Done', label: 'Done'}]}
                            required
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        <Input
                            id="task-due-date"
                            label="Fecha límite"
                            required
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />

                    </form>
                </section>
                <footer className="modal-card-foot">
                    <Boton
                        id="cancel-task-btn"
                        className="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </Boton>
                    <Boton
                        id="save-task-btn"
                        className="button is-success"
                        type="submit"
                        onClick={handleSave}
                    >
                        {task ? 'Guardar Cambios' : 'Guardar'}
                    </Boton>
                </footer>
            </div>
        </div>
    );
};

export default Modal;