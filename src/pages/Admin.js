import React, { useState, useEffect } from "react";

export default function Admin() {

const [members, setMembers] = useState([]);
const [records, setRecords] = useState([]);

useEffect(() => {

loadData();

}, []);

function loadData() {

const dummyMembers = [
{ address: "0x234A...91", records: 3 },
{ address: "0xA12B...8C", records: 1 }
];

const dummyRecords = [
{ id: 1, uploader: "0x234A...91", verified: true },
{ id: 2, uploader: "0xA12B...8C", verified: true }
];

setMembers(dummyMembers);
setRecords(dummyRecords);

}

function unverifyRecord(id) {

alert("Record " + id + " unverified");

}

return (

<div>

<h1>Admin Control</h1>

{/* MEMBERS */}

<h2>Registered Members</h2>

<table className="records-table">

<thead>
<tr>
<th>Wallet Address</th>
<th>Records Uploaded</th>
</tr>
</thead>

<tbody>

{members.map((m,i) => (

<tr key={i}>

<td>{m.address}</td>
<td>{m.records}</td>

</tr>

))}

</tbody>

</table>


<br/>

{/* VERIFIED RECORDS */}

<h2>Verified Records</h2>

<table className="records-table">

<thead>

<tr>
<th>ID</th>
<th>Uploader</th>
<th>Status</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{records.map(record => (

<tr key={record.id}>

<td>{record.id}</td>

<td>{record.uploader}</td>

<td>Verified</td>

<td>

<button
onClick={() => unverifyRecord(record.id)}
>
Unverify
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}