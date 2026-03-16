import React, { useState, useContext } from "react";
import "../styles/register.css";
import FarmerChain from "../blockchain/blockchain";
import { WalletContext } from "../context/WalletContext";

function RegisterFarmer() {
  const { walletAddress } = useContext(WalletContext);

  const [farmer, setFarmer] = useState({
    name: "",
    nrc: "",
    phone: "",
    district: "",
    farmSize: "",
    crop: ""
  });

  const [errors, setErrors] = useState({});

  const generateFarmerID = () => {
    return "FARM-" + Math.floor(100000 + Math.random() * 900000);
  };

  const handleChange = (e) => {
    setFarmer({
      ...farmer,
      [e.target.name]: e.target.value
    });
  };

  /* VALIDATION */
  const validate = () => {
    let newErrors = {};
    const nrcRegex = /^\d{6}\/\d{2}\/\d{1}$/;
    const phoneRegex = /^\d{10}$/;

    if (!nrcRegex.test(farmer.nrc)) {
      newErrors.nrc = "NRC must be in format: 123456/78/1";
    }

    if (!phoneRegex.test(farmer.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (farmer.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!farmer.district) {
      newErrors.district = "District is required";
    }

    if (farmer.farmSize <= 0) {
      newErrors.farmSize = "Farm size must be greater than 0";
    }

    if (!farmer.crop) {
      newErrors.crop = "Please select a crop";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (!walletAddress) {
      alert("Please connect your MetaMask wallet before registering!");
      return;
    }

    const farmerID = generateFarmerID();

    const farmerData = {
      ...farmer,
      id: farmerID,
      walletAddress // attach wallet address to farmer record
    };

    FarmerChain.addBlock(farmerData);

    alert("Farmer Registered & Stored on Blockchain");

    console.log(FarmerChain.chain);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register Farmer</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Farmer Full Name"
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            name="nrc"
            placeholder="NRC (123456/78/1)"
            onChange={handleChange}
          />
          {errors.nrc && <p className="error">{errors.nrc}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number (10 digits)"
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            type="text"
            name="district"
            placeholder="District"
            onChange={handleChange}
          />
          {errors.district && <p className="error">{errors.district}</p>}

          <input
            type="number"
            name="farmSize"
            placeholder="Farm Size (Hectares)"
            onChange={handleChange}
          />
          {errors.farmSize && <p className="error">{errors.farmSize}</p>}

          <select name="crop" onChange={handleChange}>
            <option value="">Select Crop</option>
            <option value="Maize">Maize</option>
            <option value="Soybeans">Soybeans</option>
            <option value="Groundnuts">Groundnuts</option>
            <option value="Beans">Beans</option>
          </select>
          {errors.crop && <p className="error">{errors.crop}</p>}

          <button type="submit">Register Farmer</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterFarmer;