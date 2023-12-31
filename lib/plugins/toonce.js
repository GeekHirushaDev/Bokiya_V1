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
    name: ['toonce'],
    alias: ['toviewonce','tonce'],
    category: "convert",
    desc: `Convert media into once veiw message.`
  };
}

exports.getCommand = async (mime, text, BokiyaDev, pika) => {
require('../../config');
    const { unlinkSync } = require('fs');
    const { sleep } = require('../lib/myfunc');
//    if (!) return pika.reply(`Reply or tag a image or video media.`);
    if (!pika.quoted || !/image/.test(mime) && !/video/.test(mime)) return pika.reply('Please tag a image or video media to proceed.');
    const isPromt = true; // true to send tip message | false to don't send tip message 
    const promtMessage = '*Promt:* You can put a message text with command to send in *once view* media.';
    const mediaMess = await BokiyaDev.downloadAndSaveMediaMessage(pika.quoted);
    const caption = text ? text : null;
    (text) ? null : pika.reply(promtMessage);
    (/image/.test(mime))
    ? await BokiyaDev.sendMessage(pika.chat, {
            caption: caption,
            image: { url: mediaMess },
            viewOnce: true
            }, { quoted: pika })
    : await BokiyaDev.sendMessage(pika.chat, {
            caption: caption,
            video: { url: mediaMess },
            viewOnce: true
            }, { quoted: pika });
    await sleep(1000);
    unlinkSync(mediaMess);
    }


 