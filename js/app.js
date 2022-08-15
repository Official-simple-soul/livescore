let menuBtn = document.querySelector('.menu-btn');
let rowling = document.querySelector('.rowling');
let more = document.querySelector('.more');
let england = document.querySelector(".rowling-england");
let spain = document.querySelector(".rowling-spain");
let germany = document.querySelector(".rowling-germany");
let france = document.querySelector(".rowling-france");
let italy = document.querySelector(".rowling-italy");


// toggle menu
menuBtn.addEventListener('click', function() {
	rowling.classList.toggle('show');
	menuBtn.classList.toggle('fa-xmark');
	more.classList.toggle('d-none');
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
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2022-08-13', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			// group array by id
			let groupBy = (array, key) => {
				return array.reduce((objectsByKeyValue, obj) => {
					const value = obj[key];
					objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
					return objectsByKeyValue;
				} ,{});
			}
			let grouped = groupBy(fixtures, 'league_id');
			let fixture = Object.keys(grouped).map(function(key) {
				return grouped[key];
			}).map(function(item) {

				// loop over array
				let fixture = item.map(data => {

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
					<div class="row bg-dark">
						<div class="col-lg-12 col-12">
							<div class="d-flex justify-content-between align-items-center my-1">
								<p class=" mx-3 text-light text-center mb-0">${data.league.country}</p>
								<p class=" mx-3 text-light text-center mb-0">${data.league.name}</p>
							</div>
						</div>
					</div>
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
			})
			return fixture.join('');

		
		
		
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
// getFixtures();


// get live fixtures
function getLiveFixtures() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			let groupBy = (array, key) => {
				return array.reduce((objectsByKeyValue, obj) => {
					const value = obj[key];
					objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
					return objectsByKeyValue;
				} ,{});
			}
			let grouped = groupBy(fixtures, 'league_id');
			let fixture = Object.keys(grouped).map(function(key) {
				return grouped[key];
			}).map(function(item) {

			let fixture = item.map(data => {
						// console.log(data.fixture.id);
				            return `
								<div class="col-md-12 col-12 px-0">
									<div class="row bg-dark">
										<div class="col-lg-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.country}</p>
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.name}</p>
											</div>
										</div>
									</div>
									<div class="col-md-12 col-12 cursour" onclick="checkStat(${data.fixture.id})">
										<div class="col-md-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.home.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.home.name}</h5>
												</div>	
												<h5 class="home-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.home}</h5>
											</div>
										</div>
										<div class="col-md-12 col-12 border-3">
											<p class="time text-danger my-0 mx-3 position-absolute chng" style="font-size: 11px"><span class="px-2">Live</span>${data.fixture.status.elapsed}'</p>
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.away.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.away.name}</h5>
												</div>	
												<h5 class="away-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.away}</h5>
											</div>
										</div>
									</div>
								</div>
								

							`;
			})
			return fixture.join('');
			
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

							// if live match is equal to null
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

		england.classList.add('d-none');
		spain.classList.add('d-none');
		germany.classList.add('d-none');
		france.classList.add('d-none');
		italy.classList.add('d-none');
		
	});
	document.querySelector('.live').addEventListener('click', function() {
		getLiveFixtures();

		england.classList.remove('d-none');
		spain.classList.remove('d-none');
		germany.classList.remove('d-none');
		france.classList.remove('d-none');
		italy.classList.remove('d-none');
	});
	document.querySelector('.finished').addEventListener('click', function() {
		getFixtures();

		england.classList.add('d-none');
		spain.classList.add('d-none');
		germany.classList.add('d-none');
		france.classList.add('d-none');
		italy.classList.add('d-none');
	});
	document.querySelector('.schedule').addEventListener('click', function() {
		getNextFixtures();

		england.classList.add('d-none');
		spain.classList.add('d-none');
		germany.classList.add('d-none');
		france.classList.add('d-none');
		italy.classList.add('d-none');
	});
	document.querySelector('.more').addEventListener('click', function() {
		getMoreData();
	});
}
switchFixtures();

// reload window after 5 seconds
setTimeout(function() {
	location.reload();
}
, 150000);


// head to head between two teams
function checkStat(id) {
	fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`, options)
	.then(response => response.json())
	.then(data => 
		{
			localStorage.setItem('stat', JSON.stringify(data));
			// window.location.href = 'stat.html';
			// target blank
			window.open('stat.html', '_blank');
		});
}

// premier league
function getLiveFixturesEngland() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2022&live=all', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			let groupBy = (array, key) => {
				return array.reduce((objectsByKeyValue, obj) => {
					const value = obj[key];
					objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
					return objectsByKeyValue;
				} ,{});
			}
			let grouped = groupBy(fixtures, 'league_id');
			let fixture = Object.keys(grouped).map(function(key) {
				return grouped[key];
			}).map(function(item) {
				let splice = item.splice(0, 10);
			let fixture = splice.map(data => {
				            return `
								<div class="col-md-12 col-12 px-0">
									<div class="row bg-dark">
										<div class="col-lg-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.country}</p>
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.name}</p>
											</div>
										</div>
									</div>
									<div class="col-md-12 col-12 cursour" onclick="checkStat(${data.fixture.id})">
										<div class="col-md-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.home.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.home.name}</h5>
												</div>	
												<h5 class="home-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.home}</h5>
											</div>
										</div>
										<div class="col-md-12 col-12 border-3">
											<p class="time text-danger my-0 mx-3 position-absolute chng" style="font-size: 11px"><span class="px-2">Live</span>${data.fixture.status.elapsed}'</p>
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.away.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.away.name}</h5>
												</div>	
												<h5 class="away-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.away}</h5>
											</div>
										</div>
									</div>
								</div>
								

							`;
			})
			return fixture.join('');
			
						}).join('');
							document.querySelector('.rowling-england').innerHTML = fixture;

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

							// if live match is equal to null
						})
}
getLiveFixturesEngland();
// Bundesliga
function getLiveFixturesSpain() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=140&season=2022&live=all', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			let groupBy = (array, key) => {
				return array.reduce((objectsByKeyValue, obj) => {
					const value = obj[key];
					objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
					return objectsByKeyValue;
				} ,{});
			}
			let grouped = groupBy(fixtures, 'league_id');
			let fixture = Object.keys(grouped).map(function(key) {
				return grouped[key];
			}).map(function(item) {
				let splice = item.splice(0, 10);
			let fixture = splice.map(data => {
				            return `
								<div class="col-md-12 col-12 px-0">
									<div class="row bg-dark">
										<div class="col-lg-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.country}</p>
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.name}</p>
											</div>
										</div>
									</div>
									<div class="col-md-12 col-12 cursour" onclick="checkStat(${data.fixture.id})">
										<div class="col-md-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.home.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.home.name}</h5>
												</div>	
												<h5 class="home-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.home}</h5>
											</div>
										</div>
										<div class="col-md-12 col-12 border-3">
											<p class="time text-danger my-0 mx-3 position-absolute chng" style="font-size: 11px"><span class="px-2">Live</span>${data.fixture.status.elapsed}'</p>
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.away.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.away.name}</h5>
												</div>	
												<h5 class="away-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.away}</h5>
											</div>
										</div>
									</div>
								</div>
								

							`;
			})
			return fixture.join('');
			
						}).join('');
							document.querySelector('.rowling-spain').innerHTML = fixture;

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

							// if live match is equal to null
						})
}
getLiveFixturesSpain();
// // la liga
function getLiveFixturesGermany() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=78&season=2022&live=all', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			let groupBy = (array, key) => {
				return array.reduce((objectsByKeyValue, obj) => {
					const value = obj[key];
					objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
					return objectsByKeyValue;
				} ,{});
			}
			let grouped = groupBy(fixtures, 'league_id');
			let fixture = Object.keys(grouped).map(function(key) {
				return grouped[key];
			}).map(function(item) {
				let splice = item.splice(0, 10);
			let fixture = splice.map(data => {
				            return `
								<div class="col-md-12 col-12 px-0">
									<div class="row bg-dark">
										<div class="col-lg-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.country}</p>
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.name}</p>
											</div>
										</div>
									</div>
									<div class="col-md-12 col-12 cursour" onclick="checkStat(${data.fixture.id})">
										<div class="col-md-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.home.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.home.name}</h5>
												</div>	
												<h5 class="home-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.home}</h5>
											</div>
										</div>
										<div class="col-md-12 col-12 border-3">
											<p class="time text-danger my-0 mx-3 position-absolute chng" style="font-size: 11px"><span class="px-2">Live</span>${data.fixture.status.elapsed}'</p>
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.away.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.away.name}</h5>
												</div>	
												<h5 class="away-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.away}</h5>
											</div>
										</div>
									</div>
								</div>
								

							`;
			})
			return fixture.join('');
			
						}).join('');
							document.querySelector('.rowling-germany').innerHTML = fixture;

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

							// if live match is equal to null
						})
}
getLiveFixturesGermany();
// // ligue 1
function getLiveFixturesFrance() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&season=2022&live=all', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			let groupBy = (array, key) => {
				return array.reduce((objectsByKeyValue, obj) => {
					const value = obj[key];
					objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
					return objectsByKeyValue;
				} ,{});
			}
			let grouped = groupBy(fixtures, 'league_id');
			let fixture = Object.keys(grouped).map(function(key) {
				return grouped[key];
			}).map(function(item) {
				let splice = item.splice(0, 10);
			let fixture = splice.map(data => {
				            return `
								<div class="col-md-12 col-12 px-0">
									<div class="row bg-dark">
										<div class="col-lg-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.country}</p>
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.name}</p>
											</div>
										</div>
									</div>
									<div class="col-md-12 col-12 cursour" onclick="checkStat(${data.fixture.id})">
										<div class="col-md-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.home.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.home.name}</h5>
												</div>	
												<h5 class="home-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.home}</h5>
											</div>
										</div>
										<div class="col-md-12 col-12 border-3">
											<p class="time text-danger my-0 mx-3 position-absolute chng" style="font-size: 11px"><span class="px-2">Live</span>${data.fixture.status.elapsed}'</p>
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.away.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.away.name}</h5>
												</div>	
												<h5 class="away-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.away}</h5>
											</div>
										</div>
									</div>
								</div>
								

							`;
			})
			return fixture.join('');
			
						}).join('');
							document.querySelector('.rowling-france').innerHTML = fixture;

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

							// if live match is equal to null
						})
}
getLiveFixturesFrance();
// // serie a
function getLiveFixturesItaly() {
	
	fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=135&season=2022&live=all', options)
		.then(response => response.json())
		.then(data => {
			let fixtures = data['response']

			let groupBy = (array, key) => {
				return array.reduce((objectsByKeyValue, obj) => {
					const value = obj[key];
					objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
					return objectsByKeyValue;
				} ,{});
			}
			let grouped = groupBy(fixtures, 'league_id');
			let fixture = Object.keys(grouped).map(function(key) {
				return grouped[key];
			}).map(function(item) {
				let splice = item.splice(0, 10);
			let fixture = splice.map(data => {
				            return `
								<div class="col-md-12 col-12 px-0">
									<div class="row bg-dark">
										<div class="col-lg-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.country}</p>
												<p class=" mx-3 text-light text-center mb-0" style="font-size: 13px">${data.league.name}</p>
											</div>
										</div>
									</div>
									<div class="col-md-12 col-12 cursour" onclick="checkStat(${data.fixture.id})">
										<div class="col-md-12 col-12">
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.home.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.home.name}</h5>
												</div>	
												<h5 class="home-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.home}</h5>
											</div>
										</div>
										<div class="col-md-12 col-12 border-3">
											<p class="time text-danger my-0 mx-3 position-absolute chng" style="font-size: 11px"><span class="px-2">Live</span>${data.fixture.status.elapsed}'</p>
											<div class="d-flex justify-content-between align-items-center my-1">
												<div class="d-flex justify-content-start align-items-center my-1">
													<img src="${data.teams.away.logo}" alt="" class="home-logo" width="15px">
													<h5 class="home text-light mx-3 my-0" style="font-size: 13px">${data.teams.away.name}</h5>
												</div>	
												<h5 class="away-score-live text-danger fw-bold my-0" style="font-size: 13px">${data.goals.away}</h5>
											</div>
										</div>
									</div>
								</div>
								

							`;
			})
			return fixture.join('');
			
						}).join('');
							document.querySelector('.rowling-italy').innerHTML = fixture;

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

							// if live match is equal to null
						})
}
getLiveFixturesItaly();