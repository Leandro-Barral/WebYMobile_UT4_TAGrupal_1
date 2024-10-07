import React from 'react';
import { deleteTask } from '../../taskService';

const Tarea = ({ task, renderTasks }) => {
  const handleDelete = async (event) => {
    event.stopPropagation();
    await deleteTask(task);
    renderTasks();
  };

  return (
    <div 
      className="task" 
      draggable="true" 
      onDragStart={() => {/* Aquí manejas el evento de dragstart */}} 
      onClick={() => openTaskModalForEditing(task.id, task)}
    >
      <div className="task-title">{task.title}</div>
      <p className="task-description">Descripción: {task.description}</p>
      <p className="task-assigned">Asignado a: {task.assignedTo}</p>
      <p className="task-priority">Prioridad: {task.priority}</p>
      <p className="task-state">Estado {task.state}</p>
      <p className="task-due-date">Fecha límite: {task.endDate}</p>
      <button className="deleteButton" onClick={handleDelete}></button>
    </div>
  );
};

export default Tarea;
