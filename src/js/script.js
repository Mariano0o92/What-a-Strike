// ALL DATA
const heroImg = document.querySelector('.hero-img')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const navMobile = document.querySelector('.nav-mobile')
const mobileLink = document.querySelectorAll('.nav-mobile__link')
const mobileLinks = document.querySelector('.nav-mobile__links')
const navLinks = document.querySelectorAll('.nav__link')
const navResults = document.querySelectorAll('.nav__results')
const navTable = document.querySelectorAll('.nav__table a')
const mobileResults = document.querySelectorAll('.nav-mobile__results')
const mobileTable = document.querySelectorAll('nav-mobile__table a')
const sections = document.querySelectorAll('.main')
const tables = document.querySelectorAll('.table')


function setActiveSectionFromHash() {
	const hash = window.location.hash.substring(1)
	const section = document.getElementById(hash)

	if (section) {
		removeActiveClasses()
		section.classList.add('main__active')
	}
}


window.addEventListener('hashchange', setActiveSectionFromHash)
window.addEventListener('load', setActiveSectionFromHash)

// HERO IMAGE

const hideHero = () => {
	heroImg.classList.add('hide')
}

setTimeout(hideHero, 5000)

// NAVIGATION MOBILE

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')

	mobileLinks.classList.toggle('nav-mobile__links--active')
})

mobileLink.forEach(link => {
	link.addEventListener('click', () => {
		const existingResultsDiv = nav.querySelector('.nav-mobile__results')
		const existingTableDiv = nav.querySelector('.nav-mobile__table')
		if (existingResultsDiv) {
			existingResultsDiv.remove()
		}
		if (existingTableDiv) {
			existingTableDiv.remove()
		}
		
		
		const linkHref = link.getAttribute('href')
		console.log('linkHref:', linkHref);

		const resultsLink = document.createElement('a')
		resultsLink.href = linkHref
		resultsLink.textContent = 'Results'

		const tableLink = document.createElement('a')
		tableLink.href = linkHref + '-table'
		tableLink.textContent = 'Standings'

		const resultsDiv = document.createElement('div')
		resultsDiv.className = 'nav-mobile__results nav-mobile__results--active'
		resultsDiv.appendChild(resultsLink)

		const tableDiv = document.createElement('div')
		tableDiv.className = 'nav-mobile__table'
		tableDiv.appendChild(tableLink)

		
        navMobile.appendChild(resultsDiv);
        navMobile.appendChild(tableDiv)
	})
})

// NAVIGATION DESKTOP

navLinks.forEach(link => {
	link.addEventListener('click', () => {

		const existingResultsDiv = nav.querySelector('.nav__results')
		const existingTableDiv = nav.querySelector('.nav__table')
		if (existingResultsDiv) {
			existingResultsDiv.remove()
		}
		if (existingTableDiv) {
			existingTableDiv.remove()
		}

	
		const linkHref = link.getAttribute('href')

		const resultsLink = document.createElement('a')
		resultsLink.href = linkHref
		resultsLink.textContent = 'Results'

		const tableLink = document.createElement('a')
		tableLink.href = linkHref + '-table'
		tableLink.textContent = 'Standings'

		const resultsDiv = document.createElement('div')
		resultsDiv.className = 'nav__results nav__results--active'
		resultsDiv.appendChild(resultsLink)

		const tableDiv = document.createElement('div')
		tableDiv.className = 'nav__table'
		tableDiv.appendChild(tableLink)

		
		nav.appendChild(resultsDiv)
		nav.appendChild(tableDiv)
	})
})


// MAIN SECTION

// Toggle class of __active

// DESKTOP

navLinks.forEach((link, index) => {
	link.addEventListener('click', () => {
		const isActive = link.classList.contains('nav__link--active')

		
		if (!isActive) {
			removeActiveClasses()
			sections[index].classList.add('main__active')
			
			navLinks.forEach(navLink => {
				navLink.classList.remove('nav__link--active')
			})
			link.classList.add('nav__link--active')
		}

		navLinks.forEach(navLink => {
			navLink.classList.remove('nav__link--active')
		})

		link.classList.add('nav__link--active')
	})
})

