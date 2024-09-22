/* eslint-disable react/prop-types */


const Tarea = ({ tarea }) => {
    return (
      <div className="tarea">
        <h3>{tarea.nombre}</h3>
        <p>{tarea.descripcion}</p>
        <p>{tarea.estado}</p>
        <p>{tarea.prioridad}</p>        
        <p>{tarea.asignadoA}</p>
        <p>{tarea.fechaInicio} - {tarea.fechaFin}</p>
      </div>
    );
  };
  
  export default Tarea;