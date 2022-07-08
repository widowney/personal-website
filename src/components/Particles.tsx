import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';

type Props = {
    darkTheme: boolean;
    setDarkTheme: (darkTheme: boolean) => void;
}

const ParticlesContainer = ({darkTheme, setDarkTheme}: Props) => {
    const particlesInit = async (main: Engine) => {
        console.log(main);
    await loadFull(main);
    };
    const bgColor = darkTheme ? '#000000' : '#ffffff';
    const particleColor = darkTheme ? '#ffffff' : '#000000';
    return (
            <Particles
                className="h-full"
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {enable: false, zIndex: -10},
                    background: {
                        color: {
                        value: bgColor,
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                        },
                        modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                        value: particleColor,
                        },
                        links: {
                        color: particleColor,
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        },
                        collisions: {
                        enable: true,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                        },
                        opacity: {
                        value: 0.5,
                        },
                        shape: {
                        type: "circle",
                        },
                        size: {
                        value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
    );
}

export default ParticlesContainer;