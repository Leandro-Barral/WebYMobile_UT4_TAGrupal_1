import React, { useState, useEffect } from 'react';
import Boton from '../Boton';
import Input from '../Input';
import Dropdown from '../Dropdown';

const Modal = ({ isOpen, onClose, task }) => {
    // Estados para almacenar los valores de los campos
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [priority, setPriority] = useState('');
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
            setDueDate(task.dueDate);
        } else {
            // Si no hay tarea, limpiamos los campos (para nueva tarea)
            setTitle('');
            setDescription('');
            setAssignedTo('');
            setPriority('');
            setDueDate('');
        }
    }, [task]);  // Se ejecuta cuando `task` cambia

    const handleSave = (event) => {
        event.preventDefault();
        const taskData = {
            title,
            description,
            assignedTo,
            priority,
            dueDate
        };
        
        // Aquí puedes manejar la lógica para guardar o actualizar la tarea
        if (task) {
            // Si `task` no es null, estamos editando una tarea existente
            console.log('Editando tarea:', taskData);
        } else {
            // Si `task` es null, estamos creando una nueva tarea
            console.log('Creando nueva tarea:', taskData);
        }

        // Cerrar el modal después de guardar
        onClose();
    };

    return (
        <div id="task-modal" className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{task ? 'Editar Tarea' : 'Nueva Tarea'}</p> {/* Título dinámico */}
                    <button className="delete" aria-label="close" onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <form id="task-form" onSubmit={handleSave}> {/* Guardar al hacer submit */}
                        <Input 
                            id="task-title" 
                            label="Título *" 
                            placeholder="Título de la tarea" 
                            required 
                            type="text" 
                            value={task ? task.title : ''} 
                            onChange={(e) => setTitle(e.target.value)}  // Actualizar el estado
                        />
                        <Input 
                            id="task-description" 
                            label="Descripción" 
                            placeholder="Descripción de la tarea" 
                            required 
                            type="textarea" 
                            value={task ? task.description: ''} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Dropdown 
                            id="task-assigned" 
                            options={[{ value: 'Asignado 1', label: 'Asignado 1' }, { value: 'Asignado 2', label: 'Asignado 2' }, { value: 'Asignado 3', label: 'Asignado 3' }]} 
                            required 
                            value={task ? task.assignedTo : ''}
                            onChange={(e) => setAssignedTo(e.target.value)} 
                        />
                        <Dropdown 
                            id="task-priority" 
                            options={[{ value: 'Alta', label: 'Alta' }, { value: 'Media', label: 'Media' }, { value: 'Baja', label: 'Baja' }]} 
                            required 
                            value={task ? task.priority : ''}
                            onChange={(e) => setPriority(e.target.value)} 
                        />
                        <Input 
                            id="task-due-date" 
                            label="Fecha límite" 
                            required 
                            type="date" 
                            value={task ? task.dueDate : ''} 
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                        <Boton 
                            id="save-task-btn" 
                            className="button is-success" 
                            type="submit"
                        >
                            {task ? 'Guardar Cambios' : 'Guardar'}
                        </Boton>
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
                </footer>
            </div>
        </div>
    )
};

export default Modal;
