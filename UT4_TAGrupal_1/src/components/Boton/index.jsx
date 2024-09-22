/* eslint-disable react/prop-types */

const Boton = ({ id, className, children, onClick, type = "button" }) => {
    return (
        <button id={id} className={className} onClick={onClick} type={type}>
            {children}
        </button>
    )
};

export default Boton;