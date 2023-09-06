import Dropdown from "../../components/Dropdown";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import categoryReducer from "../../slices/categorySlice";
import { getCategory } from "../../service/categoriesService";
import { useEffect } from "react";

function Navbar({ category }) {
  const navItems = [
    { title: "HOME", to: ROUTES.HOME, subMenu: false },
    { title: "CATEGORY", to: false, subMenu: category },
    { title: "CONTACT", to: ROUTES.CONTACT, subMenu: false },
  ];

  return (
    <div className="w-full bg-[var(--bg-dark)] h-16 px-12">
      <div className="h-full px-4 flex justify-between">
        <div className="h-full text-[var(--light)] flex">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              title={item.title}
              subMenu={item.subMenu}
              className={
                "h-full py-5 px-[15px] hover:bg-[var(--bg-primary)] hover:text-[var(--dark)]"
              }
            ></NavItem>
          ))}
        </div>
        <div className="flex items-center">
          <input
            className="w-[253px] h-[38px] py-[6px] px-3"
            type="text"
            placeholder="Keyword"
          ></input>
          <button className="w-12 h-[38px] py-[6px] px-4 bg-[var(--bg-primary)] hover:bg-[#cca300]">
            <FaSearch className="text-6 font-black"></FaSearch>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
