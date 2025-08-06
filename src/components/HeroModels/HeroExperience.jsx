// Here we will be rendering our GLB model

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const HeroExperience = () => {

  const isTablet = useMediaQuery({
    query: '(max-width: 1024px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Orbit controls allow us to view the mesh in 3d by moving around */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Testing out meshes
      <mesh>
        defining how big it is 
        <boxGeometry args={[1, 1, 1]} />

        set properties for the mesh material
        <meshStandardMaterial color={"pink"} />
      </mesh>
      */}

      <HeroLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>

    </Canvas>
  );
}

export default HeroExperience;