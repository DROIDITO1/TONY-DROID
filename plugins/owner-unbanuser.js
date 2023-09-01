let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]ENTER THE @tag OF SOME USER*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]ENTER THE @tag OF SOME USER*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*👨🏻‍💻 Desbaneado*\n*—◉El usuario ya puede usarme*`, m)
}
handler.help = ['unban']
handler.tags = ['admin']
handler.command = /^unban$/i
handler.admin = true
handler.register = true
export default handler