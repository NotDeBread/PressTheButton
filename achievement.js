const ach = document.getElementById('achievement')
const achName = document.getElementById('achName')
const achDesc = document.getElementById('achDesc')
const achImg = document.getElementById('achImg')
const achSound = new Audio('audio/achievement.mp3');

function achDisplay(name, desc, img, below) {
    autosave()
    var ach = document.createElement('div')
    ach.setAttribute('id','achievement')
    ach.innerHTML = `<img id="achImg" src="media/achievements/${img}.png"><div class="achievement-content"><span id="achName">${name}</span><em id="achDesc">${desc}</em></div>`
    document.getElementById('achievement-container').appendChild(ach)

    if(name === '1 MILLION') {
        setTimeout(() => {
            dialogueDisplay(dialogue1M)
        }, 6000);
    }
    if(name === '10^9') {
        setTimeout(() => {
            dialogueDisplay(dialogue1B)
        }, 6000);
    }

    setTimeout(() => {
        ach.style.setProperty('height','50px')
        ach.style.setProperty('padding','5px')
        setTimeout(() => {
            ach.style.setProperty('transform','scale(100%)')
            ach.style.setProperty('opacity','1')
            if(save.SFX === true) {
                const instance = new Audio(achSound.src);
                instance.volume = 0.5
                instance.pitch = 0.5
                instance.play();
            }
            setTimeout(() => {
                ach.style.setProperty('transition','transform ease-in 0.5s, opacity ease-in-out 0.5s, height ease-in-out 0.25s, padding ease-in-out 0.25s')
            }, 500);
            setTimeout(() => {
                ach.style.setProperty('transform','scale(50%)')
                ach.style.setProperty('opacity','0')
                setTimeout(() => {
                    document.getElementById('achievement-container').removeChild(ach)
                }, 500);
            }, 5000);
        }, 250);
        save.achievements++
        progressBarUpdate()
    }, 10);
}

