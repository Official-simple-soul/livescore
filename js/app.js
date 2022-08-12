let menuBtn = document.querySelector('.menu-btn');
let rowling = document.querySelector('.rowling');



// toggle menu
menuBtn.addEventListener('click', function() {
	rowling.classList.toggle('show');
	menuBtn.classList.toggle('fa-xmark');
} );

// window click event rowling display none
window.addEventListener('click', function(e) {
	if (e.target == rowling) {
		rowling.classList.remove('show');
		menuBtn.classList.remove('fa-xmark');
	}
} );


// select one navbar item
function selectNavbarItem() {
	let navbarItems = document.querySelectorAll('.all');
	navbarItems.forEach(function(item) {
		item.addEventListener('click', function() {
			navbarItems.forEach(function(item) {
				item.classList.remove('active');
			} );
			this.classList.add('active');
		} );
	} );
}
selectNavbarItem();

// Api key
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

// get leagues
function getData() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			let splice = fixtures.splice(0, 20)
			let fixture = splice.map(data => {

				            return `
								<div class="col-md-12 col-12 shadow mb-3 border-2 hover px-2 select-league">
									<button class="d-flex justify-content-between align-items-center my-1 border-0 bg-transparent w-100" onclick="clickMe(${data.league.id})">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.league.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.league.name}</h5>
										</div>	
										<h5 class="home-score text-light league-id d-none" style="font-size: 13px">${data.league.id}</h5>
									</button>
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

// get other data
function getMoreData() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			let splice = fixtures.splice(0, 100)
			let fixture = splice.map(data => {

				            return `
								<div class="col-md-12 col-12 shadow mb-3 border-2 hover px-2 select-league">
									<button class="d-flex justify-content-between align-items-center my-1 border-0 bg-transparent w-100" onclick="clickMe(${data.league.id})">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.league.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.league.name}</h5>
										</div>	
										<h5 class="home-score text-light league-id d-none" style="font-size: 13px">${data.league.id}</h5>
									</button>
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
getMoreData();

// get fixtures
function getFixtures() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-04-07', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			let fixture = fixtures.map(data => {
				// converting timestamp to local time
				let date = new Date(data.fixture.timestamp * 1000);
				let hours = date.getHours();
				let minutes = "0" + date.getMinutes();
				let formattedTime = hours + ':' + minutes.substr(-2);

				// add am or pm
				let ampm = hours >= 12 ? 'pm' : 'am';
				formattedTime += ampm;
				
				            return `
								<div class="col-md-12 col-12 cursour">
									<div class="d-flex justify-content-between align-items-center my-0">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score" style="font-size: 14px">${data.score.fulltime.home}</h5>
									</div>
								</div>
								<div class="col-md-12 col-12">
									<div class="d-flex justify-content-between align-items-center my-0">

										<p class="time text-danger my-0 mx-3" style="font-size: 11px">${formattedTime}</p>
										<p class="time text-danger my-0 mx-3" style="font-size: 12px">${data.fixture.status.short}</p>
									</div>
								</div>
								<div class="col-md-12 col-12  cursour border-bottom border-3">
									<div class="d-flex justify-content-between align-items-center my-0">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.away.name}</h5>
										</div>	
										<h5 class="away-score" style="font-size: 14px">${data.score.fulltime.away}</h5>
									</div>
								</div>

							`;
							}).join('');
							document.querySelector('.rowling-fixture').innerHTML = fixture;

							// fixtures conditions
							let score = document.querySelectorAll('.home-score');
							score.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '-';
								}
							}
							);
							let score2 = document.querySelectorAll('.away-score');
							score2.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '-';
								}
							}
							);

							})

						
}

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
										<h5 class="home-score-live text-danger fw-bold" style="font-size: 13px">${data.goals.home}</h5>
									</div>
								</div>
								<div class="col-md-12 col-12">
									<div class="d-flex justify-content-between align-items-center my-0">
										<p class="time lively text-danger my-0 mx-3" style="font-size: 11px">live</p>
										<p class="time text-danger my-0 mx-3" style="font-size: 11px">${data.fixture.status.elapsed}</p>
									</div>
								</div>
								<div class="col-md-12 col-12  cursour border-bottom border-3">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.away.name}</h5>
										</div>	
										<h5 class="away-score-live text-danger fw-bold" style="font-size: 13px">${data.goals.away}</h5>
									</div>
								</div>

							`;
							}).join('');
							document.querySelector('.rowling-fixture').innerHTML = fixture;

							// conditions for live fixtures
							let score = document.querySelectorAll('.home-score-live');
							score.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '-';
								}
							}
							);
							let score2 = document.querySelectorAll('.away-score-live');
							score2.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '-';
								}
							}
							);
						})
}
getLiveFixtures();

// finished fixtures
function getFinishedFixtures() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?last=50', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			let fixture = fixtures.map(data => {

				// converting timestamp to local time
				let date = new Date(data.fixture.timestamp * 1000);
				let hours = date.getHours();
				let minutes = "0" + date.getMinutes();
				let formattedTime = hours + ':' + minutes.substr(-2);

				// add am or pm
				let ampm = hours >= 12 ? 'pm' : 'am';
				formattedTime += ampm;
				            return `
								<div class="col-md-12 col-12 cursour">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score-live text-dark" style="font-size: 13px">${data.goals.home}</h5>
									</div>
								</div>
								<div class="col-md-12 col-12">
									<div class="d-flex justify-content-between align-items-center my-0">
										<p class="time text-danger my-0 mx-3" style="font-size: 10px">${formattedTime}</p>
										<p class="time text-danger my-0 mx-3" style="font-size: 11px">${data.fixture.status.short}</p>
									</div>
								</div>
								<div class="col-md-12 col-12  cursour border-bottom border-3">
									<div class="d-flex justify-content-between align-items-center my-1">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.away.name}</h5>
										</div>	
										<h5 class="away-score-live text-dark" style="font-size: 13px">${data.goals.away}</h5>
									</div>
								</div>

							`;
							}).join('');
							document.querySelector('.rowling-fixture').innerHTML = fixture;		

							// if score is null then display ? 
							let score = document.querySelectorAll('.home-score-live');
							score.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '-';
								}
							}
							);
							let score2 = document.querySelectorAll('.away-score-live');
							score2.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '-';
								}
							}
							);
						})
}

// get upcoming fixtures
function getNextFixtures() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			let fixture = fixtures.map(data => {

				// converting timestamp to local time
				let date = new Date(data.fixture.timestamp * 1000);
				let hours = date.getHours();
				let minutes = "0" + date.getMinutes();
				let formattedTime = hours + ':' + minutes.substr(-2);

				// add am or pm
				let ampm = hours >= 12 ? 'pm' : 'am';
				formattedTime += ampm;
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
								<div class="col-md-12 col-12">
									<div class="d-flex justify-content-between align-items-center my-0">
										<p class="time text-danger my-0 mx-3" style="font-size: 10px">${formattedTime}</p>
										<p class="time text-danger my-0 mx-3" style="font-size: 11px">${data.fixture.status.short}</p>
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
						
							// if score is null then display ? 
							let score = document.querySelectorAll('.home-score-live');
							score.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '?';
								}
							}
							);
							let score2 = document.querySelectorAll('.away-score-live');
							score2.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '?';
								}
							}
							);

						})
}

// get fixtures by league id
function clickMe(id) {
	
	fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${id}&season=2022`, options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']
			console.log(fixtures);

			let fixture = fixtures.map(data => {
				// converting timestamp to local time
				let date = new Date(data.fixture.timestamp * 1000);
				let hours = date.getHours();
				let minutes = "0" + date.getMinutes();
				let formattedTime = hours + ':' + minutes.substr(-2);

				// add am or pm
				let ampm = hours >= 12 ? 'pm' : 'am';
				formattedTime += ampm;
				
				            return `
								<div class="col-md-12 col-12 cursour">
									<div class="d-flex justify-content-between align-items-center my-0">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.home.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.home.name}</h5>
										</div>	
										<h5 class="home-score" style="font-size: 14px">${data.score.fulltime.home}</h5>
									</div>
								</div>
								<div class="col-md-12 col-12">
									<div class="d-flex justify-content-between align-items-center my-0">

										<p class="time text-danger my-0 mx-3" style="font-size: 11px">${formattedTime}</p>
										<p class="time text-danger my-0 mx-3" style="font-size: 12px">${data.fixture.status.short}</p>
									</div>
								</div>
								<div class="col-md-12 col-12  cursour border-bottom border-3">
									<div class="d-flex justify-content-between align-items-center my-0">
										<div class="d-flex justify-content-start align-items-center my-1">
											<img src="${data.teams.away.logo}" alt="" class="home-logo" width="30px">
											<h5 class="home text-light mx-3" style="font-size: 13px">${data.teams.away.name}</h5>
										</div>	
										<h5 class="away-score" style="font-size: 14px">${data.score.fulltime.away}</h5>
									</div>
								</div>

							`;
							}).join('');
							document.querySelector('.rowling-fixture').innerHTML = fixture;

							// fixtures conditions
							let score = document.querySelectorAll('.home-score');
							score.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '?';
								}
							}
							);
							let score2 = document.querySelectorAll('.away-score');
							score2.forEach(score => {
								if (score.innerHTML === 'null') {
									score.innerHTML = '?';
								}
							}
							);

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
		getFixtures();
	});
	document.querySelector('.schedule').addEventListener('click', function() {
		getNextFixtures();
	});
	document.querySelector('.more').addEventListener('click', function() {
		getMoreData();
	});
}
switchFixtures();
