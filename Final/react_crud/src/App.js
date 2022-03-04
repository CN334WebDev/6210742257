import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Menubar from "./Menubar";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menubar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
