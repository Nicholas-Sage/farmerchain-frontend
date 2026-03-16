import React, { useContext, useState, useEffect } from "react";
import { WalletContext } from "../context/WalletContext";
import { connectWallet, getWalletBalance } from "../services/wallet";

function ConnectWallet() {
  const { walletAddress, setWalletAddress, provider, setProvider } =
    useContext(WalletContext);

  const [balance, setBalance] = useState(null);

  const handleConnect = async () => {
    const wallet = await connectWallet();
    if (wallet) {
      setWalletAddress(wallet.address);
      setProvider(wallet.provider);
    }
  };

  // Update balance whenever wallet or provider changes
  useEffect(() => {
    const fetchBalance = async () => {
      if (walletAddress && provider) {
        const bal = await getWalletBalance(provider, walletAddress);
        setBalance(parseFloat(bal).toFixed(4));
      }
    };
    fetchBalance();
  }, [walletAddress, provider]);

  return (
    <div className="connect-wallet">
      {walletAddress ? (
        <div>
          <p>
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}{" "}
            {balance !== null && `(${balance} ETH)`}
          </p>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect MetaMask</button>
      )}
    </div>
  );
}

export default ConnectWallet;