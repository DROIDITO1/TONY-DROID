import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {

let user = global.db.data.users[m.sender]
if (!user.autolevelup) 
  return !0
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
m.reply(`╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」\n│➯ *𝗛ᴏʟᴀ,➟${taguser} \n│➯ 🥳 FELICIDADES HA SUBIDO DE NIVEL\n│➯🔸nivel anterior: ${before} \n│➯ ⬆️nivel actual: ${user.level} \n│➯ ⚔️ʀᴀɴɢᴏ: ${user.role} \n│➯ 📅ғᴇᴄʜᴀ: ${new Date().toLocaleString('id-ID')} \n╰───────────────╯`.trim()) 
}}

 
