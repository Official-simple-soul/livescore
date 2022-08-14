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
                                        <h5 class="my-0 text-dark" style="font-size: 14px">${data[0].teams.home.name}</h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="score text-dark">
                                        <h3><span class="mx-2">${data[0].goals.home}</span>:<span class="mx-2">${data[0].goals.away}</span></h3>
                                    </div>
                                    <div class="status">
                                        <p class="my-0 text-dark" style="font-size: 13px">${data[0].fixture.status.long}</p>
                                        <p class="my-0 text-dark" style="font-size: 13px">${data[0].fixture.status.elapsed}'</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="logo">
                                        <img src="${data[0].teams.away.logo}" alt="" class="bg-dark mb-1 rounded p-2" width="40px">
                                    </div>
                                    <div class="text">
                                        <h5 class="my-0 text-dark" style="font-size: 14px">${data[0].teams.away.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>`;

    document.querySelector('.get-stat').innerHTML = statistics;

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
getStat();

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
    let playerImage = data[0].players[0].players;
    let playerImage2 = data[0].players[1].players;
    let splice1 = playerImage.splice(11, playerImage.length);
    let splice2 = playerImage.splice(11, playerImage2.length);
    console.log(splice1);

    let startingXI = '';
    for (let i = 0; i < startXI.length; i++) {
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
    console.log(data)
    // loop over the starting ineup and get the player name and number
    let startXI = data[0].lineups[0].coach;
    let startXI2 = data[0].lineups[1].coach;
    console.log(startXI);

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














// switch betweem stats and lineups
function switchStat() {
	document.querySelector('.stat').addEventListener('click', function() {
		getStat();
        document.querySelector('.sub').style.display = 'none';
        document.querySelector('.coach').style.display = 'none';
	});
	document.querySelector('.lineup').addEventListener('click', function() {
		getLineups();
        getSubs();
        getCoach();
        document.querySelector('.sub').classList.remove('d-none');
        document.querySelector('.coach').classList.remove('d-none');
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









