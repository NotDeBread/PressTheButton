const dialogue = document.getElementById('dialogue')
const dialogueImg = document.getElementById('dialogueImg')
const dialogueText = document.getElementById('dialogueText')
const dialogueName = document.getElementById('dialogueName')
const space = document.getElementById('space')

var dialogueExample = [
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'normal2',
        text: 'Woah this is some working dialogue,'
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'lookAway',
        text: 'With some cool text effects'
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'surprised',
        text: `Like ${textEffect('shake','shaky text')}`
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'smirk',
        text: `or ${textEffect('color', 'c','red')}${textEffect('color', 'o','orange')}${textEffect('color', 'l','yellow')}${textEffect('color', 'o','green')}${textEffect('color', 'r','blue')}${textEffect('color', 'e','purple')}${textEffect('color', 'd','pink')} text`
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'lookAway',
        text: "The code is simple, it's only just"
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'normal',
        text: `${textEffect('small','function dialogueDisplay(dialogueID) { if(dialogueActive === false) { dialogueActive = true dialogueProgression = 0 dialogue.style.setProperty(height,125px) dialogue.style.setProperty(padding,10px) dialogue.style.setProperty(background-image,`url(media/portraits/${dialogueID[dialogueProgression].character}/bg.png)`) dialogueImg.src = `media/portraits/${dialogueID[dialogueProgression].character}/${dialogueID[dialogueProgression].mood}.gif dialogueText.innerHTML = dialogueID[dialogueProgression].text dialogueName.innerHTML = dialogueID[dialogueProgression].name dialogueName.style.color = `${dialogueID[dialogueProgression].nameColor}` function handleKeyDown(event) { if(event.code === Space) {    if(dialogueProgression < dialogueID.length - 1) { dialogueProgression++ dialogueText.innerHTML = dialogueID[dialogueProgression].text dialogueName.innerHTML = dialogueID[dialogueProgression].name dialogueName.style.color = `${dialogueID[dialogueProgression].nameColor}` dialogue.src = dialogueImg.src = `media/portraits/${dialogueID[dialogueProgression].character}/${dialogueID[dialogueProgression].mood}.gif` dialogue.style.setProperty(background-image,`url(media/portraits/${dialogueID[dialogueProgression].character}/bg.png)`) } else { if(dialogueProgression >= 1) { dialogueProgression = 0 dialogueClose() document.removeEventListener(keydown, handleKeyDown) } if(dialogueProgression <= 0) { setTimeout(() => { space.style.opacity = 1 }, 1000); } else { space.style.opacity = 0 } } } document.addEventListener(keydown, handleKeyDown) }')}`
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'normal2',
        text: "It can even show images, like"
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'smirk',
        text: `<img src="media/FoxBeeg.png" width="600" height="100">`
    },
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'lookAway',
        text: `cool`
    },
]

var dialogueTEST = [
    {
        name: 'DeBread',  
        nameColor: '#ffc47d',      
        character: 'debread',
        mood: 'mad',
        text: 'Bruh what are you doing messing around with the console'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: 'Anyways, here are all of my moods:'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: 'normal'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal2',
        text: 'normal2'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'surprised',
        text: 'surprised'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'mad',
        text: 'mad'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'annoyed',
        text: 'annoyed'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAway',
        text: 'lookAway'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAway2',
        text: 'lookAway2'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'smirk',
        text: 'smirk'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: 'lookAwaySmirk'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'annoyed',
        text: 'Now time to test the character limit'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAway',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal2',
        text: 'Wow it doesnt overflow'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: 'cool'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: 'now time for text effects'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: `${textEffect('big','This is some big text')} with some normal text.`
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: `This is some ${textEffect('color', 'colored','green')} text.`
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: `This is some ${textEffect('shake','shaky')} text.`
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: `This is some ${textEffect('bold','bold')} text.`
    },
    {
        name: 'Some Guy',
        nameColor: '#ffffff',
        character: 'blank',
        mood: 'normal',
        text: `This is a blank character`
    },
]

var dialogue1M = [
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'surprised',
        text: 'Woah, you actually made it to one million.'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAway',
        text: 'So, uhh.'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal2',
        text: "That's used to be the end of my game."
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: "But guess what"
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'smirk',
        text: "I added more stuff"
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal2',
        text: `${textEffect('bold','1 Billion')} is where the game ends now...`
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'smirk',
        text: 'Good luck.'
    }
]

