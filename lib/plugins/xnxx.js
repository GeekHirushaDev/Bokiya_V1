/**
 B O K I Y A - #v1

🔗 Dev: https://wa.me/94755681782 (@PikaBotz)
🔗 Team: GH Deve🚀opers

📜 GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

📌 Permission & Copyright:
If you're using any of these codes, please ask for permission or mention https://github.com/PikaBotz/Anya_v2-MD in your repository.

⚠️ Warning:
- This bot is not an officially certified WhatsApp bot.
- Report any bugs or glitches to the developer.
- Seek permission from the developer to use any of these codes.
- This bot does not store user's personal data.
- Certain files in this project are private and not publicly available for edit/read (encrypted).
- The repository does not contain any misleading content.
- The developer has not copied code from repositories they don't own. If you find matching code, please contact the developer.

Contact: alammdarif07@gmail.com (for reporting bugs & permission)
          https://wa.me/94755681782 (to contact on WhatsApp)

🚀 Thank you for using Bokiya v1! 🚀
**/

exports.cmdName = () => {
  return {
    name: ['xnxx'],
    alias: [],
    category: "search",
    desc: "Search premium unlocked pornographical videos directly from xnxx.com web."
  };
}

exports.getCommand = async (prefix, command, text, anyaV2, pika) => {
require('../../config');
    const { isCaseEnabled } = require('../lib/mongoDB');
    if (!pika.isGroup) return pika.reply(message.group);
    const isEnabled = await isCaseEnabled("nsfw");
    if (!isEnabled.includes(pika.chat)) return pika.reply(message.nsfw);
    if (!text) return pika.reply("*Example :* " + prefix + command + " forehead kiss on pussy.");
    await pika.react("🤤");
    const { get } = require('axios');
    const process = await anyaV2.sendMessage(pika.chat, {
        text: message.wait
        }, {quoted:pika});
    const fetch = await get("https://api.zahwazein.xyz/searching/xnxx?apikey="
                       + global.zApiKey.one
                       + "&query="
                       + text );
    const video = fetch.data;
    console.log(video.result)
    let count = 1;
    let xnxx = `Total *${video.result.length}* results found.\n\n\`\`\`Reply a number to download\`\`\`\n\n`;
       for (let i of video.result) {
            xnxx += `*${count++}.* ${i.title}\n`;
    //        xnxx += `*⏱️ Duration :* _${i.duration}_\n`;
            xnxx += `*🌈 Link :* ${i.url} •\n\n\n`;
          }
       xnxx += `_ID: QA26_\n${footer}`;
   await anyaV2.sendMessage(pika.chat, {
        text: xnxx,
        edit: process.key, });
        }



