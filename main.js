// Team player
const players = [
    {
        id: '1',
        name: 'David de Degea',
        bg_link : "./img/player/1.jpg"
    },
    {
        id: '5',
        name: 'Harry Maguire',
        bg_link: './img/player/5.jpg'
    },
    {
        id: '6',
        name: 'Lisandro Martinez',
        bg_link: './img/player/6.jpg'
    },
    {
        id: '8',
        name: 'Bruno Fernandes',
        bg_link: './img/player/8.jpg'
    },
    {
        id: '9',
        name: 'Anthony Martial',
        bg_link: './img/player/9.jpg'
    },
    {
        id: '10',
        name: 'Marcus Rashford',
        bg_link: './img/player/10.jpg'
    },
    {
        id: '12',
        name: 'Tyrell Malacia',
        bg_link: './img/player/12.jpg'
    },
    {
        id: '14',
        name: 'Christian Eriksen',
        bg_link: './img/player/14.jpg'
    },
    {
        id: '15',
        name: 'Marcel Sabitzer',
        bg_link: './img/player/15.jpg'
    },
    {
        id: '17',
        name: 'Fred',
        bg_link: './img/player/17.jpg'
    },
    {
        id: '18',
        name: 'Casemiro',
        bg_link: './img/player/18.jpg'
    },
    {
        id: '19',
        name: 'Raphael Varane',
        bg_link: './img/player/19.jpg'
    },
    {
        id: '20',
        name: 'Diogo Dalot',
        bg_link: './img/player/20.jpg'
    },
    {
        id: '21',
        name: 'Antony',
        bg_link: './img/player/21.jpg'
    },
    {
        id: '23',
        name: 'Luke Shaw',
        bg_link: './img/player/23.jpg'
    },
    {
        id: '25',
        name: 'Jadon Sancho',
        bg_link: './img/player/25.jpg'
    },
    {
        id: '26',
        name: 'Dean Henderson',
        bg_link: './img/player/26.jpg'
    },
    {
        id: '27',
        name: 'Wout Weghorst',
        bg_link: './img/player/27.jpg'
    },
    {
        id: '29',
        name: 'Aaron Wan-Bissaka',
        bg_link: './img/player/29.jpg'
    },
    {
        id: '39',
        name: 'Scott Mc Tominay',
        bg_link: './img/player/39.jpg'
    },
    {
        id: '49',
        name: 'Alejandro Garnacho',
        bg_link: './img/player/49.jpg'
    },
]

var elementsPlayers = document.querySelectorAll('.player')
var elementsPlayersLength  = elementsPlayers.length
for(var j = 0;j<elementsPlayersLength;j++){
    for(var i in players){
        if(elementsPlayers[j].getAttribute("id") === players[i].id){
            var htmls = `
            <div class="player">
                <img src="${players[i].bg_link}" alt="" class="player__img">
                <span class="player__title">${players[i].id}
                    <p>${players[i].name}</p>
                </span>
            </div>
            `
            elementsPlayers[j].innerHTML = htmls
        }
    }
}

