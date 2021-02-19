module.exports = {
    kod: "kuyruğu-temizle",
    async run (client, message, args){
        if(client.player.isPlaying(message.guild.id) == true) { 

            if(!message.guild.members.cache.get(message.author.id).voice.channel) {
                return message.channel.send(" Lütfen şarkı açmak için bir kanala giriş yapınız.")
            }
    
            client.player.clearQueue(message.guild.id)
    
            return message.channel.send("Şarkı listesini sıfırladım.")
    
        } else {
            return message.channel.send("Şuanda bir şarkı çalmıyor.")
        }
    }
}