import React, { useState } from "react";
import FarmerChain from "../blockchain/blockchain";
import "../styles/status.css";

function RecordStatus(){

const [search,setSearch] = useState("")
const [farmer,setFarmer] = useState(null)
const [documents,setDocuments] = useState([])

const checkStatus = ()=>{

const chain = FarmerChain.chain.slice(1)

/* find farmer */

const farmerBlock = chain.find(block =>

block.data.id === search || block.data.nrc === search

)

if(!farmerBlock){

alert("Farmer not found")
return

}

setFarmer(farmerBlock.data)

/* find documents */

const docs = chain
.filter(block => block.data.farmerID === farmerBlock.data.id)
.map(block => block.data)

setDocuments(docs)

}

return(

<div className="status-container">

<h2>Farmer Record Status</h2>

<div className="status-search">

<input
placeholder="Enter Farmer ID or NRC"
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={checkStatus}>

Check

</button>

</div>

{farmer &&(

<div className="status-card">

<h3>Farmer Information</h3>

<p><strong>ID:</strong> {farmer.id}</p>
<p><strong>Name:</strong> {farmer.name}</p>
<p><strong>District:</strong> {farmer.district}</p>
<p><strong>Crop:</strong> {farmer.crop}</p>
<p><strong>Status:</strong> {farmer.verified ? "Verified ✅" : "Not Verified ❌"}</p>

<h4>Documents</h4>

{documents.length === 0 ?(

<p>No documents uploaded</p>

):(

<ul>

{documents.map((doc,index)=>(

<li key={index}>

{doc.documentType} ({doc.fileName})

</li>

))}

</ul>

)}

</div>

)}

</div>

)

}

export default RecordStatus