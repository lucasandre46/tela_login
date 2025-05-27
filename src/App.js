import './App.css';
import Input from './components/ui/input/Input';
import Button from './components/ui/btn_entrar/Btn_entrar';
import MiniBtn from './components/ui/miniBtn/MiniBtn';
import BtnText from './components/ui/btnText/BtnText';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Login</h1>
    <div id='inputs'>   
    <Input/>
    <Input/>
     </div>
    <BtnText text={"Esqueceu sua Senha?"}/>

    <Button text={"ENTRAR"}/>

    <div id='mini'>
    <MiniBtn />
    <MiniBtn />
    <MiniBtn />
    </div>
    <BtnText text={"Cadastrar"}/>
      </header>
    </div>
  );
}

export default App;
