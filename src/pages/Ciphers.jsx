import {Button, Space} from 'antd'
import {Link} from "react-router-dom"
import '../App.css'

function Ciphers() {

  return (
    <div >

        <Space wrap>
          <Link to="/ciphers/caesar" rel="noopener noreferrer">
            <Button>Caesar Cipher</Button>
          </Link>
            <Link to="/ciphers/vigenere" rel="noopener noreferrer">
                <Button>Vigenere Cipher</Button>
            </Link>
            <Link to="/ciphers/xor" rel="noopener noreferrer">
                <Button>XOR Cipher</Button>
            </Link>
            <Link to="/ciphers/bit-shift" rel="noopener noreferrer">
                <Button>Bit Shift</Button>
            </Link>
        </Space>
    </div>

  )
}

export default Ciphers
