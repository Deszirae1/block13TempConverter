//this is the conversion function

function convertToCelsius(fahren) {
    const celsius = ((fahren - 32) * 5) /9;
    return celsius;    
}


function createMessage(fahren, celc) {
    let tempteller = "";
    if (fahren < 32) {
        tempteller = "very cold";
    } else if (fahren < 64) {
        tempteller = "cold";
    } else if (fahren < 86) {
        tempteller = "warm";
    } else if (fahren < 100) {
        tempteller = "hot";
    } else {
        tempteller = "very hot";
}

    return 'The temperature in F is ${fahren} and in C is ${celc}. It feels ${tempteller}.';
}

function rand(limit) {
    return Math.floor(Math.random() * (limit + 1));
}


const fahrenheitTemp = 80;
const celsiusTemp = convertToCelsius(fahrenheitTemp);
const message = createMessage(fahrenheitTemp, celsiusTemp);
console.log(message);

const randomNum = rand(100);
console.log("Random number:", randomNum);
