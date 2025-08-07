import { ImCross } from "react-icons/im";
export default function Modals({ header, footer, body, setShowModals }) {
  return (

    <main className="animate-[slideDown_0.3s_ease-out]  flex flex-col  gap-6 p-6 sm:p-8 pb-8 sm:pb-12 mt-8 sm:mt-20  w-full max-w-[700px]  mx-auto bg-red-400 rounded-xl shadow-2xl ">
      <button className="self-end cursor-pointer " ><ImCross className="size-6" onClick={() => setShowModals(false)} /></button>



      <div className="flex  flex-col bg-red-300 shadow-2xl rounded-xl ">
        {header ? <div className="p-8 text-white">{header}</div> : <div className="text-xl text-center ">Header</div>}
        {body ? <div className="bg-white p-8">{body}</div> : <div className="text-xl text-center "> Body</div>}
        {footer ? <div className="p-8 text-white">{footer}</div> : <div className="text-xl text-center ">Footer</div>}
      </div>

    </main>

  )
}