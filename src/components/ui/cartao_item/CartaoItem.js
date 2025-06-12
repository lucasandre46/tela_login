import styles from './../../../pages/home_page/homePage.module.scss';
import Button from '../btn_card/Btncard';




function CartaoItem({ cartao, onEdit, onDelete }) {


    return (
       

            <div className={styles.Card}>

                <img className={styles.img} src={cartao.img} alt={cartao.nome} />
                <h3>{cartao.nome}</h3>
                <h4>ID: {cartao.id}</h4>


                <div className={styles.divBtn}>
                    <Button type="editar"
                        onClick={onEdit}
                    ></Button>


                    <Button
                        type="excluir"
                        onClick={onDelete}>

                        </Button>
                </div>

            </div>
       

    );
}

export default CartaoItem;