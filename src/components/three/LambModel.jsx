'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'


export default function LambModel(props) {
  const meshRef = useRef()

  // ============================================
  // PLACEHOLDER MODEL (Geometric Lamb)
  // Hapus/comment bagian ini setelah model asli tersedia
  // ============================================

  // Subtle idle animation
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle breathing-like animation
      meshRef.current.scale.y =
        1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.008
      meshRef.current.scale.x =
        1 + Math.sin(state.clock.elapsedTime * 1.5 + Math.PI) * 0.005
    }
  })

  // Premium ceramic/stone material
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#F2ECDF'),
        roughness: 0.75,
        metalness: 0.05,
        envMapIntensity: 0.5,
      }),
    []
  )

  // Gold accent material
  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#D4A520'),
        roughness: 0.3,
        metalness: 0.7,
        envMapIntensity: 1,
      }),
    []
  )

  return (
    <Center>
      <group ref={meshRef} {...props} dispose={null}>
        {/* Body - elongated sphere */}
        <mesh
          position={[0, 0, 0]}
          material={material}
          castShadow
        >
          <sphereGeometry args={[0.8, 32, 32]} />
          <mesh position={[0, 0, 0]} scale={[1, 0.85, 1.3]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial {...material} />
          </mesh>
        </mesh>

        {/* Head */}
        <mesh
          position={[0.7, 0.35, 0]}
          material={material}
          castShadow
        >
          <sphereGeometry args={[0.4, 24, 24]} />
        </mesh>

        {/* Snout */}
        <mesh
          position={[1.0, 0.2, 0]}
          material={material}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
        </mesh>

        {/* Ears */}
        <mesh
          position={[0.65, 0.65, 0.25]}
          rotation={[0, 0, 0.5]}
          material={material}
        >
          <capsuleGeometry args={[0.06, 0.2, 4, 8]} />
        </mesh>
        <mesh
          position={[0.65, 0.65, -0.25]}
          rotation={[0, 0, 0.5]}
          material={material}
        >
          <capsuleGeometry args={[0.06, 0.2, 4, 8]} />
        </mesh>

        {/* Legs */}
        {[
          [0.4, -0.7, 0.3],
          [0.4, -0.7, -0.3],
          [-0.4, -0.7, 0.3],
          [-0.4, -0.7, -0.3],
        ].map((pos, i) => (
          <mesh key={i} position={pos} material={material} castShadow>
            <capsuleGeometry args={[0.08, 0.5, 4, 8]} />
          </mesh>
        ))}

        {/* Wool texture bumps on body */}
        {Array.from({ length: 20 }).map((_, i) => {
          const theta = (i / 20) * Math.PI * 2
          const phi = (Math.random() - 0.5) * Math.PI * 0.8
          const r = 0.82
          const x = Math.cos(theta) * Math.cos(phi) * r * 0.9
          const y = Math.sin(phi) * r * 0.7 + 0.1
          const z = Math.sin(theta) * Math.cos(phi) * r * 1.1
          return (
            <mesh
              key={`wool-${i}`}
              position={[x, y, z]}
              material={material}
            >
              <sphereGeometry args={[0.1 + Math.random() * 0.06, 8, 8]} />
            </mesh>
          )
        })}

        {/* Gold ornamental ring on pedestal */}
        <mesh
          position={[0, -1.1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={goldMaterial}
        >
          <torusGeometry args={[0.6, 0.02, 8, 32]} />
        </mesh>

        {/* Pedestal / Base */}
        <mesh position={[0, -1.25, 0]} material={material} receiveShadow>
          <cylinderGeometry args={[0.7, 0.8, 0.3, 32]} />
        </mesh>

        {/* Olive branch decoration */}
        <group position={[-0.9, -1.0, 0.5]} rotation={[0, 0.3, -0.2]}>
          {/* Stem */}
          <mesh material={new THREE.MeshStandardMaterial({ color: '#5F6B43', roughness: 0.8 })}>
            <capsuleGeometry args={[0.015, 0.6, 4, 8]} />
          </mesh>
          {/* Leaves */}
          {[0, 0.15, 0.3, -0.1, -0.25].map((offset, i) => (
            <mesh
              key={`leaf-${i}`}
              position={[0.05 * (i % 2 === 0 ? 1 : -1), offset, 0]}
              rotation={[0, 0, (i % 2 === 0 ? 0.3 : -0.3)]}
              material={
                new THREE.MeshStandardMaterial({
                  color: i % 2 === 0 ? '#7A8758' : '#96A274',
                  roughness: 0.7,
                })
              }
            >
              <sphereGeometry args={[0.04, 8, 4]} />
              <mesh scale={[2, 1, 0.5]}>
                <sphereGeometry args={[0.04, 8, 4]} />
              </mesh>
            </mesh>
          ))}
        </group>

        {/* Small dates plate decoration */}
        <group position={[0.7, -1.05, 0.55]}>
          {/* Plate */}
          <mesh
            material={
              new THREE.MeshStandardMaterial({
                color: '#E8DECE',
                roughness: 0.6,
              })
            }
          >
            <cylinderGeometry args={[0.15, 0.15, 0.03, 16]} />
          </mesh>
          {/* Dates */}
          {[0, 0.06, -0.05].map((x, i) => (
            <mesh
              key={`date-${i}`}
              position={[x, 0.04, i * 0.04 - 0.04]}
              material={
                new THREE.MeshStandardMaterial({
                  color: '#8B4513',
                  roughness: 0.8,
                })
              }
            >
              <capsuleGeometry args={[0.02, 0.04, 4, 8]} />
            </mesh>
          ))}
        </group>
      </group>
    </Center>
  )

  // ============================================
  // REAL MODEL (Uncomment setelah model tersedia)
  // ============================================
  /*
  const { scene } = useGLTF('/models/lamb.glb')

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.005
    }
  })

  return (
    <Center>
      <group ref={meshRef} {...props}>
        <primitive
          object={scene}
          scale={1.5}           // Sesuaikan ukuran model
          position={[0, -1, 0]} // Sesuaikan posisi Y agar centered
          rotation={[0, -0.3, 0]} // Sesuaikan rotasi awal
        />
      </group>
    </Center>
  )
  */
}

// Preload model (uncomment saat model asli tersedia)
// useGLTF.preload('/models/lamb.glb')