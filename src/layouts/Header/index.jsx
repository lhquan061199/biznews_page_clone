import NavbarTop from "./NavbarTop";
import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";

function Header({ category }) {
  return (
    <div>
      <NavbarTop></NavbarTop>
      <LogoHeader></LogoHeader>
      <Navbar category={category}></Navbar>
    </div>
  );
}

export default Header;
