import {Button, Space} from 'antd'
import {Link} from "react-router-dom"


function Ciphers() {

  return (
    <>
        <h1> Ciphers</h1>
        <Space wrap>
          <Link to="/ciphers/caesar" rel="noopener noreferrer">
            <Button type="primary">Primary Button</Button>
            <Button>Caesar Cipher</Button>
          </Link>
          <Button>Caesar Cipher</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
    </>

  )
}

export default Ciphers