setInterval(() => {
    if(save.clicksRaw >= 1 && save.achClicks === false) {
        save.achClicks = true
        achDisplay('Click','Click the button.','click')
    }
    if(save.clicksRaw >= 1000 && save.achGoldenClicks === false) {
        save.achGoldenClicks = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Golden Clicks','Click the button 1,000 times.','goldenClicks')
    }
    if(save.clicksRaw >= 5000 && save.achPlatinumClicks === false) {
        save.achPlatinumClicks = true
        save.clickMultiplierMultiplier *= 4
        achDisplay('Platinum Clicks','Click the button 5,000 times.','platinumClicks')
    }
    if(save.clicksRaw >= 10000 && save.achDiamondClicks === false) {
        save.achDiamondClicks = true
        save.clickMultiplierMultiplier *= 6
        achDisplay('Diamond Clicks','Click the button 10,000 times.','diamondClicks')
    }
    if(save.clicks >= 10 && save.achTwoDig === false) {
        save.achTwoDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Two Digits','Reach 10 score.','twoDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 100 && save.achThreeDig === false) {
        save.achThreeDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Three Digits','Reach 100 score.','threeDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 1000 && save.achFourDig === false) {
        save.achFourDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Four Digits','Reach 1,000 score.','fourDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 10000 && save.achFiveDig === false) {
        save.achFiveDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Five Digits','Reach 10,000 score.','fiveDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 100000 && save.achSixDig === false) {
        save.achSixDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Six Digits','Reach 100,000 score.','sixDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 1000000 && save.achSevenDig === false) {
        save.achSevenDig = true
        save.clickMultiplierMultiplier *= 20
        achDisplay('1 MILLION','Reach 1 Million score.','sevenDig',`+ x7 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 10000000 && save.achEightDig === false) {
        save.achEightDig = true
        save.clickMultiplierMultiplier *= 10
        achDisplay('10 MILLION','Reach 10 Million score.','eightDig',`+ x8 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 100000000 && save.achNineDig === false) {
        save.achNineDig = true
        save.clickMultiplierMultiplier *= 10
        achDisplay('100 MILLION','Reach 100 Million score.','nineDig',`+ x9 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 1000000000 && save.achTenDig === false) {
        save.achTenDig = true
        save.clickMultiplierMultiplier *= 20
        achDisplay('10^9','Reach 1 Billion score.','tenDig',`+ x10 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.hundredPowerReached === true && save.achPowah === false) {
        save.achPowah = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('POWAHH!!!','Reach 100 POWER.','powah')
    }
    if(save.twoHundredPowerReached === true && save.achOver9000 === false) {
        save.achOver9000 = true
        save.clickMultiplierMultiplier *= 3
        achDisplay('ITS OVER 100!','Reach 200 POWER.','over100')
    }
    if(save.timePlayed >= 3600 && save.achDedication === false) {
        save.achDedication = true
        save.clickMultiplierMultiplier *= 10
        achDisplay('Pure Dedication','Play for 1 hour.','dedication')
    }
    if(save.timePlayed >= 7200 && save.achOnlyClicking === false) {
        save.achOnlyClicking = true
        save.clickMultiplierMultiplier *= 20
        achDisplay('Only clicking in mind','Play for 2 hours.','onlyClicking')
    }
    if(save.timePlayed >= 10800 && save.achCantStop === false) {
        save.achCantStop = true
        save.clickMultiplierMultiplier *= 30
        achDisplay('Can\'t Stop','Play for 3 hours.','cantStop')
    }
    if(save.timePlayed >= 14400 && save.achEndlessClicking === false) {
        save.achEndlessClicking = true
        save.clickMultiplierMultiplier *= 40
        achDisplay('Endless Clicking','Play for 4 hours.','endlessClicking')
    }
}, 500);

const achProgressContainer = document.getElementById('achProgressContainer')
const achProgressCount = document.getElementById('achProgressCount')
const achProgressPercent = document.getElementById('achProgressPercent')
const achProgressBarOverlay = document.getElementById('achProgressBarOverlay')

var totalAchievements = 20

function progressBarUpdate() {
    achProgressContainer.style.setProperty('top','10px')
    document.getElementById('topButtons').style.setProperty('opacity','0')
    setTimeout(() => {        
        achProgressCount.innerText = `${save.achievements}/${totalAchievements}`
        achProgressPercent.innerText = `${Math.round(save.achievements / totalAchievements * 100)}%`
        achProgressBarOverlay.style.setProperty('width',`${save.achievements / totalAchievements * 100}%`)
        if(save.achievements === totalAchievements) {
            achProgressPercent.classList.add('percentAnimate')
            achProgressCount.classList.add('percentAnimate')
            achProgressBarOverlay.style.setProperty('animation','rainbow 0.5s linear infinite')
        }
    }, 1000);

    var stay = setInterval(() => {
        if(document.getElementById('achievement-container').children.length === 0) {
            achProgressContainer.style.setProperty('top','-100px')
            document.getElementById('topButtons').style.setProperty('opacity','1')
            clearInterval(stay)
        }
    }, 1000);
}

function closeStats() {
    document.getElementById('stats-container').style.setProperty('display','none')
    document.getElementById('statProgressBarOverlay').style.setProperty('width','0')
    document.getElementById('statProgressPercent').classList.remove('percentAnimate')
    document.getElementById('statProgressCount').classList.remove('percentAnimate')
    document.getElementById('statProgressBarOverlay').style.setProperty('animation','none')
}

function openStats() {
    const achievements = [
        {
            name: 'Click',
            desc: 'Click the button.',
            img: 'click',
            requirement: save.clicksRaw >= 1,
            multiplier: '-'
        },
        {
            name: 'Golden Clicks',
            desc: 'Click the button 1,000 times.',
            img: 'goldenClicks',
            requirement: save.clicksRaw >= 1000,
            multiplier: '2x'
        },
        {
            name: 'Platinum Clicks',
            desc: 'Click the button 5,000 times.',
            img: 'platinumClicks',
            requirement: save.clicksRaw >= 5000,
            multiplier: '4x'
        },
        {
            name: 'Diamond Clicks',
            desc: 'Click the button 10,000 times.',
            img: 'diamondClicks',
            requirement: save.clicksRaw >= 10000,
            multiplier: '6x'
        },
        {
            name: 'Two Digits',
            desc: 'Reach 10 score.',
            img: 'twoDig',
            requirement: save.clicks >= 10,
            multiplier: '2x'
        },
        {
            name: 'Three Digits',
            desc: 'Reach 100 score.',
            img: 'threeDig',
            requirement: save.clicks >= 100,
            multiplier: '2x'
        },
        {
            name: 'Four Digits',
            desc: 'Reach 1,000 score.',
            img: 'fourDig',
            requirement: save.clicks >= 1000,
            multiplier: '2x'
        },
        {
            name: 'Five Digits',
            desc: 'Reach 10,000 score.',
            img: 'fiveDig',
            requirement: save.clicks >= 10000,
            multiplier: '2x'
        },
        {
            name: 'Six Digits',
            desc: 'Reach 100,000 score.',
            img: 'sixDig',
            requirement: save.clicks >= 100000,
            multiplier: '2x'
        },
        {
            name: '1 MILLION',
            desc: 'Reach 1 Million score. <span class="achInfo" title="Triggers Dialogue.">💬</span><span class="achInfo" title="Raises max POWER to 200.">⬆️</span>',
            img: 'sevenDig',
            requirement: save.clicks >= million,
            multiplier: '20x'
        },
        {
            name: '10 MILLION',
            desc: 'Reach 10 Million score.',
            img: 'eightDig',
            requirement: save.clicks >= million * 10,
            multiplier: '10x'
        },
        {
            name: '100 MILLION',
            desc: 'Reach 100 Million score.',
            img: 'nineDig',
            requirement: save.clicks >= million * 100,
            multiplier: '10x'
        },
        {
            name: '10^9',
            desc: 'Reach 1 Billion score. 💬',
            img: 'tenDig',
            requirement: save.clicks >= billion,
            multiplier: '20x'
        },
        {
            name: 'POWAH!!!',
            desc: 'Reach 100 POWER.',
            img: 'powah',
            requirement: save.hundredPowerReached,
            multiplier: '2x'
        },
        {
            name: 'ITS OVER 100!!',
            desc: 'Reach 200 POWER.',
            img: 'over100',
            requirement: save.twoHundredPowerReached,
            multiplier: '3x'
        },
        {
            name: 'That poor mouse...',
            desc: 'Click really, really fast.',
            img: 'thatPoorMouse',
            requirement: save.achPoorMouse,
            multiplier: '-'
        },
        {
            name: 'Pure Dedication',
            desc: 'Play for 1 hour.',
            img: 'dedication',
            requirement: save.timePlayed >= 3600,
            multiplier: '10x'
        },
        {
            name: 'Only clicking in mind',
            desc: 'Play for 2 hours.',
            img: 'onlyClicking',
            requirement: save.timePlayed >= 7200,
            multiplier: '20x'
        },
        {
            name: 'Can\'t Stop',
            desc: 'Play for 3 hours.',
            img: 'cantStop',
            requirement: save.timePlayed >= 10800,
            multiplier: '30x'
        },
        {
            name: 'Endless Clicking',
            desc: 'Play for 4 hours.',
            img: 'endlessClicking',
            requirement: save.timePlayed >= 14400,
            multiplier: '40x'
        },
    ]

    autosave()
    document.getElementById('allStats').innerHTML = ''
    document.getElementById('statProgressCount').innerText = `${save.achievements}/${totalAchievements}`
    document.getElementById('statProgressPercent').innerText = `${Math.round(save.achievements / totalAchievements * 100)}%`
    setTimeout(() => {
        document.getElementById('statProgressBarOverlay').style.setProperty('width',`${save.achievements / totalAchievements * 100}%`)
        setTimeout(() => {
            if(save.achievements === totalAchievements) {
                document.getElementById('statProgressPercent').classList.add('percentAnimate')
                document.getElementById('statProgressCount').classList.add('percentAnimate')
                document.getElementById('statProgressBarOverlay').style.setProperty('animation','rainbow 0.5s linear infinite')
            }
        }, 3000);
    }, 500);
    document.getElementById('stats-container').style.setProperty('display','flex')
    for(let a = 0; a < achievements.length; a++) {
        var statAchievement = document.createElement('div')
        statAchievement.classList.add('statContainer')
        statAchievement.innerHTML = `<div class="stat"><img src="media/achievements/${achievements[a].img}.png"><div class="statText"><span class="statTitle">${achievements[a].name}</span><span>${achievements[a].desc}</span></div></div><div class="statMultiplier"><span>${achievements[a].multiplier}</span><span>Multiplier</span></div>`
        if(!eval(achievements[a].requirement)) {
            statAchievement.style.setProperty('filter','brightness(75%) grayscale()')
        }
        document.getElementById('allStats').appendChild(statAchievement)
    }
} 

setInterval(() => {
    document.getElementById('timePlayed').innerText = `Time Played: ${formatTime(save.timePlayed)}`
}, 1000);