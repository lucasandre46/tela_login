
import { useCards } from "../../hooks/useCards";
import CartaoGrid from "../../components/container/GridCard/GridCard";
import { useNavigate } from "react-router-dom";
import styles from './homePage.module.scss'


function HomePage() {
        
        const {cartoes, removerCartao,} = useCards();
        const navigate = useNavigate();
    

        return (
                   <div className={styles.HomePage}>
        <CartaoGrid

        cartoes = {cartoes}
        onAdd= {() => navigate('/form')}
        onEdit={(id) =>navigate('/form',{ state: { id } })}
       onDelete={(id) => removerCartao(id)}
        />
   </div>
        );

}

export default HomePage;

