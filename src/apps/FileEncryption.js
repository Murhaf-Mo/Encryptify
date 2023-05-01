import {useEffect, useState} from "react";
// import CryptoJS from "crypto-js";

function App() {
    const [files, setFiles] = useState();
    const [previews, setPreviews] = useState();

    // const encryptImage = (imageData, encryptionKey) => {
    //     // convert the image data to a binary format
    //     const binaryImageData = atob(imageData.split(',')[1]);
    //
    //     // convert the binary data to a typed array
    //     const typedArray = new Uint8Array(binaryImageData.length);
    //     for (let i = 0; i < binaryImageData.length; i++) {
    //         typedArray[i] = binaryImageData.charCodeAt(i);
    //     }
    //
    //     // encrypt the image data using the provided encryption key
    //     const encryptedData = CryptoJS.AES.encrypt(typedArray, encryptionKey);
    //
    //     // return the encrypted image data as a base64-encoded string
    //     return encryptedData.toString();
    // };



    // rendering previews
    useEffect(() => {
        if (!files) return;

        let tmp = [];
        for (let i = 0; i < files.length; i++) {
            tmp.push(URL.createObjectURL(files[i]));
        }
        const objectUrls = tmp;
        setPreviews(objectUrls);

        // free memory
        for (let i = 0; i < objectUrls.length; i++) {
            return () => {
                URL.revokeObjectURL(objectUrls[i]);
            };
        }
    }, [files]);



    return (<main className="container">
        <br/>
        <h3>Form with image preview</h3>
        <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            multiple
            onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                    setFiles(e.target.files);
                }
            }}
        />
        {previews && previews.map((pic) => {
            return <img src={pic} alt={'displayed'}/>;
        })}

    </main>);
}

function FileEncryption() {
return (
    <App/>
)
}

export default FileEncryption;