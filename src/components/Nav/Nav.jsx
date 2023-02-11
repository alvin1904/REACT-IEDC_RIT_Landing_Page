import "./Nav.css";
import Img from "../../assets/logoblack.png";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const NavOptions = [
    "Home",
    "About",
    "Team",
    "Startups",
    "Events",
    "Contact",
    "Login",
  ];
  const [navMobile, setNavMobile] = useState(false);
  return (
    <nav className={navMobile ? `navMobile` : ``}>
      <img src={`${Img}`} className="iedc_logo" alt="" />
      {!navMobile && (
        <div
          className="iedc_nav_option hamburger"
          onClick={() => setNavMobile(true)}
        >
          <RxHamburgerMenu size={40} />
        </div>
      )}
      <div className="idec_nav">
        {NavOptions.map((option, index) => {
          return (
            <div
              className="iedc_nav_option"
              key={index}
              onClick={() => {
                console.log("Navigate to ", option);
              }}
            >
              {option}
            </div>
          );
        })}
        {navMobile && (
          <div
            className="iedc_nav_option arrow"
            onClick={() => setNavMobile(false)}
          >
            <RxCross1 size={35} />
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
