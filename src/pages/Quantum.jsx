import React, {useMemo, useRef} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import * as THREE from 'three'
import AnimatedText from "../components/AnimatedText";
import {motion, useScroll, useSpring} from "framer-motion";
import qf from '../assets/q1.gif'
import {Anchor, ConfigProvider, InputNumber} from "antd";
import xorComp from "../assets/xor.webp";
import xorCipherGif from "../assets/xorCipherGif.gif";
import gilbertVernam from "../assets/gilbertVernam.jpg";

const roundedSquareWave = (t, delta, a, f) => {
    return ((3 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

function Dots() {
    const ref = useRef()
    const {vec, transform, positions, distances} = useMemo(() => {
        const vec = new THREE.Vector3()
        const transform = new THREE.Matrix4()

        // Precompute randomized initial positions
        const positions = [...Array(10000)].map((_, i) => {
            const position = new THREE.Vector3()
            // Place in a grid
            position.x = (i % 100) - 50
            position.y = Math.floor(i / 100) - 50

            // Offset every other column (hexagonal pattern)
            position.y += (i % 2) * 0.5

            // Add some noise
            position.x += Math.random() * 0.3
            position.y += Math.random() * 0.3
            return position
        })

        // Precompute initial distances with octagonal offset
        const right = new THREE.Vector3(1, 0, 0)
        const distances = positions.map((pos) => {
            return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
        })
        return {vec, transform, positions, distances}
    }, [])
    useFrame(({clock}) => {
        for (let i = 0; i < 10000; ++i) {
            const dist = distances[i]

            // Distance affects the wave phase
            const t = clock.elapsedTime - dist / 25

            // Oscillates between -0.4 and +0.4
            const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8)

            // Scale initial position by our oscillator
            vec.copy(positions[i]).multiplyScalar(wave + 1.3)

            // Apply the Vector3 to a Matrix4
            transform.setPosition(vec)

            // Update Matrix4 for this instance
            ref.current.setMatrixAt(i, transform)
        }
        ref.current.instanceMatrix.needsUpdate = true
    })
    return (<instancedMesh ref={ref} args={[null, null, 10000]}>
        <circleBufferGeometry args={[0.15]}/>
        <meshBasicMaterial/>
    </instancedMesh>)
}

function App() {

    return (<div className={'quantum-container'}>
            <div className={'animated-text-q'}>
                <AnimatedText text={'Quantum'}></AnimatedText>
                <AnimatedText text={'Cryptography'}></AnimatedText>
            </div>
            <Canvas orthographic camera={{zoom: 20}} colorManagement={false} style={{height: '100vh'}}>
                <color attach="background" args={['#1B1B1B']}/>
                <Dots/>
            </Canvas>
        </div>

    )
}

export default function Applications() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30, restDelta: 0.001});


    return (<div>
            {/*<App/>*/}
            <div style={{background: '#1B1B1B'}}>
                <div className={'small-container'}></div>
                <img src={qf} alt={'q1'}/>
                    <div className={'small-container'}
                         style={{
                             background: "#19191C", padding: "1rem", display: "flex", justifyContent: "center",
                         }}
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorTextBase: "#ffffff",
                                    colorBgBase: "#19191c",
                                    colorFill: "#f9f9f9",
                                    borderRadius: 16,
                                    fontSize: "var(--step-0)",
                                    colorText: "#B5B5B5",
                                    colorPrimary: "#ffffff",
                                    colorBorder: "#B5B5B5",
                                    colorBorderSecondary: "#76767d",
                                },
                            }}
                        >
                            <Anchor
                                style={{
                                    background: "#19191C",
                                    padding: "0.2rem 1rem",
                                    margin: "0.6rem",
                                    borderColor: "#B5B5B5",
                                    borderRadius: "2rem",
                                    borderWidth: "1px",
                                    borderStyle: "solid",

                                }}
                                direction="horizontal"
                                items={[{
                                    key: "cipher", href: "#cipher", title: " Cipher",
                                }, {
                                    key: "how-it-works", href: "#how-it-works", title: "How It Works",
                                }, {
                                    key: "visualize", href: "#visualize", title: "Visualize",
                                }, {
                                    key: "history", href: "#history", title: "History",
                                },]}
                            />
                        </ConfigProvider>
                    </div>
                </div>

                <div style={{overflowX: 'hidden'}}>
                    <div className={"cipher-container"} id="cipher">

                    </div>
                    <div id="how-it-works" style={{background: "#fcfcff",}}>

                    </div>


                    <div id="visualize" style={{background: "#fcfcff", overflowX: 'hidden'}}>


                    </div>


                    <div id="history" style={{background: "#fcfcff"}}>


                    </div>
                </div>


            <motion.div className="progress" style={{scaleX}}/>


        </div>

    )
}