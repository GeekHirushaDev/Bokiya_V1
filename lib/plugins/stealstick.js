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
    name: ['take'],
    alias: ['st','steal','stealsticker'],
    category: "convert",
    desc: "Steal convert image or video media into stickers."
  };
}

exports.getCommand = async (mime, text, BokiyaDev, pika) => {
require('../../config');
await pika.react("🔮");
  const author_New = text
                   ? (text.includes("|") ? text.split("|")[1] : '')
                   : global.author;
  const packname_New = text
                   ? (text.includes("|") ? text.split("|")[0] : text)
                   : global.packname;                   
   const { unlinkSync } = require('fs');
   if (/image/.test(mime)) {
   const image = await BokiyaDev.downloadAndSaveMediaMessage(pika.quoted ? pika.quoted : pika);
   const stickerImg = await BokiyaDev.sendImageAsSticker(pika.chat, image, pika, {
         packname: packname_New,
         author: author_New
        })
      .catch((err) => {
              return pika.reply('Package ffmpeg not found.');
            });
    unlinkSync(image);
   } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return reply("Video duration should be only 10 seconds.");
    const video = await BokiyaDev.downloadAndSaveMediaMessage(pika.quoted ? pika.quoted : pika);
    const stickerVid = await BokiyaDev.sendVideoAsSticker(pika.chat, video, pika, {
              packname: packname_New,
              author: author_New,
            }).catch((err) => {
              return pika.reply('Package ffmpeg not found.');
            });
        unlinkSync(video);
       } else if (/webp/.test(mime)) {
   const image = await BokiyaDev.downloadAndSaveMediaMessage(pika.quoted ? pika.quoted : pika);
   const stickerImg = await BokiyaDev.sendImageAsSticker(pika.chat, image, pika, {
         packname: packname_New,
         author: author_New
        })
      .catch((err) => {
              return pika.reply('Package ffmpeg not found.');
            });
    unlinkSync(image);
     } else {
       return pika.reply('Please tag or send a image/video/sticker media with this command to steal.');
      }
     }
      
      
      
