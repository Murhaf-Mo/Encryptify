import {Anchor, ConfigProvider, Input, InputNumber, Switch} from "antd";
import {useState} from "react";
import fence from '../assets/fence-icon.png'
import caesarst from '../assets/pngwing.com-3.png' ;
import caesarCipherGif from '../assets/D3ypD.gif';
import caesarVis from "../assets/caesarVis.png";
import caesarTool from "../assets/caesar-tool.png";
import {motion, useScroll, useSpring} from "framer-motion";



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
    for (let i = 0; i < key; i++)
        for (let j = 0; j < text.length; j++)
            if (rail[i][j] !== '\n') result += rail[i][j];

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
    for (let i = 0; i < key; i++)
        for (let j = 0; j < cipher.length; j++)
            if (rail[i][j] === '*' && index < cipher.length) rail[i][j] = cipher[index++];

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
    const [key, setKey] = useState(12);
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


    return (<>
            <div className={"cipher-container"}>
                <motion.img
                    whileInView={{x: [500, 0],}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring", stiffness: 50,
                    }} loading={'lazy'} className={"greek gonePhoto"} src={caesarst} alt={"Caesar"}/>
                <div className={"cipher-title-container-rail"} style={{paddingTop:'3rem'}}>
                    <motion.div whileInView={{x: [-500, 0],}}
                                viewport={{once: true}}
                                transition={{
                                    type: "spring", stiffness: 50,
                                }}>
                    <img loading={'lazy'} src={fence} alt={"olive"} className={"vigenere-logo"} style={{width: 'var(--step-9)',paddingTop:'0'}}/>
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
                        <p className={'pme'}>The Rail Fence cipher is a transposition cipher that uses a zigzag pattern to write the plaintext in a grid, and then reads the ciphertext off in a different pattern, providing a simple yet effective method of encryption.</p>
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
                                    <div style={{width:'20%'}}></div>


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
                <div id="how-it-works" style={{background: "#fcfcff",}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>How does the Caesar cipher work?</h2>
                            <p className={"pYou"} style={{color: '#19191C',}}>The Caesar cipher works by shifting each
                                letter in the plaintext (the original message) a fixed number of positions down the alphabet to produce the
                                ciphertext (the encoded message). The fixed shift value is usually referred to as the "key."</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>For example, if the key is 3, each letter
                                in the plaintext would be shifted 3 positions down the alphabet. So, an A would become a
                                D, a B would become an E, and so on. To decode the message, the process is simply reversed. Each letter in the ciphertext is shifted back 3
                                positions to
                                reveal the original plaintext.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>Although the Caesar cipher is a very basic
                                encryption method, it was once used for military and diplomatic purposes. However, it is now considered to be very
                                insecure, as the key space (i.e., the number of possible keys) is very small, making it vulnerable to
                                brute-force attacks.</p>
                            <p className={"pYou"} style={{color: '#19191C'}}>The Caesar cipher is a very basic
                                encryption technique and is not considered to be secure, as it can easily be broken with
                                simple frequency analysis or by trying all possible shift values. However, it can be a
                                fun and educational tool for teaching basic encryption principles.</p>
                        </div>
                        <img loading={'lazy'} className={'tableX'} style={{width: '130%', height: "max-content", padding: '0'}}
                             src={caesarCipherGif} alt={'xor cipher visualisation'}/>
                    </div>
                </div>


                <div id="visualize" style={{background: "#fcfcff", color: '#19191C', overflowX: 'hidden'}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h2 style={{color: '#19191C'}}>Visualizing the Caesar cipher</h2>
                            <ol className={"pYou"} style={{color: '#19191C'}}>
                                <li>Choose a fixed shift value to use for encrypting your message.</li>
                                <li>Create a table with two rows. The top row should contain letters in alphabetical order,
                                    and the bottom row should contain the shifted letters according to the shift value you
                                    chose.
                                </li>
                                <li> Encode your message by replacing each letter in the original message with the
                                    corresponding letter in the shifted alphabet.
                                </li>
                                <li> Make sure the person who will receive your message knows the shift value you used so
                                    they can decode it properly.
                                </li>
                                <li>To decrypt an encoded message, subtract the original shift value from 26, and use the
                                    resulting value to shift the encoded message back to its original form.
                                </li>
                            </ol>
                        </div>

                        <img loading={'lazy'} className={'tableX'} style={{width: '100%', height: "max-content", }}
                             src={caesarVis} alt={'xor cipher visualisation'}/>
                    </div>



                </div>


                <div id="history" style={{background: "#19191C"}}>
                    <div className={'small-container'} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2 >How does the Caesar cipher work?</h2>
                            <p className={"pYou"} >The Caesar cipher works by shifting each
                                letter in the plaintext (the original message) a fixed number of positions down the alphabet to produce the
                                ciphertext (the encoded message). The fixed shift value is usually referred to as the "key."</p>
                            <p className={"pYou"} >For example, if the key is 3, each letter
                                in the plaintext would be shifted 3 positions down the alphabet. So, an A would become a
                                D, a B would become an E, and so on. To decode the message, the process is simply reversed. Each letter in the ciphertext is shifted back 3
                                positions to
                                reveal the original plaintext.</p>
                            <p className={"pYou"}>Although the Caesar cipher is a very basic
                                encryption method, it was once used for military and diplomatic purposes. However, it is now considered to be very
                                insecure, as the key space (i.e., the number of possible keys) is very small, making it vulnerable to
                                brute-force attacks.</p>
                            <p className={"pYou"} >The Caesar cipher is a very basic
                                encryption technique and is not considered to be secure, as it can easily be broken with
                                simple frequency analysis or by trying all possible shift values. However, it can be a
                                fun and educational tool for teaching basic encryption principles.</p>
                        </div>
                        <img loading={'lazy'} className={'tableX'} style={{width: '130%', height: "max-content", padding: '0'}}
                             src={caesarTool} alt={'xor cipher visualisation'}/>
                    </div>

                </div>

            </div>
            <motion.div className="progress" style={{scaleX}}/>

        </>

    )
}

export default RailFence;

