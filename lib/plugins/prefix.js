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

exports.cmdName = () => {
  return {
    name: ['prefix'],
    alias: [],
    category: "owner",
    listMode: true,
    desc: "Changed the prefix function according to your user taste."
  };
}

exports.getCommand = async (userOwner, userSudo, args, prefix, BokiyaDev, pika) => {
require('../../config');
  const { checkBanUser, savePREFIX } = require('../lib/mongoDB');
  const banned = await checkBanUser();
  if (!userOwner && !userSudo) return pika.reply(message.owner);
  if (!args[0]) return pika.reply(`\`\`\`Reply a number to save:\`\`\`\n\n  *1 Prefix Single*\n  *2 Prefix Multi*\n  *3 Prefix All*\n\n_ID: QA17_`);
  if (args[0] === 'all') {
   if (banned.length > 0) return pika.reply(`\`\`\`⚠️ Warning!!\`\`\`\n\nSomeone is banned, can't shift to *all prefix*. Type *${prefix}banlist* to get banned users list.`);
  }
await pika.react("✨");
await savePREFIX(args[0]);
}