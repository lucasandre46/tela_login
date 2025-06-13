import styles from './../../../pages/home_page/homePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function CartaoItem({ cartao, onEdit, onDelete }) {


    return (


        <div className={styles.Card}>

            <img className={styles.img} src={cartao.img} alt={cartao.nome} />
            <h3>{cartao.nome}</h3>
            <h4>ID: {cartao.id}</h4>


            <div className={styles.divBtn}>

                <button type="editar"
                    onClick={onEdit}
                    className={styles.editar}
                ><FontAwesomeIcon icon={faPen} /></button>



                <button
                    type="excluir"
                    onClick={onDelete}
                    className={styles.excluir}
                ><FontAwesomeIcon icon={faTrash} /></button>
            </div>

        </div>


    );
}

export default CartaoItem;