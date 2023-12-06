/**
 B O K I Y A - #v1

🔗 Dev: https://wa.me/94755681782 (@Bokiya_Developers)
🔗 Management: (@teamolduser)

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

function cmdName() {
  return {
    name: ['igdl'],
    alias: ['instadl'],
    category: "download",
    desc: "Download Insta video posts in HD."
  };
}

async function getCommand(text, BokiyaDev, pika){
require('../../config');
  const axios = require('axios');
  if (!text) return pika.reply('I needed a insta video link.');
  if (!text.includes("instagram.com/")) return pika.reply("Please enter a valid insta video url!");
  try {
  let get = await axios.get("https://inrl-web.onrender.com/api/insta?url=" + text);
  let res = get.data;
  pika.reply(message.wait);
  await pika.react("↙️");
  await BokiyaDev.sendMessage(pika.chat, {
                video: { url: res.result[0] },
                caption: `*${themeemoji} Url : _${text}_*`,
                headerType: 4
              },
            { quoted: pika }
           );
         } catch {
      pika.reply(message.error);
     }
  }
module.exports = { cmdName, getCommand }
