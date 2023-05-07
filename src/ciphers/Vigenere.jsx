import vigenereLogo from "../assets/vigenere-logo.png";
import {Anchor, ConfigProvider, Input, Switch} from "antd";
import {useState} from "react";
import frenchStatue from "../assets/frenchStatue.png";
import tableV from "../assets/tableV.png";
import vigenereHimself from "../assets/vigenereHimself.png"


// JavaScript code to implement Vigenere Cipher
/**
 * Check if the Character is letter or not
 * @param {String} str - character to check
 * @return {object} An array with the character or null if isn't a letter
 */
function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i)
}

/**
 * Check if is Uppercase or Lowercase
 * @param {String} character - character to check
 * @return {Boolean} result of the checking
 */
function isUpperCase(character) {
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
function encrypt(message, key) {
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
function decrypt(message, key) {
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


function vigenereCipher(boo, str, key) {
    console.log(boo, str, key)
    if (!boo) {
        return encrypt(str, key)
    } else {
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
                <img className={"french"} src={frenchStatue} alt={"french statue"}/>
                <div className={"cipher-title-container"}>
                    <img src={vigenereLogo} alt={"vigenere-logo"} className={"vigenere-logo"}/>
                    <p className={"cipher-title"}>Vigenère Cipher</p>
                    <p className={"cipher-subtitle"}>A complex French polyalphabetic substitution cipher roots.</p>
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

            <div style={{overflowX:'hidden'}}>
                <div className={"cipher-container"} id="cipher">
                    <div className={'small-container'} style={{paddingTop: '0'}}>

                        <h2>What is the Vigenère cipher?</h2>
                        <p className={'pme'}>The Vigenère cipher is a polyalphabetic substitution cipher. It is a method
                            of encrypting alphabetic text by using a series of different Caesar ciphers based on a
                            keyword.</p>
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
                                <div >
                                    <p className="p-input">Plain Text</p>
                                    <TextArea style={{height: 220, width: "min(80vw,40rem)",}}
                                              onChange={onChange}
                                              placeholder="Type here..."
                                    />
                                </div>

                                <div className={'key-grid'}>
                                    <p className="p-input">Decrypt</p>
                                    <Switch onChange={onChange3}/>
                                    <div style={{width:'20%'}}></div>

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
                <div id="how-it-works" style={{background: "white",}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>How does the Vigenère cipher work?</h2>
                            <p className={"pYou"} style={{color: '#19191C',}}>
                                To use the Vigenère cipher, you first choose a keyword. We then repeat the keyword over
                                and over again until it matches the length of the message we want to encrypt. Next, we
                                use each letter of the keyword to shift the letters of the message according to a Caesar
                                cipher. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>
                                The first letter of the keyword is used to shift the first letter of the message, the
                                second letter of the keyword is used to shift the second letter of the message, and so
                                on. To perform the encryption, we use modular arithmetic to add the numerical value of
                                each letter in the message to the numerical value of the corresponding letter in the
                                keyword. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>
                                We continue this process for each letter of the message, using the corresponding letter
                                of the keyword to create a new Caesar cipher for each letter. Once we have encrypted the
                                entire message, we have created a polyalphabetic cipher that is much more secure than a
                                simple Caesar cipher, because it is much more difficult to crack using frequency
                                analysis. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>
                                To decrypt the message, we simply reverse the process. We use the same keyword to create
                                a series of Caesar ciphers, and we subtract the numerical value of each letter in the
                                keyword from the numerical value of the corresponding letter in the encrypted message,
                                using modular arithmetic. This gives us the original plaintext message. </p>
                        </div>
                        <img className={'tableV'} src={tableV} alt={'a table of the vinegenre cipher'}/>
                    </div>
                </div>


                <div id="visualize" style={{background: "#19191C",overflowX:'hidden'}}>
                    <div className={'g-vigenere'}>
                        <h2>Visualizing the Vigenère cipher</h2>
                        <div className={'v-grid'}>
                        <div className={'grid-i'}>
                            <table className="tg">
                                <thead>
                                <tr>
                                    <th className="tg-7btt">Text</th>
                                    <th className="tg-amwm">H</th>
                                    <th className="tg-amwm">E</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">O</th>
                                </tr>
                                </thead>
                            </table>
                            <p style={{padding:'5%'}} className={"pYou"}> 1. Add the text to the table.</p>
                        </div>

                        <div className={'grid-i'}>
                            <table className="tg">
                                <thead>
                                <tr>
                                    <th className="tg-7btt">Text</th>
                                    <th className="tg-amwm">H</th>
                                    <th className="tg-amwm">E</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">O</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="tg-amwm">Key</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                    <td className="tg-amwm">Y</td>
                                    <td className="tg-amwm"></td>
                                    <td className="tg-amwm"></td>
                                </tr>
                                </tbody>
                            </table>
                            <p style={{padding:'5%'}} className={"pYou"}> 2. Add the key underneath.</p>

                        </div>
                        <div className={'grid-i'}>
                            <table className="tg">
                                <thead>
                                <tr>
                                    <th className="tg-7btt">Text</th>
                                    <th className="tg-amwm">H</th>
                                    <th className="tg-amwm">E</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">O</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="tg-amwm">Cipher</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                    <td className="tg-amwm">Y</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                </tr>
                                </tbody>
                            </table>
                            <p style={{padding:'5%'}} className={"pYou"}> 3. Repeat the key for the length of the tex</p>

                        </div>

                        <div className={'grid-i'}>
                            <table className="tg">
                                <thead>
                                <tr>
                                    <th className="tg-7btt">Text</th>
                                    <th className="tg-amwm">H</th>
                                    <th className="tg-amwm">E</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">O</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="tg-amwm">Key</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                    <td className="tg-amwm">Y</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                </tr>
                                <tr>
                                    <td className="tg-amwm">Cipher</td>
                                    <td className="tg-amwm">R</td>
                                    <td className="tg-amwm"></td>
                                    <td className="tg-amwm"></td>
                                    <td className="tg-amwm"></td>
                                    <td className="tg-amwm"></td>
                                </tr>
                                </tbody>
                            </table>
                            <p style={{padding:'5%'}} className={"pYou"}> 4. Ei = (Pi + Ki) mod 26 for the first letter.</p>

                        </div>
                        <div className={'grid-i'}>
                            <table className="tg">
                                <thead>
                                <tr>
                                    <th className="tg-7btt">Text</th>
                                    <th className="tg-amwm">H</th>
                                    <th className="tg-amwm">E</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">O</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="tg-amwm">Key</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                    <td className="tg-amwm">Y</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                </tr>
                                <tr>
                                    <td className="tg-amwm">Cipher</td>
                                    <td className="tg-amwm">R</td>
                                    <td className="tg-amwm">I</td>
                                    <td className="tg-amwm">J</td>
                                    <td className="tg-amwm">V</td>
                                    <td className="tg-amwm">S</td>
                                </tr>
                                </tbody>
                            </table>
                            <p style={{padding:'5%'}} className={"pYou"}> 5. Repeat until the end of the text.</p>

                        </div>
                        <div className={'grid-i'}>
                            <table className="tg">
                                <thead>
                                <tr>
                                    <th className="tg-7btt">Text</th>
                                    <th className="tg-amwm">H</th>
                                    <th className="tg-amwm">E</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">L</th>
                                    <th className="tg-amwm">O</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="tg-amwm">Cipher</td>
                                    <td className="tg-amwm">R</td>
                                    <td className="tg-amwm">I</td>
                                    <td className="tg-amwm">J</td>
                                    <td className="tg-amwm">V</td>
                                    <td className="tg-amwm">S</td>
                                </tr>
                                <tr>
                                    <td className="tg-amwm">Key</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                    <td className="tg-amwm">Y</td>
                                    <td className="tg-amwm">K</td>
                                    <td className="tg-amwm">E</td>
                                </tr>

                                </tbody>
                            </table>
                            <p style={{padding:'5%'}} className={"pYou"}>6. You can decrypt the cipher by reversing the process. Di = (Ei – Ki) mod 26</p>

                        </div>
                        </div>
                    </div>
                </div>


                <div id="history" style={{background: "white"}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2 style={{color:'black'}}>History</h2>
                            <p className={"pYou"} style={{color:'black'}}>The Vigenère cipher was invented in the mid-16th century by Blaise de
                                Vigenère, a French diplomat and cryptographer. Vigenère was a contemporary of other
                                famous cryptographers such as Johannes Trithemius and Giovan Battista Bellaso, and he
                                was known for his expertise in cryptography and code-breaking.</p>
                            <p className={"pYou"} style={{color:'black'}}>The Vigenère cipher is a development of earlier polyalphabetic ciphers,
                                such as the Alberti cipher, which used multiple cipher alphabets. The Vigenère cipher
                                improved on these earlier ciphers by using a repeating keyword to create a different
                                cipher alphabet for each letter of the plaintext.</p>
                            <p className={"pYou"} style={{color:'black'}}>Vigenère first described his cipher in his book "Traicté des Chiffres"
                                (Treatise on Ciphers) in 1586. However, the cipher was not widely used until the 19th
                                century, when it became popular among military and diplomatic organizations. It was used
                                by the Confederacy during the American Civil War, and by the Union during World War
                                I.</p>
                            <p className={"pYou"} style={{color:'black'}}>The Vigenère cipher remained in use for several centuries, until the
                                development of modern cryptographic methods such as the Enigma machine and the
                                development of computer-based encryption systems. However, it remains an important
                                historical cipher, and it is still studied today as an example of a polyalphabetic
                                substitution cipher.</p>

                        </div>
                        <img className={'vigenereHimself'} src={vigenereHimself} alt={'vigenere Himself'}/>
                    </div>


                </div>
            </div>
        </>

    )
}

export default Vigenere;

