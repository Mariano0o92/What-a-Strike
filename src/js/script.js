// HERO IMAGE
const heroImg = document.querySelector('.hero-img')

const hideHero = () => {
	heroImg.classList.add('hide')
}

setTimeout(hideHero, 5000)

// NAVIGATION

const hamburger = document.querySelector('.hamburger')
const mobileLinks = document.querySelector('.nav-mobile__links')
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')

	mobileLinks.classList.toggle('nav-mobile__links--active')
})

// API DATA

const navLinks = document.querySelectorAll('.nav__link')
let leagues = ['PL', 'PD', 'BL1', 'SA', 'FL1']

leagues.forEach((id, index) => {
	getData(id, index)

});

function getData(id, pageIndex) {
	const URL_API = 'https://api.football-data.org/v4/competitions/'
	const leagueID = `${id}`


	fetch(URL_API + leagueID, {
		method: 'GET',
		headers: {
			'X-Auth-Token': '268640ec6a2640e7991cee35b5c601b6',
			'Accept-Encoding': ''
		},
	})
		.then(res => res.json())
		.then(data => {
			createScores(data, pageIndex)
			console.log(data);
		})
		.catch(err => {
			console.log(err)
		})
	}


	const createScores = (league, pageIndex) => {
		const sectionID = ['english', 'spanish', 'german', 'italian', 'french'][pageIndex];
		const scores = document.getElementById(sectionID).querySelector('.scores')
			const logo = league.emblem
			scores.style.backgroundImage = `url(${logo})`
			console.log(logo);
		
		
};
