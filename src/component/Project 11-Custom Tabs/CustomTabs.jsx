import { useState } from "react";

import tab from "./Data";
export default function CustomTabs() {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <div className="w-full flex items-center justify-center h-screen p-8">

      <div className="flex flex-col  gap-8 w-[750px] h-[500px]  rounded-xl p-8 bg-green-300 ">


 <div className="flex items-center justify-start gap-6 border-2 p-2">
         {tab.map((item, index) => (
          <button key={index} className={`bg-red-400 px-4 py-2 rounded-xl cursor-pointer min-w-[75px]  text-white font-medium active:scale-90 shadow-2xl ${selectTab===index && "bg-red-900"}` } onClick={() => setSelectTab(index)}   >
            {item.label}
          </button>))

        }
 </div>

<div className="flex items-center justify-center grow border-2  ">
  {tab[selectTab] &&  <p className="text-2xl font-medium">{tab[selectTab].content}</p>}
</div>


      </div>

    </div>

  );
}
