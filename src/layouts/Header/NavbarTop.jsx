import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { SOCIAL_LINKS } from "../../constants";
import { ICONS } from "../../constants";

const navBarTop = [
  {
    content: "Monday, January 1, 2045",
    link: ROUTES.DATE,
  },
  {
    content: "Advertise",
    link: ROUTES.DATE,
  },
  {
    content: "Contact",
    link: ROUTES.DATE,
  },
  {
    content: "Login",
    link: ROUTES.DATE,
  },
];

const iconNavbarTop = [
  { display: ICONS.TWITTER, link: SOCIAL_LINKS.TWITTER },
  { display: ICONS.FACEBOOK, link: SOCIAL_LINKS.FACEBOOK },
  { display: ICONS.LINKEDIN, link: SOCIAL_LINKS.LINKEDIN },
  { display: ICONS.INSTAGRAM, link: SOCIAL_LINKS.INSTAGRAM },
  { display: ICONS.GOOGLE, link: SOCIAL_LINKS.GOOGLE },
  { display: ICONS.YOUTUBE, link: SOCIAL_LINKS.YOUTUBE },
];

function NavbarTop() {
  return (
    <div className="w-full h-10 px-12 bg-[var(--dark)] text-[var(--text-body)] text-[12.8px] font-normal tracking-normal">
      <div className="h-full flex justify-between">
        <ul className="flex items-center">
          {navBarTop.map((item, index) => (
            <li
              key={index}
              className="p-2 border-l border-[var(--border-secondary)] first:border-l-0"
            >
              <Link to={item.link}>{item.content}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center">
          {iconNavbarTop.map((item, index) => (
            <li key={index} className="px-2">
              <a href={item.link} className="px-2">
                {item.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavbarTop;
