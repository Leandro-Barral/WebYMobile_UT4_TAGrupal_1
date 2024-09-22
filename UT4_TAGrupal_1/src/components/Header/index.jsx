/* eslint-disable react/prop-types */
import Boton from "../Boton";
import ModoOscuro from "../ModoOscuro";

const Header = () => {
    return (
        <div id="barra">
            <div id="logo-container">
                <img id="fotologo" src="task.png" alt="Logo"></img>
                <div id="titulo">Gestor de Tareas</div>
            </div>
            <div id="buttonsContainer">
                <Boton id="btn-desktop" className="button is-rounded">
                    Agregar Tarea
                </Boton>
                <ModoOscuro id="modo-oscuro" />
            </div>
        </div>
    )
}

export default Header;