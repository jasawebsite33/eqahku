'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import {
  Environment,
  ContactShadows,
  Float,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import * as THREE from 'three'
import LambModel from './LambModel'

export default function Scene() {
  const groupRef = useRef()
  const { viewport, pointer } = useThree()

  // Subtle mouse follow rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth rotation following mouse
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.15,
        0.03
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.05,
        0.03
      )
    }
  })

  return (
    <>
      {/* Warm Soft Lighting Setup */}
      <ambientLight intensity={0.4} color="#FDF9F3" />

      {/* Key light - warm and soft */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#FFF3D4"
        castShadow
        shadow-mapSize={1024}
      />

      {/* Fill light - subtle warm */}
      <directionalLight
        position={[-3, 3, -2]}
        intensity={0.4}
        color="#E8DECE"
      />

      {/* Rim light - golden accent */}
      <pointLight
        position={[-2, 2, -3]}
        intensity={0.6}
        color="#D4A520"
        distance={10}
      />

      {/* Bottom bounce light */}
      <pointLight
        position={[0, -2, 2]}
        intensity={0.2}
        color="#FAF3E6"
        distance={8}
      />

      {/* Environment for reflections */}
      <Environment preset="studio" environmentIntensity={0.3} />

      {/* Main 3D Model Group */}
      <group ref={groupRef}>
        <Float
          speed={1.5}
          rotationIntensity={0.1}
          floatIntensity={0.3}
          floatingRange={[-0.05, 0.05]}
        >
          <LambModel />
        </Float>
      </group>

      {/* Contact Shadow for grounding */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.15}
        scale={10}
        blur={2.5}
        far={4}
        color="#8B7355"
      />

      {/* Decorative floating particles */}
      <FloatingParticles />
    </>
  )
}

// Subtle floating golden particles
function FloatingParticles() {
  const count = 30
  const meshRef = useRef()

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
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
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
        size={0.015}
        color="#D4A520"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}