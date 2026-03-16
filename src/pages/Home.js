import React from "react"
import fertilizerImg from "../assets/fertilizer.png";
import "../styles/home.css"

function Home(){

return(

<div className="home">

<div className="home-header">

<h1>FISP Records Blockchain System</h1>

<p className="home-intro">

The Farmer Input Support Programme (FISP) is a Zambian Government initiative designed
to support small-scale farmers by providing subsidized agricultural inputs such as
fertilizer and improved seed varieties. The programme aims to increase agricultural
productivity, strengthen national food security, and improve the livelihoods of rural
farmers across Zambia.

</p>

</div>


<div className="home-images">

<img
src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
alt="Farm Land"
/>

<img
src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
alt="Agriculture"
/>

<img
src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
alt="Agriculture Field"
/>
</div>


<div className="home-section">

<h2>About FISP</h2>

<p>

The Farmer Input Support Programme was introduced by the Government of Zambia to help
small-scale farmers access agricultural inputs at subsidized prices. Through the
programme, farmers receive support in the form of fertilizer and improved seeds to
increase crop production and improve food security.

</p>

<p>

In recent years, the programme has transitioned to a <b>100% electronic voucher
(e-Voucher) system</b>. This digital approach allows farmers to redeem their farming
inputs through registered agro-dealers using electronic verification systems,
reducing fraud and improving transparency.

</p>

</div>


<div className="home-section">

<h2>About This System</h2>

<p>

The FISP Records Blockchain System is designed to digitize and securely manage
farmer records participating in the Farmer Input Support Programme.

</p>

<p>

Using blockchain technology, the system ensures that farmer registration,
verification, and input distribution records are transparent, tamper-proof,
and securely stored.

</p>

<ul>

<li>Farmer registration and management</li>
<li>Verification of beneficiary farmers</li>
<li>Secure document upload and storage</li>
<li>Tracking farmer input support records</li>
<li>Monitoring programme transparency</li>

</ul>

</div>


<div className="home-section">

<h2>Programme Benefits</h2>

<div className="benefits">

<div className="benefit-card">

<h3>🌽 Improved Food Security</h3>
<p>
FISP supports farmers with inputs that increase agricultural productivity and
boost national food production.
</p>

</div>

<div className="benefit-card">

<h3>💻 Digital Transparency</h3>
<p>
The blockchain system ensures all farmer records and transactions are securely
stored and cannot be altered.
</p>

</div>

<div className="benefit-card">

<h3>👨‍🌾 Farmer Empowerment</h3>
<p>
The programme empowers small-scale farmers by providing access to improved
farming inputs and technologies.
</p>

</div>

</div>

</div>


<div className="home-images">

<img
src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
alt="Farmer"
/>

<img
src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
alt="Agriculture Field"
/>

<img src="https://images.unsplash.com/photo-1472145246862-b24cf25c4a36" 
alt="Farmer Working" />

</div>

</div>

)

}

export default Home