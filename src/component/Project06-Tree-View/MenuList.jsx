import MenuItem from "./MenuItem";

export default function MenuList({ menus }) {
  return (
  
   <ul >
       {menus.map((item, index) => {
        return <MenuItem key={index}  item={item}></MenuItem>;
      })}
   </ul>
  
  );
}
