import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RegisterMember from "./pages/RegisterMember";
import Members from "./pages/Members";
import AdminVerify from "./pages/AdminVerify";
import UploadDocument from "./pages/UploadDocument";
import Documents from "./pages/Documents";
import RecordStatus from "./pages/RecordStatus";
import About from "./pages/About";

import { WalletProvider } from "./context/WalletContext"; // added
import "./App.css";

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <Sidebar />

          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterMember />} />
              <Route path="/members" element={<Members />} />
              <Route path="/verify" element={<AdminVerify />} />
              <Route path="/upload" element={<UploadDocument />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/status" element={<RecordStatus />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;