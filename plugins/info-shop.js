let handler = async (m, {usedPrefix}) => {         
 let who 
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender 
 else who = m.sender 
 let name = conn.getName(who)  
 m.reply(`╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」 
 │   *TIENDA* 🏪  
 │┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 │🧑🏻‍💻 *HOLA:* ${name} 
 │compras de *diamantes*
 │💎 /buy [cantidad]
 │💎 /bulla
 │💎 /bus
 │ *--------------------*
 │👑 Compras  *precio* 👇
 │/prem1 1  *[15  dolares]*
 │/prem2 1 *[25  dolares]*
 │/prem3 1 *[35  dolares]*
 │/prem4 1 *[50  dolares]*
 │/prem5 1 *[60  dolares]*
 │/prem6 1 *[70  dolares]*
 │/prem7 1 *[80  dolares]*
 │/prem8 1 *[100 dolares]*
 │ *Compras premium*  ⬆️
 ╭「
 │/bal [para ver toda tú xp/💎/💵] 
 ╰──────────────╯`) 
 } 
 handler.help = ['shop'] 
 handler.tags = ['xp'] 
 handler.command = ['shop', 'tienda', 'shop4', 'shop3', 'shop2']  
 handler.register = true 
 export default handler