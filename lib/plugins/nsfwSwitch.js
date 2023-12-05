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
    name: ['nsfw'],
    category: "group",
    alias: [],
    desc: "Users have to enable the group with this switch to use nsfw commands."
  };
}

exports.getCommand = async (args, botNumber, userOwner, botAdmin, userAdmin, groupMetadata, userSudo, command, prefix, anyaV2, pika) => {
  require('../../config');
  if (!pika.isGroup) return pika.reply(message.group);
  if (!userOwner && !userSudo && !userAdmin) return pika.reply(message.owner);
  if (!botAdmin) return pika.reply(message.botAdmin);
  if (!(args[0] === 'on') && !(args[0] === 'off')) return pika.reply(`Type *${prefix + command} on/off*`);
  await pika.react("👥");
  const { saveCase } = require('../lib/mongoDB');
  const done = await saveCase(pika.chat, args[0], 'nsfw');
  if (done) {
   await anyaV2.sendMessage(pika.chat, {
      text: `\`\`\`⚠️ Warning!!\`\`\`\n\nPlease check your command again before execution because now NSFW is enabled for pornographical commands.`,
      mentions: groupMetadata.participants.map(a => a.id),
      }, {quoted: pika});
     }
    }


