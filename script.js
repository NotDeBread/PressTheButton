console.log('Bro is really about to cheat in points 💀')

const button = document.getElementById('button')
const clicksDisplay = document.getElementById('clicks')
const powerBar = document.getElementById('powerBar')
const powerBar2 = document.getElementById('powerBar2')
const powerDisplay = document.getElementById('powerBarTXT')
const powerMultiplier = document.getElementById('powerBarMultiplier')
const powerEquation = document.getElementById('powerBarEquation')

var powerClicks = 0

//NUMBER FORMATTER

const million = Math.pow(10, 6)
const billion = Math.pow(10, 9)
const trillion = Math.pow(10, 12)
const quadrillion = Math.pow(10, 15)
const quintillion = Math.pow(10, 18)
const sextillion = Math.pow(10, 21)
const septillion = Math.pow(10, 24)
const octillion = Math.pow(10, 27)
const nonillion = Math.pow(10, 30)
const decillion = Math.pow(10, 33)
const undecillion = Math.pow(10, 36)
const duodecillion = Math.pow(10, 39)
const tredecillion = Math.pow(10, 42)
const quattuordecillion = Math.pow(10, 45)
const quindecillion = Math.pow(10, 48)
const sexdecillion = Math.pow(10, 51)
const septemdecillion = Math.pow(10, 54)
const octodecillion = Math.pow(10, 57)
const novemdecillion = Math.pow(10, 60)
const vigintillion = Math.pow(10, 63)
const unvigintillion = Math.pow(10, 66)
const duovigintillion = Math.pow(10, 69)
const trevigintillion = Math.pow(10, 72)
const quattuorvigintillion = Math.pow(10, 75)
const quinvigintillion = Math.pow(10, 78)
const sexvigintillion = Math.pow(10, 81)
const septvigintillion = Math.pow(10, 84)
const octovigintillion = Math.pow(10, 87)
const nonvigintillion = Math.pow(10, 90)
const trigintillion = Math.pow(10, 93)
const untrigintillion = Math.pow(10, 96)
const duotrigintillion = Math.pow(10, 99)
const googol = Math.pow(10, 100)

function formatNumber(number) {
    if(save.formatNumbers) {
        if(number >= googol) {
            return (Math.round(number / googol * 1000) / 1000) + " Googol"
        } else if(number >= duotrigintillion) {
            return (Math.round(number / duotrigintillion * 1000) / 1000) + " Duotrigintillion"
        } else if(number >= untrigintillion) {
            return (Math.round(number / untrigintillion * 1000) / 1000) + " Untrigintillion"
        } else if(number >= trigintillion) {
            return (Math.round(number / trigintillion * 1000) / 1000) + " Trigintillion"
        } else if(number >= nonvigintillion) {
            return (Math.round(number / nonvigintillion * 1000) / 1000) + " Nonvigintillion"
        } else if(number >= octovigintillion) {
            return (Math.round(number / octovigintillion * 1000) / 1000) + " Octovigintillion"
        } else if(number >= septvigintillion) {
            return (Math.round(number / septvigintillion * 1000) / 1000) + " Septvigintillion"
        } else if(number >= sexvigintillion) {
            return (Math.round(number / sexvigintillion * 1000) / 1000) + " Sexvigintillion"
        } else if(number >= quinvigintillion) {
            return (Math.round(number / quinvigintillion * 1000) / 1000) + " Quinvigintillion"
        } else if(number >= quattuorvigintillion) {
            return (Math.round(number / quattuorvigintillion * 1000) / 1000) + " Quattuorvigintillion"
        } else if(number >= trevigintillion) {
            return (Math.round(number / trevigintillion * 1000) / 1000) + " Trevigintillion"
        } else if(number >= duovigintillion) {
            return (Math.round(number / duovigintillion * 1000) / 1000) + " Duovigintillion"
        } else if(number >= unvigintillion) {
            return (Math.round(number / unvigintillion * 1000) / 1000) + " Unvigintillion"
        } else if(number >= vigintillion) {
            return (Math.round(number / vigintillion * 1000) / 1000) + " Vigintillion"
        } else if(number >= novemdecillion) {
            return (Math.round(number / novemdecillion * 1000) / 1000) + " Novemdecillion"
        } else if(number >= octodecillion) {
            return (Math.round(number / octodecillion * 1000) / 1000) + " Octodecillion"
        } else if(number >= septemdecillion) {
            return (Math.round(number / septemdecillion * 1000) / 1000) + " Septemdecillion"
        } else if(number >= sexdecillion) {
            return (Math.round(number / sexdecillion * 1000) / 1000) + " Sexdecillion"
        } else if(number >= quindecillion) {
            return (Math.round(number / quindecillion * 1000) / 1000) + " Quindecillion"
        } else if(number >= quattuordecillion) {
            return (Math.round(number / quattuordecillion * 1000) / 1000) + " Quattuordecillion"
        } else if(number >= tredecillion) {
            return (Math.round(number / tredecillion * 1000) / 1000) + " Tredecillion"
        } else if(number >= duodecillion) {
            return (Math.round(number / duodecillion * 1000) / 1000) + " Duodecillion"
        } else if(number >= undecillion) {
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
        } else {
            return Math.round(number).toLocaleString()            
        }
    } else {
        return Math.round(number).toLocaleString()
    }
}

function formatTime(time) {
    let days = 0
    let hours = 0
    let minutes = 0
    let seconds = 0
  
    if (time >= 86400) {
      days = Math.floor(time / 86400)
      time %= 86400
    }
  
    if (time >= 3600) {
      hours = Math.floor(time / 3600)
      time %= 3600
    }
  
    if (time >= 60) {
      minutes = Math.floor(time / 60)
      time %= 60
    }
  
    seconds = Math.floor(time)
  
    const daysString = days === 1 ? 'day' : 'days'
    const hoursString = hours === 1 ? 'hour' : 'hours'
    const minutesString = minutes === 1 ? 'minute' : 'minutes'
    const secondsString = seconds === 1 ? 'second' : 'seconds'
  
    return `${days} ${daysString}, ${hours} ${hoursString}, ${minutes} ${minutesString}, and ${seconds} ${secondsString}.`
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
        achDisplay('That Poor Mouse...','Click really, really fast.', 'thatPoorMouse')
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
    powerUpdate()
}, 150);

//POWER BAR UPDATE

function powerUpdate() {
    powerDisplay.innerText = `POWER: ${Math.round(powerClicks)}`
    powerBar.style.setProperty('width',`${powerClicks}%`)
    if(powerClicks >= 100) {
        powerBar2.style.setProperty('width',`${powerClicks - 100}%`)
    } else {
        powerBar2.style.setProperty('width',`0`)
    }
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