import styles from './../../../pages/form_page/form.module.scss';
import Input from '../../ui/input/Input';

function FormCard({formData, handleChange, handleSubmit,  id}){
     return (
    <div className={styles.div_grande}>

     <h2 className={styles.titulo}>
     {id === undefined || id === "" ? "Criar Cartão" : "Editar Cartão"}
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

export default FormCard;