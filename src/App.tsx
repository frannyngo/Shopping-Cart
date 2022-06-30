import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/store/Store";
import NavBar from "./components/Nav/NavBar";
import { Theme } from "./pages/GlobalStyles";
import { ShoppingCartProvider } from "../src/functions/shoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <Theme>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <p>hello world</p>
      </Theme>
    </ShoppingCartProvider>
  );
}

export default App;
