
let home = document.querySelector('.home');
let away = document.querySelector('.away');
let homeScore = document.querySelector('.home-score');
let awayScore = document.querySelector('.away-score');
let homeLogo = document.querySelector('.home-logo');
let awayLogo = document.querySelector('.away-logo');
let row = document.querySelector('.rows');
let timeFirst = document.querySelector('.time-first');
let timeSecond = document.querySelector('.time-second');
let live = document.querySelector('.live');
let all = document.querySelector('.all');
let finished = document.querySelector('.finish');
let coming = document.querySelector('.coming');

function getData() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	};
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-01-29', options)
		.then(response => response.json())
		.then(data => {
			// console.log(data);
			let fixtures = data['response']
			// console.log(fixtures);

			let fixture = fixtures.map(data => {
				            return `
								<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
										<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
								</div>
								<div class="col-md-10 col-10 border-top border-2">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
											<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score">${data.goals.home}</h5>
									</div>
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
											<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
										</div>
										<h5 class="away-score">${data.goals.away}</h5>
									</div>
								</div>
							`;
				        }).join('');
				        document.querySelector('.row').innerHTML = fixture;
						// console.log(data.goals.home)
					})
					.catch(err => {
						console.log(err);
					}
					);
					
		
}
getData();


// get live data

live.addEventListener('click', () => {
	console.log('live');
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	};
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', options)
		.then(response => response.json())
		.then(data => {
			
			// console.log(data);
			let fixtures = data['response']
			// console.log(fixtures);

			let fixture = fixtures.map(data => {
				            return `
								<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
										<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
								</div>
								<div class="col-md-10 col-10 border-top border-2">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
											<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score">${data.goals.home}</h5>
									</div>
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
											<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
										</div>
										<h5 class="away-score">${data.goals.away}</h5>
									</div>
								</div>
							`;
				        }).join('');
				        document.querySelector('.row').innerHTML = fixture;
						// console.log(data.goals.home)
					})
					.catch(err => {
						console.log(err);
					}
					);
					
		
})


// reload page 

all.addEventListener('click', () => {
	console.log('all');
	getData();
}
)

// finished fixtures

finished.addEventListener('click', () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	};
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?last=50', options)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			let fixtures = data['response']
			// console.log(fixtures);

			let fixture = fixtures.map(data => {
				            return `
								<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
										<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
								</div>
								<div class="col-md-10 col-10 border-top border-2">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
											<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score">${data.goals.home}</h5>
									</div>
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
											<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
										</div>
										<h5 class="away-score">${data.goals.away}</h5>
									</div>
								</div>
							`;
				        }).join('');
				        document.querySelector('.row').innerHTML = fixture;
		})

	});


// upcoming fixtures		

	coming.addEventListener('click', () => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
			}
		};
		
		fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50', options)
			.then(response => response.json())
			.then(data => {
				// console.log(response);
				// console.log(data);
			let fixtures = data['response']
			// console.log(fixtures);

			let fixture = fixtures.map(data => {
				            return `
								<div class="col-md-2 col-2 border-top border-2 d-flex  align-items-center">
										<p class="time-first  mx-4">${data.fixture.status.elapsed}'</p>
								</div>
								<div class="col-md-10 col-10 border-top border-2">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="40px">
											<h5 class="home text-primary mx-3">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score">${data.goals.home}</h5>
									</div>
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="away-logo" width="40px">
											<h5 class="away text-success mx-3">${data.teams.away.name}</h5>
										</div>
										<h5 class="away-score">${data.goals.away}</h5>
									</div>
								</div>
							`;
				        }).join('');
						
				        document.querySelector('.row').innerHTML = fixture;
						// console.log(data.goals.home)
			})

	});

	

	