import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator()
{
  const [input,setInput]=useState("");
  const [code,setCode]=useState("");
  return(
    <>
    <main className="w-screen h-screen flex items-center justify-center bg-red-50">

<section className="flex flex-col items-center justify-center gap-6">
<h1 className="text-2xl font-bold">QR Code Generator</h1>

<div className="flex items-center justify-between gap-6">  <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter your value here" className="border-2 p-2 " />
  <button onClick={()=>{
    setCode(input)
    setInput("")
  }} className="text-[17px] font-semibold cursor-pointer bg-gray-400 rounded-xl p-3" >Generate</button></div>
<div>
<QRCode value={code}></QRCode>
</div>
  </section>      
    </main>
    
    </>
  )
}