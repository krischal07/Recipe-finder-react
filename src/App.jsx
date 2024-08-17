import React from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FavoritePage from "./pages/FavoritePage";

const App = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default App;
