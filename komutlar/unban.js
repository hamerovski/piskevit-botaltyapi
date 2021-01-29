if(command === "unban"){
    if(!msg.member.hasPermission("BAN_MEMBERS")) {
      return msg.channel.send(`**${msg.author.username}**, You do not have perms to unban someone`)
    }
    
    if(!msg.guild.me.hasPermission("BAN_MEMBERS")) {
      return msg.channel.send(`**${msg.author.username}**, I do not have perms to unban someone`)
    }
    
    let userID = args[0]
      msg.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      msg.guild.members.unban(bUser.user)
})
    
  ;}
