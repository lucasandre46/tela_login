import styles from './btnText.module.scss'

function BtnText({text, id}){
    const ButtonClass = `${styles.BtnText} ${id === "cadastrar" ? styles.cadastrar:""}`
    
    return<>

    <button className={ButtonClass}
    id={id}
    >{text}
    </button>
    

    
    </>
}

export default BtnText;