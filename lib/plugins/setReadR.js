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
    name: ['setread'],
    alias: ['readreceipts','setreadp'],
    category: "whatsapp",
    listMode: true,
    desc: "Change the read receipt privacy."
  };
}

exports.getCommand = async (userSudo, userOwner, args, botNumber, BokiyaDev, pika) => {
require('../../config');
   if (userSudo) {
   if (!userOwner) return pika.reply("Sorry, i know you're the sudo of this bot but i can't provide you this private data.");
     }
   if (!userOwner) return pika.reply(message.owner);
   const checkPrivacy = await BokiyaDev.fetchPrivacySettings(BokiyaDev.user.id);
   const message = `*🔖 Current setting:* ${(checkPrivacy.readreceipts === 'all')
        ? 'Everyone'
        : (checkPrivacy.readreceipts === 'contacts')
        ? 'Only Contacts'
        : (checkPrivacy.readreceipts === 'contact_blacklist')
        ? 'Contacts Except'
        : (checkPrivacy.readreceipts === 'none')
        ? 'Nobody'
        : 'Unknown'}

\`\`\`Reply a number to select:\`\`\`

----------------------------------------->

*1* 👤 All:
Iɴꜰᴏ➛ The bot will receive or send read receipts.

----------------------------------------->

*2* 🎐 Nobody:
Iɴꜰᴏ➛ The bot won't receive or send read receipts.

_ID: QA13_`
   if (!args[0]) return pika.reply(message);
   let choice;
   switch (args[0]) {
     case 'all':
      choice = 'all';
     break;
     case 'nobody':
      choice = 'none';
     break;
     default:
       return pika.reply('*⚠️ Invalid option!*\n\n' + message);
     }
   if (checkPrivacy.readreceipts == choice) return pika.reply("Already activated this privacy option, choose another.");
   await BokiyaDev.updateReadReceiptsPrivacy(choice);
   await pika.react("✨");
   pika.reply(message.success);
   }
   
   
   
   
   
   