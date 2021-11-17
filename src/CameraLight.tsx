import { PerspectiveCamera } from '@react-three/drei'

export function CameraLight() {
  return (
    <PerspectiveCamera fov={45} position={[0, 0, 4]} makeDefault>
      <directionalLight color={0xffffff} intensity={2} position={[0, 0, 5]} />
    </PerspectiveCamera>
  )
}
