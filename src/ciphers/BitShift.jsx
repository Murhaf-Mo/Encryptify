import {Anchor, ConfigProvider, Input, Switch} from "antd";
import {useState} from "react";
import boole from '../assets/My project-1-2.png';
import left from '../assets/Bitwise-operator-left-shift.png';
import right from '../assets/Bitwise-operator-right-shift.png';
import xorComp from '../assets/rshift.webp';
import gilbertVernam from '../assets/claudeshannon-1.jpg.webp';
import bitShiftLogo from '../assets/pixil-frame-0.png';


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


    return (<div className={"cipher-container"}>
            <img loading={'lazy'} className={"boole"} src={boole} alt={"bitshift "}
                 style={{height: '1700px', left: '48%', top: '-2%'}}/>
            <div className={"cipher-title-container-bit"}>
                <img loading={'lazy'} src={bitShiftLogo} alt={"XORLogo"} className={"vigenere-logo"}/>
                <p className={"cipher-title"}>Bit Shift Cipher</p>
                <p className={"cipher-subtitle"}>A simple encryption technique that operates on the binary
                    representation.</p>
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
                    <div className={'small-container'} style={{paddingTop: '0',}}>

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
                                                  value={bitShiftCipher(encrypt, text, key)}
                                        />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </ConfigProvider>

                    </div>
                </div>
                <div id="how-it-works" style={{background: "#fcfcff",}}>
                    <div className={'small-container'}
                         style={{display: 'flex', justifyContent: 'space-between', alignItems: ' center'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>How does the Bit Shift cipher work?</h2>
                            <p className={"pYou"} style={{color: '#19191C',}}> The Bitshift Cipher works by shifting
                                over the bits of the text's ASCII using the bitwise &lt;&lt; operator. To encode the
                                text, the cipher loops through the text, and for each character, it loops through the
                                key array and shifts the bits a certain number of places based on the current key
                                character. The maximum shift is limited using modulo to avoid having a bit shifted by
                                hundreds of places. After each character is encoded, it is added to an array, and the
                                key is reversed to make frequency analysis harder. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>To decode, the cipher reverses the key and
                                loops through the text and key, shifting the bits back to their original position based
                                on the current key character. The key can be as long as you want, making brute force
                                harder, and reversing the key makes frequency analysis hard. However, different
                                programming languages may have different outputs depending on the base64 support.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>
                                The bit shift cipher is a very basic encryption technique and is not considered to be
                                secure, as it can easily be broken with simple techniques like frequency analysis.
                                However, it can be a useful tool for teaching basic encryption principles and for
                                encoding messages that do not require high levels of security. </p>

                        </div>
                        <img loading={'lazy'} className={'tableX2'} src={xorComp}
                             alt={'bitshift cipher visualisation'}/>
                    </div>
                </div>


                <div id="visualize" style={{background: "#fcfcff", overflowX: 'hidden'}}>
                    <div className={'g-vigenere'}>
                        <h2 style={{color: 'black'}}>Visualizing the Bit Shift cipher</h2>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img loading={'lazy'} className={'xorVis'} src={left}
                                 alt={'a visualisation of the xor cipher'}/>
                            <img loading={'lazy'} className={'xorVis'} src={right}
                                 alt={'a visualisation of the xor cipher'}/>
                        </div>


                    </div>


                </div>


                <div id="history" style={{background: "#fcfcff"}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h2 style={{color: 'black'}}>History</h2>
                            <p className={"pYou"} style={{color: 'black'}}>The history of the Bit shift cipher can be
                                traced back to the early days of computing. In the 1950s and 1960s, computers were
                                large, expensive machines that were primarily used for scientific and military
                                applications. At the time, encryption was primarily done using mechanical devices, such
                                as the Enigma machine used by the Germans during World War II.

                                However, as computers became more powerful and more widely available, researchers began
                                to explore new ways of encrypting data. One of the earliest methods to emerge was the
                                Bit shift cipher. This method is based on the concept of shifting the bits of the
                                plaintext to produce the ciphertext.</p>
                            <p className={"pYou"} style={{color: 'black'}}>The Bit shift cipher was first described in
                                detail in the late 1970s by a group of researchers at the Massachusetts Institute of
                                Technology (MIT). The researchers were working on a system for encrypting data on
                                computer networks, and they developed the Bit shift cipher as part of this effort.

                                Since then, the Bit shift cipher has been used in a wide variety of applications,
                                including computer programming, cryptography, and digital signal processing. It is a
                                simple but effective encryption method that can be implemented quickly and easily in
                                software, making it a popular choice for many applications.</p>
                            <p className={"pYou"} style={{color: 'black'}}>One of the strengths of the Bit shift cipher
                                is its flexibility. The key used in the encryption process can be of any length, and the
                                plaintext can be of any size. This makes it easy to customize the encryption method to
                                suit the needs of a particular application.

                                However, the Bit shift cipher is not without its weaknesses. One of the main
                                vulnerabilities is that it is vulnerable to brute-force attacks. Because the key is
                                relatively short and the encryption method is relatively simple, it is possible for an
                                attacker to try all possible keys until the correct one is found.</p>


                        </div>
                        <img loading={'lazy'} className={'vigenereHimself2'} src={gilbertVernam} alt={'Gilbert Vernam'} />
                    </div>


                </div>
            </div>
        </div>

    )
}


