const readline = require('readline');
const r1 = readline.createInterface({
    input: process. stdin,
    output: process.stdout
});

var greenTextStart = "\x1b[32m";

var blueTextStart = "\x1b[34m";

var colorTextEnd = "\x1b[0m";

// r1.question("What is your name? ", function(name) {
//     r1.question("Where do you live? ", function(country) {
//         console.log(name + ' is a citizen of ' + country);
//         r1.close();
//     });
// });

var menuFunction  = function() {
    r1.question(greenTextStart + 
        "0) Go to Other Menu\n1) Print Message\n2) Print Different Message\n3) End\n"
        + colorTextEnd, (menuOption) => {
        yellowConsole("You selected " + menuOption);
        if (menuOption == 0) {
            greenConsole("Going to Other Menu");
            altMenuFunction();
        } else if (menuOption == 1) {
            blueConsole("Hello there from 1!");
            menuFunction();
        } else if (menuOption == 2) {
            blueConsole("Heelo there frmo 2!");
            menuFunction();
        } else if (menuOption == 3) {
            r1.close();
        }
    })
}

var altMenuFunction  = function() {
    r1.question(blueTextStart + 
        "0) Go to First Menu\n1) Print Date\n2) Print Equation\n"
        + colorTextEnd, (menuOption) => {
        yellowConsole("You selected " + menuOption);
        if (menuOption == 0) {
            blueConsole("Going to First Menu");
            menuFunction();
        } else if (menuOption == 1) {
            greenConsole("The Date is: " + Date());
            altMenuFunction();
        } else if (menuOption == 2) {
            greenConsole("3 + 4 * 7 = " + (3 + 4 * 7));
            altMenuFunction();
        }
    })
}

menuFunction();

var redConsole = function(text) {
    console.log("\x1b[31m%s\x1b[0m" , text);
}

var greenConsole = function(text) {
    console.log("\x1b[32m%s\x1b[0m" , text);
}

var yellowConsole = function(text) {
    console.log("\x1b[33m%s\x1b[0m" , text);
}

var blueConsole = function(text) {
    console.log("\x1b[34m%s\x1b[0m" , text);
}



r1.on("close", function() {
    redConsole("\nProgram complete");
    process.exit(0);
});