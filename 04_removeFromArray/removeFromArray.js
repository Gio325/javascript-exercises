const removeFromArray = function(array, ...nums) {
//prima creo un array che conterra' i numeri richiesti
const newArray = [];
//creo un ciclo forEach() che verifica se gli items contetuti in nums
//compaiono anche in array
array.forEach(item => {
    if(!nums.includes(item)){
        newArray.push(item)
    }
});
return newArray
}
// Do not edit below this line

module.exports = removeFromArray;
