import {Button, ConfigProvider, Input} from "antd";
import {GithubOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {useForm, ValidationError} from '@formspree/react';


function Footer() {
    const [state, handleSubmit] = useForm("meqwlwrr");

    return (<div className={"footer"}>
            <div className={"footer-container"}>
                <form onSubmit={handleSubmit} className={"footer-v"}>
                    <p className={"b-light"}> Feedback</p>
                    <ConfigProvider theme={{token: {colorTextBase: "#ffffff", colorBgBase: "#19191c", colorFill: "#f9f9f9", borderRadius: 0, colorText: "#ffffff", colorPrimary: "#ffffff", colorBorder: "#B5B5B5", colorBorderSecondary: "#76767d",},}}>
                        <Input required name={"name"}
                               id="name"
                               placeholder={"Name"}
                               style={{width: '30%',}}
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <div>
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
                            <p className={"b-light"} style={{fontSize: "13px", paddingTop: "2%", paddingBottom: "3%"}}>
                                By submitting you will be helping me improve on the content of this project.
                            </p>
                        </div>
                    </ConfigProvider>
                    <ConfigProvider theme={{token: {colorTextBase: "#ffffff", colorBgBase: "#19191c", colorFill: "#f9f9f9", colorText: "#ffffff", colorPrimary: "#19191c", colorBorder: "#ffffff", colorBorderSecondary: "#76767d",},}}>
                        <Button htmlType="submit" disabled={state.submitting} type={"primary"} shape="round"
                                size={"large"} style={{
                            border: "1px",
                            borderColor: "#B5B5B5",
                            borderWidth: "1px",
                            borderStyle: "solid",

                        }}>
                            Submit

                        </Button>
                    </ConfigProvider>
                </form>

                <div className={"footer-v"}>
                    <p className={"b-light2"}> Find Me</p>
                    <div className={"footer-container"} style={{paddingLeft: "5%"}}>
                        <div className={"footer-v"}>
                            <Button href="https://www.youtube.com/watch?v=fOO1mWLGhh8" target="_blank" type="text"
                                    size={"large"} style={{"color": "white"}}
                                    icon={<LinkedinOutlined/>}>LinkedIn</Button>
                            <Button href="https://www.youtube.com/watch?v=PmD6ONQqi9Y" target="_blank" type="text"
                                    size={"large"} style={{"color": "white"}}
                                    icon={<InstagramOutlined/>}>Instagram</Button>
                        </div>
                        <div className={"footer-v"}>
                            <Button href="https://www.youtube.com/watch?v=IBP5NUDP28A" target="_blank" type="text"
                                    size={"large"} style={{"color": "white"}} icon={<GithubOutlined/>}>GitHub</Button>
                            <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" type="text"
                                    size={"large"} style={{"color": "white"}}
                                    icon={<WhatsAppOutlined/>}>WhatsApp</Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Footer
