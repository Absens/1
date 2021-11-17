import { useTexture } from '@react-three/drei'

export function Stars() {
  const [starTexture] = useTexture(['/textures/star.png'])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          args={[
            new Float32Array(500 * 3).map((_, i) => (Math.random() - 0.5) * 10),
            3,
          ]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={10}
        sizeAttenuation={false}
        color={0xffffff}
        transparent
        depthWrite={false}
        alphaMap={starTexture}
      />
    </points>
  )
}

useTexture.preload('/textures/star.png')
