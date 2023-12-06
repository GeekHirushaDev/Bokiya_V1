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
    name: ['anticall'],
    category: "owner",
    alias: [],
    desc: "No one will able to call, while it's turned on."
  };
}

exports.getCommand = async (prefix, command, userOwner, userSudo, args, BokiyaDev, pika) => {
require('../../config');
    if (!userOwner && !userSudo) return pika.reply(message.owner);
    await pika.react("📵");
    const { updateSwitch } = require('../lib/mongoDB');
    switch (args[0]) {
      case 'on':
        await updateSwitch('anticall', true);
        break;
      case 'off':
        await updateSwitch('anticall', false);
        break;
      default:
        pika.reply(`Type *${command} on/off*`);
        break;
    }
   }



