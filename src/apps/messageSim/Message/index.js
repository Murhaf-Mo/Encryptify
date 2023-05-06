import React from 'react';
import moment from 'moment';
import '../MessageList/Messenger.css';




function encode(text) {
    let array = [];
    for (let i = 0; i < text.length; i++) {
        array.push(text[i].charCodeAt(0))
    }
    return array
}


// eslint-disable-next-line no-extend-native
String.prototype.decrypt = function (key) {
    const keyEncoded = encode(key)
    if (typeof atob === 'undefined') {
        global.atob = b64Encoded => new Buffer(b64Encoded, 'base64').toString();
    }
    let array = JSON.parse(atob(this.toString()))
    let decrypted = array.map(x => {
        keyEncoded.reverse()
        x = parseInt(x)
        for (let i of keyEncoded) {
            x = x - 1 >> i % 8
        }
        return x;
    })
    return String.fromCharCode(...decrypted)
}

function encrypt(text, key) {
    const encoded = encode(text);
    const keyEncoded = encode(key);
    // console.log(keyEncoded)
    let array = encoded.map(x => {
        x = parseInt(x)
        for (let i of keyEncoded) {
            x = x + 1 << i % 8
        }
        keyEncoded.reverse()
        return x;
    })
    if (typeof btoa === 'undefined') {
        global.btoa = str => new Buffer(str, 'binary').toString('base64');
    }
    return btoa(JSON.stringify(array))
}


export function Message2(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble"  title={friendlyTimestamp}>
            { encrypt(data.message, '8223')}
          </div>
        </div>
      </div>
    );
}




export  function Message (props) {
    const {
        data,
        isMine,
        startsSequence,
        endsSequence,
        showTimestamp
    } = props;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
        <div className={[
            'message',
            `${isMine ? 'mine' : ''}`,
            `${startsSequence ? 'start' : ''}`,
            `${endsSequence ? 'end' : ''}`
        ].join(' ')}>
            {
                showTimestamp &&
                <div className="timestamp">
                    { friendlyTimestamp }
                </div>
            }

            <div className="bubble-container">
                <div className="bubble" title={friendlyTimestamp}>
                    { data.message }
                </div>
            </div>
        </div>
    );
}