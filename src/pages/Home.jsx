import {Card, ConfigProvider} from 'antd';
import cube from '../assets/cube.png'
import appLogo from '../assets/appLogo.png'
import puzzle from '../assets/puzzle.png'
import quantumLogo from '../assets/quantumLogo.png'
import Facts from "./scroll.tsx";
import ParallaxText from "./movingText.tsx";
import Spline from '@splinetool/react-spline';


const Cards = () => (
    <ConfigProvider theme={{
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

            <Card hoverable className={'h-grid-i'}>
                <div>
                    <img src={cube} alt={'cube'} className={'h-logo'}/>
                    <p className={'card-title'}>Ciphers</p>
                    <p className={'card-sub'}>Learn about the kinds of encryption algorithms and ciphers, how they work, and try out them yourself.</p>
                </div>
            </Card>
            <Card hoverable className={'h-grid-i'}>
                <div>
                    <img src={appLogo} alt={'cube'} className={'h-logo'}/>
                    <p className={'card-title'}>Applications</p>
                    <p className={'card-sub'}>Learn where we are using encryption and the way it’s protecting our privacy and security.</p>
                </div>
            </Card>
            <Card hoverable className={'h-grid-i'}>
                <div>
                    <img src={puzzle} alt={'cube'} className={'h-logo'}/>
                    <p className={'card-title'}>Challenges</p>
                    <p className={'card-sub'}>Participate in challenges where test yourself and try decrypting ciphers from the given hint.</p>
                </div>
            </Card>
            <Card hoverable className={'h-grid-i'}>
                <div>
                    <img src={quantumLogo} alt={'cube'} className={'h-logo'}/>
                    <p className={'card-title'}>Quantum</p>
                    <p className={'card-sub'}>Learn how will new quantum computers effect encryption and how we can protect the internet from that threat.</p>
                </div>
            </Card>
        </div>
    </ConfigProvider>
);


function Home() {

    return (

        <div className={"home-page"}>
            <div className={"canvas"}>
                <p className={'home-title'}>Encryptify</p>
                <Spline scene="https://prod.spline.design/DzXRUvEGSohQ8-rN/scene.splinecode"  />
            </div>
            <div style={{backgroundColor: 'black', paddingTop: "5%",paddingBottom: "5%"}}>
                <ParallaxText baseVelocity={-2}>HOW WE PROTECT THE INTERNET</ParallaxText>
                <Cards/>
                <ParallaxText baseVelocity={2}>NOW AND FROM THE FUTURE</ParallaxText>
            </div>
            <Facts/>
        </div>

    )
}

export default Home
