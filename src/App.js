import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from "react-dom";
import MyRecipes from "./pages/MyRecipes";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="my-recipes" element={<MyRecipes />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
