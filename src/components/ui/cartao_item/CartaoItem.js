import styles from './../../../pages/home_page/homePage.module.scss';
import Button from '../btn_card/Btncard';
import { useNavigate } from 'react-router-dom';



function CartaoItem({cartao, style, index, cartoes, setCartoes}){

     return (
                <div style={{ ...style, padding: "10px", boxSizing: "border-box", }}>

                    <div className={styles.Card}>

                        <img className={styles.img} src={cartao.img} alt={cartao.nome} />
                        <h3>{cartao.nome}</h3>
                        <h4>ID: {cartao.id}</h4>


                        <div className={styles.divBtn}>
                            <Button type="editar"
                            onClick={() =>{
                                navigate('/form', {
                                    state: {
                                        cartoes: cartoes,
                                        id: index,
                                    }
                                })
                            }}
                            ></Button>
                
                
                            <Button
                                type="excluir"
                                onClick={() => {
                                    cartoes.slice()
                                    setCartoes(
                                        [
                                            ...cartoes.slice(0, index),
                                            ...cartoes.slice(index + 1),
                                        ]
                                    );
                                }}
                                ></Button>
                        </div>

                    </div>
</div>

     );
}

export default CartaoItem;