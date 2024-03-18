import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen3
let img =  'views/Me.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role, role2 } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭「➻❥DROID-8-MD➻❥」
┃➯👋🏻 *HOLA: ${taguser}*
┃➯📅 *FECHA ACTUAL: ${date}*
︎├──────────⋆
┃❮❮❮ *CANAL OFC* ❱❱❱
┃❤ *SÍGUEME EN MI CANAL* ❤
┃https://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F
┃PA RECIBIR INFO SOBRE EL BOT
︎╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「➻❥ *Estadísticas* ➻❥」
├➽ *👑Nivel:* ${level}
├➽ *📃Experiencia:* ${exp}
├➽ *🛡Rango:* ${role}
├➽ *💎Diamantes:* ${limit}
├➽ *🧑🏻‍💻DROID-Coins:* ${money}
├➽ *💵dolares:* ${joincount}
├➽ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ACERCA DE:📝*
├➽ *.join <se une el bot a tu grupo>*
├➽ *.logos <menu de logos>*
├➽ *.link <de del grupo actual>*
├➽ *.menu2 <audios del bot>*
├➽ *.animes [imagenes]*
├➽ *.grupos <grupos del creador>*
├➽ *.owner [creador]*
├➽ *.enable [Opciones para admin"s]*
├➽ *.hidetag <texto>
├➽ *.tagall*
├➽ *.shop [tienda]*
├➽ *.reporte [reportar cmd con errores]*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *JUEGOS* 🎮
├➽ *tictactoe <nombre de la sala>*
├➽ *.Mates <modo>*
├➽ *.ppt <papel/piedra/tijera>*
├➽ *.gay* <@tag> [perfil gay]*
├➽ *.doxear <@tag>*
├➽ *.Top <ejemplo: <.top pendejos>*
├➽ *.love <@tag>*
├➽ *.pvp <@tag>*
├➽ *.juego [piedra/papel/tijera]*
├➽ *.acertijo*
├➽ *.formarpareja [parejas ramdon]*
├➽ *.slot [ruleta]*
︎╰───────────────
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *CHATGPT* 📡
├➽ *.ia *<Chatgpt>*
├➽ *.ia2 <Regenerador de imágenes>*
├➽ *.iavoz <respuesta con audio>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *REGISTRO* 🧑🏻‍💻
├➽ *.reg <nombre.edad>*
├➽ *.unreg <número de serie>*
├➽ *.mysn <Tú número de serie>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *STICKERS* ❥」
├➽ *.s*
├➽ *.sticker*
├➽ *.stickersearch <buscador de 📦 de stickers>
├➽ *.sermoverbg [sticker sin fondo]*
├➽ *.scircle [sticker circular]*
├➽ *.emojimix ☺&😈*
├➽ *.attp*
├➽ *.dados*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *FUN* 🤖
├➽ *.lolice @tag*
├➽ *.simpcard @tag*
├➽ *.hornycard <licencia virtual FUN>*
├➽ *.estúpido @tag*
├➽ *.meme*
├➽ *.toimg*
├➽ *.mp3 <vídeo a Audio>*
├➽ *.readvo*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *PREMIUM* 🏆 
├➽ *.join <se une el bot a tu grupo>* 
├➽ *.mediafire <link>*
├➽ *.ia2 <Regenerador de imágenes*
├➽ *.horario <de todos los países>*
︎╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *MAKER* ❥」
├➽ *.lolivid*
├➽ *.loli*
├➽ *.neko*
├➽ *.waifu*
├➽ *.messi*
├➽ *.cr7*
├➽ *.kpop*
├➽ *.blackpink*
├➽ *.cat*
├➽ *.wallpaper*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *GRUPO*  ❥」
├➽ *.promote @tag*
├➽ *.demote @tag*
├➽ *.infogp <info del grupo>*
├➽ *.hidetag*
├➽ *.afk <razón>
├➽ *.delete*
├➽ *.warn @tag*
├➽ *.unwarn @tag*
├➽ *.ban @tag*
├➽ *.unban @tag*
├➽ *.kick @tag*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TRANSFERENCIA"S*
├➽ *.transferjoincount <cantidad>* @tag
├➽ *.transferlimit <cantidad>* @tag
├➽ *.transferxp <cantidad>* @tag
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ECONOMÍA Y RECOMPENSAS* ❥」
├➽ *.minar*
├➽ *.minar2*
├➽ *.minar3*
├➽ *.claim*
├➽ *.coffer*
├➽ *.bal* 
├➽ *.busyall*
├➽ *.bus <cantidad>* 
├➽ *.buyall*
├➽ *.buy <cantidad>*
├➽ *.dolares*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *REACCIONES* ❥」
├➽ *.kiss <tag>*
├➽ *.pat* <tag>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *DESCARGAS ⎙*
├➽ *.wikipedia <busqueda>*
├➽ *.animeinfo <nombre>*
├➽ *.audio* <nombre de la música>
├➽ *.video* <nombre del video>
├➽ *.ytmp3 <url>
├➽ *.ytmp4 <url>*
├➽ *.tiktok* <link>
├➽ *.mediafire <link>*
├➽ *.twitter*
├➽ *.google*
├➽ *.ytbuscar*
├➽ *.gdrive*
╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TOOLS* 🧑🏻‍💻
├➽ *.hd <imagen>*
├➽ *.calculadora*
├➽ *.perfil*
├➽ *.clima*
├➽ *.styletext <texto>
├➽ *.covid*
├➽ *.horario*
︎╰────────────────╯
> *\`©2020\`*
> *\`©𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂\`*`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}