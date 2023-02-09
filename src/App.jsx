import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="App">
      {!loading && <Nav />}
      <Main />
    </div>
  );
}

export default App;
