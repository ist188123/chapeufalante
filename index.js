const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');


client.on("message", async (msg) => {
//console.log(tamanhoFicheiro)
var mensagem=msg.content;


if (mensagem.startsWith('!ola')) {

 msg.channel.send({
                    embed: {
                        color: 3447003,
                        description: "Grupo Discord Pinhal novo\nHarry Potter Wizard Unit\n\"
                    }
                });


}





});

client.login(process.env.BOT_TOKEN);
