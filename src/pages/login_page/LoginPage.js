import Input from './../../components/ui/input/Input';
import Button from './../../components/ui/btn_entrar/Btn_entrar';
import MiniBtn from './../../components/ui/miniBtn/MiniBtn';
import BtnText from './../../components/ui/btnText/BtnText';
import styles from './loginPage.module.scss'
import { useState } from 'react';

function LoginPage() {
    const [value, setValue] = useState('');

    const onChange = (e) =>{
        setValue(e.target.value);
        console.log("valor atual:", e.target.value);
    }

    return <>
        <div className={styles.LoginPage}>
            <div className={styles.LoginBlock}>
                <h1>Login</h1>
                <div className={styles.inputs}>

                    <Input
                        type="email"
                        name="email"
                        onChange={onChange}
                    />
                    <Input
                        type="senha"
                        name="senha"
                        
                    />
                    <BtnText text={"Esqueceu sua Senha?"} />

                </div>

                <Button text={"ENTRAR"} />

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