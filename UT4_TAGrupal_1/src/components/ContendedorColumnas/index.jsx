import React from 'react';
import Columna from '../Columna'

const ContenedorColumnas = () => {
  return (
    <div className="columns-container">
      <Columna title="Backlog" />
      <Columna title="To Do" />
      <Columna title="In Progress" />
      <Columna title="Blocked" />
      <Columna title="Done" />
    </div>
  )
};

export default ContenedorColumnas;