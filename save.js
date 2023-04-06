const save = JSON.parse(localStorage.getItem("PTBSave")) ?? {
    clicksRaw: 0,
    clicks: 0,
    clickMultiplier: 1,
    clickMultiplierMultiplier: 1,

    //Achievement Stuff

    hundredPowerReached: false,

    achClicks: false,
    achGoldenClicks: false,
    achPlatinumClicks: false,

    achPowah: false,

    achOnlyClicking: false,
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

if(save.clicks === NaN) {
    deletesave()
}

// Autosaving

setInterval(autosave, 60000);

function autosave() {
    localStorage.setItem("PTBSave", JSON.stringify(save));
    console.log(`Autosaved ${formatNumber(save.clicks)} Points!`);
}

function deletesave() {
    localStorage.removeItem("PTBSave", JSON.stringify(save));
    window.location.reload();
}