var dialogue1B = [
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'smirk',
        text: 'Nice, you made it to 1 Billion'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: 'You made it to the end of my game.'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: `All there really is left to do is complete the rest of the achievements.`
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: `Some of them are really annoying btw...`
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal2',
        text: `You could also try to get to ${textEffect('bold','1 Decillion')}`
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: 'Which you\'ll never get to...'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'smirk',
        text: `(By the way, you can request features for me to add in the next update by DM\'ing me on Twitter or Discord found on my website, ${textEffect('bold','debread.space')}.)`
    }
]

var dialogue1D = [
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'surprised',
        text: 'Holy shit.'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'surprised',
        text: 'You actually made it to 1 Decillion'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAway',
        text: "I was not expecting that..."
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: "Well now what."
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: "There's like nothing else to do..."
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: "Unless if you want to break the score counter or something..."
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'mad',
        text: "WHICH I ADVISE YOU NOT TO DO"
    },
]

var dialogueBroken = [
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: 'Okay..'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: 'really'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'mad',
        text: 'You did exactly what I told you NOT to do.'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'lookAway2',
        text: 'You probably just cheated points through the console or something...'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'normal',
        text: 'But now there is LITERALLY nothing to do.'
    },
    {
        name: 'DeBread',
        nameColor: '#ffc47d',
        character: 'debread',
        mood: 'annoyed',
        text: 'You should go touch grass...'
    },
]

var dialogueActive = false

function dialogueDisplay(dialogueID) {
    if(dialogueActive === false) {
        dialogueActive = true
        dialogueProgression = 0
        dialogue.style.setProperty('height','125px')
        dialogue.style.setProperty('padding','10px')
        dialogue.style.setProperty('background-image',`url(media/portraits/${dialogueID[dialogueProgression].character}/bg.png)`)
    
        dialogueImg.src = `media/portraits/${dialogueID[dialogueProgression].character}/${dialogueID[dialogueProgression].mood}.gif`

        dialogueText.innerHTML = dialogueID[dialogueProgression].text
        dialogueName.innerHTML = dialogueID[dialogueProgression].name
        dialogueName.style.color = `${dialogueID[dialogueProgression].nameColor}`
    
        function handleKeyDown(event) {
            if(event.code === 'Space') {   
                if(dialogueProgression < dialogueID.length - 1) {
                    dialogueProgression++
                    dialogueText.innerHTML = dialogueID[dialogueProgression].text
                    dialogueName.innerHTML = dialogueID[dialogueProgression].name
                    dialogueName.style.color = `${dialogueID[dialogueProgression].nameColor}`
                    dialogue.src = dialogueImg.src = `media/portraits/${dialogueID[dialogueProgression].character}/${dialogueID[dialogueProgression].mood}.gif`
                    dialogue.style.setProperty('background-image',`url(media/portraits/${dialogueID[dialogueProgression].character}/bg.png)`)
                } else {
                    if(dialogueProgression >= 1) {
                        dialogueProgression = 0
                        dialogueClose()
                        document.removeEventListener('keydown', handleKeyDown)
                    }
                }

                if(dialogueProgression <= 0) {
                    setTimeout(() => {
                        space.style.opacity = 1
                    }, 1000);
                } else {
                    space.style.opacity = 0
                }
            }
        }
    
        document.addEventListener('keydown', handleKeyDown)
    }
}

function dialogueClose() {
    dialogueActive = false
    dialogue.style.setProperty('height','0')
    dialogue.style.setProperty('padding','0')
}

function textEffect(effect, text, color) {
    if(effect === 'big') {
        return `<span class="dBig">${text}</span>`
    }
    if(effect === 'color') {
        return `<span style="color: ${color}">${text}</span>`
    }
    if(effect === 'shake') {
        return `<div class="dShake"><span>${text}</span></div>`
    }
    if(effect === 'bold') {
        return `<strong>${text}</strong>`
    }
    if(effect === 'small') {
        return `<span style="font-size: 0.25em">${text}</span`
    }
}

// for(let i = 0; i <= 100; i++) {
//     console.log(
//         `${i}% {transform: translateX(${Math.round((Math.random() * 10 - 5) * 10) / 10}px) translateY(${Math.round((Math.random() * 10 - 5) * 10) / 10}px)`
//     )
// }