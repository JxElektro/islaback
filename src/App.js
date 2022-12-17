import { Routes, Route  } from 'react-router-dom';
import { Home } from './Routes/Home';
import { Login } from './Components/Login';
import { AuthProvider } from './Context/authContext';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';




function App() {
const [state, setCurrentState] = useState(0);
const navigate = useNavigate();

if (state === 0) {
  navigate("/home");
  setCurrentState(1);
}


  return (
    <div className="App">
      <AuthProvider>
      <Routes>
      
      
        <Route path="/" element={<Login/>} />

        <Route path="/home" element={<Home />} />
        
      </Routes>
      

      </AuthProvider>
    </div>
  );
}

export default App;

// Path: islaback\src\App.js