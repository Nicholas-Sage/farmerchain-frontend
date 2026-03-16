import React, { useState } from "react";
import FarmerChain from "../blockchain/blockchain";
import "../styles/verify.css";

function AdminVerify(){

const [search,setSearch] = useState("")
const [farmer,setFarmer] = useState(null)
const [verified,setVerified] = useState(false)

/* search farmer */

const handleSearch = ()=>{

const chain = FarmerChain.chain.slice(1)

const found = chain.find(block =>

block.data.id === search || block.data.nrc === search

)

if(found){

setFarmer(found.data)
setVerified(found.data.verified || false)

}else{

alert("Farmer not found")

}

}

/* verify farmer */

const verifyFarmer = ()=>{

farmer.verified = true

setVerified(true)

alert("Farmer Verified Successfully")

}

return(

<div className="verify-container">

<h2>Verify Farmer</h2>

<div className="verify-search">

<input
type="text"
placeholder="Enter Farmer ID or NRC"
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={handleSearch}>

Search

</button>

</div>

{farmer && (

<div className="farmer-card">

<h3>Farmer Details</h3>

<p><strong>ID:</strong> {farmer.id}</p>

<p><strong>Name:</strong> {farmer.name}</p>

<p><strong>NRC:</strong> {farmer.nrc}</p>

<p><strong>District:</strong> {farmer.district}</p>

<p><strong>Crop:</strong> {farmer.crop}</p>

<p><strong>Status:</strong> {verified ? "Verified ✅" : "Not Verified ❌"}</p>

{!verified && (

<button className="verify-btn" onClick={verifyFarmer}>

Verify Farmer

</button>

)}

</div>

)}

</div>

)

}

export default AdminVerify