const noOfSubj = parseInt(sessionStorage.getItem("noSubjects"));
let grad = [];
let cred = [];

const dynaField = () => {
    const make = document.querySelector("#noOfInput");
    for (let i = 1; i <= noOfSubj; i++) {
        make.innerHTML += `
        <div>
            <label for="Sub${i}Grade">Subject <span>${i}</span> Grade</label>
            <input id="Sub${i}Grade" type="text" name="Sub${i}Grade" placeholder="A" required />

            <label for="Sub${i}Cred"> Credits </label>
            <input id="Sub${i}Cred" type="number" name="Sub${i}Cred" placeholder="3" min="1" required />
        </div>`;
    }
};

const validGrades = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5
};

const validateInputs = () => {
    let isValid = true;
    grad = [];
    cred = [];

    for (let i = 1; i <= noOfSubj; i++) {
        const gradeInput = document.getElementById(`Sub${i}Grade`).value.trim().toUpperCase();
        const creditInput = parseInt(document.getElementById(`Sub${i}Cred`).value.trim());

        if (!validGrades.hasOwnProperty(gradeInput)) {
            alert(`❌ Invalid grade in Subject ${i}. Please enter one of: ${Object.keys(validGrades).join(", ")}`);
            isValid = false;
            break;
        }

        if (isNaN(creditInput) || creditInput <= 0) {
            alert(`❌ Invalid credit in Subject ${i}. Credits must be a positive number.`);
            isValid = false;
            break;
        }

        grad.push(validGrades[gradeInput]);
        cred.push(creditInput);
    }

    return isValid;
};

const sumTotal = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < noOfSubj; i++) {
        totalGradePoints += grad[i] * cred[i];
        totalCredits += cred[i];
    }

    const gpa = (totalGradePoints / totalCredits).toFixed(2);
    sessionStorage.setItem("gpa", gpa);
    return gpa;
};

const goToResult = () => {
    if (validateInputs()) {
        sumTotal();
        window.location.href = "result.html";
    }
};

const end = () => {
    const domValue = document.getElementById("sub");
    domValue.addEventListener("click", goToResult);
};

const next = () => {
    dynaField();
    end();
};

next();
