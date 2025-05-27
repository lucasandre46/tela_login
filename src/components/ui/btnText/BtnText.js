import styles from './btnText.module.scss'

function BtnText({text}){
    return<>
    
    <button id="btnText" className={styles.BtnText}>{text}</button>
    
    </>
}

export default BtnText;