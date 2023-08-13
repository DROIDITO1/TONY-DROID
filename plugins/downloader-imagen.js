import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EJEMPLO DE USO DEL COMANDO ${usedPrefix + command} Minecraft*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]EXAMPLE OF USE OF THE COMMAND${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `👨🏻‍💻 *RESULTADO DE:* ${text}\n`, m)}
//let captionn = `👨🏻‍💻 *RESULTADO DE:* ${text}\n`
//conn.sendButton(m.chat, captionn, author, link, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.register = true
handler.limit = 2
export default handler
