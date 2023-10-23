// ALL DATA
const heroImg = document.querySelector('.hero-img')
const hamburger = document.querySelector('.hamburger')
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

// MAIN SECTION

function toggleActive(link) {
    navLinks.forEach(function (link) {
        link.classList.remove('nav__link--active');
    });
    link.classList.add('nav__link--active');
}

function showSection(sectionID) {
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    tables.forEach(function (table) {
        table.style.display = 'none';
    });

    if (sectionID === 'table') {
        // If the "Table" link is clicked, display only the table content
        const tableSection = document.querySelector('.table[data-section="table"]');
        if (tableSection) {
            tableSection.style.display = 'flex';
        }
    } else {
        // For other sections, display their content
        const targetSection = document.querySelector(`.main_${sectionID}`);
        if (targetSection) {
            targetSection.style.display = 'flex';
        }
    }
}

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        const sectionID = link.getAttribute('data-section');
        toggleActive(link);
        showSection(sectionID);
    });
});

// Handle the "Table" link separately
const tableDiv = document.querySelector('.nav__table');
tableDiv.addEventListener('click', function () {
    showTable(); // A new function to handle the "Table" link
});

function showTable() {
    // Add or remove the --active class for the "Table" link
    tableDiv.classList.add('nav__link--active');
    // Set the display of .table to "flex"
    const tableSection = document.querySelector('.table[data-section="table"]');
    if (tableSection) {
        tableSection.style.display = 'flex';
    }
    // Remove the --active class from other nav__link elements
    navLinks.forEach(function (link) {
        if (link !== tableDiv) {
            link.classList.remove('nav__link--active');
        }
    });
}

// Initialize by hiding all sections and only showing the "Table" section
sections.forEach(function (section) {
    section.style.display = 'none';
});

tables.forEach(function (table) {
    table.style.display = 'none';
});

// Show the "Table" section on page load
showTable();

// Initialize by hiding all sections and only showing the "Table" section
sections.forEach(function (section) {
    section.style.display = 'none';
});
tables.forEach(function (table) {
    table.style.display = 'none';
});

// Show the "Table" section on page load
showSection('table');
toggleActive(tableDiv);
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
