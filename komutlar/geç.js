module.exports = {
    kod: "geç",
    async run (client, message, args){
        if(client.player.isPlaying(message.guild.id) == true) {   

            if(!message.guild.members.cache.get(message.author.id).voice.channel) {
                return message.channel.send(" Lütfen şarkı açmak için bir kanala giriş yapınız.")
            }
    
            client.player.skip(message.guild.id)
    
            return message.channel.send("Şarkı başarı ile geçildi.")
        } else {
            return message.channel.send("Bir şarkı çalmadan değiştiremezsiniz.")
        }
    }
}