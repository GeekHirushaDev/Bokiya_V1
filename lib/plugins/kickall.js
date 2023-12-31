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
    name: ['kickall'],
    alias: ['fkick'],
    category: "owner",
    desc: "You could remove any number(s) by country code or whole group by just a command."
  };
}

exports.getCommand = async (botAdmin, text, groupMetadata, botNumber, args, BokiyaDev, pika) => {
require('../../config');
 if (!pika.isGroup) return pika.reply(message.group);
 if (!botAdmin) return pika.reply(message.botAdmin);
  const { sleep } = require('../lib/myfunc');
  const { checkSwitch, updateSwitch } = require('../lib/mongoDB');
  const numbers = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);

/*
  const numbers = (args[0] === 'numBut')
                     ? text.replace(`${args[0]} `, '').split('|')
                     : groupMetadata.participants
    .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
    .map(item => item.id);
*/
 const checkLeft = await checkSwitch('goodbye');
 if (checkLeft) {
  await updateSwitch('goodbye', false);
  }
 
 for (let remove of numbers) {
 await BokiyaDev.groupParticipantsUpdate(pika.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 pika.reply(message.success + '\n\n' + '_( ! ) Disabled "Goodbye alert" to avoid spam, please turn it again if needed._');
}




