```javascript
let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = conn.getName(who);

    try {
        let response = await axios.get(`https://some-random-api.ml/canvas/gay?avatar=${encodeURIComponent(await conn.getProfilePicture(who))}`);
        if (response.data && response.data.link) {
            conn.sendFile(m.chat, response.data.link, 'gay.png', `🏳️‍🌈 *Gay:* ${name}\n\n¡¿Quién quiere violar a este gay?!`, m);
        } else {
            conn.reply(m.chat, 'No se pudo aplicar el filtro gay a la imagen.', m);
        }
    } catch (e) {
        conn.reply(m.chat, 'Ocurrió un error al procesar la solicitud.', m);
    }
}

handler.help = ['gay *@user*'];
handler.tags = ['fun'];
handler.command = ['gay'];
handler.register = true;

export default handler;
```