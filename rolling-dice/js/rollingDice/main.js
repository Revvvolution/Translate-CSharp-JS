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
    let word;
    switch (num) {
        case 1:
            word = "One";
            break;
        case 2:
            word = "Two";
            break;
        case 3:
            word = "Three";
            break;
        case 4:
            word = "Four";
            break;
        case 5:
            word = "Five";
            break;
        case 6:
            word = "Six";
            break;
        default:
            word = "Number out of range";
    }
    return word;
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