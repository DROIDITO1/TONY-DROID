import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `HOLA YA TE ENCUENTRAS🍃 REGISTRAD@ EN MI BASE DE DATOS☘️\n/unreg <Número de serie>`
  if (!Reg.test(text)) throw `🌹𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙷𝙰𝚂 ❌𝙵𝙰𝙻𝙻𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚈𝙰 𝚃𝙴 𝙻𝙾 𝙷𝙰𝚂 𝙷𝙴𝙲𝙷𝙾 𝙴𝙽 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴✨𝚃𝙴 𝙳𝙾𝚈 𝚄𝙽 ☘️𝙴𝙹𝙴𝙼𝙿𝙻𝙾\n/Reg Tony.21`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🍃𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲Í𝙾 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴🍃'
  if (!age) throw '☘️𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙾 𝚃𝚄 𝙴𝙳𝙰𝙳 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁𝚃𝙴 𝚃𝚄 𝙴𝙳𝙰𝙳🌱'
  if (name.length >= 30) throw '☘️𝙷𝙾𝙻𝙰 😊𝙾𝚈𝙴 𝙿𝚄𝙴𝙳𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙼Á𝚂 𝙲𝙾𝚁𝚃𝙾🌴𝚈𝙰 𝚀𝚄𝙴 𝙴𝙻 𝚀𝚄𝙴 𝙴𝚂𝚃Á𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙾 𝙼Á𝚂 𝙲𝙾𝚁𝚃𝙾🌹️' 
  age = parseInt(age)
  if (age > 50) throw '✨HOLA PUEDES PONER UN EDAD MÁS BAJÓ? POR FAVOR'if (age < 5) throw '😒POR FAVOR VAMOS NO ESTÉN JUGANDO'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`📃Registró completado : información del registro
🪪Nombre ${name}
☃️edad ${age}
📃Número de serie 
 ${sn}

🌟AHORA YA TE ENCUENTRAS REGISTRAD@ EN MI BASE DE DATOS🤖

📃SI DESEAS CAMBIAR TU registro ELIMINA TU NÚMERO DE SERIE EJEMPLO

🪪/UNREG ${sn}

Después de vuelves a registrar`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(Reg|reg|registrar|reg(ister)?)$/i

export default handler
