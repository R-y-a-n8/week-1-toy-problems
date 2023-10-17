
function calculateGrade() {
    try {

        const marks = parseFloat(prompt("Enter the student's marks (0-100):"));

        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade;
            if (marks > 79) {
                grade = "A";
            } else if (marks >= 60 && marks <= 79) {
                grade = "B";
            } else if (marks >= 50 && marks <= 59) {
                grade = "C";
            } else if (marks >= 40 && marks <= 49) {
                grade = "D";
            } else {
                grade = "E";
            }

            alert(`Grade: ${grade}`);
        } else {
            alert("Marks should be between 0 and 100.");
        }
    } catch (error) {
        alert("Invalid input. Please enter a valid number between 0 and 100.");
    }
}

calculateGrade();
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Kmph = 1;
    const pointsThresholdForSuspension = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints >= pointsThresholdForSuspension) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}


const speed = parseFloat(prompt("Enter the car's speed (in km/h):"));

if (!isNaN(speed)) {
    calculateDemeritPoints(speed);
} else {
    console.log("Invalid input. Please enter a valid speed.");
}

function calculateNetSalary() {
    
    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

   
    const taxRate = 0.2;  
    const nhifDeduction = 1000; 
    const nssfDeductionRate = 0.1; 

    const grossSalary = basicSalary + benefits;


    const tax = grossSalary * taxRate;

    
    const nssfDeduction = grossSalary * nssfDeductionRate;

    
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;


    console.log(`Gross Salary: $${grossSalary}`);
    console.log(`Tax (Payee): $${tax}`);
    console.log(`NHIF Deductions: $${nhifDeduction}`);
    console.log(`NSSF Deductions: $${nssfDeduction}`);
    console.log(`Net Salary: $${netSalary}`);
}

calculateNetSalary();
