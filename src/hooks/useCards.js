import { useEffect, useState } from "react";
import { cartoesBase } from "../models/cartoes";

const STORAGE_KEY = 'cartoes';

export const useCards = () => {

    const [cartoes, setCartoes] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY);

        if (data) {
            setCartoes(JSON.parse(data))
        } else {
            setCartoes(cartoesBase);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoesBase));
        }
    }, []);

    useEffect(() => {
        if (cartoes.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoes));
        }
    }, [cartoes])

    const adicionarCartao = (cartao) => setCartoes([...cartoes, cartao]);

    function editarCartao(index, novoCartao) {
        console.log("click no editar")
        const novo = [...cartoes];
        novo[index] = novoCartao;
        setCartoes(novo);
    };

    function removerCartao(index) {
        console.log("click no remover card");
        const novo = [...cartoes];
        novo.splice(index, 1);
        setCartoes(novo);
    }
    return {
        cartoes,
        adicionarCartao,
        editarCartao,
        removerCartao,
    };

}