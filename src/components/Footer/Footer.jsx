import "./Footer.css";
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer_layout">
        <div className="footer_1">
          <div className="footer_heading">LINKS</div>
          <ul type="none" className="footer_list">
            <li>About</li>
            <li>Team</li>
            <li>Startups</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer_2">
          <div className="footer_2_up">
            <div className="footer_heading">NEWSLETTER</div>
            <form className="footer_newseltter">
              <div className="footer_news">
                <div>Sign up for our weekly</div>
                <div>
                  <input type="email"></input>
                  <button type="submit">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
          <div className="footer_2_down">
            <div className="footer_heading">SOCIAL MEDIA</div>
            <div className="footer_icons">
              <BsFacebook size={30}/>
              <AiFillInstagram size={35} />
              <BsLinkedin size={30}/>
              <BsYoutube size={30}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
