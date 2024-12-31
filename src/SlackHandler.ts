import {WebAPICallResult, WebClient} from "@slack/web-api";
import {GenericMessageEvent} from "@slack/types"


export const sendMsg = (msg: string, token: string, conversationId: string) => {
    // An access token (from your Slack app or custom integration - xoxp, xoxb)
    // const token = process.env.SLACK_TOKEN;
    const web = new WebClient(token);

    // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
    // const conversationId = 'C1232456';
    (async () => {
        // See: https://api.slack.com/methods/chat.postMessage
        const res: WebAPICallResult = await web.chat.postMessage({channel: conversationId, text: msg});

        // `res` contains information about the posted message
        const resMsg = res.message as GenericMessageEvent;
        console.log('Message sent:');
        console.log(`\`${resMsg.bot_profile?.name}\`: \`${resMsg.text}\``);
    })();
}
