import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

import { Presentation } from "./components/pages/";
import { Navbar } from "./components/common/";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<div>Home</div>}></Route>
          <Route path="/presentation" element={<Presentation />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
