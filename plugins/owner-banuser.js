let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `*👨🏻‍💻 ETIQUETE ALA PERSONA O RESPONDA AL MENSAJE DEL USUARIO QUE DESEA BANEAR PARA QUE YA No PUEDA USARME*\n\n*—◉ EJEMPLO:*\n*${usedPrefix + command} @${global.suittag}*\n\n\n[❗]*TAG A PERSON OR REPLY TO A MESSAGE SENT BY THE USER YOU WANT TO BAN EXAMPLE:*\n*${usedPrefix + command} @${global.suittag}*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*🧑🏻‍💻 BANEADO, YA NO PODRA USARME por pendejo*\n')    }
handler.command = /^ban$/i
handler.rowner = true
handler.register = true
export default handler
