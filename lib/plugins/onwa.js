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
    name: ['onwa'],
    alias: ['iswa','checkwa','iswhatsapp','checkwhatsapp'],
    category: "tools",
    desc: "Check the given number is on WhatsApp?."
  };
}

exports.getCommand = async (text, BokiyaDev, pika) => {
require('../../config');
    const { tiny, fancy13 } = require('../lib/stylish-font');
      if (!text && !pika.quoted) return pika.reply("Provide me a number.");
      if (!Number(pika.quoted ? pika.quoted.sender.split("@")[0] : text.split("@")[0])) return pika.reply('Invalid query.');
    const id = pika.quoted ? pika.quoted.sender : text.replace(/[^0-9]/g, '');
    const result = await BokiyaDev.onWhatsApp(id.split("@")[0])
      try {
      if (!result[0].exists) return pika.reply("Can't find this number, maybe this number is not available on WhatsApp.");
    const status = await BokiyaDev.fetchStatus(result[0].jid);
      await pika.react("✅");
      BokiyaDev.sendMessage(pika.chat, {
             image: { url: await BokiyaDev.profilePictureUrl(result[0].jid, 'image') },
             caption: `*✅ This number is available on WhatsApp:*\n\n` +
                      `*👤 ${tiny("Name")} :* @${result[0].jid.split("@")[0]}\n` +
                      `*🔖 ${tiny("Bio")} :* ${status
                               ? fancy13(status.status)
                               : 'null'}`,
             headerType: 4,
             mentions: [result[0].jid]
             }, { quoted: pika });
           } catch {
           return pika.reply(message.error);
           }
          }
   
   
