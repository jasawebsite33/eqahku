'use client'

import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'

export default function LambModel(props) {
  const groupRef = useRef()
  const { scene } = useGLTF('/models/lamb.glb')
  const mouseRef = useRef({ x: 0, y: 0 })

  // Setup shadows & material
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material.envMapIntensity = 0.8
        }
      }
    })
  }, [scene])

  // Global mouse tracking (works even if mouse hasn't entered canvas)
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Smooth follow + idle floating
  useFrame((state) => {
    if (groupRef.current) {
      const targetRotY = mouseRef.current.x * 0.5
      const targetRotX = -mouseRef.current.y * 0.2

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.06
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.06
      )

      // Subtle idle float
      groupRef.current.position.y =
        -0.3 + Math.sin(state.clock.elapsedTime * 0.8) * 0.04
    }
  })

  return (
    <Center>
      <group ref={groupRef} {...props}>
        <primitive
          object={scene}
          scale={0.3}        // ⬅️ ADJUST: ukuran domba (coba 1.2 - 2.0)
          position={[0, 0, 0]}
        />
      </group>
    </Center>
  )
}

useGLTF.preload('/models/lamb.glb')