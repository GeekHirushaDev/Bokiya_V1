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
    name: ['flirt'],
    alias: [],
    category: "fun",
    desc: "Get some awesome flirting texts."
  };
}

exports.getCommand = async (pika) => {
require('../../config');
 const { get } = require('axios');
 function pickRandom(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
 await pika.react("😳");
    await get("https://raw.githubusercontent.com/PikaBotz/important-API/main/text-Api/flirting.json")
      .then((response) => {
       pika.reply("*Flirty~📩:* " + pickRandom(response.data).replace("@user", pika.pushName));
      });
     }
     