import { useEffect, useState } from "react";

const Landing_main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) setLoading(false);
  }, []);

  return (
    <div className="main_main">
      <div className="header"></div>
      <div className="header_shader"></div>
      <div className="header_shader"></div>
      <div className="header_shader two"></div>
      {!loading && (
        <div className={`heading ${loading ? "" : "inViewport"}`}>
          INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE
        </div>
      )}
    </div>
  );
};
export default Landing_main;
