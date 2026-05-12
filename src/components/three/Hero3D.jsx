'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-gold-300 border-t-gold-600 animate-spin" />
    </div>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          shadows
          camera={{
            position: [0, 1.2, 7],   // ⬅️ Naikkan Y=1.2, mundur Z=7
            fov: 32,                  // ⬅️ Sedikit lebih cinematic
            near: 0.1,
            far: 100,
          }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}