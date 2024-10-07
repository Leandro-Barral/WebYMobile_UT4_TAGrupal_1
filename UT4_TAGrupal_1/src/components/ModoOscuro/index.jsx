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
            {isDarkMode ? "" : ""}
        </button>
    );
};

export default ModoOscuro;
