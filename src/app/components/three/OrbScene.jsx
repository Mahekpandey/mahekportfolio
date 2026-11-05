"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Wireframe "network" orb: an icosahedron of glowing nodes and edges that reacts to the cursor. */
function NetworkOrb() {
  const group = useRef();
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.6, 2), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);
  const points = useMemo(() => {
    // de-duplicate vertices for the node points
    const pos = geo.attributes.position;
    const seen = new Map();
    for (let i = 0; i < pos.count; i++) {
      const key = `${pos.getX(i).toFixed(3)},${pos.getY(i).toFixed(3)},${pos.getZ(i).toFixed(3)}`;
      if (!seen.has(key)) seen.set(key, [pos.getX(i), pos.getY(i), pos.getZ(i)]);
    }
    const arr = new Float32Array([...seen.values()].flat());
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, [geo]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.15;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, state.pointer.y * 0.5, 3, delta);
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, -state.pointer.x * 0.4, 3, delta);
  });

  return (
    <group ref={group}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#a78bfa" transparent opacity={0.35} />
      </lineSegments>
      <points geometry={points}>
        <pointsMaterial color="#e9d5ff" size={0.07} sizeAttenuation transparent opacity={0.95} />
      </points>
      <mesh>
        <icosahedronGeometry args={[1.05, 4]} />
        <meshStandardMaterial color="#2e1065" emissive="#4c1d95" emissiveIntensity={0.35} roughness={0.35} metalness={0.3} />
      </mesh>
      <mesh scale={2.0} rotation={[1.2, 0.3, 0]}>
        <torusGeometry args={[1, 0.004, 8, 200]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function OrbScene({ active = true }) {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={active ? "always" : "never"}
      fallback={null}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 4]} intensity={40} color="#c4b5fd" />
      <pointLight position={[-3, -2, 2]} intensity={30} color="#22d3ee" />
      <Float speed={1.2} floatIntensity={0.6} rotationIntensity={0.2}>
        <NetworkOrb />
      </Float>
    </Canvas>
  );
}
