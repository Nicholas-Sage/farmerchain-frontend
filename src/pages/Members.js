import React, { useState, useEffect } from "react";
import FarmerChain from "../blockchain/blockchain";
import "../styles/members.css";

function Members(){

const [farmers,setFarmers] = useState([])
const [search,setSearch] = useState("")

useEffect(()=>{

const chain = FarmerChain.chain

/* remove genesis block */

const farmerBlocks = chain.slice(1).map(block => block.data)

setFarmers(farmerBlocks)

},[])

/* SEARCH */

const filteredFarmers = farmers.filter(farmer =>

farmer.name?.toLowerCase().includes(search.toLowerCase()) ||
farmer.nrc?.includes(search) ||
farmer.district?.toLowerCase().includes(search.toLowerCase())

)

return(

<div className="members-container">

<h2>Registered Farmers</h2>

<input
type="text"
placeholder="Search by name, NRC, or district..."
className="search-bar"
onChange={(e)=>setSearch(e.target.value)}
/>

<table>

<thead>

<tr>

<th>Farmer ID</th>
<th>Name</th>
<th>NRC</th>
<th>Phone</th>
<th>District</th>
<th>Farm Size</th>
<th>Crop</th>

</tr>

</thead>

<tbody>

{filteredFarmers.length === 0 ? (

<tr>

<td colSpan="7">No farmers found</td>

</tr>

) : (

filteredFarmers.map((farmer,index)=> (

<tr key={index}>

<td>{farmer.id}</td>
<td>{farmer.name}</td>
<td>{farmer.nrc}</td>
<td>{farmer.phone}</td>
<td>{farmer.district}</td>
<td>{farmer.farmSize} ha</td>
<td>{farmer.crop}</td>

</tr>

))

)}

</tbody>

</table>

</div>

)

}

export default Members