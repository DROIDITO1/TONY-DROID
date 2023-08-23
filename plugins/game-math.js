global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`
*🧑🏻‍💻 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙻𝙰 𝙳𝙸𝙵𝙸𝙲𝚄𝙻𝚃𝙰𝙳𝙾 𝙲𝙾𝙽 𝙻𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙹𝚄𝙶𝙰𝚁*

*𝙳𝙸𝙵𝙸𝙲𝚄𝙻𝚃𝙰𝙳𝙴𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂: ${Object.keys(modes).join(' | ')}*
*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾: ${usedPrefix}mates medium*
`.trim()
if (args.length < 1) return await conn.reply(m.chat, mat, m)
/*conn.sendButton(m.chat, mat, wm, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`], 
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`], 
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)

conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`], 
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`], 
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)*/
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return await conn.reply(m.chat, mat, m)
  
/*conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`], 
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`], 
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)*/
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, '*🧑🏻‍💻 TODAVÍA HAY PREGUNTAS SIN RESPONDER EN ÉSTE CHAT!*', global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `CUANTO ES EL RESULTADO DE *${math.str}*?\n\n*⏳ Tiempo: ${(math.time / 1000).toFixed(2)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*\n*🏆 Gana Hasta: ${math.bonus} 𝚇𝙿*`, m),
math, 4,
setTimeout(() => { 
if (global.math[id]) conn.reply(m.chat, `*🧑🏻‍💻 Se ha finalizado el tiempo de responder*\n\n*La respuesta es ${math.result}*`, m),
//conn.sendButton(m.chat, `*🧑🏻‍💻 SE HA FINALIZADO EL TIEMPO PARA RESPONDER*\n\n*La respuesta es ${math.result}*`, author, null, [['Volver a intentar, `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
handler.register = true
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
