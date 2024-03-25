function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const kmAboveLimit = speed - speedLimit;
        const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint) * pointsPerKmAboveLimit;
        console.log("Points:", demeritPoints);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
        
        return demeritPoints;
    }
}

// Example usage:
const speed = 80;
calculateDemeritPoints(speed);
