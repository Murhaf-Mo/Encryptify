import MessageList from "./messageSim/MessageList";
import {motion, useScroll, useSpring} from "framer-motion";
import React from "react";

function CommunicationApp() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    return (<div className={'applications-container'}>
            <div className={'small-container'}>

                <h1 className={'cipher-title'}>End-to-end Encryption</h1>
                <p className={'paragraph-text'}> It is a secure method of communication that ensures only the sender and
                    intended recipient can read a message. It encrypts the message on the sender's device and decrypts
                    it on the recipient's device, making it nearly impossible for others to intercept or eavesdrop on
                    the communication.</p>


                <div className={'message-sim'}>
                    <MessageList/>

                </div>

                <h1 className={'cipher-title'} style={{fontSize: 'var(--step-4)'}}>How It Works</h1>
                <p className={'paragraph-text'}> To demonstrate how end-to-end encryption works, we have a simulation of
                    three messaging boxes - one for the sender, one for the messaging server/database, and one for the
                    recipient. The simulation shows how a message is encrypted on the sender's device before it is
                    transmitted to
                    the messaging server. The encrypted message then is stored on the messaging server/database until it
                    is received by the intended recipient.</p>
                <p className={'paragraph-text'}>Once the message is received, it is decrypted on the recipient's device
                    using the same key that was used to encrypt it on the sender's device. This process ensures that
                    only the sender and recipient can read the message, and that the messaging server/database cannot
                    access the message content. To ensure the security of the communication, the key is never transmitted or stored on the messaging
                    server. This means that even if a hacker gains access to the messaging server, they will not be able
                    to access the message content without the key. The use of end-to-end encryption makes it nearly
                    impossible for anyone to intercept or eavesdrop on the communication.</p>
                <h1 className={'cipher-title'} style={{fontSize: 'var(--step-4)', paddingTop: '2rem'}}>Where It's Used</h1>
                <p className={'paragraph-text'}>There are several popular messaging applications that use end-to-end encryption to protect user communications. Signal, WhatsApp, and iMessage are among the most well-known examples. Signal, in particular, has been praised for its strong security and privacy features, including its use of end-to-end encryption for all messages and calls.</p>

            </div>
            <motion.div className="progress" style={{scaleX}}/>

        </div>


    )
}

export default CommunicationApp;