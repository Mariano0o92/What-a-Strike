
// HERO IMAGE
const heroImg = document.querySelector('.hero-img')

const hideHero = () => {
	heroImg.classList.add('hide')
}

setTimeout(hideHero, 5000)


// MAIN SECTION
function getData() {
	fetch("https://v3.football.api-sports.io/leagues", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": "5909e88e3467b12f2fe26cdc167d9662"
		}
	})
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	});
}

getData()

