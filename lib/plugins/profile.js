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
    name: ['profile'],
    alias: ['profil'],
    category: "general",
    desc: "Get Your profile dashboard."
  };
}

exports.getCommand = async (userAdmin, BokiyaDev, pika) => {
require('../../config');
  pika.reply(`\`\`\`🔃 Fetching User...\`\`\``);
  const { checkWarn, checkModUser, checkBanUser } = require('../lib/mongoDB');
  const { getBuffer } = require('../lib/myfunc');
  const isMod = await checkModUser(pika.sender);
  const isBan = await checkBanUser(pika.sender);
  const warned = await checkWarn(pika.sender);
  const userBio = await BokiyaDev.fetchStatus(pika.sender);
  const isbsp = await BokiyaDev.getBusinessProfile(pika.sender);
  try { var pfp = await BokiyaDev.profilePictureUrl(pika.sender, "image");
  } catch (e) { var pfp = "https://i.ibb.co/D9G4snb/736007.png"; };
  let info = `\`\`\`>>> User Profile Dash\`\`\`\n\n`;
       info += `*👤 Name:* @${pika.sender.split("@")[0]}\n\n`;
       info += pika.isGroup ? `*☀️ User Admin:* ${userAdmin ? 'Yes!' : 'No!'}\n` : '';
       info += `*🌟 User Mod:* ${isMod ? 'Yes!' : 'No!'}\n`;
       info += `*⭕ User Ban:* ${isBan ? 'Banned!' : 'Not Banned!'}\n`;
       info += `*🛄 Business Acc:* ${isbsp ? 'Yes!' : 'No!'}\n\n`;
       info += `*🔮 Warns:* ${warned}/${warns}\n\n`;
       info += (!isbsp) ?`*✨ Bio:* ${userBio ? userBio.status : 'no bio'}\n\n${footer}`
                        : `*🍂 Business Cate:* ${isbsp.category}\n*💌 Desc:* ${isbsp.description}`;
  await BokiyaDev.sendMessage(pika.chat, {
     image: await getBuffer(pfp),
     caption: info,
     mentions: [pika.sender]
    }, {quoted:pika});
}
  
  
  
  
  
 