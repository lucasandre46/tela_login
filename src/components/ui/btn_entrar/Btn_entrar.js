import styles from './btn_entrar.module.scss';

function Button({ text, onClick}) {
  return (
    <button
      id="button"
      className={styles.Button}
      onClick={onClick}
    >
      {text}
    </button>
  );
}


export default Button;