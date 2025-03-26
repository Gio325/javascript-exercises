const sumAll = function(num1, num2) {
    //creazione variabile che conterra' il risultato della somma
let sum = 0;
//controlla che l'input inserito sia accettabile, senno' restituisce ERROR
if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) ){
    return "ERROR"
//controlla che il primo numero sia maggiore del secondo...
}else if(num1 < num2){
for(let i = num1; i < num2; i++){
    sum += i;
}
sum += num2;
//se invece il secondo e' maggiore del primo...
}else{
    for(let i = num2; i < num1; i++){
        sum += i;
    }
    sum += num1;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
