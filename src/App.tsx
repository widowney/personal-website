import React from 'react';
import Header from './components/Header';
import ThemeBtn from './components/ThemeBtn';
import Home from './pages/Home';

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
    </div>
  );
}

export default App;
