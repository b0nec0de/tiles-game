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
		name: '1982',
		src: './assets/img/tango.jpg'
	},
	{
		name: '1970',
		src: './assets/img/telstar_old.jpg'
	},
	{
		name: '1930',
		src: './assets/img/first.jpg'
	}
];

export const combineContent = () => {
	let doubleInitialContent = dataBase.concat(dataBase);
	return doubleInitialContent.sort(() => Math.random() - 0.5);
}
