const removeFromArray = function (array, ...nums) {
    //prima creo un array che conterra' i numeri richiesti
    const newArray = [];
    //creo un ciclo forEach() che verifica gli items di array...
    array.forEach(item => {
        //se gli items di nums NON (!) includono gli items di array...
        if (!nums.includes(item)) {
            //li aggiungo a newArray
            newArray.push(item)
        }
    });
    //restituisco il valore di newArray
    return newArray
}


// Do not edit below this line

module.exports = removeFromArray;
