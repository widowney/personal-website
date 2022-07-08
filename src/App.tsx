import React from 'react';
import Header from './components/Header';
import ThemeBtn from './components/ThemeBtn';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';

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
      <Resume />
    </div>
  );
}

export default App;