navTable.forEach((link, index) => {
	link.addEventListener('click', event => {
		event.preventDefault()
		removeActiveClasses()
		sections[index + 1].classList.add('main__active') // +1 to select the next section
	})
})

// MOBILE

mobileLink.forEach((link, index) => {
	link.addEventListener('click', () => {
		const isActive = link.classList.contains('nav-mobile__link--active')

		if (!isActive) {
			removeActiveClasses()
			sections[index].classList.add('main__active')
	
			mobileLink.forEach(mobileLink => {
				mobileLink.classList.remove('nav-mobile__link--active')
			})
			link.classList.add('nav-mobile__link--active')
		}

		mobileLink.forEach(mobileLink => {
			mobileLink.classList.remove('nav-mobile__link--active')
		})

		link.classList.add('nav-mobile__link--active')

		mobileLinks.classList.toggle('nav-mobile__links--active')
		hamburger.classList.toggle('is-active')
	})
})

mobileTable.forEach((link, index) => {
	link.addEventListener('click', event => {
		event.preventDefault()
		removeActiveClasses()
		sections[index + 1].classList.add('main__active') // +1 to select the next section
	})
})

function removeActiveClasses() {
	sections.forEach(section => {
		section.classList.remove('main__active')
	})
}

// API DATA

let leagues = ['PL', 'PD', 'BL1', 'SA', 'FL1']

leagues.forEach((id, index) => {
	getData(id, index)
})

function getData(id, pageIndex) {
	const URL_API = 'https://api.football-data.org/v4/competitions/'
	const leagueID = `${id}`

	fetch(URL_API + leagueID + '/standings', {
		method: 'GET',
		headers: {
			'X-Auth-Token': '268640ec6a2640e7991cee35b5c601b6',
			'Accept-Encoding': '',
		},
	})
		.then(res => res.json())
		.then(data => {
			createstandings(data, pageIndex)
		})
		.catch(err => {
			console.log(err)
		})
}

// 	const createScores = (league, pageIndex) => {
// 		const sectionID = ['english', 'spanish', 'german', 'italian', 'french'][pageIndex];
// 		const scores = document.getElementById(sectionID).querySelector('.scores')

// };
const createstandings = (league, pageIndex) => {
	const sectionID = ['english-table', 'spanish-table', 'german-table', 'italian-table', 'french-table'][pageIndex]
	const standings = document.getElementById(sectionID).querySelector('.standings')
	const getTable = league.standings[0].table

	  const header = document.createElement('thead');
	  header.classList.add('standings__header');
	  header.innerHTML = `
		<tr>
		  <th class="standings__header-rank">#</th>
		  <th class="standings__header-team">Team</th>
		  <th class="standings__header-played">P</th>
		  <th class="standings__header-won">W</th>
		  <th class="standings__header-drawn">D</th>
		  <th class="standings__header-lost">L</th>
		  <th class="standings__header-for">+</th>
		  <th class="standings__header-against">-</th>
		  <th class="standings__header-difference">+/-</th>
		  <th class="standings__header-points">P</th>
		</tr>
	  `;
	  standings.appendChild(header);
	
	  const tbody = document.createElement('tbody');
	  tbody.classList.add('standings__teams');

	  getTable.forEach((teamData) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `
		  <td class="standings__teams-rank">${teamData.position}</td>
		  <td class="standings__teams-team">
			<img src="${teamData.team.crest}" alt="${teamData.team.name}">
			<span class="standings__teams-name-full">${teamData.team.name}</span>
		  </td>
		  <td class="standings__teams-played">${teamData.playedGames}</td>
		  <td class="standings__teams-won">${teamData.won}</td>
		  <td class="standings__teams-drawn">${teamData.draw}</td>
		  <td class="standings__teams-lost">${teamData.lost}</td>
		  <td class="standings__teams-for">${teamData.goalsFor}</td>
		  <td class="standings__teams-against">${teamData.goalsAgainst}</td>
		  <td class="standings__teams-difference">${teamData.goalDifference}</td>
		  <td class="standings__teams-points">${teamData.points}</td>
		`;
		tbody.appendChild(tr);
	  });

	  standings.appendChild(tbody)

}
