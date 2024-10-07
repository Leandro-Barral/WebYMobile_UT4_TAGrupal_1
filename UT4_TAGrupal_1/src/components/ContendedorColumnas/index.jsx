import React, { useState, useEffect } from 'react';
import Columna from '../Columna';
import Tarea from '../Tarea';
import { getTasks } from '../../taskService';

const ContenedorColumnas = ({ onTaskClick }) => {
  const [tasks, setTasks] = useState([]); // Aquí almacenamos las tareas

  // Cargar tareas cuando el componente se monta
  useEffect(() => {
    const fetchTasks = async () => {
      const tasksFromBackend = await getTasks();
      setTasks(tasksFromBackend);
    };
    fetchTasks();
  }, []);

  // Filtrar las tareas por su estado y pasarlas a las columnas correspondientes
  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status.trim().toLowerCase() === status.trim().toLowerCase());
  };

  
  return (
    <div className="columns-container">
      <Columna title="Backlog">
        {tasks.filter(task => task.status === 'Backlog').map(task => (
          <Tarea key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </Columna>
      <Columna title="To Do">
        {tasks.filter(task => task.status === 'To Do').map(task => (
          <Tarea key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </Columna>
      <Columna title="In Progress">
        {tasks.filter(task => task.status === 'In Progress').map(task => (
          <Tarea key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </Columna>
      <Columna title="Blocked">
        {tasks.filter(task => task.status === 'Blocked').map(task => (
          <Tarea key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </Columna>
      <Columna title="Done">
        {tasks.filter(task => task.status === 'Done').map(task => (
          <Tarea key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </Columna>
    </div>
  );
};

export default ContenedorColumnas;
