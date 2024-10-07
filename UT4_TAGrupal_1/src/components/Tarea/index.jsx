import React from 'react';
import { deleteTask } from '../../taskService';

const Tarea = ({ task, onClick, RenderTasks }) => {
  const handleDelete = async (event) => {
    event.stopPropagation();
    await deleteTask(task);
    RenderTasks();
  };

  return (
    <div 
      className="task" 
      draggable="true" 
      onDragStart={() => {/* Aquí manejas el evento de dragstart */}} 
      onClick={onClick}
    >
      <div className="task-title">{task.title}</div>
      <p className="task-description">Descripción: {task.description}</p>
      <p className="task-assigned">Asignado a: {task.assignedTo}</p>
      <p className="task-priority">Prioridad: {task.priority}</p>
      <p className="task-status">Estado: {task.status}</p>
      <p className="task-due-date">Fecha límite: {task.endDate}</p>
      <button className="deleteButton" onClick={handleDelete}></button>
    </div>
  );
};

export default Tarea;

