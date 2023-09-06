const toxicRegex = /.imagen porno|.imagen xxx|.imagen desnuda|.imagen rule|.imagen pene|.imagen nepe|.imagen tetas|.imagen culo|.imagen sexo|.imagen rule34|.imagen vagina|.imagen panocha|.imagen mía Khalifa|/i 
  
 export async function before(m, { isAdmin, isBotAdmin, isOwner }) { 
     if (m.isBaileys && m.fromMe) 
         return !0 
     if (!m.isGroup) 
         return !1 
     let user = global.db.data.users[m.sender] 
     let chat = global.db.data.chats[m.chat] 
     let bot = global.db.data.settings[this.user.jid] || {} 
     const isToxic = toxicRegex.exec(m.text) 
  
     if (isVirgos && chat.antiVirgos && !isOwner && !isAdmin) { 
        user.warn += 1 
        if (!(user.remove >= 5)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, decir la palabra (${isToxic}) está prohibido en este bot *${user.remove}/5* advertencia`, false, { mentions: [m.sender] }) 
        if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Hello *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, say the word (${isToxic}) is prohibited in this bot *${user.warn}/5* warning`, false, { mentions: [m.sender] }) 
      } 
  
     if (user.kick >= 0) { 
        user.remove = 0 
        await m.reply(`*ʜᴏʟᴀ*@${m.sender.split`@`[0]},* SERÁS ELIMINADO POR PENDEJO`, false, { mentions: [m.sender] }) 
        user.banned = true 
        await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove') 
        //await this.updateBlockStatus(m.sender, 'block') 
     } 
     return !1 
 }