/**
 B O K I Y A - #v1

🔗 Dev: https://wa.me/94755681782 (@PikaBotz)
🔗 Team: GH Deve🚀opers

📜 GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

📌 Permission & Copyright:
If you're using any of these codes, please ask for permission or mention https://github.com/PikaBotz/Anya_v2-MD in your repository.

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
    name: ['rateme'],
    alias: ['rate'],
    category: "group",
    desc: "Rate any given query with random numbers."
  };
}

exports.getCommand = async (text, prefix, anyaV2, pika) => {
require('../../config');
 if (!text) return pika.reply(`*Example:* ${prefix}rate my DP`);
 function randomRating() {
  const randomNumber = Math.floor(Math.random() * 101);
  const emojiMatch = randomNumber.toString().padStart(3, '0');
    const emojiMake = emojiMatch
    .split('')
    .map(digit => `${digit}\uFE0F\u20E3`)
    .join('');
  return emojiMake;
    }
  pika.reply(`*Rating "${text}":*\n➥ _${randomRating()} points!_`);
}
  
  
  
  
  
 