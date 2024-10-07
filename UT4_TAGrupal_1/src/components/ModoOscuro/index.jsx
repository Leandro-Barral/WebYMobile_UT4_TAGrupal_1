/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ModoOscuro = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <button 
            type="button" 
            id="modo-oscuro" 
            onClick={toggleDarkMode}
            className="button is-light"
        >
            <img
                src={isDarkMode ? 'src/assets/sol.png' : 'src/assets/luna.png'}
                alt={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
            />
        </button>
    );
};

export default ModoOscuro;

