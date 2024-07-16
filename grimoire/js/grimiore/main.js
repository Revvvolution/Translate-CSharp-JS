console.log("Do you believe in magic?\n------------------------")

const allSpells = [
    {
        Name : "Turn enemy into a newt",
        IsEvil : true,
        EnergyRequired : 5.1
    },
    {
        Name : "Conjure some gold for a local charity",
        IsEvil : false,
        EnergyRequired : 2.99
    },
    {
        Name : "Give a deaf person the ability to heal",
        IsEvil : false,
        EnergyRequired : 12.2
    },
    {
        Name : "Make yourself emperor of the universe",
        IsEvil : true,
        EnergyRequired : 100.0
    },
    {
        Name : "Convince your relatives your political views are correct",
        IsEvil : false,
        EnergyRequired : 2921.5
    }
]


// *** Simplified unnecessary variable-setting steps from lines 66 and 67 for this program's purpose ***


// Good book spell objects
// const MakeGoodSpellBook = (allSpells) => {
//     const goodBook = allSpells.filter(good => good.IsEvil === false);
//     return goodBook;
// }



// Evil book spell objects
// const MakeEvilSpellBook = (allSpells) => {
//     const evilBook = allSpells.filter(evil => evil.IsEvil === true);
//     return evilBook;
// }



// Display function for spell book lists
const DisplaySpellBook = (book) => {
    if (book[0].IsEvil === false) {
        console.log("Good Book")
    }
    else{
        console.log("Evil Book")
    }
    for (const aSpell of book) {
        console.log(`  ${aSpell.Name}`)
    }
}



// Variables to pass to display argument
const goodBook = allSpells.filter(good => good.IsEvil === false);
const evilBook = allSpells.filter(evil => evil.IsEvil === true);


// Passing defined variables as arguments to the display function call
DisplaySpellBook(goodBook);
console.log("");
DisplaySpellBook(evilBook);




