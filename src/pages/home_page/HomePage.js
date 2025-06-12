
import { useCards } from "../../hooks/useCards";
import CartaoGrid from "../../components/container/GridCard/GridCard";
import { useNavigate } from "react-router-dom";


function HomePage() {
        
        const {cartoes, removerCartao} = useCards();
        const navigate = useNavigate();
    

        return (
        <CartaoGrid

        cartoes = {cartoes}
        onAdd= {() => navigate('/form')}
        onEdit={(id) => navigate('/form',{ state: { id } })}
        onDelete={removerCartao}
        />
        );
   

}

export default HomePage;