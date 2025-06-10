import styles from './btn_entrar.module.scss';

function Button({ text, onClick, id}) {

  let className = '';

  if (id === 'entrar') {
    className = styles.entrar;
  } else if (id === 'salvar') {
    className = styles.salvar;
  }

  return (
    <button
      id={id}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
}


export default Button;