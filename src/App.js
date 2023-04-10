import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Challenges from "./pages/Challenges";
import Ciphers from "./pages/Ciphers";
import Quantum from "./pages/Quantum";
import Caesar from './ciphers/Caesar';
import Footer from "./components/Footer";
import Vigenere from "./ciphers/Vigenere";
import XOR from "./ciphers/XOR";
import BitShift from "./ciphers/BitShift";

function App() {

    return (
        <>


            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/applications" element={<div><Navbar/><Applications/></div>}/>
                    <Route path="/challenges" element={<div><Navbar/><Challenges/></div>}/>
                    <Route path="/ciphers" element={<div><Navbar/><Ciphers/></div>}/>
                    <Route path="/quantum" element={<div><Navbar/><Quantum/></div>}/>
                    <Route path="/ciphers/caesar" element={<div><Navbar/><Caesar/></div>}/>
                    <Route path="/ciphers/vigenere" element={<div><Navbar/><Vigenere/></div>}/>
                    <Route path="/ciphers/xor" element={<div><Navbar/><XOR/></div>}/>
                    <Route path="/ciphers/bit-shift" element={<div><Navbar/><BitShift/></div>}/>

                </Routes>
            </div>
            <Footer/>
        </>


    )
}

export default App
