let handler = async (m, { conn, args, participants }) => {
let users = Object.entries(global.db.data.users).map(([key, value]) => {
return {...value, jid: key}})
let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
let sortedDola = users.map(toNumber('joincount')).sort(sort('joincount'))
let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
let sortedRole = users.map(toNumber('role')).sort(sort('role'))
let sortedRole2 = users.map(toNumber('role2')).sort(sort('role2'))
let usersExp = sortedExp.map(enumGetKey)
let usersDola = sortedDola.map(enumGetKey)
let usersLim = sortedLim.map(enumGetKey)
let usersLevel = sortedLevel.map(enumGetKey)
let usersRole2 = sortedRole2.map(enumGetKey)
let usersRole = sortedRole.map(enumGetKey)
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
let text = `╭「➻❥DROID-8-MD➻❥」
*< 🧑🏻‍💻 TABLA DE CLASIFICACION />*
╰───────────────╯
╭「➻❥ *TOP ${len} DOLARES💵* ➻❥」
│➯Tú : *${usersDola.indexOf(m.sender) + 1}* de *${usersDola.length}*
│➯${sortedDola.slice(0, len).map(({ jid, joincount }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${joincount} dolares*`).join`\n`}
╰───────────────╯

╭「➻❥ *TOP ${len} XP🔮* ➻❥」
│➯Tú : *${usersExp.indexOf(m.sender) + 1}* de *${usersExp.length}*
│➯${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}
╰───────────────╯
╭「➻❥ *TOP ${len} DIAMANTES💎* ➻❥」
│➯Tú : *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length}*
│➯${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Diamantes*`).join`\n`}
╰───────────────╯
╭「➻❥ *TOP ${len} NIVEL* ➻❥」
│➯Tú : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length}*
│➯${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Nivel ${level}*`).join`\n`}
╰───────────────╯
╭「➻❥ *TOP ${len} RANGOS⚓* ➻❥」
│➯Tú : *${usersRole.indexOf(m.sender) + 1}* de *${usersRole.length}*
│➯${sortedRole.slice(0, len).map(({ jid, role }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Rangos ${role}*`).join`\n`}
╰───────────────╯
╭「➻❥ *TOP ${len} PODER📊* ➻❥」
│➯Tú : *${usersRole2.indexOf(m.sender) + 1}* de *${usersRole2.length}*
│➯${sortedRole2.slice(0, len).map(({ jid, role2 }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Poder ${role2}*`).join`\n`}
╰───────────────╯`.trim()
  m.reply(text, null, { mentions: conn.parseMention(text) })
}
handler.help = ['top2']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb'] 



handler.fail = null
handler.exp = 0
handler.register = true
export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}