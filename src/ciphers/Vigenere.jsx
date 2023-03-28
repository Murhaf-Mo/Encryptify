import vigenereLogo from "../assets/vigenere-logo.png";

function Vigenere() {


    return (
        <div className={"cipher-container"}>
            <div className={"cipher-title-container"}>
                {/*<div className={"g-vigenere"}> </div>*/}
                <img src={vigenereLogo} alt={"vigenere-logo"} className={"vigenere-logo"} />
                <p className={"cipher-title"}>Vigenère Cipher</p>
                <p className={"cipher-subtitle"}>A complex polyalphabetic substitution cipher with French roots.</p>

            </div>







        </div>

    )
}

export default Vigenere;

