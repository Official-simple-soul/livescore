
// let home = document.querySelector('.home');
// let away = document.querySelector('.away');
// let homeScore = document.querySelector('.home-score');
// let awayScore = document.querySelector('.away-score');
// let homeLogo = document.querySelector('.home-logo');
// let awayLogo = document.querySelector('.away-logo');
// let row = document.querySelector('.rows');
// let timeFirst = document.querySelector('.time-first');
// let timeSecond = document.querySelector('.time-second');
// let live = document.querySelector('.live');
// let all = document.querySelector('.all');
// let finished = document.querySelector('.finish');
// let coming = document.querySelector('.coming');
// let england = document.querySelector('.england');
// let spain = document.querySelector('.spain');
// let italy = document.querySelector('.italy');
// let germany = document.querySelector('.germany');
// let france = document.querySelector('.france');
// let holland = document.querySelector('.holland');

// // SECTION TO BE DISPLAYED
// let premierLeague = document.querySelector('.baclays')
// let laLiga = document.querySelector('.liga')
// let serieA = document.querySelector('.serie')
// let Ligue = document.querySelector('.ligue')
// let bundesliga = document.querySelector('.bundesliga')
// let eredivisie = document.querySelector('.eredivisie')
// let links = document.querySelector('.tabs')

// // links.forEach((button) => {
// // 	button.addEventListener(`click`, (e) => {
// // 		const selectedOption = e.currentTarget.classList;
// // 		if(selectedOption.contains(`baclaysTab`)) {
// // 			mainContent.forEach((cont) => {
// // 				cont.classList.remove(`show`);
// // 				premierLeague.classList.add(`show`);
// // 			})
// // 		} else if(selectedOption.contains(`ligaTab`)) {
// // 				mainContent.forEach((cont) => {
// // 				cont.classList.remove(`show`);
// // 				laLiga.classList.add(`show`);
// // 			})
// // 		} else if(selectedOption.contains(`bundesligaTab`)) {
// // 				mainContent.forEach((cont) => {
// // 				cont.classList.remove(`show`);
// // 				bundesliga.classList.add(`show`);
// // 			})
// // 		} else if(selectedOption.contains(`serieTab`)) {
// // 				mainContent.forEach((cont) => {
// // 				cont.classList.remove(`show`);
// // 				serieA.classList.add(`show`);
// // 			})
// // 		} else if(selectedOption.contains(`ligueTab`)) {
// // 				mainContent.forEach((cont) => {
// // 				cont.classList.remove(`show`);
// // 				Ligue.classList.add(`show`);
// // 			})
// // 		} else if(selectedOption.contains(`eredivisieTab`)) {
// // 				mainContent.forEach((cont) => {
// // 				cont.classList.remove(`show`);
// // 				eredevisie.classList.add(`show`);
// // 			})
// // 		}
// // 	})
// // });
// // SECTION SELECTION ENDS HERE

// function getData() {
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
// 			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 		}
// 	};
	
// 	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', options)
// 		.then(response => response.json())
// 		.then(data => {
// 			// console.log(data);
// 			let fixtures = data['response']
// 			console.log(fixtures);

// 			let fixture = fixtures.map(data => {
// 				            return `
// 							<div class="col-md-9 mx-auto ff">
// 								<div class="row">
// 									<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
// 											<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
// 									</div>
// 									<div class="col-md-10 col-10 border-top border-2">
// 										<div class="d-flex justify-content-between align-items-center my-1">
// 											<div class="d-flex justify-content-start align-items-center my-1">
// 												<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
// 												<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
// 											</div>	
// 											<h5 class="home-score">${data.goals.home}</h5>
// 										</div>
// 										<div class="d-flex justify-content-between align-items-center my-1">
// 											<div class="d-flex justify-content-start align-items-center my-1">
// 												<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
// 												<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
// 											</div>
// 											<h5 class="away-score">${data.goals.away}</h5>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							`;
// 				        }).join('');
// 				        document.querySelector('.scores').innerHTML = fixture;
// 						// console.log(data.goals.home)
// 					})
// 					.catch(err => {
// 						console.log(err);
// 					}
// 					);
					
		
// }
// getData();


// // get live data

// all.addEventListener('click', () => {
// 	console.log('live');
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
// 			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 		}
// 	};
	
// 	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2022-07-26', options)
// 		.then(response => response.json())
// 		.then(data => {
			
// 			// console.log(data);
// 			let fixtures = data['response']
// 			// console.log(fixtures);

