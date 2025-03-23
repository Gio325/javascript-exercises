const reverseString = function(str) {
let splitstr = str.split('')
let revstr = splitstr.reverse();
let joinstr = revstr.join('');
return joinstr

}

// Do not edit below this line
module.exports = reverseString;
