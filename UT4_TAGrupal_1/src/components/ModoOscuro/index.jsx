import React from 'react';

const ModoOscuro = ({ toggleDarkMode }) => {
    return (
        <button type="button" id="modo-oscuro" onClick={toggleDarkMode}></button>
    )
};

export default ModoOscuro;
