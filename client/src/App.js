import './App.scss';
import { Navbar } from './components/Header/Navbar/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname === "/"){
      navigate("/home")
    }
  },[location.pathname])

  return (
    <div className="App">
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
