import styles from './btn_entrar.module.scss'

function Button({text}) {
    return <>
        <button id="button" className={styles.Button}>{text}</button>
    </>
}

export default Button;