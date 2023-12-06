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
    name: ['modlist'],
    alias: ['mods','cowners'],
    category: "owner",
    desc: "See the list of users that are co-owners."
  };
}

exports.getCommand = async (userOwner, userSudo, BokiyaDev, pika) => {
require('../../config');
  if (!userOwner && !userSudo) return pika.reply(message.owner);
  const { modList } = require('../lib/mongoDB');
  const modded = await modList();
await pika.react("✨");
 let users = `\`\`\`⌈ Mod Users List ⌋\`\`\`\n\n*[•]* 👑 @${ownernumber}\n`;
 let count = 1;
 if (modded.length <= 0) return pika.reply('No one is a mod yet.');
  for (let user of modded) {
  users += `*${count++}* 👤 @${user.split("@")[0]}\n`;
  }
  users += `\n*Reply a number to delete that user.*\n\n_ID: QA19_`;

  BokiyaDev.sendMessage(pika.chat, {
            text: users,
            mentions: modded.map(v => v).concat([ownernumber + '@s.whatsapp.net'])
          }, { quoted: pika });
}




