import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";

function NavItem({
  title,
  to,
  href,
  option,
  children,
  className,
  subMenu,
  menu,
  ...passProps
}) {
  const props = {
    ...passProps,
  };

  let TagName = "div";
  if (to) {
    TagName = Link;
    props.to = to;
  }

  if (subMenu) {
    return (
      <Dropdown className={className} menu={subMenu}>
        {title}
      </Dropdown>
    );
  } else {
    return (
      <TagName className={className} {...props}>
        {title}
      </TagName>
    );
  }
}

export default NavItem;
