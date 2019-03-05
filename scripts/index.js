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

//write a function that prints the contact info for each entry



function prettyPrintAddressBook(book) {
    const allTheKeys = Object.keys(book); //returns an array of strings
    allTheKeys.forEach(function (stringKey) {
        let entry = book[stringKey];
        console.log(stringKey);
        console.log(entry);
    });
}

prettyPrintAddressBook(addressBook);

function prettyPrintEntryItemInAddressBook(book, item) {
    const allTheKeys = Object.keys(book); //returns an array of strings
    allTheKeys.forEach(function (stringKey) {
        let entry = book[stringKey][item];
        console.log(stringKey);
        console.log(entry);
    });
}

prettyPrintAddressBook(addressBook);

prettyPrintEntryItemInAddressBook(addressBook, "city");

// function printInfo(addressBook) {
//     //addressBook.forEach(console.log(Object.keys));
//     let info = {};
//     for (let i = 0; i < addressBook.length; i++) {

    //}
    // console.log(Object.keys(addressBook));
    // console.log(Object.keys(addressBook.DigitalCrafts));
    // console.log(Object.keys(addressBook.DigitalCrafts.address));

//}

// printInfo(addressBook);

// write a function that accepts address book and a key name and prints only that info
