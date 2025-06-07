import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import Button from "../../components/ui/btn_card/Btncard";
import Input from "../../components/ui/input/Input";
import styles from "./form.module.scss";

function FormPage() {
  const location = useLocation();
  const { cartoes = [], id } = location.state || {};

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

    const existe = cartoes.some(c => c.id === novoCartao.id);

    if (!existe) {
      novoVetor = [...cartoes, novoCartao];
    } else {
      novoVetor = cartoes.map(c => c.id === novoCartao.id ? novoCartao : c);
    }

    navigate('/home', { state: { cartoes: novoVetor } });
  };

  const cartaoExiste = cartoes.find(c => c.id === Number(id));

  return (
    <div className={styles.div_grande}>

      <h2 className={styles.titulo}>
        {cartaoExiste ? "Atualizar Cartão" : "Criar Cartão"}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
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

        <Button
          type="submit"
          className={styles.btn_fds}
        >
          {cartaoExiste ? "Atualizar" : "Criar"}
        </Button>
        </div>

      </form>
    </div>
  );
}

export default FormPage;