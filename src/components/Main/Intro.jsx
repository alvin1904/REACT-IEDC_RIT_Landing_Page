import { useState, useRef, useMemo, useEffect } from "react";

const Intro = () => {
  const targetRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setAboutVisible(entry.isIntersecting);
  };
  const options = useMemo(() => {
    return { root: null, rootMargin: "0px", threshold: 0.3 };
  }, []);
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
    <div className="about_header">
      <div
        className={`about_text ${
          aboutVisible ? "inViewport" : "notInViewport"
        }`}
      >
        <div className="about_heading" ref={targetRef}>
          About IEDC RIT
        </div>
        Innovation and entrepreneurship cell RIT is a vibrant student-run
        organisation aiming to empower student minds and guide them throughout
        the path of innovation. IEDC RIT promote the culture of creative
        thinking and work toward transformation of potential innovative ideas
        and projects into future enterprises and game changer products. We, at
        IEDC RIT, believe in nurturing all young minds out there into capable
        leaders and potential entrepreneurs who can move forward and excel in
        their careers and play a major roles in the advancement of the world to
        it's better versions. IEDC RIT intend to provide ample support,
        resources and guidance to all RITians to achieve excellence and beyond
        through innovation and entrepreneurship.
      </div>
    </div>
  );
};
export default Intro;
