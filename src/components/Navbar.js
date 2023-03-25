import {ConfigProvider, Menu} from 'antd';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
const items = [

  {
label: (
    <Link to="/ciphers" rel="noopener noreferrer">
      Ciphers
    </Link>
  ),
    key: 'mail',
  },
  {
    label: (
        <Link to="/applications" rel="noopener noreferrer">
          Applications
        </Link>
    ),
    key: 'app',
  },
  {
    label: (
        <Link to="/challenges" rel="noopener noreferrer">
          Challenges
        </Link>
    ),
    key: 'SubMenu',

      },
  {
    label: (
        <Link to="/quantum" rel="noopener noreferrer">
          Quantum
        </Link>
    ),
    key: 'alipay',
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
      <ConfigProvider
          theme={{
              token: {
                  colorTextBase: "#ffffff",
                  colorBgBase: "#19191c",
                  colorFill: "#f9f9f9",
                  borderRadius: 16,
                  fontSize: 18,
                  colorText: "#ffffff",
                  colorPrimary: "#ffffff",
                  colorBorder: "#B5B5B5",
                  colorBorderSecondary: "#76767d",
              },
          }}
      >
      <nav className="nav">
          <Link to="/" className="site-title">
              <img className="logo" src= {logo} alt='logo' onClick={onClick}/>
          </Link>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"  items={items} theme={"light"} style={{
              background:'#27282C',
              color: '#757578',
              flex: 'space-between',
                             
          }} />

      </nav>
      </ConfigProvider>


)
};



export default Navbar;