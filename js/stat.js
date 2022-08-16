const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};





function getDetails() {
    let newObject = localStorage.getItem('stat')
    let posts = JSON.parse(newObject)
    let data = posts['response']

    let statistics = ''
        
        statistics += `<div class="col-12">
                            <div class="row">
                                <div class="col-4">
                                    <div class="logo">
                                        <img src="${data[0].teams.home.logo}" alt="" class="bg-dark mb-1 rounded p-2" width="40px">
                                    </div>
                                    <div class="text">
                                        <h5 class="my-0 text-dark table-home" style="font-size: 14px">${data[0].teams.home.name}</h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="score text-dark">
                                        <h3><span class="mx-2 if-null">${data[0].goals.home}</span>:<span class="mx-2 if-null">${data[0].goals.away}</span></h3>
                                    </div>
                                    <div class="status">
                                        <p class="my-0 text-dark" style="font-size: 13px">${data[0].fixture.status.long}</p>
                                        <p class="my-0 text-dark if-nul" style="font-size: 13px">${data[0].fixture.status.elapsed}'</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="logo">
                                        <img src="${data[0].teams.away.logo}" alt="" class="bg-dark mb-1 rounded p-2" width="40px">
                                    </div>
                                    <div class="text">
                                        <h5 class="my-0 text-dark  table-away" style="font-size: 14px">${data[0].teams.away.name}</h5>
                                        <h5 class="my-0 text-dark league-id d-none" style="font-size: 14px">${data[0].league.id}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>`;

    document.querySelector('.get-stat').innerHTML = statistics;

    const ifNull = document.querySelectorAll('.if-null');
    ifNull.forEach(item => {
    if (item.innerHTML === 'null') {
        item.innerHTML = '?';
    }
    });

    const ifNull2 = document.querySelector('.if-nul');
    if (ifNull2.innerHTML === "null'") {
        ifNull2.innerHTML = '-';
    }
    ;

}
getDetails();

// get statistics
function getStat() {
    let newObject = localStorage.getItem('stat')
    let posts = JSON.parse(newObject)
    let data = posts['response']

                    let statistics2 = ''

                    statistics2 += `<div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[9].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Ball possession</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[9].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[2].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Shots</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[2].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[0].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Shots on Goal</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[0].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[1].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Shots off Goal</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[1].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[13].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Total Pass</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[13].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[15].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Pass Percentage</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[15].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[7].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Corner Kicks</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[7].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[3].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Throw in</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[3].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[8].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">offside</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[8].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[10].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Yellow Cards</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[10].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[11].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Red Cards</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[11].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[6].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">Fouls</p>
                        <p class="text-dark mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[6].value}</p>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="shadow d-flex justify-content-between align-items-center px-2 py-1 border-bottom my-1">
                        <p class=" mb-0 if-null homes" style="font-size: 14px;">${data[0].statistics[0].statistics[12].value}</p>
                        <p class="possession text-dark mb-0" style="font-size: 14px;">GoalKeeper Saves</p>
                        <p class=" mb-0 if-null aways" style="font-size: 14px;">${data[0].statistics[1].statistics[12].value}</p>
                    </div>
                    </div>
                    `;

                    document.querySelector('.line-up').innerHTML = statistics2;

                    // if innerHTML is null, then display '-'
                    const ifNull = document.querySelectorAll('.if-null');
                    ifNull.forEach(item => {
                    if (item.innerHTML === 'null') {
                        item.innerHTML = '-';
                    }
                    });

}
// getStat();

// get lineups
function getLineups() {
    let newObject = localStorage.getItem('stat')
    let posts = JSON.parse(newObject)
    let data = posts['response']
    // console.log(data)
    // loop over the starting ineup and get the player name and number
    let startXI = data[0].lineups[0].startXI;
    let startXI2 = data[0].lineups[1].startXI;
    let playerImage = data[0].players[0].players;
    let playerImage2 = data[0].players[1].players;

    let startingXI = '';
    for (let i = 0; i < startXI.length; i++) {
        startingXI += `
        <div class="col-6  border-bottom border-right">
            <div class="d-flex justify-content-center align-items-center py-1 px-0 mx-0 my-1">
                <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${startXI[i].player.number}. </p>
                <img src="${playerImage[i].player.photo}" alt="" class="rounded mx-4" width="30px">
                <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${startXI[i].player.pos}.</p>
            </div>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI[i].player.name}</p>
        </div>
        <div class="col-6 border-bottom">
            <div class="d-flex justify-content-center align-items-center py-1 px-0 mx-0 my-1">
                <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${startXI2[i].player.number}.</p>
                <img src="${playerImage2[i].player.photo}" alt="" class="rounded mx-4" width="30px">
                <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${startXI2[i].player.pos}.</p>
            </div>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI2[i].player.name}</p>
        </div>
        `;
    }
    document.querySelector('.line-up').innerHTML = startingXI;
}
// getLineups();

