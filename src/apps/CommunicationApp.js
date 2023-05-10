import MessageList from "./messageSim/MessageList";
import {motion, useScroll, useSpring} from "framer-motion";
import React from "react";
import Spline from "@splinetool/react-spline";

function CommunicationApp() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    return (<div className={'applications-container'}>
        <h1 style={{position: "absolute", left: '5%', top: '13%', fontSize: 'var(--step-7)'}}
            className={'cipher-title'}>End-to-end Encryption</h1>

        <Spline style={{height: '20rem'}} scene="https://prod.spline.design/ntO4EKGiPTwie5Pc/scene.splinecode"/>

        <div className={'small-container'} style={{paddingTop: '0'}}>

            <div className={'message-sim'}>
                <MessageList/>
            </div>

        </div>
        <article>
            <section>
                <h1>What is end-to-end encryption?</h1>

                <p>
                    To demonstrate how end-to-end encryption works, we have a simulation of
                    three messaging boxes - one for the sender, one for the messaging server/database, and one for the
                    recipient. The simulation shows how a message is encrypted on the sender's device before it is
                    transmitted to
                    the messaging server. The encrypted message then is stored on the messaging server/database until it
                    is received by the intended recipient.</p>
            </section>
            <section>
                <h1>How does it work?</h1>
                <p>
                    Image encryption works by using encryption algorithms to transform the pixel values of an image
                    into a ciphered form that can only be deciphered by those with the decryption key. The
                    encryption process involves scrambling the pixel values of the image using mathematical operations,
                    such as
                    substitution and permutation. This results in a ciphered image that is unintelligible to anyone
                    without the decryption key. </p>
                <p>
                    Once the message is received, it is decrypted on the recipient's device
                    using the same key that was used to encrypt it on the sender's device. This process ensures that
                    only the sender and recipient can read the message, and that the messaging server/database cannot
                    access the message content.
                </p>
                <p>
                    To ensure the security of the communication, the key is never transmitted or stored on the messaging
                    server. This means that even if a hacker gains access to the messaging server, they will not be able
                    to access the message content without the key. The use of end-to-end encryption makes it nearly
                    impossible for anyone to intercept or eavesdrop on the communication. </p>
            </section>
            <section>
                <h1>Where is it used?</h1>
                <p>
                There are several popular messaging applications that use end-to-end encryption to protect user
                communications. Signal, WhatsApp, and iMessage are among the most well-known examples. Signal, in
                particular, has been praised for its strong security and privacy features, including its use of
                end-to-end encryption for all messages and calls.
            </p>

        </section>
    </article>
    <motion.div className="progress" style={{scaleX}}/>

</div>


)
}

export default CommunicationApp;