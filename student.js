function calculateGrade() {
    // Get the input element for marks and the output element for grade
    const marksInput = document.getElementById("marksInput");
    const gradeOutput = document.getElementById("gradeOutput");
    
    const marks = parseFloat(marksInput.value);

    // Check if the input marks are a valid number between 0 and 100
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        let grade;
        // Determine the grade based on the marks
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
            grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
            grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        gradeOutput.textContent = "Grade: " + grade;// Display the grade
    } else {
        gradeOutput.textContent = "Marks should be between 0 and 100.";
    } //display error message
}
