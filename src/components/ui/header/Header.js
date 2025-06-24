import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { useTheme } from './../../../theme/themeContext';
import styled from 'styled-components';
import { useAuth } from './../../../context/AuthContext';

const { logout } = useAuth();

const HeaderStyle = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

function Header() {

  const { toggleTheme, theme } = useTheme();

  return <>

    <HeaderStyle>
      <Link className={styles.btnlogin} to={'/'} >Login</Link>
       <button className={styles.btnlogin} onClick={logout}>Logout</button>
      <Link className={styles.btnhome} to={'/home'}>Home</Link>


      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <span className={styles.slider}></span>
      </label>

    </HeaderStyle>


  </>
}

export default Header;