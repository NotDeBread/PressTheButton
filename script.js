console.log('Bro is really about to cheat in points 💀')

const button = document.getElementById('button')
const clicksDisplay = document.getElementById('clicks')
const powerBar = document.getElementById('powerBar')
const powerDisplay = document.getElementById('powerBarTXT')
const powerMultiplier = document.getElementById('powerBarMultiplier')
const powerEquation = document.getElementById('powerBarEquation')

var powerClicks = 0

var timePlayed = 0

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

clicksDisplay.innerText = formatNumber(save.clicks)

function buttonClick() { 
    save.clicksRaw++
    document.getElementById('clicksRaw').innerText = formatNumber(save.clicksRaw)

    save.clicks += save.clickMultiplier * save.clickMultiplierMultiplier

    if(powerClicks < 99) {
        powerClicks += 1
    }

    if(powerClicks >= 99) {
        save.hundredPowerReached = true
    }

    if(save.clicks >= decillion && !save.decillionPassed && !dialogueActive) {
        save.decillionPassed = true
        dialogueDisplay('DeBread',dialogue1D,'#ffb759')
    }
    
    if(save.clicks >= Infinity && !save.infinityReached && !dialogueActive) {
        save.infinityReached = true
        dialogueDisplay('DeBread',dialogueBroken,'#ffb759')
    }

    clicksDisplay.innerText = formatNumber(save.clicks)

    powerUpdate()
}

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
        powerMultiplier.style.setProperty('font-size', `${powerClicks / 25}em`)
        powerMultiplier.style.setProperty('font-weight', `${powerClicks * 9}`)
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
    shine.style.setProperty('opacity',powerClicks / 200)
    shineRotation += powerClicks / 100
    shine.style.setProperty('transform',`rotate(${shineRotation}deg)`)
}, 10);

setInterval(() => {
    save.timePlayed++
}, 1000);