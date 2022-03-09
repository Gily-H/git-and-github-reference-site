import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

import { HomePage, PresentationPage, ResourcesPage } from "./components/pages/";
import { Navbar } from "./components/partials/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