// get substitutions
function getSubs() {
    let newObject = localStorage.getItem('stat')
    let posts = JSON.parse(newObject)
    let data = posts['response']

    let startXI = data[0].lineups[0].substitutes;
    let startXI2 = data[0].lineups[1].substitutes;

    let startingXI = '';
    for (let i = 0; i < startXI2.length; i++) {
        startingXI += `
        <div class="col-6  border-bottom border-right">
            <div class="d-flex justify-content-center align-items-center py-1 px-0 mx-0 my-1">
                <p class="text-dark mb-0 if-null homes mx-2" style="font-size: 14px;">${startXI[i].player.number}. </p>
                <p class="text-dark mb-0 if-null homes mx-2" style="font-size: 14px;">${startXI[i].player.pos}.</p>
            </div>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI[i].player.name}</p>
        </div>
        <div class="col-6 border-bottom">
            <div class="d-flex justify-content-center align-items-center py-1 px-0 mx-0 my-1">
                <p class="text-dark mb-0 if-null homes mx-2" style="font-size: 14px;">${startXI2[i].player.number}.</p>
                <p class="text-dark mb-0 if-null homes mx-2" style="font-size: 14px;">${startXI2[i].player.pos}.</p>
            </div>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI2[i].player.name}</p>
        </div>
        `;
    }
    document.querySelector('.line-up-sub').innerHTML = startingXI;
}
// getSubs();


// get coach
function getCoach() {
    let newObject = localStorage.getItem('stat')
    let posts = JSON.parse(newObject)
    let data = posts['response']
    // console.log(data)
    // loop over the starting ineup and get the player name and number
    let startXI = data[0].lineups[0].coach;
    let startXI2 = data[0].lineups[1].coach;
    // console.log(startXI);

    let startingXI = '';

        startingXI += `
        <div class="col-6 border-right">
            <div class="d-flex justify-content-center align-items-center py-1 px-0 mx-0 my-1">
                <img src="${startXI.photo}" alt="" class="rounded mx-4" width="30px">
            </div>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI.name}</p>
        </div>
        <div class="col-6">
            <div class="d-flex justify-content-center align-items-center py-1 px-0 mx-0 my-1">
                <img src="${startXI2.photo}" alt="" class="rounded mx-4" width="30px">
            </div>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI2.name}</p>
        </div>
        `;
    document.querySelector('.line-up-coach').innerHTML = startingXI;
}
// getCoach();

