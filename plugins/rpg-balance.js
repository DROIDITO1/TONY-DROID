let handler = async (m, { usedPrefix }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let user = conn.user[who].username; // Obtener el nombre de usuario
  m.reply(`╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」
 │💰 *《《BALANCE》》*
 │┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 │🧑🏻‍💻 *USER:* ${user}
 │💎 *DIAMANTES:* ${global.db.data.users[who].limit}💎
 │💸 *DOLARES* ${global.db.data.users[who].joincount}
 │🕶 *DROID-COINS* ${global.db.data.users[who].money}
 │📝 *Exp* ${global.db.data.users[who].exp}
 ╰✩⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
 ╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」
 │ _.shop_ *[Tienda]*
 ╰──────────────╯`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'dinero', 'balance'];
handler.register = true;
export default handler;