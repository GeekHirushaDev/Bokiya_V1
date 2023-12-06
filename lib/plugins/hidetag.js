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
    name: ['hidetag'],
    alias: ['htag'],
    category: "admin",
    desc: "Tag everyone in the group with/without text."
  };
}

exports.getCommand = async (userSudo, userOwner, userAdmin, botAdmin, text, groupMetadata, BokiyaDev, pika) => {
 await pika.react("👥");
  if (!pika.isGroup) return pika.reply(message.group); 
  if (!botAdmin) return pika.reply(message.botAdmin);
  if (!userAdmin && !userOwner && !userSudo) return pika.reply(message.admin);  
  BokiyaDev.sendMessage(pika.chat, {
            text: `${pika.quoted ? (pika.quoted.text.length > 1 ? pika.quoted.text : '‎') : (text ? text : '‎')}`,
            mentions: groupMetadata.participants.map(a => a.id)
            },{
          quoted:pika
     });
 }
