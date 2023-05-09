import {Button, ConfigProvider, Input, message} from "antd";
import {GithubOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {useForm, ValidationError} from '@formspree/react';


function Footer() {
    const [state, handleSubmit] = useForm("mayzdglg");
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Message Sent successfully!',
                duration: 2,
            });
        }, 2000);
    };
    return (<div className={"footer"}>
            <div className={"footer-container2"}>
                <form onSubmit={handleSubmit} className={"footer-v"}>
                    <p className={"b-light"}> Feedback</p>
                    <ConfigProvider theme={{token: {colorTextBase: "#ffffff", colorBgBase: "#19191c", colorFill: "#f9f9f9", borderRadius: 0, colorText: "#ffffff", colorPrimary: "#ffffff", colorBorder: "#B5B5B5", colorBorderSecondary: "#76767d",},}}>
                        <div className={'footer-input'}>

                        <Input required name={"name"}
                               id="name"
                               placeholder={"Name"}
                               style={{width: '60%',}}
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        </div>
                        <div className={'footer-input'}>
                            <Input required name={"message"}
                                   id="message"
                                   placeholder="Message"
                                   style={{
                                       width: '80%',

                                   }}
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                            <p className={"b-light"} style={{fontSize: "var(--step--2)", paddingTop: "2%", paddingBottom: "1rem", marginBottom: ' 0'}}>
                                By submitting you will be helping me improve on the content of this project.
                            </p>
                    </ConfigProvider>
                    <ConfigProvider theme={{token: {colorTextBase: "#ffffff", colorBgBase: "#19191c", colorFill: "#f9f9f9", colorText: "#ffffff", colorPrimary: "#19191c", colorBorder: "#ffffff", colorBorderSecondary: "#76767d",},}}>
                        {contextHolder}
                        <Button onClick={openMessage} htmlType="submit"  disabled={state.submitting} type={"primary"} shape="round"
                                size={"large"} style={{
                            border: "1px",
                            borderColor: "#B5B5B5",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            paddingTop: '4px',
                            fontSize: "var(--step--1)"

                        }}>
                            Submit

                        </Button>
                    </ConfigProvider>
                </form>

                <div className={"footer-v"}>
                    <p className={"b-light2"}> Find Me</p>
                    <div className={"footer-container"} style={{paddingLeft: "5%"}}>
                        <div className={"footer-v"}>
                            <Button href="https://www.linkedin.com/in/murhaf-abul-ees-17508418b/" target="_blank" type="text"
                                    size={"large"} style={{"color": "white",fontSize: "var(--step-0"}}
                                    icon={<LinkedinOutlined/>}>LinkedIn</Button>
                            <Button href="https://www.instagram.com/murhaf300/" target="_blank" type="text"
                                    size={"large"} style={{"color": "white",fontSize: "var(--step-0"}}
                                    icon={<InstagramOutlined/>}>Instagram</Button>
                        </div>
                        <div className={"footer-v"}>
                            <Button href="https://github.com/Murhaf-Mo/Encryptify" target="_blank" type="text"
                                    size={"large"} style={{"color": "white",fontSize: "var(--step-0"}} icon={<GithubOutlined/>}>GitHub</Button>
                            <Button href="https://api.whatsapp.com/send?phone=96598981400" target="_blank" type="text"
                                    size={"large"} style={{"color": "white",fontSize: "var(--step-0"}}
                                    icon={<WhatsAppOutlined/>}>WhatsApp</Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Footer