// Legend player
const legends = [
    {
        id: '1',
        name: 'SIR ALEX FERGUSON',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x13',
            './img/trophies/C1.png',
            'x2',
            './img/trophies/Fa.png',
            'x5',
        ],
        birth: '31/12/1941',
        nation: 'Scotland',
        nationImg: './img/flag/scotland.png',
        appearances: '745',
        goals: '1480',
        bg_link:'./img/info-legend/1.jpg',
        img_link: './img/info-legend/ferguson.png'
    },
    {
        id: '2',
        name: 'BOBBY CHARLTON',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x1',
            './img/trophies/C1.png',
            'x1',
            './img/trophies/Fa.png',
            'x1',
        ],
        birth: '11/10/1937',
        nation: 'England',
        nationImg: './img/flag/Anh.png',
        appearances: '758',
        goals: '249',
        bg_link:'./img/info-legend/2.jpg',
        img_link: './img/info-legend/bobby-charlton.png'
    },
    {
        id: '3',
        name: 'RYAN GIGGS',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x13',
            './img/trophies/C1.png',
            'x2',
            './img/trophies/Fa.png',
            'x4',
        ],
        birth: '29/11/1973',
        nation: 'Wales',
        nationImg: './img/flag/wales.png',
        appearances: '963',
        goals: '168',
        bg_link:'./img/info-legend/3.jpg',
        img_link: './img/info-legend/Ryan-Giggs.png'
    },
    {
        id: '4',
        name: 'PAUL SCHOLES',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x11',
            './img/trophies/C1.png',
            'x2',
            './img/trophies/Fa.png',
            'x3',
        ],
        birth: '16/09/1974',
        nation: 'England',
        nationImg: './img/flag/Anh.png',
        appearances: '718',
        goals: '155',
        bg_link:'./img/info-legend/4.jpg',
        img_link: './img/info-legend/Scholes.png'
    },
    {
        id: '5',
        name: 'WAYNE ROONEY',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x5',
            './img/trophies/C1.png',
            'x1',
            './img/trophies/Fa.png',
            'x1',
        ],
        birth: '24/10/1985',
        nation: 'England',
        nationImg: './img/flag/Anh.png',
        appearances: '559',
        goals: '253',
        bg_link:'./img/info-legend/5.jpg',
        img_link: './img/info-legend/rooney.png'
    },
    {
        id: '6',
        name: 'RUUD VAN NISTELROOY',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x1',
            './img/trophies/Fa.png',
            'x1',
        ],
        birth: '01/07/1976',
        nation: 'Holland',
        nationImg: './img/flag/halan.png',
        appearances: '219',
        goals: '150',
        bg_link:'./img/info-legend/6.jpg',
        img_link: './img/info-legend/Ruud-van-Nistelrooy.png'
    },
    {
        id: '7',
        name: 'CRISTIANO RONALDO',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x3',
            './img/trophies/C1.png',
            'x1',
            './img/trophies/Fa.png',
            'x1',
        ],
        birth: '05/02/1985',
        nation: 'Portugal',
        nationImg: './img/flag/Bo.png',
        appearances: '346',
        goals: '145',
        bg_link:'./img/info-legend/7.jpg',
        img_link: './img/info-legend/Cristiano-Ronaldo.png'
    },
    {
        id: '8',
        name: 'ERIC CANTONA',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x4',
            './img/trophies/Fa.png',
            'x1',
        ],
        birth: '24/05/1996',
        nation: 'France',
        nationImg: './img/flag/phap.png',
        appearances: '182',
        goals: '82',
        bg_link:'./img/info-legend/8.jpg',
        img_link: './img/info-legend/eric-cantona-render.png'
    },
    {
        id: '9',
        name: 'DAVID BECKHAM',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x6',
            './img/trophies/C1.png',
            'x1',
            './img/trophies/Fa.png',
            'x2',
        ],
        birth: '02/05/1975',
        nation: 'England',
        nationImg: './img/flag/Anh.png',
        appearances: '394',
        goals: '85',
        bg_link:'./img/info-legend/9.jpg',
        img_link: './img/info-legend/beckham.png'
    },
    {
        id: '10',
        name: 'RIO FERDINAND',
        trophies: [
            './img/trophies/Epl-cup.png',
            'x6',
            './img/trophies/C1.png',
            'x1',
            './img/trophies/Fa.png',
            'x1',
        ],
        birth: '07/11/1978',
        nation: 'England',
        nationImg: './img/flag/Anh.png',
        appearances: '455',
        goals: '8',
        bg_link:'./img/info-legend/10.jpg',
        img_link: './img/info-legend/Rio-Ferdinand.png'
    }
]


// Show Legend info
var bodyElement, infoElement
function showLegendInfo(id){
    const body = document.querySelector('body')
    bodyElement = body
    const info = document.createElement('div')
    info.classList.add('modal')
    var str = `<div class="body__info-trophies">`
    var length = legends[id-1].trophies.length
    for(var i = 0;i < length ; i+=2){    
        str = str.concat(`
        <div class="body__info-trophie__item">
            <img src="${legends[id-1].trophies[i]}" alt="">`,
            `<p>${legends[id-1].trophies[i+1]}</p>
        </div>
            `)
    }
    str = str.concat(`</div>`)
    info.innerHTML = `
        <div onclick="removeShowLegendInfo()" class="modal__layout"></div>
        <div class="modal__body">
            <div onclick="showNextLegendInfo(${id-1})" class="body__tranform-before">
                <i class="fa-solid fa-backward"></i>
            </div>
            <div class="body__img">
                <img src="${legends[id-1].img_link}" alt="">
            </div>
            <div class="body__info">
                <h3>${legends[id-1].name}</h3>
                <span>Birth: ${legends[id-1].birth}</span>
                <div class="body__info-nation">
                    <p>Nation:</p>
                    <img src="${legends[id-1].nationImg}" alt="">
                    <p>${legends[id-1].nation}</p>
                </div>
                <div class="body__info-goal">
                    <span>Match: ${legends[id-1].appearances}</span>
                    <span>Goals: ${legends[id-1].goals}</span>
                </div>   
                <p>Trophies:</p>
                ${str}
            </div>
            <div onclick="showNextLegendInfo(${id+1})" class="body__tranform-after">
                <i class="fa-solid fa-forward"></i>
            </div>
        </div>
    `
    infoElement = info
    body.appendChild(info)
    
}
function removeShowLegendInfo(){
    bodyElement.removeChild(infoElement)
}
function showNextLegendInfo(id){
    if(id === 0){
        id = 10
    }
    if(id === 11){
        id = 1
    }
    removeShowLegendInfo()
    showLegendInfo(id)
}
var legendsElements = document.querySelectorAll('.legend__player')
for (var j in legendsElements){
    for(var i in legends){
        if(legendsElements[j].getAttribute('id') === legends[i].id){
            var htmls = `
            <div class="legend__player__info">
            <div class="legend__title"></div>
            <p>${legends[i].name}</p>
            </div>
            `
            legendsElements[j].innerHTML = htmls
            legendsElements[j].style.backgroundImage = `url('${legends[i].bg_link}')`;
        }
    }
}