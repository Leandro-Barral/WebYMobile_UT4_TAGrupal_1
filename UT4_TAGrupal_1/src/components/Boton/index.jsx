import react from 'react';
import styles from './index.module.css';

const Boton = ({ onClick, label }) => {
    return (
        <button className={styles.boton} onClick={onClick}>
            {label}
        </button>
    );
}

export default Boton;