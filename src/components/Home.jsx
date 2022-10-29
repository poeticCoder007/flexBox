
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import randomWord from 'random-words'
import "./Home.css";

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
  // Change the mouse cursor on hover
    useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
    }, [hovered])
  // Tie component to the render-loop
    useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#ff8d2a' : 'white'), 0.1)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
}

function Cloud({ count, radius }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
    const temp = []
    // tare navi kai skill nakhvi hoi to aya
    /**
     * words count * 4 hova joie to golo sarkho banse
     */
    const tag = ["html","css","js","python","java","c++","c","bootstrap","solidity","tailwind","flutter","web3","nodeJs","reactJs","expressJs","mongoose","figma"]
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    let k = 0; 
    for (let i = 1; i < count + 1; i++)
        for (let j = 0; j < count; j++) 
        {
            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), tag[k]]);
            k++;
        }
    return temp
    }, [count, radius])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}


function Box(props) {

    const meshRef = useRef()
    const [hover, setHover] = useState(false)
    
    // useFrame(() => {
    // meshRef.current.rotation.y += 0.01
    // meshRef.current.rotation.x += 0.01
    // meshRef.current.rotation.z += 0.01
    // })

    return (
    <mesh 
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={()=> setHover(false)}
    >
        <boxBufferGeometry args={[3,3,3]} />
        <meshStandardMaterial color={hover?"green":"red"}/>
    </mesh>
    )
}

const home = () => {
    return (
        <>
            <div className="hcontainer">
                <div className="hleft">
                    <h1>Welcome to <span className="orange">
                            flexBox!
                        </span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos, deserunt doloribus maxime eaque, iste nisi ullam sequi quasi tempore illo quidem provident! Molestias quaerat, delectus, consequuntur natus aliquid nostrum debitis neque dolorem cum ex in aliquam assumenda corrupti quam animi veritatis reprehenderit magnam? Ab beatae necessitatibus est fuga maxime.</p>
                    <div className="btn">
                        <button>
                            Explore more
                        </button>
                    </div>
                </div>
                <div className="hright">
                    {/* <img src="https://raw.githubusercontent.com/Devrajsinh03/Photos/3a936a86b6e9df5c9768a442c5451742851a144c/logosq.svg" alt="" /> */}
                    <Canvas>
                        {/* <CameraController /> */}
                        {/* <ambientLight intensity={0.3}/>
                        <pointLight position={[3,3,3]}/>
                        <Box/>
                        <OrbitControls autoRotate/> */}
                        <fog attach="fog" args={['#202025', 0, 80]} />
                        <Cloud count={4} radius={10} />
                        <TrackballControls />
                    </Canvas>
                </div>
            </div>
        </>
    )
    }

export default home
