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

// MAIN SECTION

const navLinks = document.querySelectorAll('.nav__link')
let leagues = ['PL', 'PD', 'BL1', 'SA', 'FL1']

leagues.forEach(id => {
	getData(id)
});

function getData(id) {
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
			console.log(data)
			const scores = document.querySelector('.scores')
			const logo = data.emblem
			scores.style.backgroundImage = `url(${logo})`
			console.log(logo);
		})
		.catch(err => {
			console.log(err)
		})
}
