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
    name: ['animechara2'],
    alias: ['animecharacter2'],
    category: "myanimelist",
    desc: "Get a picture randomly of the characters of the given anime ID."
  };
}

exports.getCommand = async (text, prefix, args, BokiyaDev, pika) => {
require('../../config');
  const { Anime } = require("@shineiichijo/marika");
  if (!text) return pika.reply("Please enter an anime ID. Type `" + prefix + "searchAnime` to get the anime ID.");
  try {
    pika.reply(message.wait);
    const result = await new Anime().getAnimeCharacters(args[0]);
    const pic = result.data[Math.floor(Math.random() * result.data.length)];
    const message = {
            image: { url: pic.character.images.jpg.image_url },
            caption: "*👤 Name :* " + pic.character.name + "\n"
                   + "*🦋 Role :* " + pic.role + "\n"
                   + "*🎐 Favourites :* " + pic.favorites,
              headerType: 4,
            };
            BokiyaDev.sendMessage(pika.sender, message, { quoted: pika });
          } catch {
    pika.reply("```Error, please check the ID again!```");
   }
 }




