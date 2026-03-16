import React, {useState} from "react";

function Verify(){

const [status,setStatus] = useState("Pending");

const verifyDoc = ()=>{
setStatus("Verified");
}

return(

<div className="page">

<h2>Verify Document</h2>

<div className="verifyCard">

<h3>Land Ownership Certificate</h3>

<p>Status: <b>{status}</b></p>

<button onClick={verifyDoc}>
Verify Document
</button>

</div>

</div>

);
}

export default Verify;