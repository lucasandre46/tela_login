import { Link } from 'react-router-dom'
import styles from './header.module.scss'

function Header(){
    return <>
    
    <header className={styles.header}> 
        <Link className={styles.btnlogin} to={'/'} >Login</Link>
        <Link className={styles.btnhome} to={'/home'}>Home</Link>
        
    </header>
    
    
    </>
} 

export default Header;