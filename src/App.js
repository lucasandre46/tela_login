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

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <ThemeProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' element={<LoginPage />} />
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

        </ThemeProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
