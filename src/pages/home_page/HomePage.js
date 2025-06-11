import { useNavigate } from "react-router-dom";
import { useCards } from "../../hooks/useCards";
import CartaoGrid from "../../components/container/GridCard/GridCard";

function HomePage() {
        
        const [cartoes, removerCartao] = useCards;
        const navigate = useNavigate();
    

        return (
        <CartaoGrid
        
        cartoes = {cartoes}

        />
        );
   

}

export default HomePage;