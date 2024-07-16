console.log("Let's roll some dice, baby!\n---------------------------")


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Roll = () => {
    const dieRoll = getRandomInt(1, 6);
    return dieRoll
}

function numberToWord(num) {
    let numWord;
    switch (num) {
        case 1:
            numWord = "One";
            break;
        case 2:
            numWord = "Two";
            break;
        case 3:
            numWord = "Three";
            break;
        case 4:
            numWord = "Four";
            break;
        case 5:
            numWord = "Five";
            break;
        case 6:
            numWord = "Six";
            break;
        default:
            numWord = "Number out of range";
    }
    return numWord;
}

for (let i = 0; i < 10; i++) {
    const die1 = Roll();
    const die2 = Roll();

    let outcome = `${numberToWord(die1)} + ${numberToWord(die2)} == ${die1 + die2}`
    if (die1 === die2) {
        outcome += " DOUBLES!"
    }
    console.log(outcome)
}