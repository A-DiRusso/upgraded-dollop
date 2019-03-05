//javaScript

console.log("eh");

const leetDictionary = {
    "A": 4,
    "E": 3,
    "G": 6,
    "I": 1,
    "O": 0,
    "S": 5,
    "T": 7,
}

function transl33t(originalString) {
    let result = '';
    //loop through each letter in original string
    // if its in the dictionary, and if it is 
    //put its value in the result 
    //else just copy the letter into `result`
    for (let i = 0; i < originalString.length; i++) {
        let theLetter = originalString[i].toUpperCase();
        console.log(theLetter);
        console.log(leetDictionary[theLetter]);
        if (leetDictionary[theLetter] !== undefined) {
            result += leetDictionary[theLetter];
        } else {
            result += theLetter;
        }
    }
    return result;
}

const addressBook = {
    DigitalCrafts: {
        phone: '404-898-0999',
        address: '123 Piedmont rd',
        city: 'Atlanta',
    },
    "Chris Aquino": {
        phone: "423-303-8899",
        address: '312 Piedmont rd',
        city: 'Atlanta',
    },
};