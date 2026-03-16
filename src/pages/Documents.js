import React, { useEffect, useState } from "react";
import FarmerChain from "../blockchain/blockchain";
import "../styles/documents.css";

function Documents(){

const [documents,setDocuments] = useState([])
const [search,setSearch] = useState("")

useEffect(()=>{

const chain = FarmerChain.chain

/* filter blocks containing documents */

const docs = chain
.slice(1)
.filter(block => block.data.documentType)
.map(block => block.data)

setDocuments(docs)

},[])

/* search */

const filteredDocs = documents.filter(doc =>

doc.farmerID?.toLowerCase().includes(search.toLowerCase()) ||
doc.documentType?.toLowerCase().includes(search.toLowerCase())

)

return(

<div className="documents-container">

<h2>Farmer Documents</h2>

<input
className="doc-search"
placeholder="Search by Farmer ID or Document Type"
onChange={(e)=>setSearch(e.target.value)}
/>

<table>

<thead>

<tr>

<th>Farmer ID</th>
<th>Document Type</th>
<th>File Name</th>
<th>Blockchain Hash</th>

</tr>

</thead>

<tbody>

{filteredDocs.length === 0 ?(

<tr>

<td colSpan="4">No documents found</td>

</tr>

):(

filteredDocs.map((doc,index)=>(

<tr key={index}>

<td>{doc.farmerID}</td>
<td>{doc.documentType}</td>
<td>{doc.fileName}</td>
<td>{doc.hash}</td>

</tr>

))

)}

</tbody>

</table>

</div>

)

}

export default Documents