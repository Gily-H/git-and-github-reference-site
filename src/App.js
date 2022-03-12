import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

import { HomePage, PresentationPage, ResourcesPage, PracticePage } from "./components/pages/";
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

          <Route path="git/interactive-practice" element={<PracticePage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
