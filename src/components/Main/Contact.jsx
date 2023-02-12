import { useState, useRef, useMemo, useEffect } from "react";

const Contact = () => {
  const targetRef = useRef(null);
  const [contactVisible, setContactVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setContactVisible(entry.isIntersecting);
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
    <div
      className={`mission_container contact_heading ${
        contactVisible ? "inViewport" : "notInViewport"
      }`}
    >
      <h1 className="mission_heading" ref={targetRef}>
        Contact
      </h1>
      <div className="contact_cards">
        <div className="contact_card">
          <h1 className="card_name">Name 1</h1>
          <p className="card_number">9123456789</p>
        </div>
        <div className="contact_card">
          <h1 className="card_name">Name 2</h1>
          <p className="card_number">9123456789</p>
        </div>
        <div className="contact_card">
          <h1 className="card_name">Name 3</h1>
          <p className="card_number">9123456789</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
