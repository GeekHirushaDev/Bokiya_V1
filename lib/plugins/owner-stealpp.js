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
    name: ['stealpp'],
    alias: ['stealdp', 'stealprofilepic'],
    category: "owner",
    desc: "Steal anyone's profile picture."
  };
}

exports.getCommand = async (text, userOwner, userSudo, botNumber, BokiyaDev, pika) => {
require('../../config');
    if (!userOwner && !userSudo) return pika.reply(message.owner);
    if (!text && !pika.quoted) return pika.reply("Tag or mention a user to steal his/her profile picture.");
    const user = pika.quoted ? pika.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (user === botNumber) return pika.reply("Don't tag this bot's own message!");
  try {
  const pfp = await BokiyaDev.profilePictureUrl(user, 'image');
  await pika.react("✅");
    BokiyaDev.updateProfilePicture(botNumber, { url: pfp })
    .then( pika.reply(message.success));
      } catch (e) {
  return pika.reply("Profile picture not found or the user's profile picture is private.");
    }
  }
