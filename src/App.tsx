import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CameraLight } from './CameraLight'
import { Stars } from './Stars'
import { Earth } from './Earth'

export type Coord = {
  title: string
  lat: number
  lon: number
  hash?: string
  icon?: string
  description?: string
}

const coords: Coord[] = [
  {
    title: 'London',
    lat: 51.525437,
    lon: -0.127108,
    hash: '#london',
    icon: '/me.png',
    description: 'Lorem ipsum, dolor',
  },

  {
    title: 'Indonesia',
    lat: -2.44314,
    lon: 133.139,
    hash: '#indonesia',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
  },

  {
    title: 'Brazil',
    lat: -21.811314,
    lon: -40.981673,
    hash: '#brazil',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
  },
]

export function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <p>Spinner</p>
        </div>
      }>
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={[0x000000]} />

        <CameraLight />
        <Stars />
        <Earth coords={coords} />
        <OrbitControls
          enablePan={false}
          autoRotateSpeed={0.2}
          autoRotate
          minDistance={1.8}
          maxDistance={4}
        />
      </Canvas>
    </Suspense>
  )
}
