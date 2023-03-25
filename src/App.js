import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import {Button, ConfigProvider} from "antd";
function App() {

  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#00b96b',
              },
          }}
      >
          <>
          <Navbar/>
          <Button type="primary">Button</Button>
          <h1> HI</h1>
      </>
      </ConfigProvider>

  )
}

export default App
