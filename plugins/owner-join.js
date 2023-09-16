let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*ERROR, VUELVA A INTENTARLO VERIFIQUES QUE SU ENLACE NO ESTÉ VENCIDO. UN EJEMPLO*\n/join https://chat.whatsapp.com/KXaAogRpQWOFwlAcP9JkQX'

if ( isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*\n\n\n THE BOT HAS JOINED SUCCESSFULLY ENJOY THE BOT✔️`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝚄𝙴𝚅𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙾𝙽𝙳𝙴 𝚂𝙴 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃:*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] BOT REQUEST FOR A GROUP [❗𝐈𝐍𝐅O❗]*\n\n*—◉ REQUEST NUMBER:* ' + 'wa.me/' + m.sender.split('@')[ 0] + '\n*—◉ LINK WHERE THE BOT IS REQUESTED*' + link, jid)
await m.reply('🧑🏻‍💻 *TU SOLICITUD DE UNIRME A TU GRUPO SE LE HA ENVIADO A MI CREADOR.\n SÓLO ESPERA AQUE ACEPTE TU SOLICITUD Y ME UNIRÉ:\n\n\n*ES POSIBLE QUE TU SOLICITUD SEA IGNORADA')}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
handler.register = true
handler.limit = 2
export default handler