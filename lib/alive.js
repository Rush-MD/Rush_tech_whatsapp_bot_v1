

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./src/ALIVE.mp3"
    let url = "https://github.com/Rush-MD"
    let murl = "www.instagram.com/rush_1"
    let img = "https://telegra.ph/file/d31762a021e4dfd7eda52.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "main",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "rush md",
          body: "rush bot",
          thumbnailUrl: img,
          sourceUrl: 'https://whatsapp.com/channel/0029VacPdLXJ93wP6q0b962J',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['owner']
    handler.command = /^(alive)$/i 

    export default handler;
