import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyHackerRoom from "../Components/MyHackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../Components/CanvasLoader";
import { Leva, useControls } from "leva";



export default function Hero() {
    const controls = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        },
    })
    
    return (
        <section className="min-h-screen border-blue-500 flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Ashik <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building Products and brands</p>

                <div className="w-full h-full absolute inset-0">
                    <Leva />
                    <Canvas className="w-full h-full0">
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <Suspense fallback={<CanvasLoader />}>
                            <MyHackerRoom
                                position={[controls.positionX, controls.positionY, controls.positionZ]}
                                rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                                scale={[controls.scale, controls.scale, controls.scale]}
                            />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
