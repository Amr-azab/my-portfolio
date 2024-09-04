import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import About from "./Components/About/about";
import Home from "./Components/Home/home";
import Layout from "./Components/Layout/layout";
import { Navigate } from "react-router-dom";
import Projects from "./Components/Projects/project";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index={true} element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