// 			let fixture = fixtures.map(data => {
// 				            return `
// 								<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
// 										<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
// 								</div>
// 								<div class="col-md-10 col-10 border-top border-2">
// 									<div class="d-flex justify-content-between align-items-center my-1">
// 										<div class="d-flex justify-content-start align-items-center my-1">
// 											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
// 											<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
// 										</div>	
// 										<h5 class="home-score">${data.goals.home}</h5>
// 									</div>
// 									<div class="d-flex justify-content-between align-items-center my-1">
// 										<div class="d-flex justify-content-start align-items-center my-1">
// 											<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
// 											<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
// 										</div>
// 										<h5 class="away-score">${data.goals.away}</h5>
// 									</div>
// 								</div>
// 							`;
// 				        }).join('');
// 				        document.querySelector('.scores').innerHTML = fixture;
// 						// console.log(data.goals.home)
// 					})
// 					.catch(err => {
// 						console.log(err);
// 					}
// 					);
					
// 		all.classList.add('actives');
// 		live.classList.remove('actives');
// 		coming.classList.remove('actives');
// 		finished.classList.remove('actives');
// })


// // reload page 

// live.addEventListener('click', () => {
// 	console.log('all');
// 	getData();

// 	all.classList.remove('actives');
// 	live.classList.add('actives');
// 	coming.classList.remove('actives');
// 	finished.classList.remove('actives');
// }
// )

// // finished fixtures

// finished.addEventListener('click', () => {
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
// 			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 		}
// 	};
	
// 	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?last=50', options)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data);
// 			let fixtures = data['response']
// 			// console.log(fixtures);

// 			let fixture = fixtures.map(data => {
// 				            return `
// 								<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
// 										<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
// 								</div>
// 								<div class="col-md-10 col-10 border-top border-2">
// 									<div class="d-flex justify-content-between align-items-center my-1">
// 										<div class="d-flex justify-content-start align-items-center my-1">
// 											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
// 											<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
// 										</div>	
// 										<h5 class="home-score">${data.goals.home}</h5>
// 									</div>
// 									<div class="d-flex justify-content-between align-items-center my-1">
// 										<div class="d-flex justify-content-start align-items-center my-1">
// 											<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
// 											<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
// 										</div>
// 										<h5 class="away-score">${data.goals.away}</h5>
// 									</div>
// 								</div>
// 							`;
// 				        }).join('');
// 				        document.querySelector('.scores').innerHTML = fixture;
// 		})

// 		all.classList.remove('actives');
// 		live.classList.remove('actives');
// 		coming.classList.remove('actives');
// 		finished.classList.add('actives');

// 	});


// // upcoming fixtures		

// coming.addEventListener('click', () => {
// 	// window.alert('coming soon');
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
// 			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 		}
// 	};
	
// 	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50', options)
// 		.then(response => response.json())
// 		.then(data => {
// 			// console.log(response);
// 			// console.log(data);
// 		let fixtures = data['response']
// 		// console.log(fixtures);

// 		let fixture = fixtures.map(data => {
// 						return `
// 							<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
// 									<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
// 							</div>
// 							<div class="col-md-10 col-10 border-top border-2">
// 								<div class="d-flex justify-content-between align-items-center my-1">
// 									<div class="d-flex justify-content-start align-items-center my-1">
// 										<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
// 										<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
// 									</div>	
// 									<h5 class="home-score">${data.goals.home}</h5>
// 								</div>
// 								<div class="d-flex justify-content-between align-items-center my-1">
// 									<div class="d-flex justify-content-start align-items-center my-1">
// 										<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
// 										<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
// 									</div>
// 									<h5 class="away-score">${data.goals.away}</h5>
// 								</div>
// 							</div>
// 						`;
// 					}).join('');
					
// 					document.querySelector('.scores').innerHTML = fixture;
// 					// console.log(data.goals.home)
// 		})

// 		all.classList.remove('actives');
// 		live.classList.remove('actives');
// 		coming.classList.add('actives');
// 		finished.classList.remove('actives');
// });


// // english premier league

// england.addEventListener('click', () => {
// 	window.alert('coming soon');
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
// 			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 		}
// 	};
	
// 	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2022', options)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(response);
// 			// console.log(data);
// 		let fixtures = data['response']
// 		// console.log(fixtures);

// 		let fixture = fixtures.map(data => {
// 						return `
// 							<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
// 									<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
// 							</div>
// 							<div class="col-md-10 col-10 border-top border-2">
// 								<div class="d-flex justify-content-between align-items-center my-1">
// 									<div class="d-flex justify-content-start align-items-center my-1">
// 										<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
// 										<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
// 									</div>
// 									<h5 class="home-score">${data.goals.home}</h5>
// 								</div>
// 								<div class="d-flex justify-content-between align-items-center my-1">
// 									<div class="d-flex justify-content-start align-items-center my-1">
// 										<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
// 										<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
// 									</div>
// 									<h5 class="away-score">${data.goals.away}</h5>
// 								</div>
// 							</div>
// 						`;
// 					}).join('');
// 					document.querySelector('.scores').innerHTML = fixture;
// 					// console.log(data.goals.home)
// 		})
// 	});

