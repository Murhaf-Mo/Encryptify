import React, {useEffect, useState} from 'react';
import moment from 'moment';
import './Messenger.css';
import Search from "antd/es/input/Search";
import {Message2, Message} from "../Message";


const MY_USER_ID = 'apple';

export default function MessageList(props) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages();
        // eslint-disable-next-line
    }, [])


    const getMessages = () => {
        const tempMessages = [{
            id: 1,
            author: 'orange',
            message: 'Hay lovely, I heard you were making a website to teach about encryption. Do you think anybody will understand or care about this? 🤔',
            timestamp: new Date().getTime()
        }, {
            id: 2,
            author: 'apple',
            message: 'What do you mean. This is my final project!! 😭😭😭😭😭',
            timestamp: new Date().getTime()
        }, {
            id: 3,
            author: 'orange',
            message: "I have took a look at your website. It seems to me that your little project isn't that appealing.",
            timestamp: new Date().getTime()
        }, {
            id: 4, author: 'orange', message: "It's SO BAD LOL ", timestamp: new Date().getTime()
        }, {
            id: 5, author: 'apple', message: 'OMG I cannot believe you rn', timestamp: new Date().getTime()
        }, {
            id: 6,
            author: 'orange',
            message: 'JK I hope you do well on presentation day 💕💕',
            timestamp: new Date().getTime()
        }, //     {
            //     id: 7,
            //     author: 'apple',
            //     message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
            //     timestamp: new Date().getTime()
            // }, {
            //   id: 8,
            //   author: 'orange',
            //   message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
            //   timestamp: new Date().getTime()
            // },
            // {
            //   id: 9,
            //   author: 'apple',
            //   message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
            //   timestamp: new Date().getTime()
            // },
            // {
            //   id: 10,
            //   author: 'orange',
            //   message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
            //   timestamp: new Date().getTime()
            // },
        ];
        setMessages([...messages, ...tempMessages])
    }

    const renderMessages = () => {
        let i = 0;
        let messageCount = messages.length;
        let tempMessages = [];

        while (i < messageCount) {
            let previous = messages[i - 1];
            let current = messages[i];
            let next = messages[i + 1];
            let isMine = current.author === MY_USER_ID;
            let currentMoment = moment(current.timestamp);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {
                let previousMoment = moment(previous.timestamp);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.author === current.author;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.author === current.author;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            tempMessages.push(<Message
                key={i}
                isMine={!isMine}
                startsSequence={startsSequence}
                endsSequence={endsSequence}
                showTimestamp={showTimestamp}
                data={current}
            />);

            // Proceed to the next message.
            i += 1;
        }

        return tempMessages;
    }
    const renderMessages2 = () => {
        let i = 0;
        let messageCount = messages.length;
        let tempMessages = [];

        while (i < messageCount) {
            let previous = messages[i - 1];
            let current = messages[i];
            let next = messages[i + 1];
            let isMine = current.author === MY_USER_ID;
            let currentMoment = moment(current.timestamp);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {
                let previousMoment = moment(previous.timestamp);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.author === current.author;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.author === current.author;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            tempMessages.push(<Message
                key={i}
                isMine={isMine}
                startsSequence={startsSequence}
                endsSequence={endsSequence}
                showTimestamp={showTimestamp}
                data={current}
            />);

            // Proceed to the next message.
            i += 1;
        }

        return tempMessages;
    }

    const renderMessages3 = () => {
        let i = 0;
        let messageCount = messages.length;
        let tempMessages = [];

        while (i < messageCount) {
            let previous = messages[i - 1];
            let current = messages[i];
            let next = messages[i + 1];
            let isMine = current.author === MY_USER_ID;
            let currentMoment = moment(current.timestamp);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {
                let previousMoment = moment(previous.timestamp);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.author === current.author;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.author === current.author;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            tempMessages.push(<Message2
                key={i}
                isMine={isMine}
                startsSequence={startsSequence}
                endsSequence={endsSequence}
                showTimestamp={showTimestamp}
                data={current}
            />);

            // Proceed to the next message.
            i += 1;
        }

        return tempMessages;
    }
    const onSearch = (value) => {
        setText(value)
        setSend(true)
    };

    const [text, setText] = useState("");

    const [send, setSend] = useState(false);


    return (


        <div className="messenger">
            <h2 className={'message-name'}>Recipient</h2>

            <div className="scrollable content">

                <div className="message-list-container">{renderMessages()} {send && <Message
                    key={1}
                    isMine={!true}
                    startsSequence={true}
                    endsSequence={false}
                    showTimestamp={false}
                    data={{
                        id: 3, author: 'orange', message: text, timestamp: new Date().getTime()
                    }}
                />}
                </div>
            </div>
            <h2 className={'message-name'}>Database/Server</h2>


            <div className="scrollable content">
                <div className="message-list-container">{renderMessages3()} {send && <Message2
                    key={1}
                    isMine={true}
                    startsSequence={true}
                    endsSequence={false}
                    showTimestamp={false}
                    data={{
                        id: 3, author: 'orange', message: text, timestamp: new Date().getTime()
                    }}
                />}</div>

            </div>

            <h2 className={'message-name'}>Sender</h2>

            <div className="scrollable content">
                <div className="message-list-container" style={{marginBottom: '0'}}>{renderMessages2()} {send && <Message
                    key={1}
                    isMine={true}
                    startsSequence={true}
                    endsSequence={false}
                    showTimestamp={false}
                    data={{
                        id: 3, author: 'orange', message: text, timestamp: new Date().getTime()
                    }}
                />}</div>

                <div className="compose">

                    <Search onSearch={onSearch} enterButton="Submit" placeholder="Type here..."/>

                </div>
            </div>
        </div>


    );
}




