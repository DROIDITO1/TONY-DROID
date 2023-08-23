let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」
│💰 *𝐁𝐀𝐋𝐀𝐍𝐂𝐄* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣❏ *✨*NOMBRE:* ${name}
│➯‣❏ *💎Diamantes:* ${global.db.data.users[who].limit}💎
│➯‣❏ *💵dolares* ${global.db.data.users[who].joincount}
│➯‣❏ *♦️ʜᴀᴅᴇs-ᴄᴏɪɴs* ${global.db.data.users[who].money}
│➯‣❏ *🧿Exp* ${global.db.data.users[who].exp}
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」
│➯‣ 📝*𝙽𝙾𝚃𝙰:*
│➯‣ *para ir ala tienda y comprar Diamantes usa el comando*
│➯‣❏ *.shop*
╰───────────────╯`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'dinero', 'balance'] 
handler.register = true
export default handler
