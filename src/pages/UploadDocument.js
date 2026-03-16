import React, { useState } from "react";
import FarmerChain from "../blockchain/blockchain";
import "../styles/upload.css";

function UploadDocument(){

const [farmerID,setFarmerID] = useState("")
const [docType,setDocType] = useState("")
const [file,setFile] = useState(null)

/* simple hash generator */

const generateHash = (data)=>{

return btoa(data + Date.now()).substring(0,25)

}

/* upload */

const handleUpload = (e)=>{

e.preventDefault()

if(!farmerID || !docType || !file){

alert("Please complete all fields")
return

}

/* create document record */

const documentData = {

farmerID:farmerID,
documentType:docType,
fileName:file.name,
hash:generateHash(file.name)

}

/* add block */

FarmerChain.addBlock(documentData)

alert("Document uploaded and stored on blockchain")

console.log(FarmerChain.chain)

}

return(

<div className="upload-container">

<h2>Upload Farmer Document</h2>

<form className="upload-form" onSubmit={handleUpload}>

<input
type="text"
placeholder="Farmer ID"
onChange={(e)=>setFarmerID(e.target.value)}
/>

<select onChange={(e)=>setDocType(e.target.value)}>

<option value="">Select Document Type</option>
<option>NRC Copy</option>
<option>Farm Ownership Proof</option>
<option>FISP Eligibility Form</option>

</select>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button type="submit">

Upload Document

</button>

</form>

</div>

)

}

export default UploadDocument