import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `*👨🏻‍💻HOLA YA TE ENCUENTRAS REGISTRADO EN MI BASE DE DATOS, SI DESEAS ELIMINAR TU REGISTRÓ USA EL COMANDO*\n*/unreg <Número de serie>*`;
  if (!Reg.test(text)) throw `*👨🏻‍💻HOLA TE INFORMO QUE HAS FALLADO CON EL REGISTRÓ✨TE DOY UN ☘️EJEMPLO*\n*/Reg Tony.21*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '🍃𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲Í𝙾 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴🍃';
  if (!age) throw '*☘️𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙾 𝚃𝚄 𝙴𝙳𝙰𝙳 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁𝚃𝙴 𝚃𝚄 𝙴𝙳𝙰𝙳🌱*';
  if (name.length >= 20) throw '*👨🏻‍💻 hijo de puta, pon un nombre más corto*';
  age = parseInt(age);
  if (age > 70) throw '*👨🏻‍💻 nose permiten ancianos en el grupo, es más deberían estar muertos, porfavor pon otro edad*';
  if (age < 8) throw '*Traiganle un pañal al bebe,Maldito negro, pon otro edad*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `📃ᴿᵉᵍⁱˢᵗʳᵒ ᶜᵒᵐᵖˡᵉᵗᵃᵈᵒ ⁱⁿᶠᵒʳᵐᵃᶜⁱóⁿ ᵈᵉˡ ʳᵉᵍⁱˢᵗʳᵒ
🪪Nombre ${name}
☃️edad ${age}
📃Número de serie
 ${sn}

👨🏻‍💻: REGISTRADO CORRECTAMENTE: /MENU PARA VER EL MENU 

👨🏻‍💻: SI DESEAS CAMBIAR TU REGISTRO ELIMINA TU  NÚMERO DE SERIA: EJEMPLO

🪪/unreg ${sn}

Después te vuelves a registrar😹`;
  await conn.sendFile(m.chat, pp, 'hades.jpg', caption);
  
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(Reg|reg)$/i;
export default handler;