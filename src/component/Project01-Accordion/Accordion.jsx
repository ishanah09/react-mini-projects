import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [enableMultiSection, setEnableMultiSection] = useState(false);
  const [show, setShow] = useState([]);
  function handleShow(id) {
    if (enableMultiSection) {
      handleMultipleSelection(id);
    } else {
      handleSingleSelection(id);
    }
  }

  function handleSingleSelection(id) {
    if (show.includes(id)) {
      setShow([]);
    } else {
      setShow(() => [id]);
    }
  }

  function handleMultipleSelection(id) {
    if (show.includes(id)) {
      setShow(show.filter((item) => item !== id));
    } else {
      setShow(() => [...show, id]);
    }
  }

  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center p-4">
        <section className="bg-[#F4F1DE]  max-w-[600px] rounded-xl flex flex-col gap-8 items-center justify-center p-8 p shadow-2xl ">
          <button
            className="bg-[#3D405B] text-white p-4 rounded-xl cursor-pointer"
            onClick={() => setEnableMultiSection(!enableMultiSection)}
          >
            {" "}
            {enableMultiSection
              ? "Disable MultiSection"
              : "Enable MultiSection"}
          </button>

          <div>
            <ul className="flex flex-col gap-6  py-3">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="bg-[#E07A5F]   rounded-xl p-4 text-white text-[18px] flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between ">
                    <p> {item.question}</p>
                    <button
                      onClick={() => handleShow(item.id)}
                      className="bg-[#81B29A] text-white min-w-7 min-h-7 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#6D8E78] transition-all ml-2 "
                    >
                      {show.includes(item.id) ? "-" : "+"}
                    </button>
                  </div>

                  {show.includes(item.id) && (
                    <div className="bg-white rounded-xl text-black p-3 text-[16px] ">
                      {item.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
