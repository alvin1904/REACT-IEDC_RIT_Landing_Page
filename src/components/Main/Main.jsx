import "./Main.css";
import Landing_main from "./Landing_main";
import Intro from "./Intro";
import Mission from "./Mission";
import Contact from "./Contact"

const Main = () => {
  return (
    <main>
      <div className="Landing_main">
        <Landing_main />
      </div>
      <div className="Intro">
        <Intro />
      </div>
      <div className="MissionVision">
        <Mission />
        <Contact />
      </div>
    </main>
  );
};
export default Main;
