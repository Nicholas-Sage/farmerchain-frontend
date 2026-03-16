import React from "react";
import "../styles/about.css";

function About(){

return(

<div className="about-container">

<h1>About FarmerChain</h1>

<p className="about-intro">

FarmerChain is a blockchain-based record management system designed to improve transparency,
security, and efficiency in the management of farmer records under the Farmer Input Support
Programme (FISP) in Zambia.

</p>

<div className="about-section">

<h2>About FISP</h2>

<p>

The Farmer Input Support Programme (FISP) is a Zambian government initiative aimed at improving
agricultural productivity among small-scale farmers by providing subsidized farming inputs
such as fertilizer and certified seeds. The program helps farmers increase crop production
and contributes to national food security.

</p>

</div>

<div className="about-section">

<h2>Why Blockchain?</h2>

<p>

Traditional record systems can be vulnerable to manipulation, loss of data, and lack of
transparency. Blockchain technology provides a secure and tamper-resistant way of storing
records. Each record is stored in blocks that are linked together using cryptographic hashes,
making the data transparent and difficult to alter.

</p>

</div>

<div className="about-section">

<h2>System Features</h2>

<ul>

<li>Farmer Registration System</li>

<li>Blockchain-based Farmer Record Storage</li>

<li>Farmer Verification for FISP Eligibility</li>

<li>Secure Document Upload and Hash Storage</li>

<li>Blockchain Document Tracking</li>

<li>Farmer Record Status Monitoring</li>

</ul>

</div>

<div className="about-footer">

<p>

FarmerChain helps improve transparency and accountability in agricultural support programs
by leveraging blockchain technology for secure and reliable farmer record management.

</p>

</div>

</div>

)

}

export default About