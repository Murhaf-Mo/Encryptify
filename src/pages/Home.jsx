import {Card, ConfigProvider} from 'antd';
import cube from '../assets/cube.png'
import appLogo from '../assets/appLogo.png'
import puzzle from '../assets/puzzle.png'
import quantumLogo from '../assets/quantumLogo.png'
import Facts from "../components/scroll.tsx";
import ParallaxText from "../components/movingText.tsx";
import Spline from '@splinetool/react-spline';
import {Link} from "react-router-dom";
import {motion} from 'framer-motion'

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

        <div className={'h-grid'}>
            <motion.div
                whileHover={{ scale: 1.08 }}
                whileInView={{ x: [-1000, 0], opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 40,
                }}
                initial={{ opacity: 0, scale: 0.4 }}
            >
            <Link to="/ciphers" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card hoverable className={'h-grid-i'}>
                    <div>
                        <img src={cube} alt={'cube'} className={'h-logo'}/>
                        <p className={'card-title'}>Ciphers</p>
                        <p className={'card-sub'}>Learn about the kinds of encryption algorithms and ciphers, how they
                            work, and try them out yourself.</p>
                    </div>
                </Card>
            </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.08 }}

                whileInView={{ x: [-1000, 0], opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 45,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
            >
            <Link to="/applications" rel="noopener noreferrer" style={{textDecoration: 'none'}}>

                <Card hoverable className={'h-grid-i'}>
                    <div>
                        <img src={appLogo} alt={'cube'} className={'h-logo'}/>
                        <p className={'card-title'}>Applications</p>
                        <p className={'card-sub'}>Learn where we are using encryption and the ways it’s protecting our
                            privacy and security.</p>
                    </div>
                </Card>
            </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.08 }}
                whileInView={{ x: [1000, 0], opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 45,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
            >
            <Link to="/challenges" rel="noopener noreferrer" style={{textDecoration: 'none'}}>

                <Card hoverable className={'h-grid-i'}>
                    <div>
                        <img src={puzzle} alt={'cube'} className={'h-logo'}/>
                        <p className={'card-title'}>Challenges</p>
                        <p className={'card-sub'}>Participate in challenges where you test yourself and try decrypting
                            ciphers from the given hint.</p>
                    </div>
                </Card>
            </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.08 }}
                whileInView={{ x: [1000, 0], opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 40
                }}
                initial={{ opacity: 0, scale: 0.5 }}
            >
            <Link to="/quantum" rel="noopener noreferrer" style={{textDecoration: 'none'}}>

                <Card hoverable className={'h-grid-i'}>
                    <div>
                        <img src={quantumLogo} alt={'cube'} className={'h-logo'}/>
                        <p className={'card-title'}>Quantum</p>
                        <p className={'card-sub'}>Learn how will quantum computers effect encryption and how we can
                            protect the internet from that threat.</p>
                    </div>
                </Card>
            </Link>
            </motion.div>
        </div>
    </ConfigProvider>);


function Home() {

    return (

        <div className={"home-page"}>
            <div className={"canvas"}>
                <p className={'home-title'}>Encryptify</p>
                {/*<Spline scene="https://prod.spline.design/DzXRUvEGSohQ8-rN/scene.splinecode" />*/}
                {/*<Spline scene="https://prod.spline.design/EIrpdyOLD3IQTFEK/scene.splinecode" />*/}
                <Spline scene="https://prod.spline.design/N8-MpMbN4h0u2f9d/scene.splinecode"/>


            </div>
            <div style={{backgroundColor: 'black', paddingTop: "5%", paddingBottom: "5%"}}>
                <ParallaxText baseVelocity={-2}>HOW WE PROTECT THE INTERNET</ParallaxText>
                <Cards/>
                <ParallaxText baseVelocity={2}>NOW AND FROM THE FUTURE</ParallaxText>
            </div>
            <Facts/>
        </div>

    )
}

export default Home
