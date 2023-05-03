import {Button, Card, ConfigProvider, Space} from 'antd'
import {Link} from "react-router-dom"
import '../App.css'
import {motion, useScroll, useSpring} from "framer-motion";
import caesarLogo from '../assets/olive-branch.png'
import XORLogo from '../assets/XORLogo.png';
import vigenereLogo from "../assets/vigenere-logo.png";
import aesLogo from '../assets/AES.D-4e854400.png'
import fence from '../assets/fence-icon.png'
import shiftbitLogo from '../assets/pixil-frame-0.png'

// <Route path="/ciphers/aes" element={<div><Navbar/><AES/></div>}/>
// <Link to="/ciphers/caesar" rel="noopener noreferrer">
//     <Button>Caesar Cipher</Button>
// </Link>
// <Link to="/ciphers/vigenere" rel="noopener noreferrer">
//     <Button>Vigenere Cipher</Button>
// </Link>
// <Link to="/ciphers/xor" rel="noopener noreferrer">
//     <Button>XOR Cipher</Button>
// </Link>
// <Link to="/ciphers/bit-shift" rel="noopener noreferrer">
const Cards = () => (<ConfigProvider theme={{
    token: {
        colorTextBase: "#ffffff",
        colorBgBase: "#19191c",
        colorFill: "#f9f9f9",
        colorText: "#ffffff",
        colorPrimary: "#ffffff",
        colorBorder: "#B5B5B5",
        colorBorderSecondary: "#76767d",
    },
}}>

    <div className={'ch-grid'}>
        <motion.div
            whileHover={{ scale: 1.08 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            animate={{ x: [-1000, 0], y: [-500, 0], opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
        >
            <Link to="/ciphers" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card hoverable className={'ch-i'}>
                    <div>
                        <img src={caesarLogo} alt={'cube'} className={'ch-logo'}/>
                        <p className={'ch-title'}>Caesar</p>
                        <p className={'ch-sub'}>A classic example of ancient cryptography.</p>
                    </div>
                </Card>
            </Link>
        </motion.div>




        <motion.div
            whileHover={{ scale: 1.08 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            animate={{ x: [1000, 0], y: [-500, 0], opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
        >
            <Link to="/ciphers" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card hoverable className={'ch-i'}>
                    <div>
                        <img src={vigenereLogo} alt={'cube'} className={'ch-logo'}/>
                        <p className={'ch-title'}>Vigenère</p>
                        <p className={'ch-sub'}>A complex polyalphabetic substitution cipher with French roots.</p>
                    </div>
                </Card>
            </Link>
        </motion.div>






        <motion.div
            whileHover={{ scale: 1.08 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            animate={{ x: [-1000, 0], opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
        >
            <Link to="/ciphers" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card hoverable className={'ch-i'}>
                    <div>
                        <img src={XORLogo} alt={'cube'} className={'ch-logo-1'}/>
                        <p className={'ch-title'}>XOR</p>
                        <p className={'ch-sub'}>A symmetric key encryption cipher that is simple yet powerful.</p>
                    </div>
                </Card>
            </Link>
        </motion.div>




        <motion.div
            whileHover={{ scale: 1.08 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            animate={{ x: [1000, 0], opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
        >
            <Link to="/ciphers" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card hoverable className={'ch-i'}>
                    <div>
                        <img src={shiftbitLogo} alt={'cube'} className={'ch-logo-2'}/>
                        <p className={'ch-title'}>Bit Shift</p>
                        <p className={'ch-sub'}>A simple encryption technique that operates on the binary
                            representation.</p>
                    </div>
                </Card>
            </Link>
        </motion.div>




        <motion.div
            whileHover={{ scale: 1.08 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            animate={{ x: [-1000, 0], y: [500, 0], opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
        >
            <Link to="/ciphers" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card hoverable className={'ch-i'}>
                    <div>
                        <img src={aesLogo} alt={'cube'} className={'ch-logo-3'}/>
                        <p className={'ch-title'}>Advanced Encryption</p>
                        <p className={'ch-sub'}>A widely adopted, symmetric encryption algorithm that is secure and efficient.</p>
                    </div>
                </Card>
            </Link>
        </motion.div>




        <motion.div
            whileHover={{ scale: 1.08 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            animate={{ x: [1000, 0], y: [500, 0], opacity: 1, scale: 1 }}

            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,


            }}
            initial={{ opacity: 0, scale: 0.5 }}
        >
            <Link to="/ciphers" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card hoverable className={'ch-i'}>
                    <div>
                        <img src={fence} alt={'cube'} className={'ch-logo-2'}/>
                        <p className={'ch-title'}>Rail Fence</p>
                        <p className={'ch-sub'}>A simple transposition cipher that arranges plaintext characters in a zigzag pattern.</p>
                    </div>
                </Card>
            </Link>
        </motion.div>




    </div>
</ConfigProvider>);


function Ciphers() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

  return (
      <div className={'applications-container'}>
          <div className={'small-container'}>
              <Cards/>
          </div>
          <motion.div className="progress" style={{scaleX}}/>

      </div>


  )
}

export default Ciphers
