import {Card, ConfigProvider} from "antd";
import {Link} from "react-router-dom";
import {motion, useScroll, useSpring} from "framer-motion";
import {EyeInvisibleOutlined, FileImageOutlined, MessageOutlined} from "@ant-design/icons";
import imageEnc from '../assets/imge-encryption.gif';
import passwordEnc from '../assets/password-hashing.jpg';
import messageEnc from '../assets/Screenshot 2023-05-06 at 9.58.01 PM.jpg';



const Cards = () => (<ConfigProvider theme={{
    token: {
        colorTextBase: "#ffffff",
        colorBgBase: "black",
        colorFill: "#f9f9f9",
        colorText: "#ffffff",
        colorPrimary: "#ffffff",
        colorBorder: "#B5B5B5",
        colorBorderSecondary: "#76767d",
    },
}}>

    <div className={'applications-grid'}>
        <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ x: [-1000, 0], opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            className={'app-grid-i'}
        >
            <Link to="/applications/file-encryption" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <Card >
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={{width: ' 100%'}}>
                            <FileImageOutlined style={{fontSize: 'var(--step-4)', paddingBottom: '0.2em'}}/>
                            <p className={'app-card-title'}>Image Encryption</p>
                            <p className={'app-card-sub'}>
                                This section will show how encrypting images uses a symmetric-key algorithm. This means
                                that
                                the same key is used for both encryption and decryption. The user selects the image they
                                want to encrypt and enters a secret key. The image is then encrypted and the user can
                                download it. To decrypt the image, the user enters the same secret key and the image is
                                restored to its original form.
                            </p>
                        </div>
                        <img src={imageEnc} alt={'cube'} className={'app-img'} />

                    </div>
                </Card>
            </Link>
        </motion.div>
        <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileInView={{ x: [1000, 0], opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            className={'app-grid-i'}
        >
            <Link to="/applications/password-storage" rel="noopener noreferrer" style={{textDecoration: 'none'}}>

                <Card >
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={{width: ' 100%'}}>
                        <EyeInvisibleOutlined style={{fontSize: 'var(--step-4)', paddingBottom: '0.2em'}}/>
                        <p className={'app-card-title'}>Password Storage</p>
                        <p className={'app-card-sub'}>This section will show how passwords are stored securely. Using a
                            technique called hashing, you will learn why even if someone gains access to the database
                            where passwords are stored, they will not get the password itself. Because deciphering the
                            password will take years using the best computers available.</p>
                        </div>
                        <img src={passwordEnc} alt={'cube'} className={'app-img'}/>

                    </div>

                </Card>
            </Link>
        </motion.div>
        <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileInView={{ x: [-1000, 0], opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                duration: 0.4,
                stiffness: 50,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            className={'app-grid-i'}
        >
            <Link to="/applications/communication" rel="noopener noreferrer" style={{textDecoration: 'none'}}>

                <Card >
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={{width: ' 100%'}}>
                        <MessageOutlined style={{fontSize: 'var(--step-4)', paddingBottom: '0.2em'}}/>
                        <p className={'app-card-title'}>End-to-end Encryption</p>
                        <p className={'app-card-sub'}>This section will show how end-to-end encryption works. This means
                            that the messages are encrypted to the sender’s device and can only be decrypted by the
                            recipient’s device, with a unique key. This ensures that even if someone intercepts the
                            message during transmission, they will not be able to read it without the decryption
                            key.</p>
                    </div>
                        <img src={messageEnc} alt={'cube'} className={'app-img'} style={{paddingTop:'3rem', paddingBottom: '3rem'}}/>

                    </div>
                </Card>
            </Link>
        </motion.div>

    </div>
</ConfigProvider>);

export default function Applications() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    return (<div className={'applications-container'}>
        <div className={'small-container'}>
            <Cards/>
        </div>
        <motion.div className="progress" style={{scaleX}}/>

    </div>)
}


