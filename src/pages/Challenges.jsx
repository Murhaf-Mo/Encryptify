import {ConfigProvider, Input, Tabs} from 'antd';
import {motion, useScroll, useSpring} from "framer-motion";
import {Collapse} from 'antd';
import Spline from '@splinetool/react-spline';
import {useState} from "react";
import {Modal} from 'antd';
import Confettii from "../components/Confetti";
import sha256 from "crypto-js/sha256";
import {Button, Tour} from 'antd';
import {useRef} from 'react';


function Cube3D() {
    return (
        <div></div>
        // <Spline scene="https://prod.spline.design/HQJ-jcyRUGfsve0b/scene.splinecode"/>

        // <Spline scene="https://prod.spline.design/lAccDAvJIlSfNLKa/scene.splinecode"/>
    );
}

const {Panel} = Collapse;

function Hints(props) {

    return (<Collapse bordered={true}>
        <Panel header="Hint I" key="1">
            <p> {props.h1}</p>
        </Panel>
        <Panel header="Hint II" key="2">
            <p>{props.h2}</p>
        </Panel>
        <Panel header="Hint III" key="3">
            <p>{props.h3}</p>

        </Panel>
    </Collapse>);
}

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
            label: 'II Easy',
            key: '2',
            children: <Challenge cipher={'hello'} title={'titlegoood'} hash={'fkaldjfhaljsdhf'} resultTitle={'dfklsdf'}
                                 result={'isdofsjdf'} h2={'hel1'} h3={'hel1'} h1={'hel1'}/>,
        }, {
            label: 'III Easy',
            key: '3',
            children: <Challenge cipher={'hello'} title={'titlegoood'} hash={'fkaldjfhaljsdhf'} resultTitle={'dfklsdf'}
                                 result={'isdofsjdf'} h2={'hel1'} h3={'hel1'} h1={'hel1'}/>,
        }, {
            label: 'IV Medium',
            key: '4',
            children: <Challenge cipher={'hello'} title={'titlegoood'} hash={'fkaldjfhaljsdhf'} resultTitle={'dfklsdf'}
                                 result={'isdofsjdf'} h2={'hel1'} h3={'hel1'} h1={'hel1'}/>,
        }, {
            label: 'V Medium',
            key: '5',
            children: <Challenge cipher={'hello'} title={'titlegoood'} hash={'fkaldjfhaljsdhf'} resultTitle={'dfklsdf'}
                                 result={'isdofsjdf'} h2={'hel1'} h3={'hel1'} h1={'hel1'}/>,
        }, {
            label: 'VI Medium',
            key: '6',
            children: <Challenge cipher={'hello'} title={'titlegoood'} hash={'fkaldjfhaljsdhf'} resultTitle={'dfklsdf'}
                                 result={'isdofsjdf'} h2={'hel1'} h3={'hel1'} h1={'hel1'}/>,
        }, {
            label: 'VII Hard',
            key: '7',
            children: <Challenge cipher={'hello'} title={'titlegoood'} hash={'fkaldjfhaljsdhf'} resultTitle={'dfklsdf'}
                                 result={'isdofsjdf'} h2={'hel1'} h3={'hel1'} h1={'hel1'}/>,
        }, {
            label: 'VIII Hard',
            key: '8',
            children: <Challenge cipher={'hello'} title={'titlegoood'} hash={'fkaldjfhaljsdhf'} resultTitle={'dfklsdf'}
                                 result={'isdofsjdf'} h2={'hel1'} h3={'hel1'} h1={'hel1'}/>,
        },

        ]}
    />
</ConfigProvider>);

