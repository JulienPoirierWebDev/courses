import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div style={{ zIndex: "1" }}>
      <Header />
      <Hero />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}

export default App;
