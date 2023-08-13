import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let sremovebg = global.API(`https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`) 
let stickerr = await sticker(false, sremovebg, global.packname, global.author)
conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] LO SIENTO,OCURRIÓ UN ERROR, VUELVA A INTENTARLO, NO OLVIDE RESPONDER A UNA IMAGEN LA CUÁL SERÁ CONVERTIRA EN STICKER SIN FONDO*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]SORRY, AN ERROR OCCURRED, TRY AGAIN DO NOT FORGET TO RESPOND TO AN IMAGE OF WHICH IT WILL BECOME A STICKER WITHOUT BACKGROUND*')
}} 
handler.command = /^sremovebg|removebg$/i
handler.register = true
handler.limit = 1
export default handler
