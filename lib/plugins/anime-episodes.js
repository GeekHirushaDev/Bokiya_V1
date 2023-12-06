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
    name: ['animeep'],
    alias: ['animeepisodes','animeepisode'],
    category: "owner",
    desc: `Get episodes info from the given anime ID.`
  };
}

exports.getCommand = async (text, args, BokiyaDev, pika) => {
require('../../config');
  const { Anime } = require("@shineiichijo/marika");
   if (!text) return pika.reply(`Please enter a anime ID, type *${prefix}searchAnime* to get anime ID.`);
  try {
   const process = await BokiyaDev.sendMessage(pika.chat, {
         text: message.wait
        }, { quoted: pika });
    const result = await new Anime().getAnimeEpisodes(args[0]);
     let cap = `This anime has *${result.data.length}* episodes!\n\n`;
     let count = 1;
        for (let i of result.data) {
              cap += "•----------------------------------------------•♪♪\n\n";
              cap += "*" + count++ + ". Title EN :* " + i.title + "\n";
              cap += "*🎀 Tittle JPN : " + i.title_japanese + "*\n";
              cap += "*🔮 Released at :* " + i.aired.split(":")[0] + "\n";
              cap += "*🌈 Url : _" + i.url + "_*\n\n";
            }
            cap += `\n_ID: QA25_\n${footer}`;
     await BokiyaDev.sendMessage(pika.chat, {
         text: (result.data.length === 0)
              ? 'There are no episodes in this anime title.'
              : cap,
         edit: process.key
        });
      } catch {
        pika.reply("```Check your anime ID```");
          } 
        }



  
        