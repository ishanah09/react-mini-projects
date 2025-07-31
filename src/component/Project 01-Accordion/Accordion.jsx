import { useState } from "react";
import data from "./data";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

export default function Accordion() {
  const [multi, setMutli] = useState(false);
  const [show, setShow] = useState([]);

  return (
    <div className="w-full min-h-screen flex  items-center justify-center bg-red-50 p-4 py-8">
      <main className="w-[650px] bg-yellow-200 flex flex-col gap-8 sm:gap-10 items-center justify-center  px-4 py-10 sm:px-8  rounded-xl shadow-2xl">
        <button
          className=" bg-purple-400 cursor-pointer py-3 px-5 text-base font-medium text-white rounded-lg  "
          onClick={() => setMutli(!multi)}
        >
          {multi ? "Disable MultiSelection" : "Enable MultiSelection"}
        </button>

        <ul className="flex flex-col gap-6 text-white ">
          {data.map((item) => {
            return (
              <li
                key={item.id}
                className="flex flex-col gap-4 bg-red-400 rounded-xl shadow-xl  p-4"
              >
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-xl">{item.question}</p>
                  <button>
                    {show.includes(item.id) ? (
                      <FaCircleMinus
                        className="size-7 text-gray-500 cursor-pointer"
                        onClick={() =>
                          multi
                            ? setShow(show.filter((i) => i !== item.id))
                            : setShow([])
                        }
                      />
                    ) : (
                      <FaCirclePlus
                        className="size-7 text-gray-500 cursor-pointer"
                        onClick={() =>
                          multi
                            ? setShow([...show, item.id])
                            : setShow([item.id])
                        }
                      />
                    )}
                  </button>
                </div>
                {show.includes(item.id) && (
                  <div className="bg-white text-black text-sm p-3 rounded-xl tracking-wide">
                    {item.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
