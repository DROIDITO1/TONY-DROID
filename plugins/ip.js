const free = 50 
 const prem = 100 
 let handler = async (m, { isPrems }) => { 
   let time = global.db.data.users[m.sender].lastclaim + 86400000 
   if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `🎁 *Ya recogiste tu recompensa diaria*\n\n🕚 Vuelve en *${msToTime(time - new Date())}* ` 
   global.db.data.users[m.sender].limit += isPrems ? prem : free 
   m.reply(`╭「➻❥𝐃𝐑𝐎𝐈𝐃-8𝐃➻❥」 
 │🛒 RECOMPENSA DIARIA 
 │┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 │➯🎁 *RECOMPENSA DIARIA* 
 │➯🤪 *Has recibido:* 
 │➯💎 *Diamantes* : +${isPrems ? prem : free} 
 ╰───────────────╯`) 
   global.db.data.users[m.sender].lastclaim = new Date * 1 
 } 
 handler.help = ['daily'] 
 handler.tags = ['limit'] 
 handler.command = ['daily', 'claim']  
 handler.register = true 
 export default handler 
  
  
  
 function msToTime(duration) { 
   var milliseconds = parseInt((duration % 1000) / 100), 
     seconds = Math.floor((duration / 1000) % 60), 
     minutes = Math.floor((duration / (1000 * 60)) % 60), 
     hours = Math.floor((duration / (1000 * 60 * 60)) % 12) 
  
   hours = (hours < 12) ? "0" + hours : hours 
   minutes = (minutes < 10) ? "0" + minutes : minutes 
   seconds = (seconds < 10) ? "0" + seconds : seconds 
  
   return hours + " Horas " + minutes + " Minutos" 
 }