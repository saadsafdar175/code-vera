import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

function Core() {
  const mesh = useRef()
  const ringA = useRef()
  const ringB = useRef()

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.18
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.16
    if (ringB.current) ringB.current.rotation.x -= delta * 0.12
  })

  return (
    <group>
      <Float speed={1.25} rotationIntensity={0.22} floatIntensity={0.55}>
        <mesh ref={mesh} scale={1.32}>
          <icosahedronGeometry args={[1, 5]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            roughness={0.16}
            metalness={0.72}
            distort={0.34}
            speed={1.7}
            emissive="#35106f"
            emissiveIntensity={0.55}
          />
        </mesh>
      </Float>
      <mesh ref={ringA} rotation={[1.1, 0.25, 0.2]}>
        <torusGeometry args={[1.82, 0.012, 16, 180]} />
        <meshBasicMaterial color="#b9a2ff" transparent opacity={0.62} />
      </mesh>
      <mesh ref={ringB} rotation={[0.45, 1.0, 0.4]}>
        <torusGeometry args={[2.08, 0.008, 12, 180]} />
        <meshBasicMaterial color="#5ee7ff" transparent opacity={0.48} />
      </mesh>
      <Sparkles count={70} scale={5.5} size={2.2} speed={0.28} color="#bca5ff" />
    </group>
  )
}

export default function Orb() {
  return (
    <div className="orb-canvas" aria-label="Abstract animated 3D purple object">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 42 }} dpr={[1, 1.6]}>
        <ambientLight intensity={1.2} />
        <pointLight position={[4, 3, 4]} intensity={32} color="#9b72ff" />
        <pointLight position={[-4, -2, 2]} intensity={18} color="#39d9ff" />
        <Core />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
