const dataBase = [
	{
		name: '2018',
		src: './assets/img/telstar.jpg'
	},
	{
		name: '2014',
		src: './assets/img/brazuca.jpg'
	},
	{
		name: '2010',
		src: './assets/img/jabulani.jpg'
	},
	{
		name: '2006',
		src: './assets/img/teamgeist.jpg'
	},
	{
		name: '2002',
		src: './assets/img/fevernova.jpg'
	},
	{
		name: '1998',
		src: './assets/img/tricolore.jpg'
	},
	{
		name: '1970',
		src: './assets/img/telstar_old.jpg'
	},
	{
		name: '1990',
		src: './assets/img/etrusco.jpg'
	}
];

export const combineContent = () => {
	let doubleInitialContent = dataBase.concat(dataBase);
	return doubleInitialContent.sort(() => Math.random() - 0.5);
}
