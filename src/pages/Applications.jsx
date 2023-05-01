import {Button, Space} from "antd";
import {Link} from "react-router-dom";


export default function Applications() {

  return (

      <Space wrap>
        <Link to="/applications/communication" rel="noopener noreferrer">
          <Button>Communication</Button>
        </Link>
        <Link to="/applications/password-storage" rel="noopener noreferrer">
          <Button>Password Storage</Button>
        </Link>
        <Link to="/applications/file-encryption" rel="noopener noreferrer">
          <Button>File Encryption</Button>
        </Link>

      </Space>  )
}


