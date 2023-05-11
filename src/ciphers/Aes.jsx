import React, {Component} from 'react';
import * as CryptoJS from 'crypto-js';
import {motion} from "framer-motion";
import caesarst from "../assets/pngwing.com-3.png";
import aesLogo from '../assets/AES.D-4e854400.png'
import {Anchor, ConfigProvider, Input, Switch} from "antd";
import aesPhoto from "../assets/AES_(Rijndael)_Round_Function.png";
import video from "../assets/WeakCornyBedlingtonterrier.mp4";
import aesCreators from "../assets/joan-daemen-5a036429-e292-4d10-867a-0c22e65f658-resize-750.jpeg";
import TextArea from "antd/es/input/TextArea";


export default class Aes extends Component {
    constructor() {
        super();
        this.state = {
            inputText: '',
            inputKey: '',
            encryptedBase64Input: '',
            encryptedBase64: '',
            decryptKey: '',
            decryptedText: '',
            encrypt: true,
        };

    }

    /*
    * Encrypt a derived hd private key with a given pin and return it in Base64 form
    */
    encryptAES = (text, key) => {
        return CryptoJS.AES.encrypt(text, key).toString();
    };


    /**
     * Decrypt an encrypted message
     * @param encryptedBase64 encrypted data in base64 format
     * @param key The secret key
     * @return The decrypted content
     */
    decryptAES = (encryptedBase64, key) => {
        const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
        if (decrypted) {
            try {
                console.log(decrypted);
                const str = decrypted.toString(CryptoJS.enc.Utf8);
                if (str.length > 0) {
                    return str;
                } else {
                    return 'error 1';
                }
            } catch (e) {
                return 'error 2';
            }
        }
        return 'error 3';
    };

    handleInputTextChange = (event) => {
        this.setState({
            inputText: event.target.value
        }, this.encryptInputText)
    }
    onChange3 = (event) => {
        this.setState({
            encrypt: !this.state.encrypt
        }, this.encryptInputText)
    }

    handleInputKeyChange = (event) => {
        this.setState({
            inputKey: event.target.value
        }, this.encryptInputText)
    }

    encryptInputText = () => {
        this.setState({
            encryptedBase64Input: this.encryptAES(this.state.inputText, this.state.inputKey)
        })
    }

    handleDecryptKeyChange = (event) => {
        this.setState({
            decryptKey: event.target.value
        }, this.decryptOutputText)
    }

    handleMsgChange = (event) => {
        this.setState({
            encryptedBase64: event.target.value
        }, this.decryptOutputText)
    }

    decryptOutputText = () => {
        this.setState({
            outputText: this.decryptAES(this.state.encryptedBase64, this.state.decryptKey)
        })
    }


