import Input from './../../components/ui/input/Input';
import Button from './../../components/ui/btn_entrar/Btn_entrar';
import MiniBtn from './../../components/ui/miniBtn/MiniBtn';
import BtnText from './../../components/ui/btnText/BtnText';
import styles from './loginPage.module.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [loginForm, setLoginForm] =
        useState({
            email: '',
            senha: '',
        })

     const [LoginError, setLoginErro] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginForm(
            (prev) => ({
                ...prev,
                [name]: value,
            })
        )
    }

    const navigate = useNavigate();

    const cad = {
        email: 'teste.da.silva@gmail.com',
        senha: 'senha.da.silva',
    }

    const tryLogin = () => {
        const { email, senha } = loginForm;

        if (email === cad.email && senha === cad.senha) {
            alert("Login feito com Sucesso!!!");
            navigate('/home');
            setLoginErro(false);
            
        }
        else {
            alert("Email ou Senha incorretos");
            setLoginErro(true)
        }
    }

    return <>
        <div className={styles.LoginPage}>
            <div className={styles.LoginBlock}>
                <h1 className={styles.txtLogin}>Login</h1>
                <div className={styles.inputs}>

                    <Input
                        type="email"
                        name="email"
                        onChange={onChange}
                        erro={LoginError}
                    />
                    <Input
                        type="senha"
                        name="senha"
                        onChange={onChange}
                        erro={LoginError}
                    />
                    <BtnText text={"Esqueceu sua Senha?"} />

                </div>

                <Button text={"ENTRAR"}
                    tryLogin={tryLogin}
                />

                <div className={styles.mini}>
                    <MiniBtn type={"google"} />
                    <MiniBtn type={"instagram"} />
                    <MiniBtn type={"github"} />
                </div>
                <BtnText text={"Cadastrar"} id={"cadastrar"} />

            </div>
        </div>
    </>
}

export default LoginPage;