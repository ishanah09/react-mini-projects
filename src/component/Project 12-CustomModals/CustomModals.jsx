import { useState } from "react"
import Modals from "./Modals"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
export default function CustomModals() {
  const [showModals, setShowModals] = useState(false)
  return (
    <div className="w-full h-screen p-8 pb-12 flex flex-col items-center  ">
      {!showModals && <button className=" text-xl bg-black  text-white p-4 rounded-xl cursor-pointer transform active:scale-90 " onClick={() => setShowModals(true)}>Show Modals</button>}
      {
        showModals && <Modals setShowModals={setShowModals} header={<Header></Header>} body={<Body></Body>} footer={<Footer></Footer>}></Modals>
      }


    </div>
  )
}