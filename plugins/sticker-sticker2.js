let handler = async (m, { isPrems, conn }) => { 
 let time = global.db.data.users[m.sender].lastcofre + 86400000 // 36000000 0 Segundos //86400000 0 Segundos 
 if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `YA PEDISTE MENU RECIENTEMENTE: VUELVE EN *${msToTime(time - new Date())}* PARA VOLVER A PEDIR OTRO MENU` 
  
  
 let img = 'https://chat.whatsapp.com/CNrOeTr9PvE1hWCG8tKcqe:w=2000' 
 let dia = Math.floor(Math.random() * 30) 
 let tok = Math.floor(Math.random() * 10) 
 let hadesb = Math.floor(Math.random() * 4000) 
 let expp = Math.floor(Math.random() * 5000) 
  
   global.db.data.users[m.sender].limit += dia 
   global.db.data.users[m.sender].money += hadesb 
   global.db.data.users[m.sender].joincount += tok 
   global.db.data.users[m.sender].exp += expp 
  
 let texto = `╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」 
 │➯🐥 *HOLA,➟${taguser}* 
 │➯🧑🏻‍💻  DROID *MENU* 
 │➯📅 *ғᴇᴄʜᴀ:➟${date}* 
 │➯⏰ *ᴛɪᴇᴍᴘᴏ:➟${uptime}* 
 │➯👥 *ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}* 
 ︎╰───────────────╯ 
 ╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」 
 │➯👨🏻‍💻 *HOLA,➟${taguser}* 
 │ *BIENVENID@ AL MENU* 
 │ *PUEDES SEGUIRNOS EN TIK-TOK* 
 │ *http://tiktok.com/@coin.exe1* 
 │ *CON ESO YA ESTARÁS APOYANDO*  
 │*POR FAVOR: NO PIDAS EL MENU SEGUIDO* 
 │*TARDO ENTRE 30/40 segundos en enviar otro* 
 ︎╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭─「➻❥ *Estadísticas* ➻❥」 
 ├➽ *✳️️Nivel:* ${level} 
 ├➽ *🧿Experiencia:* ${exp} 
 ├➽ *⚓Rango:* ${role} 
 ├➽ *💎Diamantes:* ${limit} 
 ├➽ *🔱Hades-Coins:* ${money} 
 ├➽ *💵dolares:* ${joincount} 
 ├➽ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''} 
 ╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭─「❥ *INFO BOT* ❥」 
 ├➽ *.menu2 [notas de audios]* 
 ├➽ *.animes [imagenes]* 
 ├➽ *.grupos* 
 ├➽ *.owner [contactos]* 
 ├➽ *.enable [Opciones para admin"s] 
 ├➽ *.tagall* 
 ├➽ *.comangrupos* 
 ├➽ *.infogrupo* 
 ├➽ *.shop [tienda]* 
 ├➽ *.sell [tienda]* 
 ├➽ *.top2* [tabla] 
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
 ╭─「❥ *gana&compara* ❥」 
 ├➽ *.minar* 
 ├➽ *.minar2* 
 ├➽ *.minar3* 
 ├➽ *.claim* 
 ├➽ *.coffer* 
 ├➽ *.bal* *[todo tu exp/Diamantes y otros]* 
 ├➽ *puedes comprar diamantes usando los comandos*  
 ├➽ *.busyall te cobra Hades-Coins* 
 ├➽ *.bus <cantidad>*  
 ├➽ *.buyall te cobra experiencia* 
 ├➽ *.buy <cantidad>* 
 ├➽ *.dolares te cobra diamantes* 
 ╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭─「❥💎 *comandos-owner-add* 🧿❥」 
 ├➽ *.añadirxp <cantidad> @tag* 
 ├➽ *.añadirdiamantes @tag <cantidad>* 
 ├➽ *.añadirdolares  @tag <cantidad>* 
 ├➽ *.añadirdolares @tag <cantidad>* 
 ├➽ *.addprem @tag days* 
 ╰───────────────╯ 
 😼᭢━━━━━━━━━᭥😼᭢ 
 ╭─「❥👾 *Stickers* 🌴❥」 
 ├➽ *.stiker/.s 
 ├➽ *.wm paquete | nombre* 
 ├➽ *.sermoverbg [imagen sin fondo]* 
 ├➽ *.slap* 
 ├➽ *.scircle [sticker circular]* 
 ├➽ *.pat* 
 ├➽ *.emojimix ☺&😈* 
 ├➽ *.dados* 
 ╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭─「❥🤖 *Reportar* 🤖❥」 
 ├➽ *.reporte [comandos en fallos]* 
 ╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭─「❥🤣 *Acciones* 😚❥」 
 ├➽ *.kiss .beso <tag>* 
 ├➽ *.follar <tag>* 
 ╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭──「❥🎙️ *Descargas* 📽️❥」 
 ├➽ *.wikipedia <busqueda>* 
 ├➽ *.animeinfo <nombre>* 
 ├➽ *.play nombre de tu canción* 
 ├➽ *.play2 nombre de tu video* 
 ├➽ *.play3 nombre de tu canción,doc* 
 ├➽ *.play4 nombre de tu video,doc* 
 ├➽ *.audio nombre de tu canción* 
 ├➽ *.video nombre de tu video* 
 ├➽ *.audiodocu nombre de tu canción,doc* 
 ├➽ *.videodocu nombre de tu video,doc* 
 ├➽ *.ytmp3 tu link  Audio* 
 ├➽ *.ytmp4 tu link  video* 
 ├➽ *.ytmp3doc link canción,doc* 
 ├➽ *.ytmp4doc link video,doc* 
 ├➽ *.facebook tu link de fb* 
 ├➽ *.tiktok link de video tiktok* 
 ├➽ *.mediafire link de mediafire* 
 ├➽ *.twitter tu link de twt* 
 ├➽ *.ig link de tu video en ig* 
 ├➽ *.google resultados de google* 
 ├➽ *.ytbuscar busqueda en Youtube* 
 ├➽ *.gdrive link de drive* 
 ├➽ *.whatmusic responde a una audio* 
 ├➽ *.calculadora Ejemplo : .calc 2+2* 
 ├➽ *.ssweb link de tu img* 
 ├➽ *.tts [texto a Audio] 
 ├➽ *.quemusica resultado* 
 ╰───────────────╯ 
 🧑🏻‍💻᭢━━━━━━━━━᭥🧑🏻‍💻᭢ 
 ╭──「❥🗣️ *chatgpt* 📃❥」 
 ├➽ *.simi* 
 ├➽ *.bot* 
 ├➽ *.ia* 
 ╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭─「❥🎮 *Juegos* 🎮❥」 
 ├➽ *.love [medidor de amor]* 
 ├➽ *.gay2 [porcentaje]* 
 ├➽ *.puta [porcentaje]* 
 ├➽ *.puto [porcentaje]* 
 ├➽ *.pajero [porcentaje]* 
 ├➽ *.pajera [porcentaje]* 
 ├➽ *.lesbiana [porcentaje]* 
 ├➽ *.pvp* 
 ├➽ *.sopa* 
 ├➽ *.juego piedra/papel/tijera* 
 ├➽ *.reto [reto del bot]* 
 ├➽ *.acertijo* 
 ├➽ *.verdad [verdad del bot]* 
 ├➽ *.formarpareja [parejas ramdon]* 
 ├➽ *.slot [ruleta]* 
 ├➽ *.piropo [piropo del bot]* 
 ├➽ *.casino <apuesta>* 
 ├➽ *.meme <meme>* 
 ︎╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢ 
 ╭─「❥🧿 *nivel* 🧿❥」 
 ├➽ *.levelup subir de nivel* 
 ︎╰───────────────╯ 
 🦅᭢━━━━━━━━━᭥🦅᭢⇆ㅤ 
  ||◁ㅤ❚❚ㅤ▷||ㅤ ↻ 
  
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
 ├➽ *.afk [razón]* 
 ├➽ *.lb* 
 ├➽ *.perfil* 
 ├➽ *.clima* 
 ├➽ *.covid* 
 ├➽ *.horario* 
 ︎╰───────────────╯` 
  
 const fkontak = { 
         "key": { 
     "participants":"0@s.whatsapp.net", 
                 "remoteJid": "status@broadcast", 
                 "fromMe": false, 
                 "id": "Halo" 
         }, 
         "message": { 
                 "contactMessage": { 
                         "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
                 } 
         }, 
         "participant": "0@s.whatsapp.net" 
 } 
 await conn.sendFile(m.chat, img, 'droid.jpg', texto, fkontak) 
 //await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)   
 global.db.data.users[m.sender].lastcofre = new Date * 1 
 } 
 handler.help = ['menu'] 
 handler.tags = ['xp'] 
 handler.command = ['pendejo', 'Droid', 'ayuda', 'ayuda2']  
 handler.register = true 
 export default handler 
  
 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)]} 
  
 function msToTime(duration) { 
   var milliseconds = parseInt((duration % 1000) / 0), 
     seconds = Math.floor((duration / 1000) % 60), 
     minutes = Math.floor((duration / (1000 * 60)) % 0), 
     hours = Math.floor((duration / (1000 * 60 * 60)) % 0) 
  
   hours = (hours < 0) ? "0" + hours : hours 
   minutes = (minutes < 0) ? "0" + minutes : minutes 
   seconds = (seconds < 0) ? "0" + seconds : seconds 
  
   return hours + " Horas " + minutes + " Minutos" 
 }