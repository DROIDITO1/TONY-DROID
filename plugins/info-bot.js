import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './Audios/bot.mp3'
let chat = global.db.data.chats[m.chat]
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)   
await m.reply(`*HOLA, CÓMO TE PUEDO AYUDAR? `)
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: m })
}
return !0
}
handler.register = true
export default handler
