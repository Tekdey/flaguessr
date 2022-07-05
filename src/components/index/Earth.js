import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Earth = () => {
  const colorMap = useLoader(
    TextureLoader,
    "/assets/texture/2k_earth_daymap.jpg"
  );
  const earthRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 3;
  });

  return (
    <>
      <ambientLight color={0xffffff} />
      <directionalLight />
      <mesh ref={earthRef}>
        <sphereBufferGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};

export default Earth;
