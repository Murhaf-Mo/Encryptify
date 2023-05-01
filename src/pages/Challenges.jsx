import {ConfigProvider, Input, Tabs} from 'antd';
import {motion, useScroll, useSpring} from "framer-motion";
import {Collapse} from 'antd';
import Spline from '@splinetool/react-spline';
import {useState} from "react";
import { Modal } from 'antd';

function Cube3D() {
    return (<Spline scene="https://prod.spline.design/lAccDAvJIlSfNLKa/scene.splinecode"/>);
}

const {Panel} = Collapse;

const Hints = () => (<Collapse bordered={true}>
    <Panel header="Hint I" key="1">
        <p> Try translating the title.</p>
    </Panel>
    <Panel header="Hint II" key="2">
        <p>It is a roman cipher.</p>
    </Panel>
    <Panel header="Hint III" key="3">
        <p>The key is 17.</p>

    </Panel>
</Collapse>);
const ChallengeTabs = () => (<ConfigProvider
    theme={{
        token: {
            colorTextBase: "#ffffff",
            colorBgBase: "#19191c",
            colorFill: "#f9f9f9",
            borderRadius: 16,
            fontSize: "var(--step-0)",
            colorText: "#B5B5B5",
            colorPrimary: "#ffffff",
            colorBorder: "#B5B5B5",
            colorBorderSecondary: "#76767d",
        },
    }}
>
    <Tabs
        defaultActiveKey="1"


        items={[{
            label: 'I Easy', key: '1', children: <Challenge1/>,
        }, {
            label: 'II Easy', key: '2', children: 'Tab 2',
        }, {
            label: 'III Easy', key: '3', children: 'Tab 3',
        }, {
            label: 'IV Medium', key: '4', children: 'Tab 4',
        }, {
            label: 'V Medium', key: '5', children: 'Tab 2',
        }, {
            label: 'VI Medium', key: '6', children: 'Tab 3',
        }, {
            label: 'VII Hard', key: '7', children: 'Tab 1',
        }, {
            label: 'VIII Hard', key: '8', children: 'Tab 1',
        },

        ]}
    />
</ConfigProvider>);

function Challenge1() {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };
    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };

    const {TextArea} = Input;
    // const [text, setText] = useState("");


    const onChange = (e) => {
        if (e.target.value === "It is better to create than to learn! Creating is the essence of life.\n" +
            "\n" +
            "-Julius Caesar") {
             showModal()
        } else {
            if (e.target.value === "") {
                console.log('nothing');
            }
            else {
                console.log('wrong');
            }

        }


    };




    return (
        <div className={'small-container'} style={{textAlign: 'justify', paddingTop: '0', width: "min(100%,50rem)"}}>
            <div className={'hints-container'}>
                <p className="pYou" style={{fontWeight: 'bold', fontSize: 'var(--step-1)', textAlign: 'left'}}>Senatus
                    PopulusQue Romanus</p>
                <p className="pYou">Zk zj svkkvi kf tivrkv kyre kf cvrie! Tivrkzex zj kyv vjjvetv fw czwv.</p>
                <p className="pYou"> -Alczlj Trvjri</p>

                <div>
                    <p className="pYou" style={{
                        fontWeight: 'bold',
                        fontSize: 'var(--step-1)',
                        paddingBottom: '0',
                        paddingTop: '2.5rem'
                    }}>Answer</p>
                    <TextArea style={{
                        height: 220,
                        marginBottom: '2rem',
                        marginTop: '1rem',
                        padding: '1rem',
                        width: "min(100%,50rem)",
                    }}
                              onPressEnter={onChange}
                              placeholder="Type here..."
                    />
                </div>
                <Hints/>
                <>
                    <Modal
                        title="Good Job *clap* *clap* *clap*"
                        open={open}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        autoFocusButton={null}

                        okButtonProps={{
                    }}
                        cancelButtonProps={{
                        }}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </>


            </div>


        </div>

    )
}

function Challenges() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });
    return (<div className={'challenge-container'}>
            <div className={'small-container'} style={{paddingTop: '3%'}}>
                <div className={'cube-canvas'}>
                    <Cube3D/>
                </div>
                <h1 className={'cipher-title'}> Welcome To Challenges</h1>
                <p className={'paragraph-text'}> Are you ready to put your
                    problem-solving skills to the test? Here, we'll provide you with a cipher text that you'll need to
                    decrypt to uncover the original text. We'll also provide you with one hint to get you started.</p>

                <p className={'paragraph-text'}>But wait, there's more! We've included tools in our website that can
                    help you encrypt and decrypt data. However, we encourage you to solve the cipher on your own, using
                    your
                    critical thinking and analytical skills. Don't worry if you get stuck, though - we've provided some
                    hints to guide you in the right direction.</p>

                <p className={'paragraph-text'}>So, are you ready to take on the challenge? <strong>Let's get
                    started!</strong></p>

                <div className={'tabs-container'}><ChallengeTabs/></div>

            </div>
            <motion.div className="progress" style={{scaleX}}/>

        </div>

    )
}

export default Challenges
