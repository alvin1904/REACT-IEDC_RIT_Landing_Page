import { useState, useRef, useEffect, useMemo } from "react";

const Vision = () => {
  const targetRef2 = useRef(null);
  const [visionVisible, setVisionVisible] = useState(false);

  const options = useMemo(() => {
    return { root: null, rootMargin: "0px", threshold: 0.3 };
  }, []);

  const callbackFunction2 = (entries) => {
    const [entry] = entries;
    setVisionVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction2, options);
    const currentTarget = targetRef2.current;
    if (currentTarget) observer.observe(currentTarget);
    //CLEANUP FUNCTION
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef2, options]);

  return (
    <div
      className={`mission_container vision_container ${
        visionVisible ? "inViewport" : "notInViewport"
      }`}
    >
      <h1 className="mission_heading" ref={targetRef2}>Vision</h1>
      <p className="mission_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        pellentesque venenatis risus, ut placerat odio finibus consectetur.
        Suspendisse faucibus molestie dolor vel lobortis. Nulla facilisi. Sed
        felis lorem, rhoncus a convallis quis, accumsan sit amet justo.
        Pellentesque vel ex quam. Donec eu tempus erat. Duis vel elit cursus
        diam varius molestie. Vivamus id tempor lacus, a efficitur turpis.
        Quisque convallis ipsum ac dui congue, quis commodo magna convallis.
        Vivamus id tempor lacus, a efficitur turpis. Quisque convallis ipsum ac
        dui congue, quis commodo magna convallis.
      </p>
    </div>
  );
};
export default Vision;
