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
    name: ['topanime'],
    alias: ['topani','topanim'],
    category: "myanimelist",
    desc: 'Get list of trending animes directly from myanimelist.net'
  };
}

exports.getCommand = async (prefix, BokiyaDev, pika) => {
  require('../../config');
  await pika.react("✨");
  const process = await BokiyaDev.sendMessage(pika.chat, {
      text: message.wait
     }, {quoted:pika});
  const { Anime } = require("@shineiichijo/marika");
  const result = await new Anime().getTopAnime();
  if (result.data.length < 1) return pika.reply('Data not found please check the title again.');
  const header = "```Reply a number:```\n" +
    "*1.<number>* for pictures.\n" +
    "*2.<number>* for episodes.\n" +
    "*3.<number>* for information.\n" +
    "*4.<number>* for character info.\n\n" +
    "👉🏻 Example: 2.4\n\n";
  const animeDetails = result.data.map((anime, index) => (
    `•----------------------------------------------•♪♪\n\n` +
    `*${index + 1}. Title :* ${anime.title}\n` +
    `*🎀 Type :* ${anime.type}\n` +
    `*🔮 Rank :* ${anime.rank}\n` +
    `*🌈 ID : ${anime.mal_id}*\n\n`
  )).join('');
  const response = `${header}${animeDetails}_ID: QA24_\n${footer}`;
  await BokiyaDev.sendMessage(pika.chat, {
      text: response,
      edit: process.key, });
}

        

