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
            handleChange(image)
        }

    };
    const handleChange = (e) => {
        setImage(e)
        const reader = new FileReader();
        reader.onload = function (e) {
            setImagePreviewUrl(e.target.result);

            resizeImage(e.target.result, key).then((result) => {
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
        <div>

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

                <div style={{paddingTop: '1.5em', paddingBottom: '2em'}} >

                    <input type="file" accept="image/*" className={'custom-file-input'} onChange={handleChange}/>
                    <UploadOutlined/>
                </div>
                <Alert style={{background: '#031625', width: 'max(330px, 45%)'}}
                    message="Note"
                    description='Save the password by clicking "Enter" twice. Decrypting is not perfect due to compresion.'
                    type="info"
                    showIcon
                />


                <div style={{display: "flex", alignItems: 'center'}}>
                    <div className={'image-container'}>

                        <p className={'image-name'}>Original Image</p>

                            <Card >
                                {imagePreviewUrl &&
                                    <img className={'encrypted-image'} src={imagePreviewUrl} alt={"original "}/>}

                            </Card>

                    </div>
                    <div className={'image-container'}>


                        <p className={'image-name'}>Encrypted Image</p>

                            <Card >

                                {imageResultedUrl &&
                                    <img className={'encrypted-image'} src={imageResultedUrl} alt={"encrypted "}/>}
                            </Card>

                    </div>


                </div>
            </div>
        </div>
    </ConfigProvider>);
}


function FileEncryption()
{
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    return (<div className={'applications-container'}>
            <div className={'small-container'}>
                <App/>
                <motion.div className="progress" style={{scaleX}}/>

            </div>
        </div>

    )
}

export default FileEncryption;