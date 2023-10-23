// ALL DATA
const heroImg = document.querySelector('.hero-img')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector(".nav");
const mobileLinks = document.querySelector('.nav-mobile__links')
const navLinks = document.querySelectorAll('.nav__link')
const navResults = document.querySelectorAll('.nav__results');
const navTable = document.querySelectorAll('.nav__table');
const sections = document.querySelectorAll('.main')
const tables = document.querySelectorAll('.table');

// HERO IMAGE

const hideHero = () => {
	heroImg.classList.add('hide')
}

setTimeout(hideHero, 5000)

// NAVIGATION

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')

	mobileLinks.classList.toggle('nav-mobile__links--active')
})

  // Add click event listeners to .nav__link elements
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove previously added divs (if any)
      const existingResultsDiv = nav.querySelector(".nav__results");
      const existingTableDiv = nav.querySelector(".nav__table");
      if (existingResultsDiv) {
        existingResultsDiv.remove();
      }
      if (existingTableDiv) {
        existingTableDiv.remove();
      }

      // Create Results and Table links for the clicked .nav__link
      const linkText = link.textContent;
      const linkHref = link.getAttribute("href");

      const resultsLink = document.createElement("a");
      resultsLink.href = linkHref;
      resultsLink.textContent = "Results";

      const tableLink = document.createElement("a");
      tableLink.href = linkHref + "-table";
      tableLink.textContent = "Table";

      const resultsDiv = document.createElement("div");
      resultsDiv.className = "nav__results nav__results--active";
      resultsDiv.appendChild(resultsLink);

      const tableDiv = document.createElement("div");
      tableDiv.className = "nav__table";
      tableDiv.appendChild(tableLink);

      // Append Results and Table divs to the .nav container
      nav.appendChild(resultsDiv);
      nav.appendChild(tableDiv);
    });
  });
// MAIN SECTION



// API DATA

let leagues = ['PL', 'PD', 'BL1', 'SA', 'FL1']

leagues.forEach((id, index) => {
	// getData(id, index)

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
			// console.log(data);
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
			// console.log(logo);
		
		
};
