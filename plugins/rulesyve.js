let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═════〘 DONASI 〙 ═
╠➥ DANA [+6287899922661]
╠➥ PULSA [6283113989278]
╰═══〘 ${namabot} 〙 ═

╭═══════〘 PRIVASI BOT 〙═══
➥Kebijakan Privasi

1. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× tidak akan merekam data riwayat chat user.
2. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× tidak akan menyebarkan nomor users.
3. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× tidak akan menyimpan media yang dikirimkan oleh users.
4. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× tidak akan menyalah gunakan data data users.
5. Owner K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× berhak melihat data riwayat chat users.
6. Owner K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× berhak melihat status users.
7. Owner K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× dapat melihat riwayat chat, dan media yang dikirimkan users.
╭═══════════════════════
➥Peraturan Bot

1. Users dilarang menelpon maupun video call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.
╭═══════════════════════
➥Syarat Ketentuan Bot

1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. K͓̽a͓̽z͓̽u͓̽K͓̽i͓̽B͓̽o͓̽t͓̽z͓̽ ×፝֟͜× bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
╰═══════════════════════
`.trim()
  const button = {
        buttonText: 'Klik Disini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Owner', description: "CHAT BAGI YANG KEPENTINGAN", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.help = ['main']
handler.tags = ['rulesprivasi']
handler.command = handler.command = /^(rulesprivasi)$/i
module.exports = handler