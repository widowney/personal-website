import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import Header from "./components/Header";


const App = () => {
  const fireworksInit = async (main) => {
    await loadFireworksPreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Header />
      <Particles
        id="tsparticles"
        init={fireworksInit}
        loaded={particlesLoaded}
        options={{
          preset: "fireworks",
        }}
      />
    </div>

  );
};

export default App;