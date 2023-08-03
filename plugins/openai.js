import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽𝙰 𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽 𝙾 𝚄𝙽𝙰 𝙾𝚁𝙳𝙴𝙽 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙻𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙳𝙴 𝙲𝙷𝙰𝚃𝙶𝙿𝚃*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾𝚂 𝙳𝙴 𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽𝙴𝚂 𝚈 𝙾𝚁𝙳𝙴𝙽𝙴𝚂*\n*◉ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*◉ ${usedPrefix + command} Codigo en JS para un juego de cartas*`;
  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const chgptdb = global.chatgpt.data.users[m.sender];
    chgptdb.push({role: 'user', content: text});
    const config = {method: 'post', url: 'https://api.openai.com/v1/chat/completions', headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + global.openai_key}, data: JSON.stringify({'model': 'gpt-3.5-turbo', 'messages': [{role: 'system', content: 'Actuaras como un Bot de WhatsApp el cual fue creado por Ofc/TONY, tu seras DROID-8-MD}, ...chgptdb]})};
    const response = await axios(config);
    chgptdb.push({role: 'assistant', content: response.data.choices[0].message.content});
    if (response.data.choices[0].message.content == 'error' || response.data.choices[0].message.content == '' || !response.data.choices[0].message.content) return XD; // causar error undefined para usar otra api
    m.reply(`${response.data.choices[0].message.content}`.trim());
  } catch {
    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
      if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
      m.reply(botIA222.data.choices[0].text.trim());
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const akuariapi1 = await fetch(`https://api.akuari.my.id/ai/gbard?chat=${text}`);
        const akuariapijson1 = await akuariapi1.json();
        if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD; // causar error undefined para usar otra api
        const akuariapiresult1 = await translate(`${akuariapijson1.respon}`, {to: 'es', autoCorrect: true});
        m.reply(`${akuariapiresult1.text}`.trim());
      } catch {
        try {
          conn.sendPresenceUpdate('composing', m.chat);
          const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`);
          const hasill22 = await tioress22.json();
          if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD; // causar error undefined para usar otra api
          const hasill22_result = await translate(`${hasill22.result}`, {to: 'es', autoCorrect: true});
          m.reply(`${hasill22_result.text}`.trim());
        } catch {
          try {
            conn.sendPresenceUpdate('composing', m.chat);
            const searchString2 = ' Indonesia ';
            const replacementString2 = ' español ';
            const rres = await fetch(`https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv`);
            const jjson = await rres.json();
            const hahaha = await translate(`${jjson.data}`, {to: 'es', autoCorrect: true});
            const sextS = hahaha.text;
            const replacedText = sextS.replace(searchString2, replacementString2).trim();
            m.reply(replacedText);
          } catch {
            try {
              conn.sendPresenceUpdate('composing', m.chat);
              const akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`);
              const akuariapijson2 = await akuariapi2.json();
              if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD; // causar error undefined para lanzar msg de error
              const akuariapiresult2 = await translate(`${akuariapijson2.respon}`, {to: 'es', autoCorrect: true});
              m.reply(akuariapiresult2.text.trim());
            } catch {
              try {
                conn.sendPresenceUpdate('composing', m.chat);
                const syms1 = `Actuaras como un Bot de WhatsApp el cual fue creado por Ofc/Yovani, tu seras HADES-OMEGA`;
                const fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${syms1}&apikey=fg-dylux`);
                const fgjson1 = await fgapi1.json();
                if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD; // causar error undefined para lanzar msg de error
                const fgjson1_result = await translate(`${fgjson1.result}`, {to: 'es', autoCorrect: true});
                m.reply(fgjson1_result.text.trim());
              } catch {
                throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`;
              }
            }
          }
        }
      }
    }
  }
};
handler.command = ['openai', 'chatgpt', 'ia', 'robot', 'openai2', 'chatgpt2', 'ia2', 'robot2', 'Hades', 'HadesBot'];
handler.limit = 1
handler.register = true
export default handler;
