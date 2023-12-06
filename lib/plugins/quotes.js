exports.cmdName = () => ({
  name: ['quotes'],
  alias: ['quote','quot'],
  category: "fun",
  desc: "Get Savage, Sad, Rage anime quotes."
});

exports.getCommand = async (BokiyaDev, pika) => {
require('../../config');
   await pika.react("✨");
   const response = await BokiyaDev.sendMessage(pika.chat, {
          text: message.wait,
         }, { quoted: pika });
   const { tiny } = require('../lib/stylish-font');
   const fetch = require('node-fetch');
   fetch('https://raw.githubusercontent.com/PikaBotz/important-API/main/text-Api/quotes.json')
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    const quotes = randomQuote.quote;
//    const anime = randomQuote.anime;
    const character = randomQuote.name;
    BokiyaDev.sendMessage(pika.chat, {
      text: `*👤 ${tiny("Character")} :* ${character}\n\n*📌 ${tiny("Quote")} :* ${quotes}`,
      edit: response.key,
    });        
  })
  .catch(error => console.error('Error:', error));
}
