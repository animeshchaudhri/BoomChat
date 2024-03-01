import React, { useCallback, useEffect, useState , memo  } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Skeleton from 'react-loading-skeleton'; 

const ParticlesComponent = memo(function ParticlesComponent(props) {

    const [init, setInit] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            setIsLoading(true); 
            await loadSlim(engine);
            setIsLoading(false);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        
    };

    return (
        isLoading ? <Skeleton /> : (init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0000",
                    },
                    zIndex: -1,
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
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                   
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 300,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                 detectRetina: true,
            }}
        />)
    );
});

export default ParticlesComponent;