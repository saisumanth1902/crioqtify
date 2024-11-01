import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection"; // Assuming HeroSection component
import Section from './Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* Other components */}
      <div>
        <Section />
      </div>
    </div>
    
  );
}

export default App;
