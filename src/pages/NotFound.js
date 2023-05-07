import {Button, ConfigProvider, Result} from 'antd';
import {motion, useScroll, useSpring} from "framer-motion";
import {Link} from "react-router-dom";
function NotFound  () {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });
    return(
        <div>
    <ConfigProvider theme={{
        token: {
            colorTextBase: "#ffffff",
            colorBgBase: "black",
            colorFill: "#f9f9f9",
            colorText: "#ffffff",
            colorPrimary: "#ffffff",
            colorBorder: "#B5B5B5",
            colorBorderSecondary: "#76767d",
        },
    }}>
    <Result style={{background: 'black', padding: '10%'}}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
            extra={<Link to="/"><Button>Back Home</Button></Link>}
    />

    </ConfigProvider>
            <motion.div className="progress" style={{scaleX}}/>

        </div>
);}
export default NotFound;