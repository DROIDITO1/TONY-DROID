import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*👨🏻‍💻 INGRESE SU NÚMERO DE SERIE, SI NO LO RECUERDAS USA EL COMANDO #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*👨🏻‍💻 NÚMERO DE SERIE INCORRECTO, COMPRUEBE QUE LO HAYA ESCRITO CORRECTAMENTE!*\n\n*𝚂𝙸 𝙽𝙾 𝙻𝙾 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #myns*'
user.registered = false
m.reply(`*👨🏻‍💻 SE REALIZÓ CON ÉXITO, REGISTRÓ ELIMINADO CORRECTAMENTE 😹*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