// 	let sss = document.querySelector('.sss');

// 	sss.addEventListener('click', () => {
// 		alert('coming soon');
// 	})



// // let url = 'Livescores: https://livescore-api.com/api-client/scores/live.json?competition_id=2&key=demo_key&secret=demo_secret'

// // 	fetch(url)
// // 		.then(response => response.json())
// // 		.then(data => {
// // 			console.log(data);
// // 		})

// 		// function getData() {
// 		// 	const options = {
// 		// 		method: 'GET',
// 		// 		headers: {
// 		// 			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
// 		// 			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 		// 		}
// 		// 	};
			
// 		// 	fetch('https://api-football-v1.p.rapidapi.com/v3/leagues?country=England', options)
// 		// 		.then(response => response.json())
// 		// 		.then(data => {
// 		// 			console.log(data);
// 		// 		})
					
					
							
				
// 		// }
// 		// getData();



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

let leagueName = document.querySelectorAll('.leagueName');
let ctry = document.querySelectorAll('.ctry');

for (let i = 0; i < leagueName.length; i++) {
	leagueName[i].addEventListener('click', () => {

	let getFocus = leagueName[i].getElementsByClassName('ctry');
	let lastName = getFocus[0].innerHTML;
	console.log(lastName);

	fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${lastName}`, options)
	.then(response => response.json())
	.then(response => {
		// console.log(response);
		let leagues = response['response'];
		let league = leagues.map(data => {
			return `
				<div class="col-md-4 col-4 border-top border-2 d-flex  align-items-center">
					<p class="time-first  mx-4">${data.seasons}</p>
				</div>
			`;
		}).join('');
		document.querySelector('.leagues').innerHTML = league;
	});
	});
	
}


fetch('https://api-football-v1.p.rapidapi.com/v3/leagues?name', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	// fetch('https://api-football-v1.p.rapidapi.com/v3/leagues?id=150', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

	// fetch('https://api-football-v1.p.rapidapi.com/v3/leagues?id=160', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

	
	
	// fetch('https://heisenbug-ligue-1-live-scores-v1.p.rapidapi.com/api/ligue1/team?name=%3CREQUIRED%3E', options)
	// 	.then(response => response.json())
	// 	.then(response => console.log(response))
	// 	.catch(err => console.error(err));

// const passwords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
// 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 
// 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 
// 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 
// 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

// let passwordGenerate = document.querySelector('.password-generate');
// let passwordShow = document.querySelector('.password-show');

// // passwordGenerate.addEventListener('click', () => {
// // 	let password = '';
// // 	for (let i = 0; i < 6; i++) {
// // 		password += passwords[Math.floor(Math.random() * passwords.length)];
// // 	}
// // 	passwordShow.value = password;
// // });

// // function getRandom() {
// // 	return Math.floor(Math.random() * passwords.length);
// // }

// passwordShow.setAttribute('value', 'Giyu');
		

// la liga is 140
// premier league is 39
// bundesliga is 78
// eredivisie is 88
// serie a is 41



















// let value = document.querySelectorAll('.ctry');
// for (let i = 0; i < value.length; i++) {
// 	value[i].addEventListener('click', () => {
// 		// console.log(value[i]);
// 		let val = value[i].innerHTML;

// 		fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${val}`, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response);
// 		let leagues = response['response'];
// 		let league = leagues.map(data => {
// 			return `
// 				<div class="col-md-4 col-4 border-top border-2 d-flex  align-items-center">
// 					<p class="time-first  mx-4">${data.league.name}</p>
// 				</div>
// 			`;
// 		}).join('');
// 		document.querySelector('.leagues').innerHTML = league;
// 	});
// 	});
// }
// let val = value.innerHTML

// console.log(val);

	// val.forEach(valu => {
	// 	valu.addEventListener('click', () => {
	// 		console.log('value');
	// 	})
	// })

// let val = value.innerHTML;
// console.log(val);

// fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${val}`, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response);
// 		let leagues = response['response'];
// 		let league = leagues.map(data => {
// 			return `
// 				<div class="col-md-4 col-4 border-top border-2 d-flex  align-items-center">
// 					<p class="time-first  mx-4">${data.league.name}</p>
// 				</div>
// 			`;
// 		}).join('');
// 		document.querySelector('.leagues').innerHTML = league;
// 	});


	