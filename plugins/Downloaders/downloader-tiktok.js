import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
	try {
   if (!args[0]) return m.reply(`Masukan Url Instagram !\n*Contoh:* ${ usedPrefix + command } Tiktok`)
   let res = await fetch(`https://api.zahwazein.xyz/downloader/tiktok?apikey=zenzkey_98dc747298&url=${args[0]}`)
   let result = await res.json()
   let json = result.video
   let kon = `_A-anu.... hanya ini yang watashi bisa kasih~_
   
_Gomennasai Sensei~_
   
`
m.reply(wait)
await conn.sendFile(m.chat, json, 'instagram.mp4', kon, m)
} catch (e) {
	m.reply(`A-anu.... Gomennasai~\nSepertinya ada yang salah silahkan coba lagi nanti`)
	console.log(e)
	}
	}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

handler.premium = false
handler.limit = true 

export default handler