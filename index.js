// code your solution here


function saturdayFun (activity){

    if (activity === undefined) {
        return "This Saturday, I want to roller-skate!"
    } else {
        return `This Saturday, I want to ${activity}!`
    }
}

function mondayWork (dailyActivity){

    if (dailyActivity === undefined) {
        return "This Monday, I will go to the office."
    } else {
        return `This Monday, I will ${dailyActivity}.`
    }
}

function wrapAdjective (character){
    return function (quality = "special"){
        return `You are ${character}${quality}${character}!`
    }
}