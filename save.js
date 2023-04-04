const save = JSON.parse(localStorage.getItem("save")) ?? {
    clicks: 0,
    clickMultiplier: 1,
    clickMultiplierMultiplier: 1,

    //Achievement Stuff

    hundredPowerReached: false,

    achClicks: false,
    achOnlyClicking: false,
    achPowah: false,
    achDedication: false,
    achTwoDig: false,
    achThreeDig: false,
    achFourDig: false,
    achFiveDig: false,
    achSixDig: false,
    achSevenDig: false,

    //Setting Stuff

    SFX: true,
    formatNumbers: true,

    //Other Sutff

    timePlayed: 0,

    millionPassed: false,
    decillionPassed: false,
    infinityReached: false,
}

if(clicks = NaN) {
    deletesave()
}

// Autosaving

setInterval(autosave, 60000);

function autosave() {
    localStorage.setItem("save", JSON.stringify(save));
    console.log(`Autosaved ${formatNumber(save.clicks)} Points!`);
}

function deletesave() {
    localStorage.removeItem("save", JSON.stringify(save));
    window.location.reload();
}