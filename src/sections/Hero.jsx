import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyHackerRoom from "../Components/MyHackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../Components/CanvasLoader";


export default function Hero() {
  return (
    <section className="min-h-screen border-blue-500 flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Ashik <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Building Products and brands</p>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full0">
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <Suspense fallback={<CanvasLoader />}>
                        <MyHackerRoom />
                    </Suspense>
                </Canvas>
            </div>

        </div>
    </section>
  )
}
