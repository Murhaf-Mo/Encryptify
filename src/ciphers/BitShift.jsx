import {Anchor, ConfigProvider, Input, Switch} from "antd";
import {useState} from "react";
import XORLogo from '../assets/XORLogo.png';
import boole from '../assets/boole.png';
import xorCipherGif from '../assets/xorCipherGif.gif';
import xorComp from '../assets/xor.webp';
import gilbertVernam from '../assets/gilbertVernam.jpg';

// const info = () => {
//     message.info('Invalid input');
// };
function encode(text) {
    let array = [];
    for (let i = 0; i < text.length; i++) {
        array.push(text[i].charCodeAt(0))
    }
    return array
}


// eslint-disable-next-line no-extend-native
String.prototype.decrypt = function (key) {
    const keyEncoded = encode(key)
    if (typeof atob === 'undefined') {
        global.atob = b64Encoded => new Buffer(b64Encoded, 'base64').toString();
    }
    let array = JSON.parse(atob(this.toString()))
    let decrypted = array.map(x => {
        keyEncoded.reverse()
        x = parseInt(x)
        for (let i of keyEncoded) {
            x = x - 1 >> i % 8
        }
        return x;
    })
    return String.fromCharCode(...decrypted)
}

function encrypt(text, key) {
    const encoded = encode(text);
    const keyEncoded = encode(key);
    // console.log(keyEncoded)
    let array = encoded.map(x => {
        x = parseInt(x)
        for (let i of keyEncoded) {
            x = x + 1 << i % 8
        }
        keyEncoded.reverse()
        return x;
    })
    if (typeof btoa === 'undefined') {
        global.btoa = str => new Buffer(str, 'binary').toString('base64');
    }
    return btoa(JSON.stringify(array))
}


function bitShiftCipher(boo, str, key) {
    console.log(boo, str, key)
    if (!boo) {
        return encrypt(str, key)
    } else {
        try {
            return str.decrypt(key)
        } catch (e) {
            // info();

        }
    }
}

export default function BitShift() {
    const {TextArea} = Input;
    const [text, setText] = useState("");
    const [key, setKey] = useState("Cool");
    const [encrypt, setEncrypt] = useState(false);


    const onChange = (e) => {
        setText(e.target.value);
    };
    const onChange2 = (e) => {
        setKey(e.target.value);
    };
    const onChange3 = () => {
        setEncrypt(prevCheck => !prevCheck);
    };


    return (
        <div className={"cipher-container"}>
            <img className={"boole"} src={boole} alt={"Gorge Boole"}/>
            <div className={"cipher-title-container-bit"}>
                <img src={XORLogo} alt={"XORLogo"} className={"vigenere-logo"}/>
                <p className={"cipher-title"}>Bit Shift Cipher</p>
                <p className={"cipher-subtitle"}>A simple encryption technique that operates on the binary
                    representation.</p>
            </div>
            <div className={'cipher-container'}>
                <div className={'small-container'}
                     style={{
                         background: "#19191C", padding: "1rem", display: "flex", justifyContent: "center",
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
                    <div className={'small-container'}>

                        <h2>What is the Bit Shift cipher?</h2>
                        <p className={'pme'}>The Bitshift Cipher is a type of substitution cipher, as each character in
                            the plaintext is replaced with a different character based on its binary
                            representation. </p>

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
                                    <p className="p-input">Decrypt</p>
                                    <Switch onChange={onChange3}/>
                                    <p className="p-input">Key</p>
                                    <div style={{padding: '0.5rem', width: "10rem"}}>
                                        <TextArea defaultValue={key} onChange={onChange2} value={key}
                                                  style={{height: 40}}/>
                                    </div>
                                </div>
                                <div className>
                                    <p className="p-input">Cipher Text</p>
                                    <ConfigProvider /*componentDisabled={true}*/ >
                                        <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                                  onChange={onChange}
                                                  placeholder="Cipher text..."
                                                  value={bitShiftCipher(encrypt, text, key)}
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
                        <img className={'tableX'} src={xorComp} alt={'xor cipher visualisation'}/>
                    </div>
                </div>


                <div id="visualize" style={{background: "#fcfcff", overflowX: 'hidden'}}>
                    <div className={'g-vigenere'}>
                        <h2 style={{color: 'black'}}>Visualizing the Vigenère cipher</h2>
                        <img className={'xorVis'} src={xorCipherGif} alt={'a visualisation of the xor cipher'}/>


                    </div>


                </div>


                <div id="history" style={{background: "#fcfcff"}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2 style={{color: 'black'}}>History</h2>
                            <p className={"pYou"} style={{color: 'black'}}>The XOR cipher, also known as the Vernam
                                cipher, is a type of encryption that was invented in 1917 by Gilbert Vernam, an American
                                telegraph engineer. Vernam's original invention used a paper tape that was punched with
                                a random sequence of holes, which were used as the key for the encryption process.</p>
                            <p className={"pYou"} style={{color: 'black'}}>The XOR cipher was initially used for
                                telegraphy and later for teletype systems. During World War II, the cipher was used by
                                the United States for secure communications, particularly for messages transmitted over
                                the transatlantic cable.</p>
                            <p className={"pYou"} style={{color: 'black'}}>In the 1950s and 1960s, the XOR cipher was
                                used for computer encryption, particularly for military and diplomatic communications.
                                However, the cipher was eventually found to be vulnerable to certain types of attacks,
                                such as known plaintext attacks, where an attacker has access to both the encrypted
                                message and the original message.</p>
                            <p className={"pYou"} style={{color: 'black'}}>Despite its vulnerabilities, the XOR cipher
                                remains an important part of cryptography history and continues to be used in certain
                                contexts, particularly as a component of more complex encryption algorithms.</p>


                        </div>
                        <img className={'vigenereHimself'} src={gilbertVernam} alt={'Gilbert Vernam'}/>
                    </div>


                </div>
            </div>
        </div>

        )
        }


