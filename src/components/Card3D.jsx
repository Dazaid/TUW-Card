import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei'; // Importamos OrbitControls de drei

function InteractiveCard({ frontImage, backImage }) {
  const cardRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);

  const frontTexture = useLoader(TextureLoader, frontImage);
  const backTexture = useLoader(TextureLoader, backImage);

  const [isPressed, setIsPressed] = useState(false); // Estado para saber si el botón del mouse está presionado

  // Cambiar el cursor cuando se pasa sobre la tarjeta
  const onPointerOver = () => {
    document.body.style.cursor = isPressed ? 'grabbing' : 'grab'; // Mano abierta o cerrada
  };

  const onPointerOut = () => {
    document.body.style.cursor = 'auto'; // Restaurar el cursor por defecto
  };

  const onPointerDown = () => {
    document.body.style.cursor = 'grabbing'; // Mano cerrada cuando se presiona
    setIsPressed(true); // Indicamos que el mouse está presionado
  };

  const onPointerUp = () => {
    document.body.style.cursor = 'grab'; // Mano abierta cuando se suelta
    setIsPressed(false); // Indicamos que el mouse ya no está presionado
  };

  return (
    <mesh
      ref={cardRef}
      rotation={rotation}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {/* Aumentamos el tamaño de la carta */}
      <boxGeometry args={[0, 9, 15]} />
      <meshStandardMaterial attach="material-0" map={frontTexture} transparent={true} />
      <meshStandardMaterial attach="material-1" map={backTexture} transparent={true} />
      <meshStandardMaterial attach="material-2" color="black" />
      <meshStandardMaterial attach="material-3" color="black" />
      <meshStandardMaterial attach="material-4" color="black" />
      <meshStandardMaterial attach="material-5" color="black" />
    </mesh>
  );
}

export default function Card3D() {
  return (
    <div className="bg-cover bg-center w-full h-screen bg-[url('/assets/img/bkg.png')] flex items-center justify-center">
      <Canvas camera={{ position: [10, 0, 0] }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Usamos OrbitControls para permitir la rotación con el mouse */}
        <OrbitControls />
        <InteractiveCard frontImage="assets/img/front.png" backImage="assets/img/back.png" />
      </Canvas>
    </div>
  );
}
