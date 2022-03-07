import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

import { Home, Presentation, Resources } from "./components/pages/";
import { Navbar } from "./components/common";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
