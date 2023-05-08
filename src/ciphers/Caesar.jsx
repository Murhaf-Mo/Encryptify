import {Anchor, ConfigProvider, Input, InputNumber, Switch} from "antd";
import {useState} from "react";
import olive from "../assets/olive-branch.png";
import caesarst from '../assets/caesar.png';
import caesarCipherGif from '../assets/D3ypD.gif';
import caesarVis from "../assets/caesarVis.png";
import caesarTool from "../assets/caesar-tool.png";
import {motion, useScroll, useSpring} from "framer-motion";

const caesarShift = function (str, amount) {
    // Wrap the amount
    if (amount < 0) {
        return caesarShift(str, amount + 26);
    }

    // Make an output variable
    let output = "";

    // Go through each character
    for (let i = 0; i < str.length; i++) {
        // Get the character we'll be appending
        let c = str[i];

        // If it's a letter...
        if (c.match(/[a-z]/i)) {
            // Get its code
            const code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        // Append
        output += c;
    }
    // All done!
    return output;
};

function XOR() {
    const {TextArea} = Input;
    const [text, setText] = useState("");
    const [key, setKey] = useState(12);


    const onChange = (e) => {
        setText(e.target.value);
    };
    const onChange2 = (value) => {
        setKey(value);
    };
    const onChange3 = () => {
        setKey(26 - key);
    };
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });


    return (<motion.div
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{
                duration: 0.5,
            }}
            initial={{opacity: 0}}>
            <div className={"cipher-container"}>
                <motion.img
                    whileInView={{x: [500, 0],}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring", stiffness: 50,
                    }}
                    loading={'lazy'} className={"caesarst"} src={caesarst} alt={"Caesar"}/>
                <div className={"cipher-title-container-caesar"}>
                    <motion.div whileInView={{x: [-500, 0],}}
                                viewport={{once: true}}
                                transition={{
                                    type: "spring", stiffness: 50,
                                }}>
                        <img loading={'lazy'} src={olive} alt={"olive"} className={"vigenere-logo"} style={{
                            width: 'var(--step-10)',
                            paddingLeft: '0',
                            paddingTop: ' 0',
                            position: "relative",
                            left: '-3%'
                        }}/>
                        <p className={"cipher-title"}>Caesar Cipher</p>
                        <p className={"cipher-subtitle"}>A classic example of ancient cryptography.</p>
                    </motion.div>
                </div>
            </div>
            <div className={'cipher-container'}>
                <div className={'small-container'}
                     style={{
                         background: "#19191C",
                         padding: "1rem",
                         paddingBottom: '0',
                         display: "flex",
                         justifyContent: "center",
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
                    <div className={'small-container'} style={{paddingTop: '1.5rem'}}>
                        <h2>What is the Caesar cipher?</h2>
                        <p className={'pme'}>The Caesar cipher is a straightforward technique for encoding
                            messages that involves shifting letters in the alphabet by a
                            fixed number of positions to produce a substitution alphabet.</p>
                        <ConfigProvider theme={{
                            token: {
                                colorTextBase: "#ffffff",
                                colorBgBase: "#19191c",
                                colorFill: "#f9f9f9",
                                borderRadius: 16,
                                fontSize: 18,
                                colorText: "#ffffff",
                                colorPrimary: "#ffffff",
                                colorBorder: "#B5B5B5",
                                colorBorderSecondary: "#76767d",
                            },
                        }}>
                            <div className={"text-input"}>
                                <div>
                                    <p className="p-input">Plain Text</p>
                                    <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                              onChange={onChange}
                                              placeholder="Type here..."
                                    />
                                </div>

                                <div className={'key-grid'}>
                                    <p className="p-input">Decrypt</p>
                                    <div style={{padding: '0.5rem', width: "10rem"}}>
                                        <Switch onChange={onChange3}/>
                                    </div>
                                    <div style={{width: '20%'}}></div>


                                    <p className="p-input">Key</p>
                                    <div style={{padding: '0.5rem', width: "10rem"}}>
                                        <InputNumber
                                            min={0}
                                            defaultValue={key}
                                            onChange={onChange2}
                                            value={key}
                                        />

                                    </div>


                                </div>
                                <div className>
                                    <p className="p-input">Cipher Text</p>
                                    <ConfigProvider /*componentDisabled={true}*/ >
                                        <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                                  onChange={onChange}
                                                  placeholder="Cipher text..."
                                                  value={caesarShift(text, key)}
                                        />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </ConfigProvider>

                    </div>
                </div>
                <div id="how-it-works" style={{background: "#fcfcff",}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>How does the Caesar cipher work?</h2>
                            <p className={"pYou"} style={{color: '#19191C',}}>The Caesar cipher works by shifting each
                                letter in the plaintext (the original message) a fixed number of positions down the
                                alphabet to produce the
                                ciphertext (the encoded message). The fixed shift value is usually referred to as the
                                "key."</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>For example, if the key is 3, each letter
                                in the plaintext would be shifted 3 positions down the alphabet. So, an A would become a
                                D, a B would become an E, and so on. To decode the message, the process is simply
                                reversed. Each letter in the ciphertext is shifted back 3
                                positions to
                                reveal the original plaintext.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>Although the Caesar cipher is a very basic
                                encryption method, it was once used for military and diplomatic purposes. However, it is
                                now considered to be very
                                insecure, as the key space (i.e., the number of possible keys) is very small, making it
                                vulnerable to
                                brute-force attacks.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>The Caesar cipher is a very basic
                                encryption technique and is not considered to be secure, as it can easily be broken with
                                simple frequency analysis or by trying all possible shift values. However, it can be a
                                fun and educational tool for teaching basic encryption principles.</p>
                        </div>
                        <img loading={'lazy'} className={'tableX'}
                             style={{width: '130%', height: "max-content", padding: '0'}}
                             src={caesarCipherGif} alt={'xor cipher visualisation'}/>
                    </div>
                </div>


                <div id="visualize" style={{background: "#fcfcff", color: '#19191C', overflowX: 'hidden'}}>
                    <div className={'small-container'}
                         style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>Visualizing the Caesar cipher</h2>
                            <ol className={"pYou"} style={{color: '#19191C'}}>
                                <li>Choose a fixed shift value to use for encrypting your message.</li>
                                <li>Create a table with two rows. The top row should contain letters in alphabetical
                                    order,
                                    and the bottom row should contain the shifted letters according to the shift value
                                    you
                                    chose.
                                </li>
                                <li> Encode your message by replacing each letter in the original message with the
                                    corresponding letter in the shifted alphabet.
                                </li>
                                <li> Make sure the person who will receive your message knows the shift value you used
                                    so
                                    they can decode it properly.
                                </li>
                                <li>To decrypt an encoded message, subtract the original shift value from 26, and use
                                    the
                                    resulting value to shift the encoded message back to its original form.
                                </li>
                            </ol>
                        </div>

                        <img loading={'lazy'} className={'tableX'} style={{width: '100%', height: "max-content",}}
                             src={caesarVis} alt={'xor cipher visualisation'}/>
                    </div>


                </div>


                <div id="history" style={{background: "#19191C"}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h2>History</h2>
                            <p className={"pYou"}>The Caesar cipher is one of the oldest and simplest encryption
                                techniques, and it is named after Julius Caesar, who is believed to have used it to
                                protect his messages. The cipher is a type of substitution cipher, where each letter in
                                the plaintext is replaced with a letter a fixed number of positions down the alphabet.

                                The Caesar cipher was developed around 100 B.C. by Julius Caesar as a means to
                                communicate with his military commanders without the risk of interception by his
                                enemies. </p>
                            <p className={"pYou"}>He used a shift of 3 to encrypt his messages, so that a letter A would
                                be replaced by a D, B would be replaced by E, and so on. This was a simple and effective
                                way to keep the messages secret, as only those who knew the shift value could decipher
                                the message.

                                The Caesar cipher remained in use for many centuries, and it was a popular encryption
                                technique during the Renaissance period. In fact, it was not until the invention of the
                                frequency analysis technique in the 19th century that the Caesar cipher was no longer
                                considered a secure method of encryption.</p>
                            <p className={"pYou"}>In the frequency analysis technique, an attacker would analyze the
                                frequency of letters in the ciphertext and compare it to the frequency of letters in the
                                English language. By doing so, they could deduce the shift value and thus decrypt the
                                message.

                                Despite being a relatively weak encryption technique, the Caesar cipher is still used
                                today as a simple introduction to cryptography and as a basic building block for more
                                complex ciphers. It has also been used in popular culture, such as in Dan Brown's novel
                                "The Da Vinci Code," where the main character solves a message encrypted using the
                                Caesar cipher.</p>
                        </div>
                        <img loading={'lazy'}
                             className={'tableX'}
                             style={{ padding: '0'}}
                             src={caesarTool} alt={'xor cipher visualisation'}/>
                    </div>

                </div>

            </div>
            <motion.div className="progress" style={{scaleX}}/>

        </motion.div>

    )
}

export default XOR;

