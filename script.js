console.log('Bro is really about to cheat in points 💀')

const button = document.getElementById('button')
const clicksDisplay = document.getElementById('clicks')
const powerBar = document.getElementById('powerBar')
const powerDisplay = document.getElementById('powerBarTXT')
const powerMultiplier = document.getElementById('powerBarMultiplier')
const powerEquation = document.getElementById('powerBarEquation')

var powerClicks = 0

//NUMBER FORMATTER

const million = Math.pow(10, 6)
const billion = Math.pow(10, 9)
const trillion = Math.pow(10, 12)
const quadrillion = Math.pow(10, 12)
const quintillion = Math.pow(10, 15)
const sextillion = Math.pow(10, 18)
const septillion = Math.pow(10, 21)
const octillion = Math.pow(10, 24)
const nonillion = Math.pow(10, 27)
const decillion = Math.pow(10, 30)
const undecillion = Math.pow(10, 33)

function formatNumber(number) {
    if(save.formatNumbers && number !== Infinity) {
        if(number >= undecillion) {
            return (Math.round(number / undecillion * 1000) / 1000) + " Undecillion"
        } else if(number >= decillion) {
            return (Math.round(number / decillion * 1000) / 1000) + " Decillion"
        } else if(number >= nonillion) {
            return (Math.round(number / nonillion * 1000) / 1000) + " Nonillion"
        } else if(number >= octillion) {
            return (Math.round(number / octillion * 1000) / 1000) + " Octillion"
        } else if(number >= septillion) {
            return (Math.round(number / septillion * 1000) / 1000) + " Septillion"
        } else if(number >= sextillion) {
            return (Math.round(number / sextillion * 1000) / 1000) + " Sextillion"
        } else if(number >= quintillion) {
            return (Math.round(number / quintillion * 1000) / 1000) + " Quintillion"
        } else if(number >= quadrillion) {
            return (Math.round(number / quadrillion * 1000) / 1000) + " Quadrillion"
        } else if(number >= trillion) {
            return (Math.round(number / trillion * 1000) / 1000) + " Trillion"
        } else if(number >= billion) {
            return (Math.round(number / billion * 1000) / 1000) + " Billion"
        } else if(number >= million) {
            return (Math.round(number / million * 1000) / 1000) + " Million"
        }
    } else {
        return Math.round(number).toLocaleString()
    }
    return Math.round(number).toLocaleString()
}

//BUTTON CLICK

var clickText = function() {
    var e = document.createElement('span');
    e.setAttribute('class','clickText');
    e.innerHTML = formatNumber(save.clickMultiplier * save.clickMultiplierMultiplier)
    
    
    if(save.showPointsOnClick === true) {
        document.body.appendChild(e),
        e.style.top = event.pageY + 'px',
        e.style.left = event.pageX - e.offsetWidth + 'px',
        
        setTimeout(() => {
            e.style.setProperty('transform',`translateX(${(Math.random() * 400 - 200) - e.offsetWidth * 2}px) translateY(${Math.random() * 400 - 200}px) scale(100%) rotate(${Math.random() * 40 - 20}deg)`)
            e.style.setProperty('font-weight','900')
    
            if(save.clickMultiplier >= 4) {
                e.style.setProperty('font-size',`${save.clickMultiplier / 4}em`)
            }
        }, 1);
        
        setTimeout(() => {
            e.style.setProperty('opacity','0')
        }, 1000);
    
        setTimeout(() => {
            document.body.removeChild(e)
        }, 1500)
    }
}
    
function buttonEnter() {
    document.addEventListener('click', clickText)
}
    
function buttonLeave() {
    document.removeEventListener('click', clickText)
}

clicksDisplay.innerText = formatNumber(save.clicks)

var clickSpeed = 0

function buttonClick() { 
    save.clicksRaw++
    document.getElementById('clicksRaw').innerText = formatNumber(save.clicksRaw)

    save.clicks += save.clickMultiplier * save.clickMultiplierMultiplier

    if(save.achSevenDig) {
        if(powerClicks < 199) {
            powerClicks += 1
        } else {
            powerClicks = 200
        }
    } else {
        if(powerClicks < 99) {
            powerClicks += 1
        } else {
            powerClicks = 100
        }
    }

    if(powerClicks >= 99) {
        save.hundredPowerReached = true
    }

    if(save.clicks >= decillion && !save.decillionPassed && !dialogueActive) {
        save.decillionPassed = true
        dialogueDisplay(dialogue1D)
    }
    
    if(save.clicks >= Infinity && !save.infinityReached && !dialogueActive) {
        save.infinityReached = true
        dialogueDisplay(dialogueBroken)
    }

    clicksDisplay.innerText = formatNumber(save.clicks)

    powerUpdate()

    clickSpeed++

    if(clickSpeed >= 5 && !save.achPoorMouse) {
        save.achPoorMouse = true
        achDisplay('That Poor Mouse...','Click really, really fast', 'thatPoorMouse')
    }
}

