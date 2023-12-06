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
    name: ['animecharacter'],
    alias: ['animechara'],
    category: "owner",
    desc: `Get episodes info from the given anime ID.`
  };
}

exports.getCommand = async function (prefix, text, args, BokiyaDev, pika) {
  const { Anime } = require("@shineiichijo/marika");
  if (!text) return pika.reply(`Please enter an anime ID, type *${prefix}searchAnime* to get an anime ID.`);
  try {
  const wait = await BokiyaDev.sendMessage(pika.chat, {
     text: message.wait
    }, {quoted:pika});
    const result = await new Anime().getAnimeCharacters(args[0]);
    let cap = `\`\`\`Reply a number:\`\`\`\n *1* for getting this anime's character pics randomly!\n\n\n`;
       cap += `There are *${result.data.length}* major characters in this anime!\n\n\n`;
    for (let i of result.data) {
      cap += `*👤 Name :* ${i.character.name}\n`;
      cap += `*🦋 Role :* ${i.role}\n`;
      cap += `*🎐 Favourites :* ${i.favorites}\n\n`;
    }
     cap += `🌈 ID : ${args[0]}\n_ID: QA25_\n${footer}`;
    await BokiyaDev.sendMessage(pika.chat, {
        text: cap,
        edit: wait.key, });
  } catch {
    pika.reply("```Error, please check the ID again!```");
  }
}


  
        