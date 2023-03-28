import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
//import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Challenges from "./pages/Challenges";
import Ciphers from "./pages/Ciphers";
import Quantum from "./pages/Quantum";
import Caesar from './ciphers/Caesar';
import Footer from "./components/Footer";
import Vigenere from "./ciphers/Vigenere";

function App() {

    return (
        <>


                <Navbar/>
            <div>
                <Routes>
                    <Route path="/" element={<Vigenere/>}/>
                    <Route path="/applications" element={<Applications/>}/>
                    <Route path="/challenges" element={<Challenges/>}/>
                    <Route path="/ciphers" element={<Ciphers/>}/>
                    <Route path="/quantum" element={<Quantum/>}/>
                    <Route path="/ciphers/caesar" element={<Caesar/>}/>
                </Routes>
            </div>
                <Footer/>
        </>


    )
}

export default App
