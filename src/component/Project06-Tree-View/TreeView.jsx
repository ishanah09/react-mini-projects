import { useState } from "react";
import menus from "./data";
import MenuList from "./MenuList";

export default function TreeView() {
 

  return (
    <main className="w-full min-h-screen bg-red-100 " >
      <section className="bg-[#00476e] h-screen w-[250px] p-6 text-white">
        <MenuList menus={menus} ></MenuList>
      </section>
    </main>
  );
}
