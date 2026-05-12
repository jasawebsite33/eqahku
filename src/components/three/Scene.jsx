'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import LambModel from './LambModel'

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} color="#FDF9F3" />

      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#FFF3D4"
        castShadow
        shadow-mapSize={2048}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />

      <directionalLight
        position={[-4, 3, 2]}
        intensity={0.5}
        color="#F5EADA"
      />

      <pointLight
        position={[-3, 4, -3]}
        intensity={0.7}
        color="#D4A520"
        distance={12}
      />

      <pointLight
        position={[0, -1, 4]}
        intensity={0.3}
        color="#FAF3E6"
        distance={8}
      />

      <Environment preset="apartment" environmentIntensity={0.4} />

      <LambModel />

      <ContactShadows
        position={[-1.2, 0, 0]}     // ⬅️ Sesuaikan posisi shadow ke kaki domba
        opacity={0.35}
        scale={5}
        blur={2.5}
        far={3}
        color="#8B7355"
      />

      <FloatingParticles />
    </>
  )
}

function FloatingParticles() {
  const meshRef = useRef()
  const count = 35

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return positions
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#D4A520"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}