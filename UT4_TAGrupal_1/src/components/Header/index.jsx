// Header.js
import React from "react";
import Boton from "../Boton";
import ModoOscuro from "../ModoOscuro";

const Header = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <div id="barra">
            <div id="logo-container">
                <img id="fotologo" src="src/assets/task.png" alt="Logo"></img>
                <div id="titulo">Gestor de Tareas</div>
            </div>
            <div id="buttonsContainer">
                <Boton id="btn-desktop" className="button is-rounded">
                    Agregar Tarea
                </Boton>
                <ModoOscuro 
                    id="modo-oscuro" 
                    toggleDarkMode={toggleDarkMode} 
                    isDarkMode={isDarkMode} 
                />
            </div>
        </div>
    )
}

export default Header;
