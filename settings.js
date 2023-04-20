const settings = document.getElementById('settingsMenu')
const cb = document.querySelectorAll('input[type="checkbox"]');

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

if(save.dialogueEnabled) {
    cb4.checked = true
} else {
    cb4.checked = false
}

settingsUpdate()

function settingsUpdate() {
    let settingNames = [
        'SFX',
        'formatNumbers',
        'showPointsOnClick',
        'dialogueEnabled'
    ]
    for(let i = 0; i < settingNames.length; i++) {
        if(cb[i].checked) {
            save[settingNames[i]] = true
        } else {
            save[settingNames[i]] = false
            cb[i].checked = false
        }
    }
}

var deletesaveCount = 0

function openSettings() {
    settings.style.setProperty('display','flex')
    document.getElementById('buttonDelete').innerText = 'Delete Save'

}

function closeSettings() {
    settings.style.setProperty('display','none')
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

//get outta here

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'q') {
        document.getElementById('devtools').style.setProperty('display','unset')
        console.log('aint no way bruh 💀💀🗿')
    }
})

function closeDevtools() {
    document.getElementById('devtools').style.setProperty('display','none')
}