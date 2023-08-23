let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  let pp = "./views/warn.jpg.png";
  let who;
  if (m.isGroup)
    who = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted
      ? m.quoted.sender
      : text;
  else who = m.chat;
  let user = global.db.data.users[who];
  let bot = global.db.data.settings[conn.user.jid] || {};
  let dReason = "Sin motivo";
  let msgtext = text || dReason;
  let sdms = msgtext.replace(/@\d+-?\d* /g, "");
  let warntext = `*🧑🏻‍💻 ETIQUETA A UNA PERSONA O RESPONDA A UN MENSAJE DEL GRUPO PARA DARLE UNA ADVERTENCIA AL USUARIO*\n\n*—◉ EJEMPLO:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who)
    throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  user.warn += 1;
  await m.reply(
    `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
    } USUARIO ADVERTIDO 😈!\nMotivo: ${sdms}\n*ADVERTENCIAS ${
      user.warn
    }/3*`,
    null,
    { mentions: [who] },
  );
  if (user.warn >= 3) {
    if (!bot.restrict)
      return m.reply(
        "*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙴 𝙲𝙾𝙽 𝙴𝙻 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙻𝙾 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙴*",
      );
    user.warn = 0;
    await m.reply(
      `TE LO ADVERTI VARIAS VECES!!\n*@${
        who.split`@`[0]
      }* SUPERASTE LAS *3* ADVERTENCIAS, SERAS ELIMINADO POR GAY 🧑🏻‍💻`,
      null,
      { mentions: [who] },
    );
    await conn.groupParticipantsUpdate(m.chat, [who], "remove");
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;