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


// function Cube3D() {
//     return (
//         <div></div>
//         // <Spline scene="https://prod.spline.design/HQJ-jcyRUGfsve0b/scene.splinecode"/>
//
//         // <Spline scene="https://prod.spline.design/lAccDAvJIlSfNLKa/scene.splinecode"/>
//     );
// }


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
            children: <Challenge
                title={'It’s not as if you have to drink the sea.'}
                cipher={'Ysktii hzqh fsumc Av yepni ux iej cvexvdhrk Z hf rff bzsn'}
                hash={'77848ddabeb6a81c5fd3ab549fa09d54f19a6ab3b41082b8b31f2af014e43b7d'}
                resultTitle={'Good Job *clap* *clap* *clap* 🎉'}
                result={'You have successfully deciphered the text and completed the challenge.'}
                h1={'It is a french cipher.'}
                h2={'The key is in the title but translated.'}
                h3={'The key is Mer.'} />,
        }, {
            label: 'III Easy',
            key: '3',
            children: <Challenge
                title={'Know thyself'}
                cipher={'Wnl ts \xa0eeid incih infetb\xa0 f nfeow steath cm miehn asuhcaathaoe\xa0 wfd eawiftoaysage rehlt n\xa0 nn lnnvnotoeingacngdaienpo ae'}
                hash={'7d976253647b4c9318d432b3b54947058da087fe3e7ae55e6387ae9451a34384'}
                resultTitle={'Good Job *clap* *clap* *clap* 🎉'}
                result={'You have successfully deciphered the text and completed the challenge.'}
                h1={'It is a greek cipher.'}
                h2={'In this cipher, the key has to be less than the cipher.'}
                h3={'The key is 8.'} />,
        }, {
            label: 'IV Medium',
            key: '4',
            children: <Challenge
                title={'Frequency analysis'}
                cipher={'ɤȒȮȣɦȫȩȵȲɦȯȨȥȩȫȶȴȣȮȣȨȵȯȤȪȣɦȲȮȯȨȡɦȧȤȩȳȲɦȲȮȣɦȱȩȴȪȢɦȯȵɦȲȮȧȲɦȯȲɦȯȵɦȥȩȫȶȴȣȮȣȨȵȯȤȪȣɨɤɦɫɦȇȪȤȣȴȲɦ'}
                hash={'0f182e7b7a38effd864129f383cdd9902e73958d8251de709edc5a6c401414ec'}
                resultTitle={'Good Job *clap* *clap* *clap* 🎉'}
                result={'You have successfully deciphered the text and completed the challenge.'}
                h1={'It is a substitution cipher.'}
                h2={'Use frequency analysis and try replacing the letters in the cipher with a letter that has similar frequency percent.'}
                h3={'If you cannot solve it using frequency analysis try using this key: 582.'} />,
        }, {
            label: 'V Medium',
            key: '5',
            children:  <Challenge
                title={'Shift your mind away from negativity and towards positivity.'}
                cipher={'WzIyOTY4NDgsNDY1NzI0OCw3NTM5NzI4LDY2ODg4NjQsNjY4Nzc2MCw2NjIzMzI4LDczNDMxMjAsNzIxMzE1MiwyMTY1Nzc2LDY5NTEwMDgsNzYwNTI2NCwyMTY2ODgwLDc4Njc0MDgsNjg4NTQ3Miw2NDI1NjE2LDc2NzE5MDQsMjE2NTc3Niw3OTk5NTg0LDczNDMxMjAsNzczNzQ0MCwyMTY1Nzc2LDY2MjMzMjgsNzM0MzEyMCwyMTY2ODgwLDc4Njc0MDgsNjk1MTAwOCw3NjcwODAwLDY4ODU0NzIsMjE2NTc3Niw3ODY4NTEyLDY4ODQzNjgsNjQyNjcyMCw3NjcwODAwLDI2MjU2MzIsNzYwNTI2NCwyMTY2ODgwLDY0OTExNTIsNjY4ODg2NCw2Njg3NzYwLDcyNzg2ODgsMjE2NTc3Niw2NjIzMzI4LDczNDMxMjAsNzI3ODY4OCw2Njg3NzYwLDIxNjY4ODAsNzY3MDgwMCw3MzQ0MjI0LDIxNjU3NzYsNzk5OTU4NCw3MzQzMTIwLDc3Mzc0NDAsMzA4MzI4MCwyMjk3OTUyLDIxNjU3NzYsMzAxODg0OCwyMTY1Nzc2LDQ5MTkzOTIsNjY4Nzc2MCw2NDI2NzIwLDcyNzc1ODQsMzAxODg0OCw1MzExNTA0LDY0MjY3MjAsNzczNjMzNiw3MTQ3NjE2LDIxNjU3NzYsNTUwOTIxNiw2NDI1NjE2LDc1NDA4MzIsNzY3MDgwMCw3NTQwODMyLDY2ODc3NjAsNzI1MDg4XQ=='}
                hash={'afd6e00a20cab5eea569696745336f06e844e6a11696799afcdcf0b8010f32a6'}
                resultTitle={'Good Job *clap* *clap* *clap* 🎉'}
                result={'You have successfully deciphered the text and completed the challenge.'}
                h1={'The cipher is related to bit manipulation.'}
                h2={'The key is in the title.'}
                h3={'The key is the word mind.'} />,
        }, {
            label: 'VI Medium',
            key: '6',
            children:  <Challenge
                title={'The most famous password of all time.'}
                cipher={'U2FsdGVkX1+X4IIje4YzXqnHW07mDXO7KnV1pcPxTNv6ry4130dUzvJSBnV1OBAGh62+hJCJ7waneW26w/bSOYKIxUKmuNUUBh+NWYy1v6qZiNy/X2ms6Zh/y50W3ZeJc/0gpQ/zg7Oy1qV1UT4rBg=='}
                hash={'bdb4552609478f917c926dd77a85817d8c761cdcbf8aba846a024cddb910e3ac'}
                resultTitle={'Good Job *clap* *clap* *clap* 🎉'}
                result={'You have successfully deciphered the text and completed the challenge.'}
                h1={'Try using a modern encryption technique'}
                h2={'The key has characters and numbers.'}
                h3={'The key is password123'} />,
        }, {
            label: 'VII Hard',
            key: '7',
            children:  <Challenge
                title={'Double the encryption, double the fun!'}
                cipher={'Jrrg mre. Qrz ghflskhu wkh whaw ehorz:\n' +
                    '"urriLh j g qxwwk d qrf wrxvxrFlgdzr rw xrp bob -vh v r v vwobqvw" rrojdr.qz s'}
                hash={'eff4cb358e076ebba3ea012cfcc52b17e7c075eb9448e3d5444227e4d6fd7835'}
                resultTitle={'Good Job *clap* *clap* *clap* 🎉'}
                result={'You have successfully deciphered the text and completed the challenge.'}
                h1={'This cipher what encrypted using two ciphers.'}
                h2={'The first cipher uses the key 3.'}
                h3={'The second cipher uses the key 10.'} />,
        }, {
            label: 'VIII Hard',
            key: '8',
            children:  <Challenge
                title={'Same keys, same life.'}
                cipher={'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'}
                hash={'0b2eadd3a2aff59d2158a709271f07e2b862969dedd55f06ca022f9353908886'}
                resultTitle={'Good Job WOW 🎉🎉🎉🎉🎉'}
                result={'Contact me using the feedback section in the footer. Type the answer for this challenge and a why to contact you. You won 10$.'}
                h1={'no hints for this one.'}
                h2={'sorry.'}
                h3={'You got to solve it on your own.'} />,
        },
            // {
            //     label: 'IX Hard',
            //     key: '9',
            //     children:  <Challenge
            //         title={''}
            //         cipher={''}
            //         hash={''}
            //         resultTitle={''}
            //         result={''}
            //         h1={''}
            //         h2={''}
            //         h3={''} />,
            // },

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
                <p className="pYou" style={{textAlign: 'left'}}>{props.cipher}</p>

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
    return (<motion.div
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{
                duration: 1.5,
            }}
            initial={{opacity: 0}} className={'challenge-container'}>
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

        </motion.div>

    )
}

export default Challenges
