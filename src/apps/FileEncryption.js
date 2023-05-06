import {useState} from "react";
import {UploadOutlined} from "@ant-design/icons";
import {Alert, Card, ConfigProvider, Input, Space} from "antd";
import React from 'react';
import {motion, useScroll, useSpring} from "framer-motion";

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
            handleChange(image,e.target.value)
        }

    };
    const handleChange = (e, key2) => {
        if (!key2){
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
    const [passwordVisible, setPasswordVisible] = React.useState(false);


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
        <div style={{paddingTop: '2rem'}}>

            <div>


                <Space direction="horizontal">
                    <Input.Password
                        placeholder="input password"
                        onPressEnter={handelKey}

                        visibilityToggle={{
                            visible: passwordVisible, onVisibleChange: setPasswordVisible,
                        }}
                    />

                </Space>

                <div style={{paddingTop: '1.5em', paddingBottom: '2em', overflowX: "hidden"}}>

                    <input type="file" accept="image/*" className={'custom-file-input'} onChange={handleChange}/>
                    <UploadOutlined/>
                </div>
                <Alert style={{background: '#031625', width: 'max(200px, 27%)'}}
                       message="Note"
                       description='Decrypting is not perfect due to compresion.'
                       type="info"
                       showIcon
                />


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
            </div>
        </div>
    </ConfigProvider>);
}


function FileEncryption() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    return (<div className={'applications-container'}>
            <div className={'small-container'}>
                <h1 className={'cipher-title'}>Image Encryption</h1>
                <p className={'paragraph-text'}>Image encryption is a method of securing digital images to prevent
                    unauthorized access, modification, or viewing. It involves using encryption algorithms to convert
                    the image data into a cipher that can only be decoded by those who have the decryption key. This
                    ensures that the image can only be viewed by those who are authorized to do so. Image encryption is
                    commonly used to protect sensitive images, such as medical images, classified documents, and
                    personal photos.</p>
                <App/>

                <h1 className={'cipher-title'} style={{fontSize: 'var(--step-4)', paddingTop: '2rem'}}>How It Works</h1>
                <p className={'paragraph-text'}>
                    Image encryption works by using encryption algorithms to transform the pixel values of an image into
                    a ciphered form that can only be deciphered by those with the decryption key. The encryption process
                    involves scrambling the pixel values of the image using mathematical operations, such as
                    substitution and permutation. This results in a ciphered image that is unintelligible to anyone
                    without the decryption key.

                    To decrypt the image, the same encryption algorithm is applied in reverse using the decryption key.
                    The decryption process involves unscrambling the pixel values of the ciphered image to obtain the
                    original image.
                </p>
                <p className={'paragraph-text'}>
                    In symmetric key encryption, the same key is used for both encryption and decryption. This means
                    that
                    the encryption and decryption keys must be kept secret from anyone who should not have access to the
                    image. In asymmetric key encryption, two different keys are used for encryption and decryption. This
                    allows for more flexibility in sharing encrypted images, but requires a more complex key management
                    system.
                </p>

            </div>
            <motion.div className="progress" style={{scaleX}}/>

        </div>

    )
}

export default FileEncryption;