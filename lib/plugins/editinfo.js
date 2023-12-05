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
    name: ['editinfo'],
    category: "admin",
    alias: ['edigctinfo'],
    desc: "Open and close group info editing accessibility."
  };
}

exports.getCommand = async (args, prefix, botAdmin, userAdmin, userOwner, userSudo, command, anyaV2, pika) => {
  if (!pika.isGroup) return pika.reply(message.group);
  if (!botAdmin) return pika.reply(message.botAdmin);
  if (!userAdmin && !userOwner && !userSudo) return pika.reply(message.admin);
  if (args[0] === "on" || args[0] === "open") {
    await anyaV2.groupSettingUpdate(pika.chat, "unlocked")
      .then((res) => pika.reply(`Successfully Opened Edit Group Info`))
      .catch((err) => pika.reply(message.error));
  } else if (args[0] === "off" || args[0] === "close") {
    await anyaV2.groupSettingUpdate(pika.chat, "locked")
      .then((res) => pika.reply(`Successfully Closed Edit Group Info`))
      .catch((err) => pika.reply(message.error));
  } else {
    return pika.reply("Please type *" + prefix + command + " on/off*");
  }
}



