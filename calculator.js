// import module

const readline = require('readline');

//define tax rates functions

function calculateTax(income){
    const taxSlabs = [
        //tax rates on income
        {limit: 24000, rate: 0.1},
        {limit: 32333, rate: 0.25},
        {limit: 500000, rate: 0.3},
        {limit: 800000, rate: 0.35},
    ];

    //initialize tax 0

    let tax = 0;

    // initialize remainder to total income
    let remIncome = income;

    // iterate through tax slab to check remaining taxable income,calculate the tax

        for (const slab of taxSlabs){
            
            if(remIncome <=0) break;
            
            const taxableAmount =Math.min(remIncome, slab.limit);
            
            tax+= taxableAmount *slab.rate;
    
            
            remIncome -= taxableAmount
        }
    
        //return the total tax calculation
        return tax;
    }
    
    //define NHIF rates
    function calculateNHIFDeductions(grossPay){
        const nhifRates = [
            {limit:5999, deduction: 150},
            {limit:11999, deduction: 400},
            {limit:29999, deduction: 850},
            {limit:100000, deduction: 1700},
    
        ];
        for (const rate of nhifRates){
            if (grossPay<= rate.limit){
                return rate.deduction;
            }
        }
        //exceed the highest limit
       return nhifRates[nhifRates.length - 1].deduction;
    
    }
    
    
    //define nssf rates 
    function calculateNSSFContributions(pensionalPay){
        //employee contribution rate for tiers
        const tierIRate = 0.06;
        
        const tierIILowestLimit = 7001; 
    
    if(pensionalPay <= tierIILowestLimit){
       
        return pensionalPay * tierIRate;
    } else {
        
        return tierIILowestLimit * tierIRate;
    }
    }
    
    //calculate the net salary, tax, NHIF deductions, NSSF deductions
    function calculateNetSalary(basicSalary, benefits){
        
        const grossSalary = basicSalary + benefits;
        
        const tax = calculateTax(grossSalary);
        
        const NHIFDeductions = calculateNHIFDeductions(grossSalary);
        
        const NSSFDeductions = calculateNSSFContributions(basicSalary);
        
        const netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;
    
        //results
        return{
            grossSalary,
            tax,
            NHIFDeductions,
            NSSFDeductions,
            netSalary
        };
    }
    
    //function to get the user input
    function getUserInput(question){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
    
        });
     
     return new Promise((resolve) => {
        rl.question(question, (answer) =>{
            rl.close();
            resolve(parseFloat(answer));
        });
     });
    }
     //function to run the program
     async function run(){
     
    
        const basicSalary = await getUserInput("your basic salary = ");
    
      
        const benefits = await getUserInput("Your Benefits = ");
    
        
        const salaryDetails = calculateNetSalary(basicSalary, benefits);
    
      
        console.log("Gross = ", salaryDetails.grossSalary);
        console.log("Tax = ", salaryDetails.tax);
        console.log("NHIF Ded = ", salaryDetails.NHIFDeductions);
        console.log("NSSF Ded = ", salaryDetails.NSSFDeductions);
        console.log("Net = ", salaryDetails.netSalary);
     }
    
     run();