function Challenge1() {


    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [{
        title: 'Title of challenge',
        description: 'This is your first hint to help you solve the challenge.',
        target: () => ref1.current,
    }, {
        title: 'Cipher Text',
        description: 'This is the cipher text you are required to decrypt and find out the plain text of it.',
        target: () => ref2.current,
    }, {
        title: 'Answer here',
        description: 'Type the plain text here and press "Enter" you will get a success message if you are correct. Good Luck.',
        target: () => ref3.current,
    }];


    const [open2, setOpen2] = useState(false);
    const showModal = () => {
        setOpen2(true);
        setParty(true)

    };
    const handleOk = (e) => {
        console.log(e);
        setOpen2(false);
        setParty(false)
    };
    const handleCancel = (e) => {
        console.log(e);
        setOpen2(false);
        setParty(false)


    };

    const {TextArea} = Input;
    // const [text, setText] = useState("");
    const [party, setParty] = useState(false)

    function cleanString(str) {
        return str.toLowerCase().replace(/[\s\n]/g, '');
    }

    const onChange = (e) => {
        console.log(cleanString(e.target.value))
        console.log(sha256(cleanString(e.target.value)).toString())
        if (sha256(cleanString(e.target.value)).toString() === "22620d1a52f6bc26a62e16ba5ec93b9e027dc6f2dd278e0ed8d7dd4ce320bcbe") {
            showModal()
        } else {
            if (e.target.value === "") {
                console.log('nothing');
            } else {
                console.log('wrong');
            }

        }


    };


    return (
        <div className={'small-container'} style={{textAlign: 'justify', paddingTop: '0', width: "min(100%,50rem)"}}>
            <div className={'hints-container'}>
                <Button className={'gonePhoto'} onClick={() => setOpen(true)} style={{
                    borderRadius: '5px',
                    marginBottom: '1rem',
                    marginLeft: '1rem',
                    padding: '6px',
                    paddingBottom: '0',
                    paddingTop: '0'

                }}>
                    How To Start
                </Button>
                {party && <Confettii/>}

                <p ref={ref1} className="pYou"
                   style={{fontWeight: 'bold', fontSize: 'var(--step-1)', textAlign: 'left'}}>Senatus
                    PopulusQue Romanus</p>
                <div ref={ref2}>
                    <p className="pYou">Zk zj svkkvi kf tivrkv kyre kf cvrie! Tivrkzex zj kyv vjjvetv fw czwv.<br/>
                        <br/> -Alczlj Trvjri</p></div>

                <div ref={ref3}>
                    <p className="pYou" style={{
                        fontWeight: 'bold', fontSize: 'var(--step-1)', paddingBottom: '0', paddingTop: '2.5rem'
                    }}>Answer</p>
                    <TextArea style={{
                        height: 220, marginBottom: '2rem', marginTop: '1rem', padding: '1rem', width: "min(100%,50rem)",
                    }}
                              onPressEnter={onChange}
                              placeholder="Type here..."
                    />
                </div>
                <Hints h1={'Try translating the title.'} h2={'It is a roman cipher.'} h3={"The key is 17."}/>
                <>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorTextBase: "#ffffff",
                                colorBgBase: "#19191c",
                                colorFill: "#f9f9f9",
                                borderRadius: 5,
                                fontSize: "var(--step-0)",
                                colorText: "#B5B5B5",
                                colorPrimary: "#ffffff",
                                colorBorder: "#B5B5B5",
                                colorBorderSecondary: "#76767d",
                            },
                        }}
                    >

                        <Modal

                            title="Good Job *clap* *clap* *clap* 🎉"
                            open={open2}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            cancelText={'Nice'}
                            autoFocusButton={null}

                            okButtonProps={{
                                style: {display: 'none'}
                            }}
                            cancelButtonProps={{
                                style: {paddingRight: '0.5em', paddingLeft: '0.5em'}


                            }}
                        >
                            <p>You have successfully deciphered the text and completed the challenge.</p>

                        </Modal>
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            token: {
                                colorTextBase: "#ffffff",
                                colorBgBase: "#19191c",
                                colorFill: "#f9f9f9",
                                borderRadius: 2,
                                fontSize: "var(--step--1)",
                                colorText: "#B5B5B5",
                                colorPrimary: "#D03670",

                            },
                        }}
                    >

                        <Tour
                            open={open}
                            onClose={() => setOpen(false)}
                            steps={steps}
                            indicatorsRender={(current, total) => (<span>
            {current + 1} / {total}
          </span>)}
                        />
                    </ConfigProvider>
                </>


            </div>


        </div>

    )
}

