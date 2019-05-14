module.exports = async (client) => {
	let manutencao = false

	console.log('Ashina está online')

	if(manutencao === true) {
		 client.user.setPresence({
              game: {
                name: 'Estou em manutenção! Melhorias em breve!',
                type:0
              }
            })
	}
}