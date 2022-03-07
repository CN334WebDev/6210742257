import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

// imported components
import Menubar from "./Menubar";
import Footer from "./Footer";
import SofwareProject from "./components/software_projects/SofwareProject";
import CreateSuccess from "./CreateSuccess";
import DeleteSuccess from "./DeleteSuccess";
import EditSuccess from "./EditSeccess";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<SofwareProject />} />
          <Route path="/create-success" element={<CreateSuccess />} />
          <Route path="/delete-success" element={<DeleteSuccess />} />
          <Route path="/edit-success" element={<EditSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