// get match summary
function getMatchSummary() {
    let newObject = localStorage.getItem('stat')
    let posts = JSON.parse(newObject)
    let data = posts['response']
        // for (let i = data.length - 1; i >= 0; i--) {


    let event1 = data[0].events;
    let events = '';
    for (let i = event1.length - 1; i >= 0; i--) {
        events += `     <div class="col-12 border-bottom py-1 d-flex shift">
                            <div>
                                <div class="d-flex justify-content-center">
                                    <div class="time">
                                        <p class="mb-0 ass" style="font-size: 11px;">${event1[i].time.elapsed}'</p>
                                    </div>
                                    <div class="type">
                                        <p class="mb-0 mx-2 goal-type ass" style="font-size: 11px;">${event1[i].type}</p>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="scorer ms-2">
                                        <p class="mb-0 ass" style="font-size: 13px;">${event1[i].player.name}</p>
                                    </div>
                                    <div class="assist">
                                        <p class="mx-1 mb-0 text-muted ass" style="font-size: 13px;">(${event1[i].assist.name})</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
                }
    document.querySelector('.line-up').innerHTML = events;
    
                // replace goal with font awesome
                let goal = document.querySelectorAll('.goal-type');
                for (let i = 0; i < goal.length; i++) {
                    if (goal[i].innerHTML === 'Goal') {
                        goal[i].innerHTML = '<i class="fas fa-futbol"></i>';
                    }
                }
                
                // replace red card with font awesome
                let red = document.querySelectorAll('.goal-type');
                for (let i = 0; i < red.length; i++) {
                    if (red[i].innerHTML === 'Card' && event1[i].detail === 'Red Card') {
                        red[i].innerHTML = '<i class="fas fa-diamond text-danger"></i>';
                    }
                    else if (red[i].innerHTML === 'Card' && event1[i].detail === 'Yellow Card') {
                        red[i].innerHTML = '<i class="fas fa-diamond text-warning"></i>';
                    }
                }

                // replace substitution with font awesome
                let sub = document.querySelectorAll('.goal-type');
                for (let i = 0; i < sub.length; i++) {
                    if (sub[i].innerHTML === 'subst') {
                        sub[i].innerHTML = '<i class="fas fa-exchange-alt"></i>';
                    }
                }
                // display none if no assist
                let assist = document.querySelectorAll('.ass');
                for (let i = 0; i < assist.length; i++) {
                    if (assist[i].innerHTML === '(null)' || assist[i].innerHTML === 'null') {
                        assist[i].classList.add('d-none');
                    }
                }
                // add justify content end if event.name is equal to team.away.name
                let shift = document.querySelectorAll('.shift');
                let dat = data[0].teams;
                // add justify content end to col-12 if event.name is equal to team.away.name
                for (let i = 0; i < shift.length; i++) {
                    if (event1[i].team.name === dat.away.name) {
                        shift[i].classList.add('justify-content-end');
                    }
                }
}
getMatchSummary();

// get league table
document.querySelector('.standing').addEventListener('click', function() {
    let leagueId = document.querySelector('.league-id').innerHTML;
    fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=${leagueId}`, options)
    .then(response => response.json())
    .then(data => {
        let fixtures = data['response'];
        console.log(fixtures);
        let tables = fixtures[0].league.standings[0];
        let table = '';
        for (let i = 0; i < tables.length; i++) {
            table += `
                                <div class="col-12 ">
                                    <div class="row this">
                                        <div class="col-4 clubs p-0 d-flex justify-content-start align-items-center">
                                            <img src="${tables[i].team.logo}" alt="" class="mx-1" width="20px">
                                            <p class="my-1 " style="font-size: 12px">${tables[i].team.name}</p>
                                        </div>
                                        <div class="col-8 table-rolls p-0 d-flex align-items-center">
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].all.played}</p>
                                            </div>
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].all.win}</p>
                                            </div>
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].all.draw}</p>
                                            </div>
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].all.lose}</p>
                                            </div>
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].points}</p>
                                            </div>
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].all.goals.for}</p>
                                            </div>
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].all.goals.against}</p>
                                            </div>
                                            <div class="p-0">
                                                <p class="mx-2 my-1" style="font-size: 12px;">${tables[i].goalsDiff}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            `
        }
        document.querySelector('.line-up').innerHTML = table;

        // if data[i].teams.away.name is equal to tables[i].team.name, this.classList.add('bg-secondary');
        let thiss = document.querySelectorAll('.this');
        let tableHome = document.querySelector('.table-home');
        let tableAway = document.querySelector('.table-away');
        for (let i = 0; i < thiss.length; i++) {
            if (tables[i].team.name === tableHome.innerHTML) {
                thiss[i].classList.add('bg-secondary');
            }
            else if (tables[i].team.name === tableAway.innerHTML) {
                thiss[i].classList.add('bg-secondary');
            }
        }
    })
        document.querySelector('.tab-no-sho-1').classList.add('d-none');
        document.querySelector('.tab-no-sho-2').classList.add('d-none');
        document.querySelector('.tab-sho').classList.remove('d-none');
        document.querySelector('.sub-coach').classList.add('d-none');
} )







// switch betweem stats and lineups
function switchStat() {
	document.querySelector('.stat').addEventListener('click', function() {
		getStat();
        document.querySelector('.sub-coach').classList.add('d-none');
        document.querySelector('.tab-no-sho-1').classList.remove('d-none');
        document.querySelector('.tab-no-sho-2').classList.remove('d-none');
        document.querySelector('.tab-sho').classList.add('d-none');
	});
	document.querySelector('.lineup').addEventListener('click', function() {
		getLineups();
        getSubs();
        getCoach();
        document.querySelector('.sub-coach').classList.remove('d-none');
        document.querySelector('.tab-no-sho-1').classList.remove('d-none');
        document.querySelector('.tab-no-sho-2').classList.remove('d-none');
        document.querySelector('.tab-sho').classList.add('d-none');
	});
    document.querySelector('.summary').addEventListener('click', function() {
        getMatchSummary();
        document.querySelector('.sub-coach').classList.add('d-none');
        document.querySelector('.tab-no-sho-1').classList.remove('d-none');
        document.querySelector('.tab-no-sho-2').classList.remove('d-none');
        document.querySelector('.tab-sho').classList.add('d-none');
	});
}
switchStat();

// select one menu at a time using for each
function selectOne() {
    document.querySelectorAll('.tic').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.tic').forEach(item => {
                item.classList.remove('active-stat');
            });
            this.classList.add('active-stat');
        } );
    } );
}
selectOne();

