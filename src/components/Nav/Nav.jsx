import "./Nav.css";
import Img from "../../assets/logo.png";

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

  return (
    <nav>
      <img src={`${Img}`} className="iedc_logo" alt="" />
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
      </div>
    </nav>
  );
};
export default Nav;
