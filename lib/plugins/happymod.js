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
    name: ['happymod'],
    category: "search",
    alias: ['hapimod','hapymod','happymode'],
    desc: "To search for premium mod apks directly from happymod.com ."
  };
}

exports.getCommand = async (BokiyaDev, pika, text, args, command) => {
require('../../config');
  if (!text) return pika.reply("Enter a search term for a mod apk.");
  await pika.react("↘️");
  const wait = await BokiyaDev.sendMessage(pika.chat, {
       text: mess.wait
      }, {quoted:pika});
 try {
  const { get } = require('axios');
  const { load } = require('cheerio');
  async function happymod(query) {
  return new Promise((resolve, reject) => {
  get(`https://www.happymod.com/search.html?q=${query}`).then(async response => {
  const $ = load(response.data);
  let count = 1;
  ress = []
   $("div.pdt-app-box").each(function(c, d) {
        name = $(d).find("a").text().trim();
        thumbnail = $(d).find("img.lazy").attr('data-original');
        link = $(d).find("a").attr('href');
        link2 = `https://www.happymod.com${link}`
        const Data = {
          count: count++,
          author: "PikaBotz",
          thumbnail: thumbnail,
          name: name,
          link: link2
         }
         ress.push(Data)
           })
         resolve(ress);
       }).catch(reject)
     });
   };
   const response = await happymod(text);
   if (response.length === 0) return await BokiyaDev.sendMessage(pika.chat, {
       text: "❌ No results found",
       edit: wait.key });
   const result = response[args[1] ? args[1] : 0];
   BokiyaDev.sendMessage(pika.chat, {
       image: { url: result.thumbnail },
       caption: `*🍂Title: ${result.name.replace("More", "").replace("[Unlocked]", "").replace("[Pro]", "").trim()}*\n\n` +
                `*📍Term:* ${text}\n` +
                `*🔗Link:* ${result.link}\n\n` +
                `\`\`\`Reply a number to:\`\`\`\n` +
         //       `\t\t*1 Download Apk*\n\t\t*2 Next Apk*\n\n` +
                `\t\t*1 Next Apk*\n\n` +
                `_get: ${command}_\n_rank: ${result.count}_\n_ID: QA30_`
             },
        {quoted: pika});
      } catch {
      pika.reply(mess.error);
     }
  }