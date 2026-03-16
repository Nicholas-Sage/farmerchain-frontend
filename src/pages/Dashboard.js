import React from "react";
import { FaFileUpload, FaCheckCircle, FaFileAlt } from "react-icons/fa";

function Dashboard() {

const stats = [
{
title: "Uploaded Documents",
value: 12,
icon: <FaFileUpload size={30} />,
color: "#4CAF50"
},
{
title: "Verified Documents",
value: 8,
icon: <FaCheckCircle size={30} />,
color: "#2196F3"
},
{
title: "Pending Documents",
value: 4,
icon: <FaFileAlt size={30} />,
color: "#FF9800"
}
];

return (

<div className="page">

<h2>Dashboard</h2>

<div className="cards">

{stats.map((stat,index)=>(

<div key={index} className="card">

<div className="cardIcon" style={{color:stat.color}}>
{stat.icon}
</div>

<h3>{stat.value}</h3>

<p>{stat.title}</p>

</div>

))}

</div>

</div>
);
}

export default Dashboard;