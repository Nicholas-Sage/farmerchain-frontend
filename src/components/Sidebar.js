import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

import {
FaBars,
FaHome,
FaUserPlus,
FaUsers,
FaCheckCircle,
FaUpload,
FaFileAlt,
FaClipboardList,
FaInfoCircle
} from "react-icons/fa";

function Sidebar(){

return(

<div className="menu-wrapper">

<div className="menu-icon">
<FaBars/>
</div>

<div className="menu-items">

<Link to="/"><FaHome/> Home</Link>

<Link to="/register"><FaUserPlus/> Register Farmer</Link>

<Link to="/members"><FaUsers/> Members</Link>

<Link to="/verify"><FaCheckCircle/> Verify Member</Link>

<Link to="/upload"><FaUpload/> Upload Record</Link>

<Link to="/documents"><FaFileAlt/> Documents</Link>

<Link to="/status"><FaClipboardList/> Record Status</Link>

<Link to="/about"><FaInfoCircle/> About</Link>

</div>

</div>

)

}

export default Sidebar