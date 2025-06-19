import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import HomePage from './pages/home_page/HomePage';
import Header from './components/ui/header/Header';
import FormPage from './pages/form_page/FormPage';
import { ThemeProvider } from './theme/themeContext';
import { GlobalStyle } from './style/GlobalStyled';




function App() {
  return (
    <div className='App'>
      <ThemeProvider>
       <GlobalStyle/>
        <Header />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/form' element={<FormPage />} />

        </Routes>

      </ThemeProvider>

    </div>
  );
}

export default App;
