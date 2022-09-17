let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0819-4770-7409]
│ •  [donasi lah bang ><]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
