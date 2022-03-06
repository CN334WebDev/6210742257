import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

// imported components
import Menubar from "./Menubar";
import Footer from "./Footer";
import SofwareProject from "./components/software_projects/SofwareProject";

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
