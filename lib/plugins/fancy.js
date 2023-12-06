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
const fancyList = [];
for (let i = 1; i <= 59; i++) {
  fancyList.push(`fancy${i}`);
  }
  return {
    name: ['fancy'],
    alias: [].concat(fancyList),  // Auto generated fancy, fancy1 - fancy59
    category: "tools",
    desc: "Make stylish fancy texts."
  };
}

async function getCommand(react, command, prefix, text, BokiyaDev, pika) {
  let count = 1;
  let styler = "";
  const { listall } = require('../lib/stylish-font');
     styler += `*🔰 Exmaple :* ${prefix}fancy32 ${text ? text : "Hentai"}\n\n`;
  for (let i of listall(text ? text : "Enter Text")){
     styler += `${count++}. ${i}\n`;
     }
  await pika.react("✨");
  (command == 'fancy')
  ? pika.reply(styler)
  : pika.reply(listall(text ? text : "Enter Text")[Number(command.split("ncy")[1]) - 1]);
  }
module.exports = { cmdName, getCommand }

