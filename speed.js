function calculateDemeritPoints() {
    // Get the input element for speed and the output element for points
    const speedInput = document.getElementById("speedInput");
    const pointsOutput = document.getElementById("pointsOutput");

    const speed = parseFloat(speedInput.value);
    // Define constants for speed limit, km per demerit point, and points per km above limit

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed <= speedLimit) {
        pointsOutput.textContent = "Ok";
    } else {
        const kmAboveLimit = speed - speedLimit;
        const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint) * pointsPerKmAboveLimit;
        console.log("Points:", demeritPoints);  // Display the demerit points in the output element
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
        
        return demeritPoints;
    }
}