function Challenge(props) {

    const [open2, setOpen2] = useState(false);
    const showModal = () => {
        setOpen2(true);
        setParty(true)

    };
    const handleOk = (e) => {
        console.log(e);
        setOpen2(false);
        setParty(false)
    };
    const handleCancel = (e) => {
        console.log(e);
        setOpen2(false);
        setParty(false)


    };

    const {TextArea} = Input;
    // const [text, setText] = useState("");
    const [party, setParty] = useState(false)

    function cleanString(str) {
        return str.toLowerCase().replace(/[\s\n]/g, '');
    }

    const onChange = (e) => {
        console.log(cleanString(e.target.value))
        console.log(sha256(cleanString(e.target.value)).toString())
        if (sha256(cleanString(e.target.value)).toString() === props.hash) {
            showModal()
        } else {
            if (e.target.value === "") {
                console.log('nothing');
            } else {
                console.log('wrong');
            }

        }


    };


    return (
        <div className={'small-container'} style={{textAlign: 'justify', paddingTop: '0', width: "min(100%,50rem)"}}>
            <div className={'hints-container'}>

                {party && <Confettii/>}

                <p className="pYou"
                   style={{fontWeight: 'bold', fontSize: 'var(--step-1)', textAlign: 'left'}}>{props.title}</p>
                <p className="pYou">{props.cipher}</p>

                <div>
                    <p className="pYou" style={{
                        fontWeight: 'bold', fontSize: 'var(--step-1)', paddingBottom: '0', paddingTop: '2.5rem'
                    }}>Answer</p>
                    <TextArea style={{
                        height: 220, marginBottom: '2rem', marginTop: '1rem', padding: '1rem', width: "min(100%,50rem)",
                    }}
                              onPressEnter={onChange}
                              placeholder="Type here..."
                    />
                </div>
                <Hints h1={props.h1} h2={props.h2} h3={props.h3}/>
                <>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorTextBase: "#ffffff",
                                colorBgBase: "#19191c",
                                colorFill: "#f9f9f9",
                                borderRadius: 5,
                                fontSize: "var(--step-0)",
                                colorText: "#B5B5B5",
                                colorPrimary: "#ffffff",
                                colorBorder: "#B5B5B5",
                                colorBorderSecondary: "#76767d",
                            },
                        }}>

                        <Modal

                            title={props.resultTitle}
                            open={open2}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            cancelText={'Nice'}
                            autoFocusButton={null}

                            okButtonProps={{
                                style: {display: 'none'}
                            }}
                            cancelButtonProps={{
                                style: {paddingRight: '0.5em', paddingLeft: '0.5em'}


                            }}
                        >
                            <p>{props.result}</p>

                        </Modal>
                    </ConfigProvider>


                </>
            </div>
        </div>)
}

function Challenges() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });
    return (<div className={'challenge-container'}>
            <Spline scene="https://prod.spline.design/tsHo75QzO5C8rKzv/scene.splinecode" style={{height: '50vh'}}/>

            <div className={'small-container'} style={{paddingTop: '1%' ,display: "flex", justifyContent: 'center'}} >
                {/*<div className={'cube-canvas'}>*/}
                {/*    <Cube3D/>*/}
                {/*</div>*/}
                {/*<h1 className={'cipher-title'}>Challenges</h1>*/}
                {/*<p className={'paragraph-text'}> Are you ready to put your*/}
                {/*    problem-solving skills to the test? Here, we'll provide you with a cipher text that you'll need to*/}
                {/*    decrypt to uncover the original text. We'll also provide you with one hint to get you started.</p>*/}

                {/*<p className={'paragraph-text'}>But wait, there's more! We've included tools in our website that can*/}
                {/*    help you encrypt and decrypt data. However, we encourage you to solve the cipher on your own, using*/}
                {/*    your*/}
                {/*    critical thinking and analytical skills. Don't worry if you get stuck, though - we've provided some*/}
                {/*    hints to guide you in the right direction.</p>*/}

                {/*<p className={'paragraph-text'}>So, are you ready to take on the challenge? <strong>Let's get*/}
                {/*    started!</strong></p>*/}


                <div className={'tabs-container'}><ChallengeTabs/></div>

            </div>
            <motion.div className="progress" style={{scaleX}}/>

        </div>

    )
}

export default Challenges
