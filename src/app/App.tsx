import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "../pages/homePage";
import AppPage from "../pages/appPage/appPage";
import AppDetailPage from "../pages/appPage/appComponents/appDetailPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/apps" element={<AppPage />}/>
      <Route path ="/apps/:app" element={<AppDetailPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
