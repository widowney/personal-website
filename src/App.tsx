import React from 'react';
import Header from './components/Header';
import ThemeBtn from './components/ThemeBtn';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import BuildFooter from './components/Footer';

const App:React.FunctionComponent = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);

  return (
    <div className="App h-full">
      <Header />
      <ThemeBtn 
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      <Home 
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <BuildFooter />
    </div>
  );
}

export default App;
