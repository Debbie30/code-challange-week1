

    function calculateNetSalary() {
        const basicSalaryInput = document.getElementById("basicSalaryInput");
        const benefitsInput = document.getElementById("benefitsInput");
        const netSalaryOutput = document.getElementById("netSalaryOutput");
    
        const basicSalary = parseFloat(basicSalaryInput.value);
        const benefits = parseFloat(benefitsInput.value);
    
        const payee = calculatePayee(basicSalary);
        const nhif = calculateNHIFDeductions(basicSalary);
        const nssf = calculateNSSFContributions(basicSalary);
        const grossSalary = basicSalary + benefits;
        const deductions = payee + nhif + nssf;
        const netSalary = grossSalary - deductions;
    
        netSalaryOutput.textContent = "Net Salary: " + netSalary;
    }
    
    function calculatePayee(basicSalary) {
         if (basicSalary <= 12298) {
                return 0;
            } else if (basicSalary <= 23885) {
                return (basicSalary - 12298) * 0.1;
            } else if (basicSalary <= 35472) {
                return 1159 + (basicSalary - 23885) * 0.15;
            } else if (basicSalary <= 47059) {
                return 2962 + (basicSalary - 35472) * 0.2;
            } else if (basicSalary <= 58646) {
                return 5282 + (basicSalary - 47059) * 0.25;
            } else {
                return 9197 + (basicSalary - 58646) * 0.3;
            }
    }
    
    function calculateNHIFDeductions(basicSalary) {
         if (basicSalary <= 5999) {
                return 150;
            } else if (basicSalary <= 7999) {
                return 300;
            } else if (basicSalary <= 11999) {
                return 400;
            } else if (basicSalary <= 14999) {
                return 500;
            } else if (basicSalary <= 19999) {
                return 600;
            } else if (basicSalary <= 24999) {
                return 750;
            } else if (basicSalary <= 29999) {
                return 850;
            } else if (basicSalary <= 34999) {
                return 900;
            } else if (basicSalary <= 39999) {
                return 950;
            } else if (basicSalary <= 44999) {
                return 1000;
            } else if (basicSalary <= 49999) {
                return 1100;
            } else if (basicSalary <= 59999) {
                return 1200;
            } else if (basicSalary <= 69999) {
                return 1300;
            } else if (basicSalary <= 79999) {
                return 1400;
            } else if (basicSalary <= 89999) {
                return 1500;
            } else if (basicSalary <= 99999) {
                return 1600;
            } else {
                return 1700;
            }
    }
    
    function calculateNSSFContributions(basicSalary) {
        return Math.min(200, basicSalary * 0.06);
        
    }
    

