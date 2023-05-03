import {useRef} from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import {Card, ConfigProvider} from "antd";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id,q,a }: { id: string, q:string, a: string}) {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref});
    const y = useParallax(scrollYProgress, 300);

    return (

        <div className={'card-item'}>
            <motion.h2 style={{y, padding: '1.5rem'}}>{`#${id}`}</motion.h2>
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
            <Card hoverable className={'card'} ref={ref} >
                    <div>
                        <p className={'card-title'} style={{fontSize:'var(--step-0)'}}>{q}</p>
                        <p className={'card-sub'} style={{fontSize:'var(--step--1)'}}>{a}</p>
                    </div>
                </Card>
            </ConfigProvider>
        </div>

    );
}

export default function Facts() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,

        restDelta: 0.001
    });

    return (
        <div>
            <div className={'facts'}>
                <Image id='I' q='What is encryption? ' a='Encryption is the process of converting information or data into a secret code or cipher to prevent unauthorized access or use of that information. It involves the use of mathematical algorithms and keys to transform plaintext into ciphertext that is difficult to decipher without the appropriate key.'/>
                <Image id='II' q='Why is it important?' a='Encryption is important because it protects sensitive information from unauthorized access and theft. It is used in various industries to maintain security and privacy of data, and ensures integrity and authenticity of data by preventing tampering or alteration. Encryption is essential for protecting against cyber threats and data theft.'/>
                <Image id='III' q='What is the threat?' a='Quantum computers pose a significant threat to internet security by breaking many of the encryption methods currently in use, which rely on complex mathematical problems that would take classical computers a very long time to solve. Public key encryption algorithms, such as RSA and Elliptic Curve Cryptography (ECC), are particularly vulnerable to quantum attacks. The development of new encryption methods that can withstand quantum computing power is essential to maintain internet security.'/>
            </div>
            <motion.div className="progress" style={{scaleX}}/>
        </div>
    );
}
