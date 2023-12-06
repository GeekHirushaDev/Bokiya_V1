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
require('../../config');
  return {
    name: ['warn','delwarn','warnoff'],
    alias: ['addwarn'],
    category: "owner",
    desc: `Bot will warn ${global.warns} times to a user then it'll take a action (exmaple: ban, block, remove)`
  };
}

exports.getCommand = async (userSudo, userOwner, botAdmin, command, args, text, botNumber, BokiyaDev, pika) => {
  require('../../config');
  if (!userOwner && !userSudo) return pika.reply(message.owner);
  if (!text && !pika.quoted) return pika.reply(`Tag a user to ${command}`);
  await pika.react("⚠️");
  const { warnUser } = require('../lib/mongoDB');
  const isNumBut = args[0] === 'numBut';
  const userID = isNumBut ? args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : pika.quoted ? pika.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
//  if (!userID.includes(Number())) return pika.reply('abc')
  const reason = (text)
                  ? isNumBut
                  ? text.replace(`${args[0]} `, '').replace(`${args[1]} `, '')
                  : text//.replace(`${args[0]} `, '')
                  : 'Not Provided';
  const actionType = (
  ['warn', 'addwarn'].includes(command) ? 'add' :
  ['delwarn'].includes(command) ? 'delete' :
  ['warnoff'].includes(command) ? 'remove' :
  null
);
await warnUser(userID, actionType, reason, BokiyaDev, botAdmin, botNumber);
};

 
 
 
 
