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
    name: ['join'],
    alias: [],
    category: "owner",
    desc: "Join several groups by links."
  };
}

exports.getCommand = async (userOwner, userSudo, text, args, BokiyaDev, pika) => {
   require('../../config');
   const { isUrl } = require('../lib/myfunc');
   if (!userOwner && !userSudo) return pika.reply(message.owner);
   if (!text) return pika.reply("Enter the group link!");
   if (!isUrl(args[0]) && !args[0].includes("whatsapp.com")) return pika.reply("Link Invalid!");
   const joining = await BokiyaDev.sendMessage(pika.chat, {
      text: message.wait
   }, { quoted: pika });
   const result = args[0].split("https://chat.whatsapp.com/")[1];   
   BokiyaDev.groupAcceptInvite(result)
      .then((res) => {
         BokiyaDev.sendMessage(pika.chat, {
            text: message.success,
            edit: joining.key
         });
      })
      .catch((err) => {
         BokiyaDev.sendMessage(pika.chat, {
            text: message.error,
            edit: joining.key
         });
      });
}
