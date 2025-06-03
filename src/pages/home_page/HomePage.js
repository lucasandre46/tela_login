import { FixedSizeGrid } from 'react-window';
import styles from './homePage.module.scss';

function HomePage({ alturaCartao = 120, larguraColuna = 200, nColuna = 4 }) {

    const cartoes = Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        nome: `Cartão ${i + 1}`,
    }));

    const Cell = ({ columnIndex, rowIndex, style }) => {

        const index = rowIndex * nColuna + columnIndex;

        if (index >= cartoes.length) return null;

        const cartao = cartoes[index];

        return (


            <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>

                <div className={styles.Card}>

                    <h1>{cartao.nome}</h1>
                    <h3>ID: {cartao.id}</h3>

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
                height={600}
                itemCount={cartoes.length}
                itemSize={alturaCartao}
                width={larguraColuna * nColuna}
            >

                {Cell}

            </FixedSizeGrid>
        </div>
    </>

}

export default HomePage;