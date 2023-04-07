const dialogue = document.getElementById('dialogue')
const dialogueImg = document.getElementById('dialogueImg')
const dialogueText = document.getElementById('dialogueText')
const dialogueName = document.getElementById('dialogueName')
const space = document.getElementById('space')

var dialogueTEST = [
    {
        character: 'debread',
        mood: 'mad',
        text: 'Bruh what are you doing messing around with the console'
    },
    {
        character: 'debread',
        mood: 'normal',
        text: 'Anyways, here are all of my moods:'
    },
    {
        character: 'debread',
        mood: 'normal',
        text: 'normal'
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: 'normal2'
    },
    {
        character: 'debread',
        mood: 'surprised',
        text: 'surprised'
    },
    {
        character: 'debread',
        mood: 'mad',
        text: 'mad'
    },
    {
        character: 'debread',
        mood: 'annoyed',
        text: 'annoyed'
    },
    {
        character: 'debread',
        mood: 'lookAway',
        text: 'lookAway'
    },
    {
        character: 'debread',
        mood: 'lookAway2',
        text: 'lookAway2'
    },
    {
        character: 'debread',
        mood: 'smirk',
        text: 'smirk'
    },
    {
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: 'lookAwaySmirk'
    },
    {
        character: 'debread',
        mood: 'annoyed',
        text: 'Now time to test the character limit'
    },
    {
        character: 'debread',
        mood: 'lookAway',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: 'Wow it doesnt overflow'
    },
    {
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: 'cool'
    },
    {
        character: 'debread',
        mood: 'normal',
        text: 'now time for text effects'
    },
    {
        character: 'debread',
        mood: 'normal',
        text: `${textEffect('big','This is some big text')} with some normal text.`
    },
    {
        character: 'debread',
        mood: 'normal',
        text: `This is some ${textEffect('color', 'colored','green')} text.`
    },
    {
        character: 'debread',
        mood: 'normal',
        text: `This is some ${textEffect('shake','shaky')} text.`
    },
    {
        character: 'debread',
        mood: 'normal',
        text: `This is some ${textEffect('bold','bold')} text.`
    },
    {
        character: 'guy',
        mood: 'normal',
        text: `This is a blank character`
    },
]

var dialogue1M = [
    {
        character: 'debread',
        mood: 'surprised',
        text: 'Woah, you actually made it to one million.'
    },
    {
        character: 'debread',
        mood: 'lookAway',
        text: 'So, uhh.'
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: "That's used to be the end of my game."
    },
    {
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: "But guess what"
    },
    {
        character: 'debread',
        mood: 'smirk',
        text: "I added more stuff"
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: `${textEffect('bold','1 Billion')} is where the game ends now...`
    },
    {
        character: 'debread',
        mood: 'smirk',
        text: 'Good luck.'
    }
]

var dialogue1B = [
    {
        character: 'debread',
        mood: 'smirk',
        text: 'Nice, you made it to 1 Billion'
    },
    {
        character: 'debread',
        mood: 'normal',
        text: 'You made it to the end of my game.'
    },
    {
        character: 'debread',
        mood: 'lookAway',
        text: `Theres nothing much after this besides getting to ${textEffect('bold','1 Decillion')}`
    },
    {
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: 'Which there\'s no way you are getting to that...'
    },
    {
        character: 'debread',
        mood: 'smirk',
        text: `(By the way, you can request features for me to add in the next update by DM\'ing me on Twitter or Discord found on my website, ${textEffect('bold','debread.space')}.)`
    }
]

var dialogue1D = [
    {
        character: 'debread',
        mood: 'surprised',
        text: 'Holy shit.'
    },
    {
        character: 'debread',
        mood: 'surprised',
        text: 'You actually made it to 1 Decillion'
    },
    {
        character: 'debread',
        mood: 'lookAway',
        text: "I was not expecting that..."
    },
    {
        character: 'debread',
        mood: 'normal',
        text: "Well now what."
    },
    {
        character: 'debread',
        mood: 'normal',
        text: "There's like nothing else to do..."
    },
    {
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: "Unless if you want to break the score counter or something..."
    },
    {
        character: 'debread',
        mood: 'mad',
        text: "WHICH I ADVISE YOU NOT TO DO"
    },
]

var dialogueBroken = [
    {
        character: 'debread',
        mood: 'normal',
        text: 'Okay..'
    },
    {
        character: 'debread',
        mood: 'normal',
        text: 'really'
    },
    {
        character: 'debread',
        mood: 'mad',
        text: 'You did exactly what I told you NOT to do.'
    },
    {
        character: 'debread',
        mood: 'lookAway2',
        text: 'You probably just cheated points through the console or something...'
    },
    {
        character: 'debread',
        mood: 'normal',
        text: 'But now there is LITERALLY nothing to do.'
    },
    {
        character: 'debread',
        mood: 'annoyed',
        text: 'You should go touch grass...'
    },
]

var dialogueActive = false

function dialogueDisplay(name, dialogueID, color) {
    if(dialogueActive === false) {
        dialogueActive = true
        dialogueProgression = 0
        dialogue.style.setProperty('height','125px')
        dialogue.style.setProperty('padding','10px')
        dialogue.style.setProperty('background-image',`url(media/portraits/${dialogueID[dialogueProgression].character}/bg.png)`)
    
        dialogueImg.src = `media/portraits/${dialogueID[dialogueProgression].character}/${dialogueID[dialogueProgression].mood}.gif`

        dialogueText.innerHTML = dialogueID[dialogueProgression].text
        dialogueName.innerText = name
        dialogueName.style.color = `${color}`
    
        function handleKeyDown(event) {
            if(event.code === 'Space') {   
                if(dialogueProgression < dialogueID.length - 1) {
                    dialogueProgression++
                    dialogueText.innerHTML = dialogueID[dialogueProgression].text
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
}

// for(let i = 0; i <= 100; i++) {
//     console.log(
//         `${i}% {transform: translateX(${Math.round((Math.random() * 10 - 5) * 10) / 10}px) translateY(${Math.round((Math.random() * 10 - 5) * 10) / 10}px)`
//     )
// }