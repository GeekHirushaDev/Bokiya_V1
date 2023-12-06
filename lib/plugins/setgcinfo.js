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
    name: ['setdesc','setgcpp','setgcname'],
    alias: ['setdescription','setgrouppp','setsubject'],
    category: "admin",
    desc: "Change group chat's informations."
  };
}

exports.getCommand = async (command, botAdmin, userSudo, userOwner, userAdmin, mime, prefix, text, BokiyaDev, pika) => {
  require('../../config');
  const fs = require('fs');
  if (!pika.isGroup) return pika.reply(message.group);
  if (!botAdmin) return pika.reply(message.botAdmin);
  if (!userAdmin && !userOwner && !userSudo) return pika.reply(message.admin);
    switch (command) {
     case 'setdesc': case 'setdescription':
     if (!text) return pika.reply("Please enter a description to set as this group chat's description");
     await BokiyaDev.groupUpdateDescription(pika.chat, text)
        .catch((err) => {
          pika.reply(message.error);
         });
     pika.reply(message.success);
     break;
     case 'setgrouppp': case 'setgcpp':
     if (!/image/.test(mime) || /webp/.test(mime)) return pika.reply(`Please reply with an image and include a caption *${prefix + command}*`);
     const profilePic= await BokiyaDev.downloadAndSaveMediaMessage(pika.quoted);
     await BokiyaDev.updateProfilePicture(pika.chat, { url: profilePic }).then((err) => { fs.unlinkSync(profilePic)
    });
//    fs.unlinkSync(profilePic);
    pika.reply(message.success);
    break;
    case 'setgcname': case 'setsubject':
     if (!text) return pika.reply("Please enter a text to set as this group chat's name");
     await BokiyaDev.groupUpdateSubject(pika.chat, text);
     pika.reply(message.success);
    break;
    }
}

   