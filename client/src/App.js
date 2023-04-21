import './App.scss';
import { Navbar } from './components/Header/Navbar/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Banner from './components/Header/Banner/Banner';

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
      <Banner />
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
