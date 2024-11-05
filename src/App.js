// src/App.jsx
import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Section from './Section/Section';
import SongsSection from './SongsSection/SongsSection'; // Import SongsSection

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div>
        <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
        <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
        <SongsSection /> {/* Add SongsSection here */}
      </div>
    </div>
  );
}

export default App;
