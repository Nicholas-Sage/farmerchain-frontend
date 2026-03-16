import React, { useContext, useEffect, useState } from "react";
import { WalletContext } from "../context/WalletContext";
import { getWalletBalance } from "../services/wallet";

function WalletInfo() {
  const { walletAddress, provider } = useContext(WalletContext);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (walletAddress && provider) {
        const bal = await getWalletBalance(provider, walletAddress);
        setBalance(parseFloat(bal).toFixed(4));
      }
    };
    fetchBalance();
  }, [walletAddress, provider]);

  if (!walletAddress) return <p>Wallet not connected</p>;

  return (
    <p>
      Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}{" "}
      {balance !== null && `(${balance} ETH)`}
    </p>
  );
}

export default WalletInfo;