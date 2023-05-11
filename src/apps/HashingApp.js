import React, {useState} from "react";
import sha256 from "crypto-js/sha256";
import {Button, message, Card, ConfigProvider, Form, Input} from 'antd';
import {motion, useScroll, useSpring} from "framer-motion";
import Spline from "@splinetool/react-spline";

function SignUp() {

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';


    const [vs, setVs] = useState(false)
    const onFinish = (values) => {
        console.log('Success:', values);
        setVs(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [vs2, setVs2] = useState(false)
    const [happened, setHappened] = useState(false)


    const onFinish2 = (values) => {
        console.log('Success:', values);
        setVs2(values)
        setHappened(true)

        if (vs.password === values.password) {

            messageApi.open({
                key, type: 'loading', content: 'Checking...',
            });
            setTimeout(() => {
                messageApi.open({
                    key, type: 'success', content: 'Correct Password!', duration: 2,

                });
            }, 1000);
        } else {
            messageApi.open({
                key, type: 'loading', content: 'Checking...',
            });
            setTimeout(() => {
                messageApi.open({
                    key, type: 'error', content: 'Wrong Password :(', duration: 2,
                });
            }, 1000);
        }


    };
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <ConfigProvider
            theme={{
                token: {
                    colorTextBase: "#ffffff",
                    colorBgBase: "black",
                    colorFill: "#f9f9f9",
                    colorText: "#B5B5B5",
                    colorPrimary: "#ffffff",
                    colorBorder: "#B5B5B5",
                    colorBorderSecondary: "#76767d",
                },
            }}
        >
            <>
                {contextHolder}

            </>
            <Card title="SignUp" size='large' style={{width: 'var(--card-width-app)', background: '#19191c'}}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}

                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{
                            required: true, message: 'Please input your username!',
                        },]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true, message: 'Please input your password!',
                        },]}
                    >
                        <Input.Password/>
                    </Form.Item>


                    <Form.Item
                        style={{paddingLeft:'40%'}}

                    >
                        <Button htmlType="submit" style={{padding: '0.5rem', paddingTop: '0', paddingBottom: '0'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title="Database" size='large' style={{
                width: 'var(--card-width-app)',
                marginTop: '3rem',
                marginBottom: '3rem',
                background: '#19191c',
                fontSize: 'var(--step--1)'
            }}>
                <div>
                    <strong>Username:</strong>
                    {vs && <p>{vs.username}</p>}
                </div>
                <div>
                    <strong>Hashed Password:</strong>{vs && <p>{sha256(vs.password).toString()}</p>}
                </div>
            </Card>
            <Card title="LogIn" size='large' style={{width: 'var(--card-width-app)', background: '#19191c'}}>
                <Form
                    name="basic2"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}

                    onFinish={onFinish2}
                    onFinishFailed={onFinishFailed2}
                    autoComplete="off"
                >


                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true, message: 'Please input your password!',
                        },]}
                    >
                        <Input.Password/>
                    </Form.Item>


                    <Form.Item
                        style={{paddingLeft:'40%'}}

                    >
                        <Button htmlType="submit" style={{padding: '0.5rem', paddingTop: '0', paddingBottom: '0'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <div className={'hash-res'}>
                <Card title="Stored Hashed Password" size='large'
                      style={{width: 300, marginTop: '1.5rem',marginBottom: '1.5rem', background: '#19191c', fontSize: 'var(--step--1)'}}>
                    {vs && <p>{sha256(vs.password).toString()}</p>}
                </Card>
                <div style={{
                    padding: '1.5rem',
                    fontSize: 'var(--step-5)',
                    display: "flex",
                    justifyContent: 'center'
                }}>
                    {vs.password === vs2.password ? <p>==</p> : <p>!=</p>}
                </div>
                <Card title="LogIn Hashed Password" size='large'
                      style={{width: 300, marginTop: '1rem',marginBottom: '1rem', background: '#19191c', fontSize: 'var(--step--1)'}}>
                    {happened && <p>{sha256(vs2.password).toString()}</p>}
                </Card>
            </div>
        </ConfigProvider>);
}

function HashingApp() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });


    return (<motion.div
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    transition={{
        duration: 0.5,
    }}
    initial={{opacity: 0}} className={'applications-container'}>
        <h1 style={{position: "absolute", left: '5%', top: '13%', fontSize: 'var(--step-7)'}}
            className={'cipher-title'}>Password Storage</h1>

        <Spline style={{height: '20rem'}} scene="https://prod.spline.design/ntO4EKGiPTwie5Pc/scene.splinecode"/>

        <div className={'small-container hash-logic'} style={{paddingTop: '0'}}>
            <SignUp/>


        </div>
        <article>
            <section>
                <h1>What is password hashing?</h1>

                <p>
                    Password hashing is the process of converting a plaintext password into a fixed-length, irreversible
                    string of characters that is nearly impossible to reverse engineer. This technique is commonly used
                    to securely store user passwords in databases, making it more difficult for attackers to steal or
                    misuse them.
                </p>
                <p>
                    Hashing helps protect users' privacy by ensuring that their actual
                    passwords are not stored in plain text, but instead are transformed into a hash.
                </p>

            </section>
            <section>
                <h1>How it works?</h1>

                <p>
                    When a user creates an account and chooses a password, the password is hashed using a strong,
                    one-way hashing algorithm. This means that the resulting hash cannot be used to reverse-engineer the
                    original password.

                </p>
                <p>
                    When the user logs in, the password they enter is hashed using the same algorithm, and the resulting
                    hash is compared to the hash that is stored in the database. If the two hashes match, the user is
                    authenticated and granted access.

                </p>
                <p>
                    The benefits of password storage using hashing are that it helps to protect user passwords from
                    being compromised in the event of a data breach, and also helps to prevent unauthorized access to
                    user accounts.

                </p>
            </section>
            <section>
                <h1>Where is it used?</h1>

                <p>
                    Password storage using hashing is used in many different systems and applications to securely store user passwords and protect user accounts and sensitive data. This includes online services, enterprise applications, mobile apps, operating systems, and network devices.
                </p>
                <p>
                    Password storage using hashing is used in Facebook, Dropbox, Microsoft Windows, Cisco routers, WordPress and many other systems and applications to protect user passwords and prevent unauthorized access to user accounts and sensitive data.
                </p>
            </section>
        </article>
        <motion.div className="progress" style={{scaleX}}/>

    </motion.div>);
}

export default HashingApp;