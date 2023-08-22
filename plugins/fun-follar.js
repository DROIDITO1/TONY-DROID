
let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
🤤👅🥵 *ACABAS DE FOLLARTEL@!*🥵👅🤤

*TE ACABAS DE FOLLAR A LA PERRA DE* *${text}* ⁩ *A 4 PATAS MIENTRAS TE GEMIA COMO UNA MALDITA PERRA "Aaah.., Aaah, SIGUE, no pares, no pares.." Y LAS HAS DEJAD@ TAN REVENTADA QUE NO PUEDE SOSTENER NU SU PROPIO CUERPO LA MALDITA ZORRA!*

*${text}* 
🤤🥵 *¡YA TE HAN FOLLADO!* 🥵🤤`, null, { mentions: [user] })
}

handler.command = /^(Follar|violar)/i
handler.fail = null
handler.register = true
export default handler
