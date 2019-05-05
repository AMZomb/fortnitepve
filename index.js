const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "s!"
client.on('ready' , () => {
    console.log(`Бот в сети как ${client.user.tag}!`);
})
client.on('message', (receivedMessage) => 
{
    var mainch = client.channels.get("574225814284009473");
    if (receivedMessage.content == prefix + "Камнелесье 1" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №1")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 2" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №2")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 3" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №3")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 4" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №4")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 5" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №5")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 6" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №6")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 7" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №7")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 8" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №8")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 9" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №9")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Камнелесье 10" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Камнелесье №10")
        .setColor('GREEN')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 1" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №1")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 2" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №2")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 3" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №3")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 4" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в КПланкертоне №4")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 5" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №5")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 6" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в КПланкертоне №6")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 7" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №7")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 8" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №8")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 9" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №9")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Планкертон 10" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Планкертоне №10")
        .setColor('GOLD')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 1" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №1")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 2" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №2")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 3" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №3")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 4" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №4")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 5" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №5")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 6" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №6")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 7" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №7")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 8" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №8")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 9" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №9")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Вещая Долина 10" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Вещей Долине №10")
        .setColor('ORANGE')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 1" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №1")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 2" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №2")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 3" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №3")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 4" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №4")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 5" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №5")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 6" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №6")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 7" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №7")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 8" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №8")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 9" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №9")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
    else if (receivedMessage.content == prefix + "Линч Пикс 10" ) 
    {
        const help_embed = new Discord.RichEmbed()
        .setTitle("Новый запрос")
        .setDescription(receivedMessage.author + " Просит помощи в прохождении щита в Линч Пиксе №10")
        .setColor('RED')
        .setTimestamp()
        mainch.send(help_embed)
    }
})
client.login(token);
