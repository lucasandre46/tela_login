import styles from './btnCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function Button({ type, name, index, cartoes, setCartoes  }) {

    const excluirClick = () => {
        if (type === "excluir") {
            setCartoes([
                ...cartoes.slice(0, index),
                ...cartoes.slice(index + 1)
            ]);
        }
    };


    return (
       <button
            type="button"
            name={name}
            onClick={type === "excluir" ? excluirClick : undefined}
            className={
                type === "excluir"
                    ? `${styles.botao} ${styles.excluir}`
                    : `${styles.botao} ${styles.editar}`
            }
        >
            {type === "editar" && <FontAwesomeIcon icon={faPen} />}
            {type === "excluir" && <FontAwesomeIcon icon={faTrash} />}
        </button>
    );
}

export default Button;