    render() {
        const {error,} = this.state;
        if (error) {
            return <h3>{error}</h3>
        }

        return (<motion.div
                className={'overflowHider'}
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
                        loading={'lazy'} className={"freedooooom gonePhoto"} src={caesarst} alt={"Caesar"}/>
                    <div className={"cipher-title-container-aes"}>
                        <motion.div whileInView={{x: [-500, 0],}}
                                    viewport={{once: true}}
                                    transition={{
                                        type: "spring", stiffness: 50,
                                    }}>
                            <img loading={'lazy'} src={aesLogo} alt={"olive"} className={"vigenere-logo"} style={{
                                width: 'var(--step-9)',

                            }}/>
                            <p className={"cipher-title"}>Advanced Encryption Standard</p>
                            <p className={"cipher-subtitle"}>A widely used encryption standard that is secure and
                                efficient.</p>
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
                            <h2>What is the AES?</h2>
                            <p className={'pme'}>The AES (Advanced Encryption Standard) is a widely used symmetric
                                encryption algorithm that uses a fixed block size and a variable key length to securely
                                encrypt and decrypt digital information.</p>
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
                                <div> {this.state.encrypt ? <div className={"text-input"}>
                                    <div style={{flexDirection: 'column'}}>

                                        <p className="p-input">Plain Text</p>
                                        <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                                  onChange={this.handleInputTextChange}
                                                  placeholder="Type here..."/>

                                    </div>


                                    <div className={'key-grid'}>
                                        <p className="p-input">Decrypt</p>
                                        <div style={{padding: '0.5rem', width: "10rem"}}>
                                            <Switch onChange={this.onChange3}/>
                                        </div>
                                        <div style={{width: '20%'}}></div>
                                        <p className="p-input">Key</p>
                                        <div style={{padding: '0.5rem', width: "10rem"}}>
                                            <Input style={{padding: '0.5rem'}}
                                                   onChange={this.handleInputKeyChange}
                                                   placeholder="Key"/>
                                        </div>
                                    </div>


                                    <div style={{flexDirection: 'column'}}>
                                        <p className="p-input">Encrypted Text</p>
                                        <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                                  value={this.state.encryptedBase64Input}
                                                  placeholder="Type here..."/>
                                    </div>
                                </div> : <div className={"text-input"}>

                                    <div style={{flexDirection: 'column'}}>

                                        <p className="p-input">Encrypted Text</p>
                                        <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                                  onChange={this.handleMsgChange}
                                                  placeholder="Type here..."/>

                                    </div>


                                    <div className={'key-grid'}>
                                        <p className="p-input">Decrypt</p>
                                        <div style={{padding: '0.5rem', width: "10rem"}}>
                                            <Switch onChange={this.onChange3}/>
                                        </div>
                                        <div style={{width: '20%'}}></div>
                                        <p className="p-input">Key</p>
                                        <div style={{padding: '0.5rem', width: "10rem"}}>
                                            <Input style={{padding: '0.5rem'}}
                                                   onChange={this.handleDecryptKeyChange}
                                                   placeholder="Key"/>
                                        </div>
                                    </div>


                                    <div style={{flexDirection: 'column'}}>
                                        <p className="p-input">Plain Text</p>
                                        <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                                  value={this.state.outputText}
                                                  placeholder="Type here..."/>
                                    </div>


                                </div>}
                                </div>
                            </ConfigProvider>
                        </div>
                    </div>
                </div>

                <div id="how-it-works" style={{background: "white",}}>
                    <div className={'small-container'} style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>How does the AES work?</h2>
                            <p className={"pYou"} style={{color: '#19191C',}}>
                                AES is a symmetric-key block cipher algorithm, which means that the same key is used for
                                both encryption and decryption. The algorithm works
                                by dividing the plaintext into blocks of 128 bits and applying a series of mathematical
                                operations to each block to transform it into the ciphertext. The key used for
                                encryption is a fixed-length sequence of bytes, typically either 128, 192, or 256 bits
                                long. The algorithm processes the key using a key schedule to generate
                                a set of round keys, which are used in each round of encryption and decryption.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>The algorithm consists of several rounds,
                                each of which performs a series of substitution and permutation operations on the input
                                block. The first step is called the "SubBytes" transformation, which applies a nonlinear
                                substitution to each byte in the block. The next step is called the "ShiftRows"
                                transformation, which shifts the rows of the block cyclically. The third step is the
                                "MixColumns" transformation, which operates on the columns of the block. The final step
                                is the "AddRoundKey" transformation, which applies the current round key to the
                                block.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>The process is repeated for a fixed number
                                of rounds, depending on the key size. The number of rounds for each key size is as
                                follows: 10 rounds for 128-bit keys, 12 rounds for 192-bit keys, and 14 rounds for
                                256-bit keys. The AES algorithm is considered secure and widely used for encryption in
                                various applications, such as data storage, communication protocols, and financial
                                transactions. Its strength lies in its ability to resist attacks, such as brute force,
                                differential, and linear cryptanalysis. Additionally, the algorithm is efficient and can
                                be implemented in hardware and software with reasonable performance.</p>

                        </div>
                        <img loading={'lazy'} className={'tableX'}
                             style={{padding: '0'}}
                             src={aesPhoto} alt={'xor cipher visualisation'}/>
                    </div>
                </div>


                <div id="visualize" style={{background: "white", color: '#19191C', overflowX: 'hidden'}}>
                    <div className={'small-container'}>
                        <div>
                            <h2 style={{color: '#19191C'}}>Visualizing the AES cipher</h2>

                        </div>

                        <video autoPlay playsInline muted loop style={{width: '80%', height: "max-content",}}
                               className={'tableX'} src={video} width="750" height="500"></video>

                    </div>


                </div>


                <div id="history" style={{background: "#19191C"}}>
                    <div className={'small-container'}
                         style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h2>History</h2>
                            <p className={"pYou"}>The Advanced Encryption Standard (AES) is a widely used encryption
                                algorithm that is considered to be highly secure and has become a standard for
                                government and commercial use. Its development was the result of a global effort to
                                replace the Data Encryption Standard (DES), which was becoming less secure due to
                                advances in technology.</p>
                            <p className={"pYou"}>The Rijndael algorithm was created by two Belgian cryptographers, Joan
                                Daemen and Vincent Rijmen, in the late 1990s. They developed the algorithm as a response
                                to a call from the Belgian government for a new encryption algorithm that was both
                                secure and efficient. The algorithm was named after its creators, combining their
                                surnames.</p>
                            <p className={"pYou"}>The adoption of the AES algorithm has been widespread, with many
                                government and commercial organizations using it to secure their sensitive data. It has
                                been adopted as the encryption standard by the US government and is used in a wide range
                                of applications, including data encryption, secure communications, and digital
                                signatures. Its wide adoption and the fact that it has never been publicly broken have
                                made it one of the most trusted encryption algorithms in use today.</p>
                            <p className={'pYou'}>In the late 1990s, the National Institute of Standards and Technology
                                (NIST) issued a call for proposals to develop a new encryption standard. The finalists
                                were evaluated based on their security, implementation complexity, and performance. In
                                2000, NIST selected Rijndael as the winner of the competition and announced it as the
                                new Advanced Encryption Standard. Rijndael was chosen because of its superior
                                performance and security compared to the other finalists. It was also highly efficient
                                in hardware and software implementations, making it suitable for a wide range of
                                applications.</p>

                        </div>
                        <img loading={'lazy'} className={'tableX'}
                             style={{padding: '1rem'}}
                             src={aesCreators} alt={'the creates of the Aes'}/>
                    </div>

                </div>

            </motion.div>

        );
    }
}

