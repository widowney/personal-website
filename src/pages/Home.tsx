import React from 'react';
import ParticlesContainer from '../components/Particles';

type Props = {
    darkTheme: boolean;
    setDarkTheme: (darkTheme: boolean) => void;
}

const Home = ({darkTheme, setDarkTheme}: Props) => {
    return (
        <div className="App flex align-center justify-center h-screen w-full">
            <div className="absolute -z-10 w-full h-screen">
                <ParticlesContainer 
                    darkTheme={darkTheme}
                    setDarkTheme={setDarkTheme}
                />
            </div>
            <div className="text-center m-auto">
                <h1 className="sm:text-5xl text-3xl text-black dark:text-white">👋 Hi, I'm Will Downey</h1>
                <p className="text-blue-700 text-xl">Computer Science Student</p>
            </div>
        </div>
    );
}

export default Home;

