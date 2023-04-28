const SAVE_DATA_VERSION = 3

let savedData = localStorage.getItem("PTBSave")

let save

try {
  save = savedData ? JSON.parse(savedData) : null
  if (save && save.version !== SAVE_DATA_VERSION) {
    save = null
  }
} catch (error) {
  save = null
}

if (!save) {
  save = {
    version: SAVE_DATA_VERSION,

    clicksRaw: 0,
    clicks: 0,
    clickMultiplier: 1,
    clickMultiplierMultiplier: 1,

    //Achievement Stuff

    achievements: 0,

    hundredPowerReached: false,
    twoHundredPowerReached: false,

    achClicks: false,
    achGoldenClicks: false,
    achPlatinumClicks: false,
    achDiamondClicks: false,

    achPowah: false,
    achOver9000: false,
    achPoorMouse: false,

    achOnlyClicking: false,
    achDedication: false,
    achCantStop: false,
    achEndlessClicking: false,

    achTwoDig: false,
    achThreeDig: false,
    achFourDig: false,
    achFiveDig: false,
    achSixDig: false,
    achSevenDig: false,
    achEightDig: false,
    achNineDig: false,
    achTenDig: false,

    //Setting Stuff

    SFX: true,
    formatNumbers: true,
    showPointsOnClick: false,
    dialogueEnabled: false,

    //Other Stuff

    timePlayed: 0,

    millionPassed: false,
    billionPassed: false,
    decillionPassed: false,
    infinityReached: false,
  }
}

// Autosaving

setInterval(autosave, 60000)

function autosave() {
  localStorage.setItem("PTBSave", JSON.stringify(save))
  console.log(`Autosaved ${formatNumber(save.clicks)} Points!`)
}

function deletesave() {
  localStorage.removeItem("PTBSave")
  window.location.reload()
}