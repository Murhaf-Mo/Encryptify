import React, {Component} from 'react';
import * as CryptoJS from 'crypto-js';
import {motion} from "framer-motion";
import caesarst from "../assets/caesar.png";
import aesLogo from '../assets/AES.D-4e854400.png'
import {Anchor, ConfigProvider, Input, Switch} from "antd";
import caesarCipherGif from "../assets/D3ypD.gif";
import caesarVis from "../assets/caesarVis.png";
import caesarTool from "../assets/caesar-tool.png";
import TextArea from "antd/es/input/TextArea";


export default class AES extends Component {
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

    testForProblems = () => {
        for (let i = 0; i < 20000; i++) {
            setTimeout(() => {
                const key = '123';
                const passphrase = 'this is a very long passphrase with a ton of words in it but it shouldnt really matter';
                const encrypted = this.encryptAES(passphrase, key);

                setTimeout(() => {
                    if (passphrase !== this.decryptAES(encrypted, key)) {
                        console.log('big trouble in little tokyo');
                    }
                }, 1000 + i);
            }, 100 + i);
        }
    }

    render() {
        const {error,} = this.state;
        if (error) {
            return <h3>{error}</h3>
        }

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
                        }}
                        loading={'lazy'} className={"caesarst"} src={caesarst} alt={"Caesar"}/>
                    <div className={"cipher-title-container-caesar"}>
                        <motion.div whileInView={{x: [-500, 0],}}
                                    viewport={{once: true}}
                                    transition={{
                                        type: "spring", stiffness: 50,
                                    }}>
                            <img loading={'lazy'} src={aesLogo} alt={"olive"} className={"vigenere-logo"} style={{
                                width: 'var(--step-9)',

                            }}/>
                            <p className={"cipher-title"}>Advanced Encryption Standard</p>
                            <p className={"cipher-subtitle"}>A widely used encryption standard that is secure and efficient.</p>
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
                                <div> {this.state.encrypt ?
                                    <div className={"text-input"}>
                                    <div style={{flexDirection: 'column'}}>

                                        <p className="p-input">Plain Text</p>
                                        <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                                  onChange={this.handleInputTextChange}
                                                  placeholder="Type here..."/>

                                    </div>


                                    <div className={'key-grid'} >
                                        <p className="p-input">Decrypt</p>
                                        <div style={{padding: '0.5rem', width: "10rem"}}>
                                            <Switch onChange={this.onChange3}/>
                                        </div>
                                        <div style={{width: '20%'}}></div>
                                        <p className="p-input">Key</p>
                                        <div style={{padding: '0.5rem', width: "10rem"}}>
                                            <Input style={{padding: '0.5rem'}}
                                                   value={this.state.inputKey}
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
                                            <Input.TextArea style={{padding: '0.5rem', width: "10rem"}}
                                                   value={this.state.key}
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


                                    <pre className="output"><code>{this.state.outputText}</code></pre>
                                </div>}
                                </div>
                            </ConfigProvider>
                        </div>
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
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2>How does the Caesar cipher work?</h2>
                            <p className={"pYou"}>The Caesar cipher works by shifting each
                                letter in the plaintext (the original message) a fixed number of positions down the
                                alphabet to produce the
                                ciphertext (the encoded message). The fixed shift value is usually referred to as the
                                "key."</p>
                            <p className={"pYou"}>For example, if the key is 3, each letter
                                in the plaintext would be shifted 3 positions down the alphabet. So, an A would become a
                                D, a B would become an E, and so on. To decode the message, the process is simply
                                reversed. Each letter in the ciphertext is shifted back 3
                                positions to
                                reveal the original plaintext.</p>
                            <p className={"pYou"}>Although the Caesar cipher is a very basic
                                encryption method, it was once used for military and diplomatic purposes. However, it is
                                now considered to be very
                                insecure, as the key space (i.e., the number of possible keys) is very small, making it
                                vulnerable to
                                brute-force attacks.</p>
                            <p className={"pYou"}>The Caesar cipher is a very basic
                                encryption technique and is not considered to be secure, as it can easily be broken with
                                simple frequency analysis or by trying all possible shift values. However, it can be a
                                fun and educational tool for teaching basic encryption principles.</p>
                        </div>
                        <img loading={'lazy'} className={'tableX'}
                             style={{width: '130%', height: "max-content", padding: '0'}}
                             src={caesarTool} alt={'xor cipher visualisation'}/>
                    </div>

                </div>

            </motion.div>

        );
    }
}

