import React, {useMemo, useRef} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import * as THREE from 'three'
import AnimatedText from "../components/AnimatedText";
import {motion, useScroll, useSpring} from "framer-motion";
import {Research} from "../components/Research/Research";

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
                <AnimatedText text={'Post-quantum'}></AnimatedText>
                <AnimatedText text={'Cryptography'}></AnimatedText>
            </div>
            <Canvas orthographic camera={{zoom: 20}} colorManagement={false} style={{height: '95vh'}}>
                <color attach="background" args={['#1B1B1B']}/>
                <Dots/>
            </Canvas>
        </div>

    )
}

export default function Quantum() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30, restDelta: 0.001});


    return (<div>

            <motion.div
                className={'overflowHider'}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{
                    duration: 1.5,
                }}
                initial={{opacity: 0}}>
                <App/>
            </motion.div>
            <div style={{background: '#1B1B1B',}}>
                <Research/>
            </div>

            <motion.div className="progress" style={{scaleX}}/>


        </div>

    )
}