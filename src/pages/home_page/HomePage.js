import { FixedSizeGrid } from 'react-window';
import styles from './homePage.module.scss';
import Button from '../../components/ui/btn_card/Btncard';


function HomePage({ alturaCartao = 550, larguraColuna = 350, nColuna = 4 }) {

    const cartoes = Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        nome: `Cartão ${i + 1}`,
        img:'https://1.bp.blogspot.com/-eeL2CHnqb3s/YRLY4YjgIKI/AAAAAAAAj00/24Ry60LprNI_Y56OJkr5ESvIsNkMzHxngCLcBGAsYHQ/s950/RIP.jpeg',
    }));

    const Cell = ({ columnIndex, rowIndex, style }) => {

        const index = rowIndex * nColuna + columnIndex;

        if (index >= cartoes.length) return null;

        const cartao = cartoes[index];

        return (
            <div style={{ ...style, padding: "10px", boxSizing: "border-box", }}>

                <div className={styles.Card}>

                    <img className={styles.img} src={cartao.img} alt={cartao.nome}/>
                    <h3>{cartao.nome}</h3>
                    <h4>ID: {cartao.id}</h4>


                    <div className={styles.divBtn}>
                    <Button type="editar"></Button>
                    <Button type="excluir"></Button>
                    </div>

                </div>

            </div>


        );


    };

    return <>



        <div className={styles.HomePage}>


            <FixedSizeGrid
            columnCount = {nColuna}
            columnWidth = {larguraColuna}
            rowCount = {Math.ceil(cartoes.length / nColuna)}
            rowHeight = {alturaCartao}
                height={700}
                itemCount={cartoes.length}
                itemSize={alturaCartao}
                width={1420}

            >

                {Cell}

            </FixedSizeGrid>
        </div>
    </>

}

export default HomePage;