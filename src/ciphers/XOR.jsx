import {Anchor, ConfigProvider, Input, InputNumber} from "antd";
import {useState} from "react";
import XORLogo from '../assets/XORLogo.png';
import boole from '../assets/boole.png';
import xorCipherGif from '../assets/xorCipherGif.gif';
import xorComp from '../assets/xor.webp';
import gilbertVernam from '../assets/gilbertVernam.jpg';
import { motion} from "framer-motion";
// JavaScript program to implement XOR - Encryption

// The same function is used to encrypt and
// decrypt
function encryptDecrypt(inpString, xorKey) {
    inpString = inpString.split("");

    // Define XOR key
    // Any character value will work


    // calculate length of input string
    let len = inpString.length;

    // perform XOR operation of key
    // with every character in string

    for (let i = 0; i < len; i++) {
        inpString[i] = (String.fromCharCode((inpString[i].charCodeAt(0)) ^ xorKey));
    }
    return inpString.join("");
}

// // Driver program to test above function
// let sampleString = "GeeksforGeeks";
//
// // Encrypt the string
// process.stdout.write("Encrypted String: ");
// sampleString = encryptDecrypt(sampleString);
// process.stdout.write("\n");
//
// // Decrypt the string
// process.stdout.write("Decrypted String: ");
// encryptDecrypt(sampleString);
//
// // This code is contributed by phasing17


function XOR() {
    const {TextArea} = Input;
    const [text, setText] = useState("");
    const [key, setKey] = useState(999);


    const onChange = (e) => {
        setText(e.target.value);
    };
    const onChange2 = (value) => {
        setKey(value);
    };


    return (<motion.div
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
            }}
            initial={{ opacity: 0}} >

            <div className={"cipher-container"}>
                <motion.img
                    whileInView={{x: [500, 0],}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring", stiffness: 50,
                    }} className={"boole"} src={boole} alt={"Gorge Boole"} loading="lazy"/>
                <div className={"cipher-title-container-XOR"}>
                    <motion.div whileInView={{x: [-500, 0],}}
                                viewport={{once: true}}
                                transition={{
                                    type: "spring", stiffness: 50,
                                }}>
                    <img src={XORLogo} alt={"XORLogo"} className={"vigenere-logo"} loading="lazy"/>
                    <p className={"cipher-title"}>XOR Cipher</p>
                    <p className={"cipher-subtitle"}>A symmetric key encryption cipher that is simple yet powerful.</p>
                    </motion.div>
                </div>
            </div>
            <div className={'cipher-container'}>
                <div className={'small-container'}
                     style={{
                         background: "#19191C", padding: "1.5rem", display: "flex", justifyContent: "center",
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
                    <div className={'small-container'} style={{paddingTop: '0'}}>

                        <h2>What is the XOR cipher?</h2>
                        <p className={'pme'}>The XOR cipher is a simple encryption algorithm that uses the XOR
                            (exclusive or) operator. In this cipher, a key is used to perform the XOR operation on each
                            character of the plaintext to produce the corresponding character of the ciphertext.</p>
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
                                <div className>
                                    <p className="p-input">Plain Text</p>
                                    <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                              onChange={onChange}
                                              placeholder="Type here..."
                                    />
                                </div>

                                <div className={'key-grid'}>
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
                                                  value={encryptDecrypt(text, key)}
                                        />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </ConfigProvider>

                    </div>
                </div>
                <div id="how-it-works" style={{background: "#fcfcff",}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between', alignItems: ' center'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>How does the XOR cipher work?</h2>
                            <p className={"pYou"} style={{color: '#19191C',}}>The XOR cipher is a type of encryption
                                algorithm that uses the XOR (exclusive or) operation to encrypt plaintext into
                                ciphertext. In this cipher, a key, which is also a binary string, is used to perform the
                                XOR operation on each bit of the plaintext to produce the corresponding bit of the
                                ciphertext. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>The XOR operation takes two input bits and
                                outputs a single bit, which is 1 if the two input bits are different, and 0 if they are
                                the same. When the XOR operation is applied to the plaintext and the key, the resulting
                                binary string is the ciphertext. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>
                                To decrypt the ciphertext, the same key is used to perform the XOR operation on each bit
                                of the ciphertext to recover the original plaintext message. The strength of the XOR
                                cipher depends on the strength and randomness of the key used. If the key is too short
                                or predictable, the ciphertext can be easily decrypted through brute force or other
                                methods. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>
                                Therefore, the XOR cipher is not considered a secure encryption algorithm for modern
                                cryptographic applications, and more advanced algorithms such as AES and RSA are
                                typically used instead. However, the XOR cipher is still used in some applications where
                                simplicity and speed are more important than security. </p>
                        </div>
                        <img className={'tableX'} src={xorComp} alt={'xor cipher visualisation'} loading="lazy"/>
                    </div>
                </div>


                <div id="visualize" style={{background: "#fcfcff", overflowX: 'hidden'}}>
                    <div className={'g-vigenere'} >
                    <h2 style={{color:'black'}}>Visualizing the Vigenère cipher</h2>
                        <img className={'xorVis'} src={xorCipherGif} alt={'a visualisation of the xor cipher'} loading="lazy"/>


                    </div>



                </div>


                <div id="history" style={{background: "#fcfcff"}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2 style={{color:'black'}}>History</h2>
                            <p className={"pYou"} style={{color:'black'}}>The XOR cipher, also known as the Vernam cipher, is a type of encryption that was invented in 1917 by Gilbert Vernam, an American telegraph engineer. Vernam's original invention used a paper tape that was punched with a random sequence of holes, which were used as the key for the encryption process.</p>
                            <p className={"pYou"} style={{color:'black'}}>The XOR cipher was initially used for telegraphy and later for teletype systems. During World War II, the cipher was used by the United States for secure communications, particularly for messages transmitted over the transatlantic cable.</p>
                            <p className={"pYou"} style={{color:'black'}}>In the 1950s and 1960s, the XOR cipher was used for computer encryption, particularly for military and diplomatic communications. However, the cipher was eventually found to be vulnerable to certain types of attacks, such as known plaintext attacks, where an attacker has access to both the encrypted message and the original message.</p>
                            <p className={"pYou"} style={{color:'black'}}>Despite its vulnerabilities, the XOR cipher remains an important part of cryptography history and continues to be used in certain contexts, particularly as a component of more complex encryption algorithms.</p>


                        </div>
                        <img className={'vigenereHimself'} src={gilbertVernam} alt={'Gilbert Vernam'} loading="lazy"/>
                    </div>


                </div>
            </div>
        </motion.div>

    )
}

export default XOR;

