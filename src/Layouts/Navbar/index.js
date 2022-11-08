import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import MobileMenu from "../MobileMenu";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuButtonClicked() {
    setIsMenuOpen(!isMenuOpen);
  }


 
  return (
    <Fragment>
      <nav id="nav" className="sticky">
        <ul className="links">
          <li className="active">
            <Link to="/home">Home</Link>
          </li>
          <li className="active">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="active">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/beauty-tasara-263a631b1"
              className="icon brands fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/beautytasara27"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
      <div id="hamburger" className="icons">
        <i
          className="icons fa-solid fa-bars"
          onClick={handleMenuButtonClicked}
        ></i>
      </div>
      {isMenuOpen && <MobileMenu handleLinkClicks={handleMenuButtonClicked} />}
    </Fragment>
  );
}
export default Navbar;
