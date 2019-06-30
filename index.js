const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');


client.on("message", async (msg) => {
//console.log(tamanhoFicheiro)
var mensagem=msg.content;
 var date = new Date();
 var add_minutes = function (dt, minutes) {
    var d = new Date(dt.getTime() + minutes * 60000),
        dformat = [mzero(d.getUTCHours() + 1),
        mzero(d.getMinutes())].join(':');

    return dformat;
}

var mzero = function (mzero) {
    if (mzero < 10) {
        mzero = "0" + mzero
    }
    return mzero;
}
 
 
 

if (mensagem.startsWith('\ola')) {

 msg.channel.send({
                    embed: {
                        color: 3447003,
                        description: "Grupo Discord Pinhal novo\nHarry Potter Wizard Unit\n"
                    }
                });
}
 
 if (mensagem.startsWith('!')) {
  
 

var mensagem=mensagem.substring(1)





if(mensagem.split(" ").length>3){

var minutosplantacao=0;
var horasplantacao=0;
var colher=0;

var tempoplantacao=mensagem.split(" ")[mensagem.split(" ").length-1];
var planta=mensagem.split(" ")[0];
var estufa=mensagem.substring(planta.length,mensagem.length-tempoplantacao.length).trim()

horasplantacao=tempoplantacao.substring(0, tempoplantacao.search("h"));
minutosplantacao=tempoplantacao.substring(tempoplantacao.search("h")+1, tempoplantacao.search("m"));

var horaatual = add_minutes(date, 0)
 var hora = add_minutes(date, parseInt(horasplantacao)*60+(parseInt(minutosplantacao)));
             //   var fecha = add_minutes(date, 45 + parseInt(tempo))

  
 colher=(parseInt(horasplantacao)*60+(parseInt(minutosplantacao)))*60000;
  
      
//me-----
    const raidinfomsg = new Discord.RichEmbed()
                            .setColor('#FF0000')
                            .setTitle("\@everyone")
                            .setURL('https://discord.js.org/')
                            .setAuthor('ESTUFA ', "https://torneiopokemongopinhalnovo.webnode.pt/_files/200000041-f1f70f2ee3/450/greenhouse.png", 'https://discord.js.org')
                            .setThumbnail("https://torneiopokemongopinhalnovo.webnode.pt/_files/200000041-f1f70f2ee3/450/greenhouse.png")
                            .addField('Estufa', estufa)
                            //.addBlankField()
                            .addField('Planta', "**" + planta + "**", true)
                            .addField('Colher', "**" + hora  + "**", true)
                            .setTimestamp()
                            .setFooter('Anunciado por : ' + msg.author.username, 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');
                           msg.guild.channels.find("name", "estufas").sendMessage(raidinfomsg);
                  
setTimeout(function () {
 /*
  msg.channel.send({
                    embed: {
                        color: 3447003,
                        description: "PRONTO PARA COLHER\n"+estufa+"\n"+planta
                    }
                });
 
*/
 
 
 
 msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.author.username,
      icon_url: msg.user.avatarURL
    },
    title: "ESTUFA",
    url: 'https://discord.js.org/',
    description: "PRONTO PARA COLHER",
    fields: [{
        name: "Estufa",
        value: estufa
      },
      {
        name: "Planta",
        value: planta
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Pinhal Novo PN HPWU"
    }
  }
});
 
  }, parseInt(colher)); 
//----      
      
      
     }//spli>3

  
}
 
 
 
 
});
client.login(process.env.BOT_TOKEN);
