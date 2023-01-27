import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";


const Selector = ({DropDownList,callback}) => {
  const selectionName = DropDownList.name
    const labeName = DropDownList.labeName
    const placeholderName = DropDownList.placeholderName
    const listItems = DropDownList.listItems

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
    

  return (
    <div className="font-regular">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white min-w-[200px] w-full h-[35px] p-2 flex items-center justify-between rounded overflow-hidden border hover:border-slate-500 ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : labeName}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto my-scrollbar ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder= {placeholderName}
            className="placeholder:text-gray-700 p-2 outline-none "
          />
        </div>
        {listItems?.map((listItem) => (
          <li
            key={listItem?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              listItem?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
                listItem?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (listItem?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(listItem?.name);
                setOpen(false);
                callback(listItem?.name,selectionName)
                setInputValue("");
              }

            }}
          >
            {listItem?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;