/* eslint-disable react/prop-types */

const Columna = ({ title, children }) => {
  return (
    <div className="column">
      <div className="box">
        <h2 className="subtitle">{title}</h2>
        {children}
      </div>
    </div>
  )
};

export default Columna;