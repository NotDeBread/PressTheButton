const settings = document.getElementById('settingsMenu')
const cb1 = document.getElementById('cb1')
const cb2 = document.getElementById('cb2')
const cb3 = document.getElementById('cb3')

if(save.SFX) {
    cb1.checked = true
} else {
    cb1.checked = false
}

if(save.formatNumbers) {
    cb2.checked = true
} else {
    cb2.checked = false
}

if(save.showPointsOnClick) {
    cb3.checked = true
} else {
    cb3.checked = false
}

settingsUpdate()

function settingsUpdate() {
    if(cb1.checked) {
        save.SFX = true
    } else {
        save.SFX = false
        cb1.checked = false
    }
    if(cb2.checked) {
        save.formatNumbers = true
    } else {
        save.formatNumbers = false
        cb2.checked = false
    }
    if(cb3.checked) {
        save.showPointsOnClick = true
    } else {
        save.showPointsOnClick = false
        cb3.checked = false
    }
}

var deletesaveCount = 0

function openSettings() {
    settings.style.setProperty('display','flex')
    setTimeout(() => {
        settings.style.setProperty('backdrop-filter','blur(10px)')
    }, 10);
}

function closeSettings() {
    settings.style.setProperty('display','none')
    settings.style.setProperty('backdrop-filter','blur(0px)')
    deletesaveCount = 0
}

function deletesaveCheck() {
    if(deletesaveCount === 1) {
        deletesave()
    } else {
        deletesaveCount++
        document.getElementById('buttonDelete').innerText = 'Are you sure?'
    }
}