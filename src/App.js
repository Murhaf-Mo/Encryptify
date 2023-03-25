import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import {ConfigProvider} from "antd";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Challenges from "./pages/Challenges";
import Ciphers from "./pages/Ciphers";
import Quantum from "./pages/Quantum";
function App() {

  return (
    <>

      <ConfigProvider
          theme={{
              "token": {
                'colorPrimaryBg': '#ffe6fe',
                "colorPrimary": "#ffffff",

          }

              }
          }
      >
              <Navbar />
              </ConfigProvider>
              <div className="container">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/applications" element={<Applications />} />
                      <Route path="/challenges" element={<Challenges />} />
                      <Route path="/ciphers" element={<Ciphers />} />
                      <Route path="/quantum" element={<Quantum />} />
                  </Routes>
              </div>
        </>


  )
}

export default App
