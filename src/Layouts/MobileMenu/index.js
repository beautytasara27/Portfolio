import { Link } from "react-router-dom";
function MobileMenu({ handleLinkClicks }) {
  const MenuItems = [
    {
      id: "Home",
      url: "/home",
    },
    {
      id: "Projects",
      url: "/projects",
    },
    {
      id: "Blog",
      url: "/blog",
    },
  ];
  return (
    <div className="" id="mobile">
      <ul className="links">
        {MenuItems.map((menuItem) => (
          <li className="active" key={menuItem.id} onClick={handleLinkClicks}>
            <Link to={menuItem.url}>{menuItem.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MobileMenu;
