function getDetails() {
    let newObject = localStorage.getItem('stat')
    console.log(newObject);
    let posts = JSON.parse(newObject)
    let data = posts['response']
    console.log(data)

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
    console.log(newObject);
    let posts = JSON.parse(newObject)
    let data = posts['response']
    console.log(data)

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

                    document.querySelector('.get-stat-2').innerHTML = statistics2;

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
    console.log(newObject);
    let posts = JSON.parse(newObject)
    let data = posts['response']
    console.log(data)
    // console.log(data[0].lineups[1].startXI[0].player.number)
    // console.log(data[0].lineups[1].startXI[0].player.name)
    // console.log(data[0].lineups[1].startXI[0].player.pos)
    // console.log(data[0].lineups[0].startXI[0].player.pos)
    // console.log(data[0].lineups[0].startXI[0].player.name)
    // console.log(data[0].lineups[0].startXI[0].player.number)
    // console.log(data[0].lineups[1].startXI[1].player.number)
    // console.log(data[0].lineups[1].startXI[1].player.name)
    // console.log(data[0].lineups[1].startXI[1].player.pos)
    // console.log(data[0].lineups[0].startXI[1].player.pos)
    // console.log(data[0].lineups[0].startXI[1].player.name)
    // console.log(data[0].lineups[0].startXI[1].player.number)

    // loop over the starting ineup and get the player name and number
    let startXI = data[0].lineups[0].startXI;
    let startXI2 = data[0].lineups[1].startXI;
    let startingXI = '';
    let startingXI2 = '';
    for (let i = 0; i < startXI.length; i++) {
        startingXI += `
        <div class="col-6">
            <div class="shadow d-flex justify-content-start align-items-center py-1 px-0 mx-0 border-bottom my-1">
                <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${startXI[i].player.number}. </p>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI[i].player.name}</p>
            </div>
        </div>
        <div class="col-6">
            <div class="shadow d-flex justify-content-start align-items-center py-1 px-0 mx-0 border-bottom my-1">
                <p class="text-dark mb-0 if-null homes" style="font-size: 14px;">${startXI2[i].player.number}. </p>
                <p class="possession text-dark mb-0" style="font-size: 14px;">${startXI2[i].player.name}</p>
            </div>
        </div>
        `;
    }
    document.querySelector('.line-up').innerHTML = startingXI;
}
getLineups();

//     let lineups = data.map(item => {
//         console.log(item.lineups.startXI[0].player.name)
//     // lineups +=
//     // return `
    
//     //                 <div class="home text-center">
//     //                     <p class="text-dark mb-0" style="font-size: 13px"><span class="">${item.lineups.startXI[0].player.number}</span>
//     //                     <span class="mx-2">${item.lineups.startXI[0].player.name}</span>
//     //                     <span class="">(${item.lineups.startXI[0].player.pos})</span></p>
//     //                 </div>
                    
//     //                 `}).join('');

//     // document.querySelector('.line-up').innerHTML = lineups;
// })}
// getLineups();









/* <div class="away text-center">
<p class="text-dark mb-0" style="font-size: 13px"><span class="">${data[0].lineups[1].startXI[0].player.number}</span>
<span class="mx-2">${data[0].lineups[1].startXI[0].player.name}</span>
<span class="">(${data[0].lineups[1].startXI[0].player.pos})</span></p>
</div> */