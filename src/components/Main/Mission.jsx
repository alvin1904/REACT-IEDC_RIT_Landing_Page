import { useState, useRef, useEffect, useMemo } from "react";
import Vision from "./Vision";

const Mission = () => {
  const targetRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  const options = useMemo(() => {
    return { root: null, rootMargin: "0px", threshold: 0.3 };
  }, []);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setHeadingVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    //CLEANUP FUNCTION
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div className="mission_header">
      <div
        className={`mission_container ${
          headingVisible ? "headingAnimation" : ""
        }`}
      >
        <h1 className="mission_heading" ref={targetRef}>
          Mission
        </h1>
        <p className="mission_text mission_intersection">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          pellentesque venenatis risus, ut placerat odio finibus consectetur.
          Suspendisse faucibus molestie dolor vel lobortis. Nulla facilisi. Sed
          felis lorem, rhoncus a convallis quis, accumsan sit amet justo.
          Pellentesque vel ex quam. Donec eu tempus erat. Duis vel elit cursus
          diam varius molestie. Vivamus id tempor lacus, a efficitur turpis.
          Quisque convallis ipsum ac dui congue, quis commodo magna convallis.
          Vivamus id tempor lacus, a efficitur turpis. Quisque convallis ipsum
          ac dui congue, quis commodo magna convallis.
        </p>
      </div>
      <Vision />
    </div>
  );
};
export default Mission;
