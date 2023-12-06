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
    name: ['leave'],
    alias: ['leavegc','leavegroup','left','leftgc'],
    category: "owner",
    desc: "To leave any group from bot's number."
  };
}

exports.getCommand = async (userOwner, userSudo, BokiyaDev, pika) => {
require('../../config');
  const { sleep } = require('../lib/myfunc');
  if (!pika.isGroup) return pika.reply(message.group);
  if (!userOwner && !userSudo) return pika.reply(message.owner);
  await BokiyaDev.sendMessage(pika.chat, {
    text: `Leaving in 3 seconds.`,
  }, { quoted: pika });
  await sleep(3000);
  await BokiyaDev.groupLeave(pika.chat)
    .catch((err) => pika.reply(message.error));
  await BokiyaDev.sendMessage(pika.sender, {
    text: `✅ Successfully left the group chat by @${pika.sender.split("@")[0]}`,
    mentions: [pika.sender],
  }, { quoted: pika });
}



