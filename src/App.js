import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { useState } from 'react';

function App() {
  const user = null;
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    // Simulated authentication
    // In a real application, you would perform actual authentication
    // Here, we're just setting isAuthenticated to true to simulate login

  };

  return (
    <Router>
      <TopBar user={user} />
      <Routes>
        <Route path="/register" element={<Register onRegister={() => setIsAuthenticated(true)} />}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/write" element={<Write />} />
        <Route path="*" element={<div>Not Found or You do not have permission.</div>} />
        <Route path="/settings" element={user ? <Settings/> : <Register />} />
        <Route path="/post/:postId"
          element={<Single />}
        />
      </Routes>
    </Router>
  );
}

export default App;
