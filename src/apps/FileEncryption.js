import {useState} from "react";
import {Alert, Card, ConfigProvider, InputNumber} from "antd";
import React from 'react';
import {motion, useScroll, useSpring} from "framer-motion";
import Spline from "@splinetool/react-spline";

function resizeImage(base64Str, key) {
    return new Promise((resolve) => {
        let img = new Image();
        img.src = base64Str;
        img.onload = () => {
            let canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            canvas.width = width;
            canvas.height = height;
            let ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            // console.log(data[0])
            for (let i = 0; i < data.length; i += 4) {
                data[i] = ((data[i] + i * key)) % 255; // red
                data[i + 1] = ((data[i + 1] + i * key)) % 255; // green
                data[i + 2] = ((data[i + 2] + i * key)) % 255; // blue
            }

            // for (let i = 0; i < data.length; i += 4) {
            //     data[i] = -(data[i] - i) % 255; // red
            //     data[i + 1] = -(data[i + 1] - i) % 255; // green
            //     data[i + 2] = -(data[i + 2] - i) % 255; // blue
            // }

            for (let i = 0; i < data.length; i += 4) {
                data[i] = 255 - (data[i]); // red
                data[i + 1] = 255 - (data[i + 1]); // green
                data[i + 2] = 255 - (data[i + 2]); // blue
            }
            // for (let i = 0; i < data.length; i += 4) {
            //     data[i] = (data[i] ^ key + (i * key)) % 255; // red
            //     data[i + 1] = (data[i + 1] ^ key + (i * key)) % 255; // green
            //     data[i + 2] = (data[i + 2] ^ key + (i * key)) % 255; // blue
            // }


            ctx.putImageData(imageData, 0, 0);

            resolve(canvas.toDataURL('image/png', 0.9));
        };
    });
}

function App() {


    const [key, setKey] = useState(1000000);
    const [image, setImage] = useState(null);

    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [imageResultedUrl, setImageResultedUrl] = useState(null);

    const handelKey = (e) => {
        setKey(Number(e.target.value));
        console.log(key)

        if (image !== null) {
            handleChange(image, e.target.value)
        }

    };
    const handleChange = (e, key2) => {
        if (!key2) {
            key2 = key
        }
        setImage(e)
        const reader = new FileReader();
        reader.onload = function (e) {
            setImagePreviewUrl(e.target.result);

            resizeImage(e.target.result, key2).then((result) => {
                setImageResultedUrl(result);
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    };


    return (<ConfigProvider theme={{
        token: {
            colorTextBase: "#ffffff",
            colorBgBase: "black",
            colorFill: "#f9f9f9",
            colorText: "#ffffff",
            colorPrimary: "#ffffff",
            colorBorder: "#B5B5B5",
            colorBorderSecondary: "#76767d",
        },
    }}>
        <div>

            <div>
                <div className={'row-to-colum'} style={{maxWidth: '40rem'}}>
                    <div>
                        <h3 style={{}}>Encryption Key: </h3>
                        <InputNumber
                            placeholder="input password"
                            onPressEnter={handelKey}
                            style={{width: '100%'}}


                        />
                    </div>

                    <div className={"m-pt"} style={{width: '15rem', overflowX: "hidden"}}>
                        <h3>Input Image: </h3>
                        <input type="file" accept="image/*" className={'custom-file-input'} onChange={handleChange}/>
                    </div>
                </div>


                <div className={'image-flex-enc'}>
                    <div className={'image-container'}>

                        <p className={'image-name'}>Original Image</p>

                        <Card>
                            {imagePreviewUrl &&
                                <img className={'encrypted-image'} src={imagePreviewUrl} alt={"original "}/>}

                        </Card>

                    </div>
                    <div className={'image-container'}>


                        <p className={'image-name'}>Encrypted Image</p>

                        <Card>

                            {imageResultedUrl &&
                                <img className={'encrypted-image'} src={imageResultedUrl} alt={"encrypted "}/>}
                        </Card>

                    </div>


                </div>
                <Alert style={{background: '#031625', width: 'max(320px, 30%)', marginLeft: '3%', marginTop: '1.5rem'}}
                       message="Note"
                       description='Decrypting is not perfect due to compresion.'
                       type="info"
                       showIcon
                />
            </div>
        </div>
    </ConfigProvider>);
}


function FileEncryption() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    return (<motion.div
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    transition={{
        duration: 1.5,
    }}
    initial={{opacity: 0}} className={'applications-container'}>
            <h1 style={{position: "absolute", left: '5%', top: '13%', fontSize: 'var(--step-7)'}}
                className={'cipher-title'}>Image Encryption</h1>

            <Spline style={{height: '20rem'}} scene="https://prod.spline.design/ntO4EKGiPTwie5Pc/scene.splinecode"/>


            <div className={'small-container'} style={{paddingTop: '0'}}>
                <App/>
            </div>
            <article>
                <section>
                    <h1>What is image encryption?</h1>

                    <p>
                        Image encryption is a method of securing digital images to prevent unauthorized access,
                        modification, or viewing. It involves using encryption algorithms to convert the image data into
                        a cipher that can only be decoded by those who have the decryption key. This ensures that the image can only be viewed by those who are authorized to do so. Image
                        encryption is commonly used to protect sensitive images, such as medical images, classified
                        documents, and personal photos. </p>

                    <p>
                        Choosing image encryption over file encryption can be a powerful way to present the effects of
                        encryption on data. By encrypting images, we can visually showcase the transformation and
                        altered appearance of the encrypted data, making it easier for viewers to understand and
                        appreciate the impact of encryption techniques.

                    </p>
                </section>
                <section>
                    <h1>How does it work?</h1>
                    <p>
                        Image encryption works by using encryption algorithms to transform the pixel values of an image
                        into a ciphered form that can only be deciphered by those with the decryption key. The
                        encryption process involves scrambling the pixel values of the image using mathematical
                        operations, such as substitution and permutation. This results in a ciphered image that is unintelligible to anyone
                        without the decryption key. </p>
                    <p>
                        To decrypt the image, the same encryption algorithm is applied in reverse using the decryption
                        key. The decryption process involves unscrambling the pixel values of the ciphered image to
                        obtain the original image.
                    </p>
                    <p>
                        In symmetric key encryption, the same key is used for both encryption and decryption. This means
                        that the encryption and decryption keys must be kept secret from anyone who should not have
                        access to the image. In asymmetric key encryption, two different keys are used for encryption
                        and decryption. This allows for more flexibility in sharing encrypted images, but requires a more
                        complex key management system.
                    </p>
                </section>
            </article>
            <motion.div className="progress" style={{scaleX}}/>

        </motion.div>

    )
}

export default FileEncryption;