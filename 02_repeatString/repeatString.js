let result = '';
const repeatString = function(wordToRepeat, numOfTimes) {
    if(numOfTimes < 0){
        return "ERROR"
    }
    for(let i = 0; i < numOfTimes; i++){
        result += wordToRepeat
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
