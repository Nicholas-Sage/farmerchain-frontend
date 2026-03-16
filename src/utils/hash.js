// src/utils/hash.js
import SHA256 from "crypto-js/sha256";

export const hashData = (data) => {
  return {
    name: data.name,
    farmLocationHash: SHA256(data.farmLocation).toString(),
  };
};