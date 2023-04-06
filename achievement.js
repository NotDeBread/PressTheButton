const ach = document.getElementById('achievement')
const achName = document.getElementById('achName')
const achDesc = document.getElementById('achDesc')
const achImg = document.getElementById('achImg')
const achBelow = document.getElementById('achBelow')
const achBelowTXT = document.getElementById('achBelowTXT')
const achSound = new Audio('audio/achievement.mp3');

var achActive = false

function achDisplay(name, desc, img, below) {
    autosave()
    if(achActive === false) {
        achActive = true

        if(SFX === true) {
            const instance = new Audio(achSound.src);
            instance.volume = 0.5
            instance.pitch = 0.5
            instance.play();
        }

        achName.innerText = name
        achDesc.innerText = desc
        achImg.src = `media/achievements/${img}.png`

        console.log(`Achievement Get: ${name}`)

        ach.style.setProperty('transform','scale(100%)')
        ach.style.setProperty('opacity','1')

        if(below) {
            setTimeout(() => {
                achBelow.style.setProperty('opacity','1')
                achBelowTXT.innerText = below
                achBelow.style.setProperty('bottom','-20px')
                setTimeout(() => {
                    achBelow.style.setProperty('bottom','30px')
                    setTimeout(() => {
                        achBelow.style.setProperty('opacity','0')
                    }, 250);
                }, 3000);
            }, 1000);
        }

        setTimeout(() => {
            ach.style.setProperty('transition','transform ease-in 1s, opacity ease-in-out 0.5s')
        }, 2500);

        setTimeout(() => {
            ach.style.setProperty('transform','scale(150%)')
            ach.style.setProperty('opacity','0')

            setTimeout(() => {
                ach.style.setProperty('transition','transform ease-in 0.25s, opacity ease-in-out 0.5s')
                achActive = false

                if(save.clicks >= 1000000 && save.achSevenDig && save.millionPassed === false) {
                    dialogueDisplay('DeBread',dialogue1M,'#ffb759')
                    save.millionPassed = true
                }
            }, 1000);
        }, 5000);

    }
}

setInterval(() => {
    if(save.clicksRaw >= 1 && save.achClicks === false && achActive === false) {
        save.achClicks = true
        achDisplay('Click','Click the button.','click', `+1 Clicks per second`)
    }
    if(save.clicksRaw >= 1000 && save.achGoldenClicks === false && achActive === false) {
        save.achGoldenClicks = true
        achDisplay('Golden Clicks','Click the button 1,000 times.','goldenClicks')
    }
    if(save.clicksRaw >= 5000 && save.achPlatinumClicks === false && achActive === false) {
        save.achPlatinumClicks = true
        save.cps *= 2
        achDisplay('Platinum Clicks','Click the button 5,000 times.','platinumClicks')
    }
    if(save.clicks >= 10 && save.achTwoDig === false && achActive === false) {
        save.achTwoDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Two Digits','Reach 10 score.','twoDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 100 && save.achThreeDig === false && achActive === false) {
        save.achThreeDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Three Digits','Reach 100 score.','threeDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 1000 && save.achFourDig === false && achActive === false) {
        save.achFourDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Four Digits','Reach 1,000 score.','fourDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 10000 && save.achFiveDig === false && achActive === false) {
        save.achFiveDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Five Digits','Reach 10,000 score.','fiveDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 100000 && save.achSixDig === false && achActive === false) {
        save.achSixDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('Six Digits','Reach 100,000 score.','sixDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.clicks >= 1000000 && save.achSevenDig === false && achActive === false) {
        save.achSevenDig = true
        save.clickMultiplierMultiplier *= 2
        achDisplay('1 MILLION','Reach 1 Million score.','sevenDig',`+ x2 multiplier (x${formatNumber(save.clickMultiplierMultiplier)})`)
    }
    if(save.hundredPowerReached === true && save.achPowah === false && achActive === false) {
        save.achPowah = true
        achDisplay('POWAHH!!!','Reach 100 POWER.','powah')
    }
    if(save.timePlayed >= 3600 && save.achDedication === false && achActive === false) {
        save.achDedication = true
        achDisplay('Pure Dedication','Play for 1 hour','dedication')
    }
    if(save.timePlayed >= 36000 && save.achOnlyClicking === false && achActive === false) {
        save.achOnlyClicking = true
        achDisplay('Only clicking in mind','Play for 10 hours','onlyClicking')
    }
}, 500);