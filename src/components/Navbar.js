import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "../components/ConnectWallet";
import { WalletContext } from "../context/WalletContext";
import "../styles/navbar.css";

import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaCheckCircle,
  FaUpload,
  FaFileAlt,
  FaClipboardList,
  FaInfoCircle
} from "react-icons/fa";

function Navbar() {
  const { setWalletAddress } = useContext(WalletContext);

  // Detect if user changes accounts in MetaMask
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress(null);
        }
      });
    }
  }, [setWalletAddress]);

  return (
    <div className="navbar">

      <Link to="/" title="Home">
        <FaHome/>
      </Link>

      <Link to="/register" title="Register Farmer">
        <FaUserPlus/>
      </Link>

      <Link to="/members" title="Members">
        <FaUsers/>
      </Link>

      <Link to="/verify" title="Verify">
        <FaCheckCircle/>
      </Link>

      <Link to="/upload" title="Upload Record">
        <FaUpload/>
      </Link>

      <Link to="/documents" title="Documents">
        <FaFileAlt/>
      </Link>

      <Link to="/status" title="Record Status">
        <FaClipboardList/>
      </Link>

      <Link to="/about" title="About">
        <FaInfoCircle/>
      </Link>

      <nav>
        <h2></h2>
        <ConnectWallet />
      </nav>

    </div>
  );
}

export default Navbar;