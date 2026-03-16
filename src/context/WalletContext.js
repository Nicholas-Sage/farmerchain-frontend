import React, { createContext, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        provider,
        setProvider,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};