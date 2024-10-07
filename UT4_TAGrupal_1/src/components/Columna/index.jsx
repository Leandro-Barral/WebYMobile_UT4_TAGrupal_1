import React from 'react';

const Columna = ({ title, children, onDrop }) => {
  return (
    <div className="column" onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
      <div className="box">
        <h2 className="subtitle">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Columna;
