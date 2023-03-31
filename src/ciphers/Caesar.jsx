import olive from "../assets/olive-branch.png";
import caesar from "../assets/caesar.png";
import caesarTool from "../assets/caesar-tool.png";
import caesarVis from "../assets/caesarVis.png";
import {useState} from "react";
import {Anchor, Input, Switch, InputNumber} from "antd";
import {ConfigProvider} from "antd";

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

function Caesar() {
    const {TextArea} = Input;
    const [text, setText] = useState("");
    const [key, setKey] = useState(13);

    const onChange = (e) => {
        setText(e.target.value);
    };
    const onChange2 = (value) => {
        setKey(value);
    };
    const onChange3 = () => {
        setKey(26 - key);
    };
    return (
        <>
            <div className="title-page">
                <div className="g"></div>
                <img className="olive" src={olive} alt="olive"/>
                <h1 className="title"> Caesar Cipher</h1>
                <p className="subtitle">A classic example of ancient cryptography</p>

            </div>

            <>
                <div
                    style={{
                        background: "#19191C",
                        padding: "20px",
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
                                fontSize: 18,
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
                                padding: "5px",
                                paddingLeft: "15px",
                                paddingRight: "15px",
                                margin: "10px",
                                borderColor: "#B5B5B5",
                                borderRadius: "20px",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            direction="horizontal"
                            items={[
                                {
                                    key: "cipher",
                                    href: "#cipher",
                                    title: " Cipher",
                                },
                                {
                                    key: "how-it-works",
                                    href: "#how-it-works",
                                    title: "How It Works",
                                },
                                {
                                    key: "visualize",
                                    href: "#visualize",
                                    title: "Visualize",
                                },
                                {
                                    key: "history",
                                    href: "#history",
                                    title: "History",
                                },
                            ]}
                        />
                    </ConfigProvider>
                </div>
                <div>
                    <div
                        id="cipher"
                        style={{
                            width: "100vw",
                            height: "100vh",
                            background: "#19191C",
                        }}
                    >
                        <div style={{paddingTop: "20px"                                     ,zIndex: 2,}}>
                            <h1 className="h1-dark">What is the Caesar cipher? </h1>
                            <p className="p-dark">
                                The Caesar cipher is a straightforward technique for encoding
                                messages that involves shifting letters in the alphabet by a
                                fixed number of positions to produce a substitution alphabet.
                            </p>
                        </div>
                        <img className="caesar" src={caesar} alt="caesar"/>

                        <div style={{zIndex:2}}>
                        <ConfigProvider
                            theme={{
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
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: "28%",
                                    paddingRight: "28%",
                                    paddingTop: "24px",

                                }}
                            >
                                <p className="p-input">Plain Text</p>
                                <TextArea
                                    style={{
                                        height: 220,
                                        marginBottom: 24,
                                        resize: "none",
                                        paddingTop: "10px",
                                        background: "000000",
                                        marginTop: '20px',
                                    }}
                                    onChange={onChange}
                                    placeholder="Type here..."
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingBottom: "24px",
                                        paddingLeft: "5%",
                                        paddingRight: "5%",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <p className="p-input">Decrypt</p>
                                        <Switch onChange={onChange3}/>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <p className="p-input">Key</p>
                                        <InputNumber
                                            min={0}
                                            max={26}
                                            defaultValue={key}
                                            onChange={onChange2}
                                            value={key}
                                        />
                                    </div>
                                </div>
                                <p className="p-input">Cipher Text</p>
                                <ConfigProvider /*componentDisabled={true}*/ >
                                <TextArea
                                    style={{
                                        height: 220,
                                        resize: "none",
                                        paddingTop: "10px",
                                        marginTop: '20px',
                                        background: "000000",

                                    }}
                                    onChange={onChange}
                                    placeholder="Cipher text..."
                                    value={caesarShift(text, key)}
                                />
                                </ConfigProvider>

                            </div>

                        </ConfigProvider>
                        </div>

                    </div>
                    <div
                        id="how-it-works"
                        style={{
                            width: "100vw",
                            height: "75vh",
                            background: "#F4F4F4",
                        }}
                    >
                        <p className="h-white">How dose the caesar cipher work?</p>
                        <p className="p2-white">The Caesar cipher works by shifting each letter in the plaintext (the
                            original message)
                            a fixed number of positions down the alphabet to produce the ciphertext (the encoded
                            message). The fixed
                            shift value is usually referred to as the "key."</p>

                        <p className="p2-white">For example, if the key is 3, each letter in the plaintext would be
                            shifted 3 positions
                            down the alphabet. So, an A would become a D, a B would become an E, and so on.To decode the
                            message, the
                            process is simply reversed. Each letter in the ciphertext is shifted back 3 positions to
                            reveal the
                            original plaintext.</p>
                        <p className="p2-white">Although the Caesar cipher is a very basic encryption method, it was
                            once used for
                            military and diplomatic purposes. However, it is now considered to be very insecure, as the
                            key space
                            (i.e., the number of possible keys) is very small, making it vulnerable to brute-force
                            attacks.</p>

                    </div>


                    <div
                        id="visualize"
                        style={{
                            width: "100vw",
                            height: "100vh",
                            background: "#6B57FF",
                        }}
                    >

                        <p className={"h-dark"}>Visualizing the caesar cipher</p>
                        <img src={caesarVis} alt={'caesarVis'} style={{"paddingLeft": "150px", "height": "250px"}}/>
                        <p className={"p2-dark"}
                           style={{"paddingTop": "60px", "fontSize": "24px", "margin": "0px 10px 10px 0px"}}>To create
                            and use a Caesar cipher, follow these steps:</p>
                        <ol className={"p2-dark"} style={{"width": "1200px",}}>
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
                            <div className={'g-ball1'}></div>
                            <div className={'g-ball2'}></div>
                            <div className={'g-ball3'}></div>
                            <div className={'g-ball4'}></div>
                    </div>


                    <div
                        id="history"
                        style={{
                            width: "100vw",
                            height: "100vh",
                            background: "#19191C",
                            overflow: "hidden"

                        }}
                    >
                        <p className={"h-dark"}>History</p>
                        <p className={"p2-dark"}>The Caesar cipher is one of the earliest known encryption techniques,
                            named after the famous Roman leader Julius Caesar who used it to communicate with his
                            officials. The method involves shifting each letter in the plaintext by a fixed number of
                            positions down the alphabet to produce the corresponding letter in the ciphertext.</p>
                        <p className={"p2-dark"}>The Caesar cipher is considered to be one of the simplest encryption
                            methods, but it was once considered secure enough for military and diplomatic communication.
                            However, its simplicity also made it vulnerable to cryptanalysis, and it has been easily
                            broken for centuries.</p>
                        <p className={"p2-dark"}>Despite its insecurity, the Caesar cipher remains a notable milestone
                            in the history of cryptography. It paved the way for the development of more complex
                            encryption methods and helped to inspire further advancements in cryptography. Today, the
                            Caesar cipher is still taught in introductory cryptography courses as a fundamental example
                            of substitution ciphers.</p>
                        <img className={"caesarTool"} src={caesarTool} alt={"caesarTool"} style={{"width": "1100px"}}/>


                    </div>
                </div>
            </>
        </>
    );
}

export default Caesar;

