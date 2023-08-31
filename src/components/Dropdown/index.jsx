import { AiFillCaretDown } from "react-icons/ai";

function Dropdown({ children, menu, className }) {
  return (
    <div className="w-full h-full relative group">
      <div className={`${className}`}>
        <div className="flex h-full items-center">
          {children}
          <span>
            <AiFillCaretDown className="ml-0.5"></AiFillCaretDown>
          </span>
        </div>
      </div>
      <div className="absolute hidden group-hover:block py-1 bg-[var(--bg-white)] text-[var(--text-dark)] border">
        <ul>
          {menu.map((item, index) => (
            <li key={index} className="py-2 hover:bg-[#f8f9fa] w-full px-8">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
