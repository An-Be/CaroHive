import './App.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname === "/"){
      navigate("/home")
    }
    // eslint-disable-next-line
  },[location.pathname])

  return (
    <div className="App">
      <Header />
      <hr />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
