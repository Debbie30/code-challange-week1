// import a module for the console, create interface,standard inpot and output.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// function to determine the grade 
function calculateGrade (marks) {
    const newLocal = {};
    if (marks > 79) {
        return 'A';
    }else if (marks >= 60 && marks <= 79) {
        return 'B';
    }else if (marks >= 50 && marks <= 59) {
        return 'C';
    }else if (marks >= 40 && marks <= 49) {
        return 'D';
    }else {
        return 'E'
    }
};

// prompting the user to input student marks
rl.question('Enter students marks between 0 and 100 = ', (marksStr)=>{
    let marks = parseFloat(marksStr);

    // validating input marks
    if (!isNaN(marks))
        if(marks >= 0 && marks <= 100){
        let grade = calculateGrade(marks);
        console.log('Grade = ${grade}');
        }
        else{
    
        //Display error mesage
        console.log("Invalid.");
    }
    else{
        // display if its valid
        console.log(`${input} is invalid`);
    }
    rl.close();
});
