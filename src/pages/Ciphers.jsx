import {Button, Space} from 'antd'
import {Link} from "react-router-dom"
import '../App.css'

function Ciphers() {

  return (
    <>
        <h1> Ciphers</h1>
        <Space wrap>
          <Link to="/ciphers/caesar" rel="noopener noreferrer">
            <Button>Caesar Cipher</Button>
          </Link>
            <Link to="/ciphers/vigenere" rel="noopener noreferrer">
                <Button>vigenere Cipher</Button>
            </Link>
        </Space>
    </>

  )
}

export default Ciphers
