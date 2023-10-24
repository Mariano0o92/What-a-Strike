// ALL DATA
const heroImg = document.querySelector('.hero-img')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector(".nav");
const mobileLink = document.querySelectorAll('.nav-mobile__link')
const mobileLinks = document.querySelector('.nav-mobile__links')
const navLinks = document.querySelectorAll('.nav__link')
const navResults = document.querySelectorAll('.nav__results');
const navTable = document.querySelectorAll('.nav__table a');
const sections = document.querySelectorAll('.main')
const tables = document.querySelectorAll('.table');

// Function to set the active section based on the URL hash
function setActiveSectionFromHash() {
	const hash = window.location.hash.substring(1); // Remove the '#' character
	const section = document.getElementById(hash);
	
	if (section) {
	  removeActiveClasses(); // Remove active classes from all sections
	  section.classList.add('main__active'); // Add active class to the section with the hash
	}
  }
  
  // Add event listener to handle hash changes and initial page load
  window.addEventListener('hashchange', setActiveSectionFromHash);
  window.addEventListener('load', setActiveSectionFromHash);

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

// Toggle class of __active
navLinks.forEach((link, index) => {
	link.addEventListener('click', () => {
		const isActive = link.classList.contains('nav__link--active');
    
		// If it's not active, remove active classes from other links and add the active class
		if (!isActive) {
		  removeActiveClasses();
		  sections[index].classList.add('main__active');
		  // Also remove nav__link--active from other links
		  navLinks.forEach((navLink) => {
			navLink.classList.remove('nav__link--active');
		  });
		  link.classList.add('nav__link--active');
		}

			navLinks.forEach((navLink) => {
				navLink.classList.remove('nav__link--active');
			  });
			  
			  link.classList.add('nav__link--active');

		})
    })
mobileLink.forEach((link, index) => {
	link.addEventListener('click', () => {
		const isActive = link.classList.contains('nav__link--active');
    
		// If it's not active, remove active classes from other links and add the active class
		if (!isActive) {
		  removeActiveClasses();
		  sections[index].classList.add('main__active');
		  // Also remove nav__link--active from other links
		  navLinks.forEach((navLink) => {
			navLink.classList.remove('nav__link--active');
		  });
		  link.classList.add('nav__link--active');
		}

			mobileLink.forEach((mobileLink) => {
				mobileLink.classList.remove('nav-mobile__link--active');
			  });

			  link.classList.add('nav-mobile__link--active');

			mobileLinks.classList.toggle('nav-mobile__links--active')
			hamburger.classList.toggle('is-active')
		});
    })

	navTable.forEach((link, index) => {
		link.addEventListener('click', (event) => {
		  event.preventDefault();
		  removeActiveClasses();
		  sections[index + 1].classList.add('main__active'); // +1 to select the next section
		});
	  })

function removeActiveClasses() {
	sections.forEach(section => {
		section.classList.remove('main__active')
    })
}


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
