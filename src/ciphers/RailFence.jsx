import {Anchor, ConfigProvider, Input, InputNumber, Switch} from "antd";
import React, {useState} from "react";
import fence from '../assets/fence-icon.png'
import {motion, useScroll, useSpring} from "framer-motion";
import caesarst from "../assets/greek-statue.png";
import aesPhoto from "../assets/Screenshot 2023-05-08 at 12.23.12 AM.png";
import greekDrawing from "../assets/Pythia.jpg.webp";
import railFenceVis from "../assets/rail-fence-cipher-encoding-key-3.png";


// function to encrypt a message
function encryptRailFence(text, key) {
// create the matrix to cipher plain text
// key = rows , text.length = columns
    let rail = new Array(key).fill().map(() => new Array(text.length).fill('\n'));

// filling the rail matrix to distinguish filled
// spaces from blank ones
    let dir_down = false;
    let row = 0, col = 0;

    for (let i = 0; i < text.length; i++) {
        // check the direction of flow
        // reverse the direction if we've just
        // filled the top or bottom rail
        if (row === 0 || row === key - 1) dir_down = !dir_down;

        // fill the corresponding alphabet
        rail[row][col++] = text[i];

        // find the next row using direction flag
        dir_down ? row++ : row--;
    }

// now we can construct the cipher using the rail matrix
    let result = '';
    for (let i = 0; i < key; i++) for (let j = 0; j < text.length; j++) if (rail[i][j] !== '\n') result += rail[i][j];

    return result;
}

// function to decrypt a message
function decryptRailFence(cipher, key) {
// create the matrix to cipher plain text
// key = rows , text.length = columns
    let rail = new Array(key).fill().map(() => new Array(cipher.length).fill('\n'));

// filling the rail matrix to mark the places with '*'
    let dir_down = false;
    let row = 0, col = 0;

    for (let i = 0; i < cipher.length; i++) {
        // check the direction of flow
        if (row === 0) dir_down = true;
        if (row === key - 1) dir_down = false;

        // place the marker
        rail[row][col++] = '*';

        // find the next row using direction flag
        dir_down ? row++ : row--;
    }

// now we can construct the rail matrix by filling the marked places with cipher text
    let index = 0;
    for (let i = 0; i < key; i++) for (let j = 0; j < cipher.length; j++) if (rail[i][j] === '*' && index < cipher.length) rail[i][j] = cipher[index++];

// now read the matrix in zig-zag manner to construct the resultant text
    let result = '';
    row = 0;
    col = 0;
    for (let i = 0; i < cipher.length; i++) {
        // check the direction of flow
        if (row === 0) dir_down = true;
        if (row === key - 1) dir_down = false;

        // place the marker
        if (rail[row][col] !== '*') result += rail[row][col++];

        // find the next row using direction flag
        dir_down ? row++ : row--;
    }

    return result;
}

function railCipher(boo, str, key) {
    console.log(boo, str, key)
    if (!boo) {
        return encryptRailFence(str, key)
    } else {
        return decryptRailFence(str, key)
    }
}


