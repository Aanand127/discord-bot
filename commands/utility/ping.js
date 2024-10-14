const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('Replies with TOILET!'),
	async execute(interaction) {
		await interaction.reply('TOILET!');
	},
};
