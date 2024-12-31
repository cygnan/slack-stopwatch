import {sendMsg} from "./SlackHandler";

require('dotenv').config();

const conversationId = process.env.conversationId || '';
if (conversationId === '') new Error("conversationId is undefined");
const token = process.env.token || '';
if (token === '') new Error("token is undefined");
const mac = process.env.mac || '';
if (mac === '') new Error("mac is undefined");
const iface = process.env.iface || null;
const btnName = process.env.btnName || '';


var dash_button = require('node-dash-button');
var dash = dash_button(mac, iface, null, 'arp'); //address from step above
dash.on("detected", function () {
    console.log(`Amazon Dash Button${btnName != '' ? ` \`${btnName}\` `: ' '}has been pressed.`);
    startStopWatch();
});


const startStopWatch = (): void => {
    // 時間とメッセージのペアをオブジェクトとして配列に格納
    const timeMessagePairs = [
        {time: 0 * 60, message: 'カウントを開始しました！'},
        {time: 20 * 60, message: '20分経過しました！'},
        {time: 25 * 60, message: '25分経過しました！'},
        {time: 40 * 60, message: '40分経過しました！'},
        {time: 45 * 60, message: '45分経過しました！'}
    ];

    // forEachを使って各時間でメッセージを出力
    timeMessagePairs.forEach(({time, message}) => {
        setTimeout(() => {
            console.log(message);  // 時間と対応するメッセージを出力
            sendMsg(message, token, conversationId);
        }, time * 1000);  // 時間をミリ秒に変換
    });
};

