import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';

const ParticlesContainer: React.FunctionComponent = () => {
    const particlesInit = async (main: Engine) => {
        console.log(main);
    await loadFull(main);
    };

    return (
        <div className="absolute">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {enable: false, zIndex: 0},
                    background: {
                        color: {
                        value: "white",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
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
                        value: "#000000",
                        },
                        links: {
                        color: "#000000",
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
        </div> 
    );
}

export default ParticlesContainer;