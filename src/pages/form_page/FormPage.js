import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import Input from "../../components/ui/input/Input";
import styles from "./form.module.scss";


function FormPage() {
  const location = useLocation();
  const { cartoes, id } = location.state || null;

  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    img: "",
  });

  const navigate = useNavigate();

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

  return (
    <div className={styles.div_grande}>

      <h2 className={styles.titulo}>
        {id !== undefined && cartoes[id] ? "Atualizar Cartão" : "Criar Cartão"}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <div className={styles.div_card}>
          <Input
            type="number"
            name="id"
            onChange={handleChange}
            value={formData.id}
          />
          <Input
            type="text"
            name="nome"
            onChange={handleChange}
            value={formData.nome}
          />
          <Input
            type="text"
            name="img"
            onChange={handleChange}
            value={formData.img}
          />

        <button className={styles.btn}>
          Salvar
        </button>

        </div>

      </form>
    </div>
  );
}

export default FormPage;