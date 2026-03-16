// src/components/BlockchainStatus.js
import React, { useState, useEffect } from "react";
import "../App.css";

const BlockchainStatus = ({ walletAddress }) => {
  const [blockNumber, setBlockNumber] = useState("Loading...");
  const [pendingTx, setPendingTx] = useState(0);
  const [balance, setBalance] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockNumber(123456 + Math.floor(Math.random() * 50));
      setPendingTx(Math.floor(Math.random() * 5));
      setBalance((Math.random() * 5).toFixed(3) + " ETH");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blockchain-status">
      <h3>Blockchain Status Live</h3>
      <p>Current Block: {blockNumber}</p>
      <p>Pending Confirmations: {pendingTx}</p>
      <p>Wallet Balance: {walletAddress ? balance : "Connect Wallet"}</p>
    </div>
  );
};

export default BlockchainStatus;