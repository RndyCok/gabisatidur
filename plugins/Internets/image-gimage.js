import { googleImage } from "@bochilteam/scraper";
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`;
  const res = await googleImage(text);
  let image = res.getRandom();
  let link = image;
  let bot = `*${htki} GOOGLE IMAGE ${htka}*
    🔎 *Result:* ${text}
    🌎 *Source:* Google`;
  //conn.sendFile(m.chat, link, '', bot, m)
  conn.sendButton(m.chat, bot, botdate, link, [["Next", `.image ${text}`]], m);
  /* conn.sendHydrated (m.chat,`
*${htki} GOOGLE IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, wm, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m) */
};
handler.help = ["gimage <query>", "image <query>"];
handler.tags = ["internet", "tools"];
handler.command = /^(gimage|image)$/i;

export default handler;
