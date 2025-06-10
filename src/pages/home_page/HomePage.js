import { FixedSizeGrid } from 'react-window';
import styles from './homePage.module.scss';
import Button from '../../components/ui/btn_card/Btncard';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function HomePage({ alturaCartao = 550, larguraColuna = 350, nColuna = 4 }) {
    const location = useLocation();
    const cartoes_temp = location.state?.cartoes ||
        Array.from({ length: 10 }, (_, i) => ({
            id: `${i + 1}`,
            nome: `Cartão ${i + 1}`,
            img: 'https://1.bp.blogspot.com/-eeL2CHnqb3s/YRLY4YjgIKI/AAAAAAAAj00/24Ry60LprNI_Y56OJkr5ESvIsNkMzHxngCLcBGAsYHQ/s950/RIP.jpeg',
        }));

        const [cartoes, setCartoes] = useState(cartoes_temp);
        const navigate = useNavigate();
    

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

            const cartao = cartoes[index];

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

export default HomePage;