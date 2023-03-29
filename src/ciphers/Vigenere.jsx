import vigenereLogo from "../assets/vigenere-logo.png";
import {Anchor, ConfigProvider, Input, Switch} from "antd";
import {useState} from "react";

// JavaScript code to implement Vigenere Cipher
/**
 * Check if the Character is letter or not
 * @param {String} str - character to check
 * @return {object} An array with the character or null if isn't a letter
 */
function isLetter (str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i)
}

/**
 * Check if is Uppercase or Lowercase
 * @param {String} character - character to check
 * @return {Boolean} result of the checking
 */
function isUpperCase (character) {
    if (character === character.toUpperCase()) {
        return true
    }
    if (character === character.toLowerCase()) {
        return false
    }
}

/**
 * Encrypt a Vigenere cipher
 * @param {String} message - string to be encrypted
 * @param {String} key - key for encrypt
 * @return {String} result - encrypted string
 */
function encrypt (message, key) {
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i)
        if (isLetter(c)) {
            if (isUpperCase(c)) {
                result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65) // A: 65
            } else {
                result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97) // a: 97
            }
        } else {
            result += c
        }
        j = ++j % key.length
    }
    return result
}

/**
 * Decrypt a Vigenere cipher
 * @param {String} message - string to be decrypted
 * @param {String} key - key for decrypt
 * @return {String} result - decrypted string
 */
function decrypt (message, key) {
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i)
        if (isLetter(c)) {
            if (isUpperCase(c)) {
                result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
            } else {
                result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
            }
        } else {
            result += c
        }
        j = ++j % key.length
    }
    return result
}

// const messageEncrypt = encrypt('Hello World!', 'code')
// console.log(messageEncrypt) // "Jhpnr Yrvng!"
//
// const messageDecrypt = decrypt('Jsopq Zstzg!', 'code')
// console.log(messageDecrypt) // "Hello World!"


function vigenereCipher(boo, str, key){
    console.log(boo, str, key)
    if (!boo){
        return encrypt(str,key)
    }else{
        return decrypt(str, key)
    }
}

function Vigenere() {
    const {TextArea} = Input;
    const [text, setText] = useState("");
    const [key, setKey] = useState("LEMON");
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

    return (<>
            <div className={"cipher-container"}>
                <div className={"g-vigenere"}></div>
                <div className={"cipher-title-container"}>
                    <img src={vigenereLogo} alt={"vigenere-logo"} className={"vigenere-logo"}/>
                    <p className={"cipher-title"}>Vigenère Cipher</p>
                    <p className={"cipher-subtitle"}>A complex polyalphabetic substitution cipher with French roots.</p>
                </div>
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

            <div>
                <div className={"cipher-container"} id="cipher">
                    <div className={'small-container'}>
                        <h2>What is the Vigenère cipher?</h2>
                        <p className={'pme'}>The Vigenère cipher is a polyalphabetic substitution cipher. It is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on a keyword.</p>
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
                                                  value={vigenereCipher(encrypt, text, key)}
                                        />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </ConfigProvider>

                    </div>
                </div>
                <div
                    id="how-it-works"
                    style={{
                        background: "#F4F4F4",
                    }}>

                </div>


                <div
                    id="visualize"
                    style={{

                        background: "#6B57FF",
                    }}
                >
                </div>


                <div
                    id="history"
                    style={{
                        background: "#19191C", overflow: "hidden"

                    }}
                >
                </div>
            </div>
        </>

    )
}

export default Vigenere;

