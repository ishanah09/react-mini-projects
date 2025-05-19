import { FaPlus, FaMinus } from "react-icons/fa";
import MenuList from "./MenuList";
import { useState } from "react";
export default function MenuItem({ item, handleClick }) {
  const [isExpand, setIsExpand] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  function handleClick() {
    if (hasChildren) {
      setIsExpand(!isExpand);
    }
  }
  return (
    <>
      <li className="ml-4">
        <div className="w-full flex   items-center justify-between p-1">
          <p> {item.label}</p>

          <span className="cursor-pointer" onClick={() => handleClick()}>
            {" "}
            {item.children && item.children !== 0 ? (
              isExpand ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )
            ) : null}
          </span>
        </div>

        {isExpand && item.children !== 0 ? (
          <MenuList menus={item.children}></MenuList>
        ) : null}
      </li>
    </>
  );
}
