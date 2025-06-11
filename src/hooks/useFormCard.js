import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCards } from "./useCards";

export const useFormCard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartoes, id } = location.state || null;
}

const [formData, setFormData] = useState({
    id: "",
    nome: "",
    img: "",
  });

   useEffect(() => {
    if (id !== undefined) {
      const cartao = cartoes.find(c => c.id === Number(id));
      if (cartao) setFormData(cartao);
    }
  }, [id, cartoes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoCartao = {
      id: Number(formData.id),
      nome: formData.nome,
      img: formData.img,
    };

    let novoVetor;

    

    if (id === undefined || id === "" || cartoes[id] === undefined) {
      novoVetor = [...cartoes, novoCartao];
    } else {
      novoVetor = [...cartoes];
      novoVetor[id] = novoCartao;
    }

    navigate('/home', { state: { cartoes: novoVetor } });
  };