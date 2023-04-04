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
        text: 'Here are all of my current moods:'
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
]

var dialogueText1 = [
    {
        character: 'debread',
        mood: 'lookAway',
        text: 'Bro is really messing with the console'
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: "that's kinda goofy tbh"
    },
    {
        character: 'debread',
        mood: 'smirk',
        text: "it would be a shame if I took all of your points away..."
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
        text: "That's the end of my game."
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: "I'll probably end up adding more stuff..."
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: "But in the meantime you could tweet me on <span style=\"color: #6eccff; font-weight: 700\">twitter</span> at @notdebread with ideas for more things."
    },
    {
        character: 'debread',
        mood: 'lookAwaySmirk',
        text: "(and follow all of my other socials)"
    },
    {
        character: 'debread',
        mood: 'normal2',
        text: "I guess you can keep playing if you want but there isn't much after 1 Million..."
    },
    {
        character: 'debread',
        mood: 'smirk',
        text: "The counter goes up to 1 Decillion anyways..."
    },
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
        mood: 'lookAwaySmirk',
        text: 'You can like go outside and touch grass or something...'
    },
]

var dialogueActive = false

function dialogueDisplay(name, dialogueID, color) {
    if(dialogueActive === false) {
        dialogueActive = true
        dialogueProgression = 0
        dialogue.style.setProperty('height','125px')
        dialogue.style.setProperty('padding','10px')
    
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