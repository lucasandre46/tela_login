import { FixedSizeGrid } from "react-window";
import styles from './../../../pages/home_page/homePage.module.scss';
import CartaoItem from "../../ui/cartao_item/CartaoItem";



function CartaoGrid ({cartoes, alturaCartao = 550, larguraColuna = 350, nColuna = 4 }){

     const Cell = ({ columnIndex, rowIndex, style }) => {

        const index = rowIndex * nColuna + columnIndex;

        if (index - 1 >= cartoes.length) {
            return null;
        } else if (index === cartoes.length) {
            return (

                <div style={{ ...style, padding: "10px", boxSizing: "border-box", }} onClick={
                    () => {
                        navigate('/form', {
                            state: {
                                cartoes: cartoes
                            }
                        })
                    }
                } >
                    <div className={styles.Card}>
                        <h1 style={{ fontSize: "7vw" }} className={styles.mais}>+</h1>

                    </div>
                </div>
            );
        } else {

            <CartaoItem
            cartao={cartoes[index]}
          />

        };

    }


    return <>



        <div className={styles.HomePage}>


            <FixedSizeGrid
                columnCount={nColuna}
                columnWidth={larguraColuna}
                rowCount={Math.ceil((cartoes.length + 1) / nColuna)}
                rowHeight={alturaCartao}
                height={700}


                width={1420}

            >

                {Cell}

            </FixedSizeGrid>
        </div>
    </>
}

export default CartaoGrid;

