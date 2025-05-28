import Input from './../../components/ui/input/Input';
import Button from './../../components/ui/btn_entrar/Btn_entrar';
import MiniBtn from './../../components/ui/miniBtn/MiniBtn';
import BtnText from './../../components/ui/btnText/BtnText';
import styles from './loginPage.module.scss'


function LoginPage(){
    return<>
    <div className={styles.LoginPage}>
        <div className={styles.LoginBlock}>
    <h1>Login</h1>
    <div className={styles.inputs}>

    <Input
    type="email"
    id="email"
  
    />
    <Input
    type="senha"
    id="senha"
    />
    <BtnText text={"Esqueceu sua Senha?"}/>

     </div>

    <Button text={"ENTRAR"}/>

    <div className={styles.mini}>
    <MiniBtn type={"google"} />
    <MiniBtn type={"instagram"} />
    <MiniBtn type={"github"} />
    </div>
    <BtnText text={"Cadastrar"} id={"cadastrar"}/>

    </div>
    </div>
    </>
}

export default LoginPage;