setInterval(() => {
    if(clickSpeed > 0 && !save.achPoorMouse) {
        clickSpeed--
    }
}, 100);

//POWER BAR SETBACK

setInterval(() => {
    if(powerClicks <= 0) {
        powerClicks = 0
    } else if(powerClicks >= 75) {
        powerClicks -= 1.2
    } else if(powerClicks >= 50) {
        powerClicks -= 1.1
    } else if((powerClicks-= 1) < 0) {
        powerClicks = 0
    }

    if(powerClicks >= 100)
    powerClicks -= powerClicks / 100
    powerUpdate()
}, 150);

//POWER BAR UPDATE

function powerUpdate() {
    powerDisplay.innerText = `POWER: ${Math.round(powerClicks)}`
    powerBar.style.setProperty('width',`${powerClicks}%`)
    if(powerClicks >= 90) {
        powerBar.style.setProperty('animation','rainbow 0.1s linear infinite')
    } else {
        powerBar.style.setProperty('animation','none')
    }
}

//10MS UPDATE

setInterval(() => {
    powerDisplay.style.setProperty('transform',`translateX(${Math.random() * powerClicks / 10}px) translateY(-${Math.random() * powerClicks / 10}px)`)
    powerMultiplier.style.setProperty('transform',`translateX(-${Math.random() * powerClicks / 10}px) translateY(-${Math.random() * powerClicks / 10}px)`)
    if(powerClicks >= 50) {
        if(powerClicks >= 100) {
            powerMultiplier.style.setProperty('font-size', `4em`)
            powerMultiplier.style.setProperty('font-weight', `900`)
        } else {
            powerMultiplier.style.setProperty('font-size', `${powerClicks / 25}em`)
            powerMultiplier.style.setProperty('font-weight', `${powerClicks * 9}`)
        }
    }

    if(powerClicks / 10 >= 1) {
        save.clickMultiplier = powerClicks / 10
    } else {
        save.clickMultiplier = 1
    }
    
    powerMultiplier.innerText = `x${formatNumber(save.clickMultiplier * save.clickMultiplierMultiplier)}`

    powerEquation.innerText = `${(Math.round(save.clickMultiplier * 10) / 10).toLocaleString()} x ${formatNumber(save.clickMultiplierMultiplier)}`
}, 10);

const shine = document.getElementById('buttonShine')

var shineRotation = 0

setInterval(() => {
    if(powerClicks >= 100) {
        shine.style.setProperty('opacity', '0.5')
    } else {
        shine.style.setProperty('opacity',powerClicks / 200)
    }
    shineRotation += powerClicks / 100
    shine.style.setProperty('transform',`rotate(${shineRotation}deg)`)
    button.style.setProperty('filter',`drop-shadow(0px 0px ${powerClicks / 5}px rgba(255, 255, 255, 25%))`)
}, 10);

setInterval(() => {
    save.timePlayed++
}, 1000);

function giveAllAchievements(achGiveDelay) {
    buttonClick()
    save.clicks = 1
    setTimeout(() => {
        save.clicks *= 10
        setTimeout(() => {
            save.clicks *= 10
            setTimeout(() => {
                save.clicks *= 10
                setTimeout(() => {
                    save.clicks *= 10
                    setTimeout(() => {
                        save.clicks *= 10
                        setTimeout(() => {
                            save.clicks *= 10
                            setTimeout(() => {
                                save.clicks *= 10
                                setTimeout(() => {
                                    save.clicks *= 10
                                    setTimeout(() => {
                                        save.clicks *= 10
                                        setTimeout(() => {
                                            save.clicksRaw = 1000
                                            setTimeout(() => {
                                                save.clicksRaw = 5000
                                                setTimeout(() => {
                                                    save.clicksRaw = 10000
                                                    setTimeout(() => {
                                                        powerClicks = 100
                                                        buttonClick()
                                                        setTimeout(() => {
                                                            save.timePlayed = 3600
                                                            setTimeout(() => {
                                                                save.timePlayed = 36000
                                                                setTimeout(() => {
                                                                    clickSpeed = 100
                                                                    buttonClick()
                                                                }, achGiveDelay);
                                                            }, achGiveDelay);
                                                        }, achGiveDelay);
                                                    }, achGiveDelay);
                                                }, achGiveDelay);
                                            }, achGiveDelay);
                                        }, achGiveDelay);
                                    }, achGiveDelay);
                                }, achGiveDelay);
                            }, achGiveDelay);
                        }, achGiveDelay);
                    }, achGiveDelay);
                }, achGiveDelay);
            }, achGiveDelay);
        }, achGiveDelay);
    }, achGiveDelay);
}