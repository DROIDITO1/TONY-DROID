import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const defaultLang = 'es'
let handler = async (m, { conn, args, usedPrefix, command }) => {

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text

let res
try { res = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL TEXTO QUE QUIERA CONVERTIR A NOTA DE VOZ,ejemplo: ${usedPrefix + command} es Hola Mundo*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]INSERT THE TEXT YOU WANT TO CONVERT TO A VOICE NOTE, AN EXAMPLE* ${usedPrefix + command}* is Hello World*`
res = await tts(text, defaultLang)
} finally {
if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
}}
handler.help = ['tts <lang> <teks>']
handler.tags = ['tools']
handler.command = /^g?tts$/i
handler.register = true
export default handler

function tts(text, lang = 'es') {
console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(readFileSync(filePath))
unlinkSync(filePath)
})
} catch (e) { reject(e) }
})}
