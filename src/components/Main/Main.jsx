import "./Main.css";
import Landing_main from "./Landing_main";
import Intro from "./Intro";
import Mission from "./Mission";
import Vision from "./Vision";

const Main = () => {
  return (
    <main>
      <div className="Landing_main">
        <Landing_main />
      </div>
      <div className="Intro">
        <Intro />
      </div>
      <div className="Mission">
        <Mission />
      </div>
      <div className="Vision">
        <Vision />
      </div>
    </main>
  );
};
export default Main;
