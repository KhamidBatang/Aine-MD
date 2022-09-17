let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0819-4770-7409]
│ •  [Donasi lah bang ><]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler