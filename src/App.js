import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./pages/guessTheFlag/Game";
import LandingPage from "./pages/guessTheFlag/LandingPage";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full lg:w-8/12 lg:shadow-2xl h-screen flex flex-col items-center bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/guesstheflag" element={<LandingPage />} />
        <Route path="/guesstheflag/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
