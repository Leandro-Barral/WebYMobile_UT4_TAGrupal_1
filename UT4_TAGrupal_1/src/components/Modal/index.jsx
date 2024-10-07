import React from 'react';
import Boton from '../Boton';
import Input from '../Input';
import Dropdown from '../Dropdown';
import TaskServices, {getTasks , postTask , putTask , deleteTask} from '../../taskService.jsx';

const Modal = ({ isOpen, onClose, saveTask }) => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskStatus, setTaskStatus] = useState('Backlog');
    const [taskAssigned, setTaskAssigned] = useState('Asignado 1');
    const [taskPriority, setTaskPriority] = useState('Media');
    const [taskDueDate, setTaskDueDate] = useState('');

    const handleSave = () => {
        const newTask = {
            title: taskTitle,
            description: taskDescription,
            status: taskStatus,
            assignedTo: taskAssigned,
            priority: taskPriority,
            dueDate: taskDueDate,
            id: Date.now(), // Genera un ID único para la tarea
        };

        saveTask(newTask);
        onClose();
    };

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
                        <Input id="task-description" label="Descripción *" placeholder="Descripción de la tarea" required type="textarea" />
                        <Dropdown id="task-status" options={[{ value: 'Backlog', label: 'Backlog' }, {value: 'To Do', label: 'To Do'}, { value: 'In Progress', label: 'In Progress' }, {value: 'Blocked' , label: 'Blocked'}, { value: 'Done', label: 'Done' }]} required />
                        <Dropdown id="task-assigned" options={[{ value: 'Asignado 1', label: 'Asignado 1' }, { value: 'Asignado 2', label: 'Asignado 2' }, { value: 'Asignado 3', label: 'Asignado 3' }]} required />
                        <Dropdown id="task-priority" options={[{ value: 'Alta', label: 'Alta' }, { value: 'Media', label: 'Media' }, { value: 'Baja', label: 'Baja' }]} required />
                        <Input id="task-due-date" label="Fecha límite *" required type="date" />
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <Boton id="cancel-task-btn" className="button" onClick={onClose}>Cancelar</Boton>
                    <Boton id="save-task-btn" className="button" onClick={saveTask}>Guardar</Boton>
                </footer>
            </div>
        </div>
    )
};

export default Modal;
