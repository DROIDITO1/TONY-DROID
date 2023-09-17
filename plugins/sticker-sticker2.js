import MessageType from '@adiwajshing/baileys' 
 let pajak = 0 
 let handler = async (m, { conn, text }) => { 
 let who 
 if (m.isGroup) who = m.mentionedJid[0] 
 else who = m.chat 
 if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙲𝙾𝙽 𝙴𝙻 @𝚝𝚊𝚐*' 
 let txt = text.replace('@' + who.split`@`[0], '').trim() 
 if (!txt) throw '*INGRESE LA CANTIDAD QUE DE SEE QUITARLE AL USUARIO*' 
 if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙸𝙼𝙱𝙾𝙻𝙾 𝙽𝙾 𝙰𝙳𝙼𝙸𝚃𝙸𝙳𝙾, 𝚂𝙾𝙻𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂!*' 
 let xp = parseInt(txt) 
 let exp = xp 
 let pjk = Math.ceil(xp * pajak) 
 exp -= pjk 
 if (exp < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰 (𝚇𝙿) 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝚂 𝟷*' 
 let users = global.db.data.users 
 users[who].exp -= xp 
   m.reply(`≡ *QUITADO* 
 ┌────────────── 
 ▢  *𝚃𝚘𝚝𝚊𝚕:-* ${xp} 
 └──────────────`) 
 } 
 handler.command = ['quitarxp','delxp']  
 handler.rowner = true 
 handler.register = true 
 export default handler