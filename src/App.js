import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
// import VideoUpload from './pages/VideoUpload';
// import Annotations from './pages/Annotations';
// import Notifications from './pages/Notifications';
// import SideBySide from './pages/SideBySide';
// import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      {/* {user && <Navbar />} */}
      <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>}/> 
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/upload" element={user ? <VideoUpload /> : <Navigate to="/login" />} />
        <Route path="/annotations" element={user ? <Annotations /> : <Navigate to="/login" />} />
        <Route path="/notifications" element={user ? <Notifications /> : <Navigate to="/login" />} />
        <Route path="/side-by-side" element={user ? <SideBySide /> : <Navigate to="/login" />} /> */} 
      </Routes>
    </Router>
  );
}

export default App;
