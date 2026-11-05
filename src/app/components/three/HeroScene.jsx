"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/** A single graphite form that slowly breathes — the only object on the page. */
function Form({ mobile }) {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.08;
    mesh.current.rotation.x = THREE.MathUtils.damp(mesh.current.rotation.x, 0.15 + state.pointer.y * 0.12, 2, delta);
  });
  return (
    <mesh ref={mesh} scale={mobile ? 0.85 : 1.1}>
      <icosahedronGeometry args={[1, 64]} />
      <MeshDistortMaterial color="#6b6760" metalness={0.55} roughness={0.32} distort={0.3} speed={1.1} envMapIntensity={1.3} />
    </mesh>
  );
}

/** One small bronze bead — the "thought" — orbiting slowly. */
function Bead({ mobile }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.35;
    const R = mobile ? 1.25 : 1.65;
    if (ref.current) ref.current.position.set(Math.cos(t) * R, Math.sin(t * 1.3) * 0.35 + 0.15, Math.sin(t) * R);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[mobile ? 0.06 : 0.075, 32, 32]} />
      <meshStandardMaterial color="#bfa273" metalness={1} roughness={0.25} emissive="#5c4528" emissiveIntensity={0.6} />
    </mesh>
  );
}

function Rig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.2);
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, state.pointer.x * 0.35, 2, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, state.pointer.y * 0.2, 2, delta);
    state.camera.lookAt(0, 0, 0);
    if (group.current) {
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, scroll * 0.6, 4, delta);
    }
  });
  return <group ref={group}>{children}</group>;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#f6f2ea" />
      <pointLight position={[-4, -1, 2]} intensity={6} color="#bfa273" />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.2} position={[0, 4, 4]} scale={[8, 2, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={1.2} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[6, 1, 1]} color="#f6f2ea" />
        <Lightformer form="rect" intensity={0.8} position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[6, 1, 1]} color="#d1c0a3" />
        <Lightformer form="circle" intensity={0.6} position={[0, -5, 2]} scale={4} color="#ffffff" />
      </Environment>
    </>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-64 w-64 rounded-full bg-[radial-gradient(circle_at_35%_30%,#5a5853,#2b2a28_55%,#121212)] shadow-[0_40px_120px_rgba(0,0,0,0.6)]" />
    </div>
  );
}

export default function HeroScene({ active = true }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, mobile ? 1.5 : 1.8]}
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={active ? "always" : "never"}
      fallback={<Fallback />}
    >
      <Lights />
      <Rig>
        <group position={[0, 0, 0]}>
          <Form mobile={mobile} />
          <Bead mobile={mobile} />
        </group>
      </Rig>
    </Canvas>
  );
}
