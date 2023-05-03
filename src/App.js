import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Challenges from "./pages/Challenges";
import Ciphers from "./pages/Ciphers";
import Quantum from "./pages/Quantum";
// import Caesar from './ciphers/Caesar';
import Footer from "./components/Footer";
import Vigenere from "./ciphers/Vigenere";
import XOR from "./ciphers/XOR";
import BitShift from "./ciphers/BitShift";
import Caesar2 from "./ciphers/Caesar2";
import HashingApp from "./apps/HashingApp";
import CommunicationApp from "./apps/CommunicationApp";
import FileEncryption from "./apps/FileEncryption";
import AES from "./ciphers/aes";

function App() {

    return (<>


            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/applications" element={<div><Navbar/><Applications/></div>}/>
                    <Route path="/applications/password-storage" element={<div><Navbar/><HashingApp/></div>}/>
                    <Route path="/applications/communication" element={<div><Navbar/><CommunicationApp/></div>}/>
                    <Route path="/applications/file-encryption" element={<div><Navbar/><FileEncryption/></div>}/>
                    <Route path="/applications/hashing" element={<div><Navbar/><HashingApp/></div>}/>

                    <Route path="/ciphers" element={<div><Navbar/><Ciphers/></div>}/>
                    <Route path="/ciphers/caesar" element={<div><Navbar/><Caesar2/></div>}/>
                    <Route path="/ciphers/vigenere" element={<div><Navbar/><Vigenere/></div>}/>
                    <Route path="/ciphers/xor" element={<div><Navbar/><XOR/></div>}/>
                    <Route path="/ciphers/bit-shift" element={<div><Navbar/><BitShift/></div>}/>
                    <Route path="/ciphers/aes" element={<div><Navbar/><AES/></div>}/>


                    <Route path="/challenges" element={<div><Navbar/><Challenges/></div>}/>
                    <Route path="/quantum" element={<div><Navbar/><Quantum/></div>}/>

                </Routes>
            </div>
            <Footer/>
        </>


    )
}

export default App
