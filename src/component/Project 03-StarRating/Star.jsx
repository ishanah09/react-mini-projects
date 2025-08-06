import { useState } from "react";
import { FaStar } from "react-icons/fa6";
export default function Star() {
  const [hover, setHover] = useState(0);
  const [click, setClick] = useState(0);

  return (
    <div className="h-screen w-full flex items-center justify-center p-4">
      {[...Array(10)].map((item, index) => {
        index = index + 1;
        return (
         <FaStar className={`size-10 ${index <=(hover>0?hover:click) && "text-[#fff700]"}` } onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(0)} onClick={()=>setClick(index)}></FaStar>
        );
      })}
    </div>
  );
}
