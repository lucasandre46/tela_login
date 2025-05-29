import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';



function App() {
  return (
    <div className='App'>
      <header>

        </header>
    <Routes>
     <Route path='/' element={<LoginPage/>}/>

    </Routes>

    </div>
  );
}

export default App;
