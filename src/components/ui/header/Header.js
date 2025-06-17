import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import {useTheme} from'./../../../theme/themeContext';

function Header(){

    const { toggleTheme, theme } = useTheme();

    return <>
    
    <header className={styles.header}> 
        <Link className={styles.btnlogin} to={'/'} >Login</Link>
        <Link className={styles.btnhome} to={'/home'}>Home</Link>
        
        
        <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <span className={styles.slider}></span>
      </label>
      
    </header>
    
    
    </>
} 

export default Header;