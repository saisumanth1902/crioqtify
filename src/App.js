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
      <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
      </div>
    </div>
    
  );
}

export default App;


// // src/App.js
// import React from 'react';
// import Section from './Section/Section';

// const App = () => {
//   return (
//     <div className="App">
//       <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
//       <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
//     </div>
//   );
// };

// export default App;
