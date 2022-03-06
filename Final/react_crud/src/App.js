import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./SofwareProject.css";

// imported components
import Menubar from "./Menubar";
import Footer from "./Footer";
import SofwareProject from "./SofwareProject";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<SofwareProject />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
