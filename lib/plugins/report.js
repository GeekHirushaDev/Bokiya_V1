/**
 B O K I Y A - #v1

🔗 Dev: https://wa.me/94755681782 (@Bokiya_Developers)
🔗 Team: GH Deve🚀opers

📜 GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

📌 Permission & Copyright:
If you're using any of these codes, please ask for permission or mention https://github.com/GeekHirushaDev/Bokiya_V1 in your repository.

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
    name: ['report'],
    alias: ['bug','glitch'],
    category: "general",
    desc: `Reports bugs and errors to the developer..`
  };
}

exports.getCommand = async (text, botNumber, BokiyaDev, pika) => {
require('../../config');
 const { modList } = require('../lib/mongoDB');
 const { sleep } = require('../lib/myfunc');
 const modded = await modList();
  if (!text) return pika.reply('Please enter a error location where you caught the error.');
  const devs = [botNumber, ownernumber + "@s.whatsapp.net", ...modded];
  const sending = await BokiyaDev.sendMessage(pika.chat, {
          text: '🔃 Reaching Devs...'
         }, {quoted:pika});
  for (let report of devs) {
  await BokiyaDev.sendMessage(report, {
          text: `\`\`\`⌈ Bug Reports ⌋\`\`\`\n\n` +
               `*🌟 Name:* @${pika.sender.split("@")[0]}\n` +
               `*🤖 Bot:* @${botNumber.split("@")[0]}\n\n` +
               `*🔮 Reports:* ${text}`,
          mentions: [pika.sender, botNumber]
       }, {quoted:pika});
  await sleep(100);
     }
  await BokiyaDev.sendMessage(pika.chat, {
          text: '✅ Thanks for reporting, please take a screenshot of the error and send to wa.me/94755681782 if possible.',
          edit: sending.key, });
  }


 