import React, { useState, useEffect } from 'react';
import Columna from '../Columna';
import Tarea from '../Tarea';
import { getTasks } from '../../taskService';

const ContenedorColumnas = () => {
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
        {getTasksByStatus("Backlog").map(task => (
          <Tarea key={task.id} task={task} />
        ))}
      </Columna>
      <Columna title="To Do">
        {getTasksByStatus("To Do").map(task => (
          <Tarea key={task.id} task={task} />
        ))}
      </Columna>
      <Columna title="In Progress">
        {getTasksByStatus("In Progress").map(task => (
          <Tarea key={task.id} task={task} />
        ))}
      </Columna>
      <Columna title="Blocked">
        {getTasksByStatus("Blocked").map(task => (
          <Tarea key={task.id} task={task} />
        ))}
      </Columna>
      <Columna title="Done">
        {getTasksByStatus("Done").map(task => (
          <Tarea key={task.id} task={task} />
        ))}
      </Columna>
    </div>
  );
};

export default ContenedorColumnas;
