import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

// imported components
import Menubar from "./Menubar";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