function RailFence() {
    const {TextArea} = Input;
    const [text, setText] = useState("");
    const [key, setKey] = useState(5);
    const [encrypt, setEncrypt] = useState(false);


    const onChange = (e) => {
        setText(e.target.value);
    };
    const onChange2 = (value) => {
        setKey(value);
    };
    const onChange3 = () => {
        setEncrypt(!encrypt)
    };
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });


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
                    }} loading={'lazy'} className={"greek gonePhoto"} src={caesarst} alt={"Caesar"}/>
                <div className={"cipher-title-container-rail"} style={{paddingTop: '3rem'}}>
                    <motion.div whileInView={{x: [-500, 0],}}
                                viewport={{once: true}}
                                transition={{
                                    type: "spring", stiffness: 50,
                                }}>
                        <img loading={'lazy'} src={fence} alt={"olive"} className={"vigenere-logo"}
                             style={{width: 'var(--step-9)', paddingTop: '0'}}/>
                        <p className={"cipher-title"}>Rail Fence Cipher</p>
                        <p className={"cipher-subtitle"}>An ancient greek cipher with a zigzag pattern </p>
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
                        <h2>What is the Rail Fence cipher?</h2>
                        <p className={'pme'}>The Rail Fence cipher is a transposition cipher that uses a zigzag pattern
                            to write the plaintext in a grid, and then reads the ciphertext off in a different pattern,
                            providing a simple yet effective method of encryption.</p>
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
                                    <div style={{padding: '0.5rem', width: "10rem"}}>
                                        <Switch onChange={onChange3}/>
                                    </div>
                                    <div style={{width: '20%'}}></div>


                                    <p className="p-input">Rows</p>
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
                                                  value={railCipher(encrypt, text, key)}
                                        />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </ConfigProvider>

                    </div>
                </div>
                <div id="how-it-works" style={{background: "white",}}>
                    <div className={'small-container'} style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>How does the Rail Fence work?</h2>
                            <p className={"pYou"} style={{color: '#19191C',}}>The Rail Fence Cipher is a transposition
                                cipher that works by rearranging the order of the letters in a message. It involves
                                writing the plaintext in a zigzag pattern along a set of imaginary rails or lines, then
                                reading off the ciphertext from the pattern formed by the lines.

                                The process of encryption involves first choosing a key, which is the number of rails
                                that will be used in the zigzag pattern. </p>
                            <p className={"pYou"} style={{color: '#19191C'}}>The plaintext is then written out
                                diagonally
                                along the rails, starting from the top rail and working down to the bottom rail and then
                                back up to the top rail again, until all the letters are written out.
                                Once the plaintext has been written out in this pattern, the ciphertext is obtained by
                                reading off the letters along each rail in order from left to right.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>Decryption involves reversing the process
                                by first writing the ciphertext along the rails in the same pattern as before, then
                                reading off the plaintext by following the same diagonal pattern. The key must be known
                                in order to correctly decrypt the ciphertext.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>While the Rail Fence Cipher is relatively
                                simple and easy to understand, it is not particularly secure and can be easily broken
                                with modern cryptographic techniques. It was mainly used in the past for low-level
                                encryption tasks, and has largely been replaced by more sophisticated ciphers such as
                                the AES.</p>

                        </div>
                        <img loading={'lazy'} className={'tableX5'}
                             src={aesPhoto} alt={'rail fence cipher visualisation'}/>
                    </div>
                </div>


                <div id="visualize" style={{background: "white", color: '#19191C', overflowX: 'hidden'}}>
                    <div className={'small-container'}>
                        <div>
                            <h2 style={{color: '#19191C'}}>Visualizing the Rail Fence cipher</h2>

                        </div>

                        <img className={'xorVis'} style={{paddingTop: '7rem', paddingBottom: '7rem'}} src={railFenceVis}
                             alt={'a visualisation of the rail fence cipher'} loading="lazy"/>


                    </div>


                </div>


                <div id="history" style={{background: "#19191C"}}>
                    <div className={'small-container'}
                         style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h2>History</h2>
                            <p className={"pYou"}>The Rail Fence Cipher, also known as the zigzag cipher, is an ancient
                                transposition cipher that is believed to have been used by the ancient Greeks. It is
                                also said to have been used by Julius Caesar to encode his private
                                messages. However, there is no concrete evidence to support this claim, and the cipher's
                                true origins remain a mystery. The cipher gained popularity during the American Civil
                                War, where it
                                was used by both the Union and Confederate armies to communicate sensitive information.
                                The cipher's
                                simplicity made it easy to use in the field, and its security was considered sufficient
                                for the time.

                            </p>
                            <p className={"pYou"}>
                                In the 19th century, the Rail Fence Cipher gained popularity as a simple and effective
                                method of encryption. During the American Civil War, it was widely used by both the
                                Union and Confederate armies to encrypt military communications. However, it was later
                                discovered that the cipher was not very secure and could be easily broken by
                                cryptanalysts. In the years that followed, the cipher fell out of favor due to its
                                vulnerability to cryptanalysis. It was not until the 20th century that the cipher
                                enjoyed a resurgence in popularity as a nostalgic curiosity.</p>


                            <p className={'pYou'}>Despite its weaknesses, the Rail Fence Cipher has remained popular
                                among amateur code makers and is still occasionally used as a puzzle or game. It has
                                also been used in modern times as a building block for more complex encryption
                                algorithms. Today, the Rail Fence Cipher is considered to be a toy cipher and is not
                                used for
                                serious cryptographic purposes. However, it remains a fascinating piece of cryptography
                                history, and its place in the evolution of cryptography is secure. Overall, the Rail
                                Fence Cipher is an interesting part of the history of
                                cryptography and serves as a reminder of the importance of constantly improving
                                encryption techniques to stay ahead of potential threats.</p>

                        </div>
                        <img loading={'lazy'} className={'tableX'}
                             style={{padding: '1rem'}}
                             src={greekDrawing} alt={'the creates of the Aes'}/>
                    </div>

                </div>
            </div>

            <motion.div className="progress" style={{scaleX}}/>

        </motion.div>


    )
}

export default RailFence;

