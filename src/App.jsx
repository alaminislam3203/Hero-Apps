import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar'; // ✅ Corrected path
import Home from './pages/Home/Home';
import AllApps from './pages/AllApps/AllApps';
import Installation from './pages/Installation/Installation';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* ✅ Navbar always visible */}
        <Navbar />

        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        {/* ✅ Toast Notification */}
        <ToastContainer position="top-center" autoClose={2500} />
      </div>
    </Router>
  );
}

export default App;
