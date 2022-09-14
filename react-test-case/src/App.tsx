import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsApi from "./components/NewsApi";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NewsDetail from "./components/NewsDetail";

const App: React.FC = () => {
 

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<NewsApi />} />
          {/* <Route path="/news/:title" element={<NewsDetail/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
