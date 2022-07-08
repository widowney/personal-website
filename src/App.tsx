import React from 'react';
import Header from './components/Header';
import ThemeBtn from './components/ThemeBtn';
import ParticlesContainer from './components/Particles';

function App() {
  return (
    <div className="App h-full">
      <Header />
      <ThemeBtn />
      <ParticlesContainer />
    </div>
  );
}

export default App;
