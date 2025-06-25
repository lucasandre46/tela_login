import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import HomePage from './pages/home_page/HomePage';
import Header from './components/ui/header/Header';
import FormPage from './pages/form_page/FormPage';
import { ThemeProvider } from './theme/themeContext';
import { GlobalStyle } from './style/GlobalStyled';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import PortfolioPage from './pages/portfolio_page/PortfolioPage';

function App() {
  return (
    <AuthProvider>
        <ThemeProvider>
      <div className='App'>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' element={<PortfolioPage/>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            } />
            <Route path='/form' element={
              <PrivateRoute>
                <FormPage/>
              </PrivateRoute>
            } />
          </Routes>

      </div>
        </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
