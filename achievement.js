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
    if(save.timePlayed >= 3600 && save.achDedication === false) {
        save.achDedication = true
        save.clickMultiplierMultiplier *= 10
        achDisplay('Pure Dedication','Play for 1 hour','dedication')
    }
    if(save.timePlayed >= 7200 && save.achOnlyClicking === false) {
        save.achOnlyClicking = true
        save.clickMultiplierMultiplier *= 20
        achDisplay('Only clicking in mind','Play for 2 hours','onlyClicking')
    }
    if(save.timePlayed >= 10800 && save.achCantStop === false) {
        save.achCantStop = true
        save.clickMultiplierMultiplier *= 30
        achDisplay('Can\'t Stop','Play for 3 hours','cantStop')
    }
    if(save.timePlayed >= 14400 && save.achEndlessClicking === false) {
        save.achEndlessClicking = true
        save.clickMultiplierMultiplier *= 40
        achDisplay('Endless Clicking','Play for 4 hours','endlessClicking')
    }
}, 500);

const achProgressContainer = document.getElementById('achProgressContainer')
const achProgressCount = document.getElementById('achProgressCount')
const achProgressPercent = document.getElementById('achProgressPercent')
const achProgressBarOverlay = document.getElementById('achProgressBarOverlay')

function progressBarUpdate() {
    achProgressContainer.style.setProperty('top','10px')
    setTimeout(() => {        
        achProgressCount.innerText = `${save.achievements}/19`
        achProgressPercent.innerText = `${Math.round(save.achievements / 19 * 100)}%`
        achProgressBarOverlay.style.setProperty('width',`${save.achievements / 19 * 100}%`)
        if(save.achievements === 17) {
            achProgressPercent.classList.add('percentAnimate')
            achProgressCount.classList.add('percentAnimate')
            achProgressBarOverlay.style.setProperty('animation','rainbow 0.5s linear infinite')
        }
    }, 1000);

    var stay = setInterval(() => {
        if(document.getElementById('achievement-container').children.length === 0) {
            achProgressContainer.style.setProperty('top','-100px')
            clearInterval(stay)
        }
    }, 1000);
}