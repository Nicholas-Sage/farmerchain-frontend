import React,{useState} from "react";

export default function FileUpload({onUpload}){

const [file,setFile]=useState(null);

function submit(){

if(!file)return;

onUpload(file);

}

return(

<div className="card">

<input type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<button onClick={submit}>
Upload Document
</button>

</div>

);

}