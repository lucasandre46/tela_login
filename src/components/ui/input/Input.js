import styles from './input.module.scss';

function Input({ name, type, onChange, erro }) {

  const labelText = type === 'email' ? 'E-mail:' :
                    type === 'senha' ? 'Senha:' :
                    type === 'number' ? 'ID:' :
                    name === 'nome' ? 'Nome:' :
                    name === 'img' ? 'Link da Imagem:':
                    '';

  return (
    <div className={styles.Wrapper}>
      {labelText && <label htmlFor={name} className={styles.label}>{labelText}</label>}

      <input
        type={type}
        name={name}
        id={name}
        className={`${styles.Input} ${erro ? styles.InputErro : ''}`}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
