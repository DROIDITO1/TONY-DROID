import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen3
let img =  'views/bot.jpg'
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
│➯🐥 *HOLA,➟${taguser}*
│➯🧑🏻‍💻  DROID *MENU*
│➯📅 *FECHA ACTUAL:➟${date}*
│➯🤗 Tiempo activo: *549 días*
︎╰───────────────╯
╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」
│➯👨🏻‍💻 *HOLA,➟${taguser}*
│ *BIENVENID@ AL MENU*
│ *PUEDES SEGUIRME EN TIK-TOK*
│ *http://tiktok.com/@tony.1p*
︎╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「➻❥ *Estadísticas* ➻❥」
├➽ *👑Nivel:* ${level}
├➽ *📃Experiencia:* ${exp}
├➽ *🛡Rango:* ${role}
├➽ *💎Diamantes:* ${limit}
├➽ *🧑🏻‍💻DROID-Coins:* ${money}
├➽ *💵dolares:* ${joincount}
├➽ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥ *INFO* ❥」
├➽ *.menu2 <AUDIOS>* *nuevo*
├➽ *.animes [imagenes]*
├➽ *.grupos*
├➽ *.owner [contactos]*
├➽ *.enable [Opciones para admin"s]
├➽ *.tagall*
├➽ *.comangrupos*
├➽ *.infogrupo*
├➽ *.shop [tienda]*
├➽ *.top2* [tabla]
╰───────────────╯
  👇 *actualizado* 👇
🧑🏻‍💻᭢━━━━━━━━━᭥🧑🏻‍💻᭢
╭──「❥ *Avanzado* ❥」
├➽ *.ia* *<mas Avanzado, sirve para todo>*
├➽ *.bot* <comediante>
╰───────────────╯
😼᭢━━━━━━━━━᭥😼᭢
╭─「❥❤️ *Stickers* ❤️❥」
├➽ *.sticker | .s
├➽ *.stickersearch <buscador de stickers>
ejemplo: *.stickersearch pocoyo*
├➽ *.wm <paquete | nombre>*
├➽ *.sermoverbg [sticker sin fondo]*
├➽ *.scircle [sticker circular]*
├➽ *.emojimix ☺&😈*
├➽ *.dados*
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥ *Grupos*  ❥」
├➽ *.welcome @tag*
├➽ *.welcome @tag*
├➽ *bye @tag*
├➽ *.promote @tag*
├➽ *.demote @tag*
├➽ *.infogp <info del grupo>*
├➽ *.infobot <estado del bot>*
├➽ *.hidetag*
├➽ *.afk <razón>
├➽ *.delete*
├➽ *.del*
├➽ *.join* [link del grupo]*
├➽ *.link [link de tu grupo*
├➽ *.advertir/warn @tag*
├➽ *.unwarn/delwarn*
├➽ *.ban/unban*
├➽ *.kick @tag*
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥💎 *transfer* 💎❥」
├➽ *.transferjoincount mas <cantidad>*
├➽ *.transferlimit mas <cantidad>*
├➽ *.transferxp mas <cantidad>*
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥ *RECOMPENSAS Y COMPRAS* ❥」
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
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥💎 *comandos-owner-add* 🧿❥」
├➽ *.añadirxp <cantidad> @tag*
├➽ *.añadirdiamantes @tag <cantidad>*
├➽ *.añadirdolares  @tag <cantidad>*
├➽ *.añadirdolares @tag <cantidad>*
├➽ *.addprem @tag days*
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥🤖 *Reportar* 🤖❥」
├➽ *.reporte [comandos en fallos]*
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥🤣 *Acciones* 😚❥」
├➽ *.kiss .beso <tag>*
├➽ *.follar <tag>*
├➽ *.pat* <tag>
├➽ *.slap* <tag>
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭──「❥🎙️ *Descargas* 📽️❥」
├➽ *.wikipedia <busqueda>*
├➽ *.animeinfo <nombre>*
├➽ *.audio* <nombre de la música>
├➽ *.video* <nombre del video>
├➽ *.audiodocu*
├➽ *.videodocu*
├➽ *.ytmp3 <link yt>
├➽ *.ytmp4 <link yt>*
├➽ *.ytmp3doc*
├➽ *.ytmp4doc*
├➽ *.facebook*
├➽ *.tiktok* <link>
├➽ *.mediafir*
├➽ *.twitter*
├➽ *.ig*
├➽ *.google*
├➽ *.ytbuscar*
├➽ *.gdrive*
├➽ *.whatmusic*
├➽ *.calculadora/calc
├➽ *.ssweb link de tu img*
├➽ *.tts [texto a Audio]
├➽ *.quemusica resultado*
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥🎮 *Juegos* 🎮❥」
├➽ *.gay* <@tag> [perfil gay]
├➽ *doxear <@tag>
├➽ *Top* ejemplo: <.top pendejos>
├➽ *.love <@tag>*
├➽ *.gay2 <@tag>*
├➽ *.puta <@tag>*
├➽ *.puto <@tag>*
├➽ *.pajero <@tag>*
├➽ *.pajera <@tag>*
├➽ *.lesbiana <@tag>*
├➽ *.pvp*  <@tag>
├➽ *.sopa*
├➽ *.juego [piedra/papel/tijera]*
├➽ *.reto [reto del bot]*
├➽ *.acertijo *no disponible* 🤥
├➽ *.verdad [verdad del bot]*
├➽ *.formarpareja [parejas ramdon]*
├➽ *.slot [ruleta]*
├➽ *.piropo [piropo del bot]*
├➽ *.casino <apuesta>*
├➽ *.meme <meme>*
︎╰───────────────
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥🤴 *comandos-owner/admin"s* 🤴❥」
├➽ *.block*
├➽ *.limpiarbot*
├➽ *.blocklist*
├➽ *.unblocklist*
├➽ *.banuser*
├➽ *.setprefix*
├➽ *.resetprefix*
├➽ *.unbanuser*
├➽ *.kick* @tag
├➽ *.fantasmas*
├➽ *.invitar*
├➽ *.resetlink*
├➽ *.banchat [banea el chat]*
├➽ *.unbanchat [desbanea el chat]*
├➽ *.grupo abrir/cerrar*
├➽ *.addcmd*
├➽ *.delcmd*
├➽ *.listcmd*
├➽ *.actualizar*
╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥🎙️ *convertidor&mp3* 📽️❥」
├➽ *.mp3*
├➽ *.toimg*
├➽ *.togifaus*
├➽ *.ptt*
├➽ *.tomp4*
├➽ *.tts*
├➽ *.attp3*
├➽ *.ttp*
├➽ *.ttp2*
├➽ *.ttp3*
├➽ *.ttp5*
├➽ *.tovn*
├➽ *.togifaud*
︎╰───────────────╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「❥📊 *Otros Comandos* ⚙️❥」
├➽ *.hd <imagen>*
├➽ *.topdf*
├➽ *.ytcomment*
├➽ *.removebg*
├➽ *.wpgaming*
├➽ *.doraemon*
├➽ *.planeta*
├➽ *.technology*
├➽ *.ciberespacio*
├➽ *.caricatura*
├➽ *.pubg*
├➽ *.wprandom*
├➽ *.styletext*
├➽ *.lb*
├➽ *.perfil*
├➽ *.clima*
├➽ *.covid*
├➽ *.horario*
︎╰────────────────╯`.trim()
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