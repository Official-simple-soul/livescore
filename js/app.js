let menuBtn = document.querySelector('.menu-btn');
let rowling = document.querySelector('.rowling');



// toggle menu
menuBtn.addEventListener('click', function() {
	rowling.classList.toggle('show');
} );

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

function getData() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			let splice = fixtures.splice(0, 20)
			let fixture = splice.map(data => {

				            return `
								<div class="col-md-12 col-12 shadow mb-3 border-2 hover px-2">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.league.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.league.name}</h5>
										</div>	
										<h5 class="home-score text-light" style="font-size: 13px">${data.league.id}</h5>
									</div>
								</div>
							`;
				        }).join('');
				        document.querySelector('.rowling').innerHTML = fixture;
						
					})
					.catch(err => {
						console.log(err);
					}
					);
}
getData();


// get fixtures
function getFixtures() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-04-07', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			// console.log(fixtures)
			let fixture = fixtures.map(data => {
				            return `
								<div class="col-md-12 col-12 cursour">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score" style="font-size: 13px">${data.score.fulltime.home}</h5>
									</div>
								</div>
								<div class="col-md-12 col-12  cursour border-bottom border-3">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.away.name}</h5>
										</div>	
										<h5 class="away-score" style="font-size: 13px">${data.score.fulltime.away}</h5>
									</div>
								</div>

							`;
							}).join('');
							document.querySelector('.rowling-fixture').innerHTML = fixture;

							// fixtures conditions

							})

						
}	
getFixtures();	

// get live fixtures
function getLiveFixtures() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			let fixture = fixtures.map(data => {
				            return `
								<div class="col-md-12 col-12 cursour">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score-live text-light" style="font-size: 13px">${data.goals.home}</h5>
									</div>
								</div>
								<div class="col-md-12 col-12  cursour border-bottom border-3">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.away.name}</h5>
										</div>	
										<h5 class="away-score-live text-light" style="font-size: 13px">${data.goals.away}</h5>
									</div>
								</div>

							`;
							}).join('');
							document.querySelector('.rowling-fixture').innerHTML = fixture;		
						})
}


// finished fixtures
function getFinishedFixtures() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?last=50', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			let fixture = fixtures.map(data => {
				            return `
								<div class="col-md-12 col-12 cursour">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score-live text-light" style="font-size: 13px">${data.goals.home}</h5>
									</div>
								</div>
								<div class="col-md-12 col-12  cursour border-bottom border-3">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.away.name}</h5>
										</div>	
										<h5 class="away-score-live text-light" style="font-size: 13px">${data.goals.away}</h5>
									</div>
								</div>

							`;
							}).join('');
							document.querySelector('.rowling-fixture').innerHTML = fixture;		
						})
}






// switch between fixtures and live fixtures
function switchFixtures() {
	document.querySelector('.all').addEventListener('click', function() {
		getFixtures();
	});
	document.querySelector('.live').addEventListener('click', function() {
		getLiveFixtures();
	});
	document.querySelector('.finished').addEventListener('click', function() {
		getFinishedFixtures();
	});
}
switchFixtures();

// fixtures conditions

