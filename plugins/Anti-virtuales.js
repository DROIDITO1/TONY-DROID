let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`*👨🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('351' || '351')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('31' || '31')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('33' || '33')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('44' || '44')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('45' || '45')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('62' || '62')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('49' || '49')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('61' || '61')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('972' || '972')) {
global.db.data.users[m.sender].banned = true
m.reply(`*🧑🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('994' || '994')) {
global.db.data.users[m.sender].banned = true
m.reply(`*👨🏻‍💻 EN ÉSTE GRUPO NO SE PERMITEN LEGIOVIRGOS NI MUCHO MENOS ÁRABES*\n\n\n*😹*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}    
   
}}
handler.register = true
export default handler