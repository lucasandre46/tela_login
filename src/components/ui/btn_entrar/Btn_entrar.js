import styles from './btn_entrar.module.scss';

function Button({ text, tryLogin }) {
  return (
    <button
      id="button"
      className={styles.Button}
      onClick={tryLogin}
    >
      {text}
    </button>
  );
}


export default Button;