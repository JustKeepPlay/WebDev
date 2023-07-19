window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", getBMI);
};

function getBMI () {

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector("#result");
    let bmi = ((weight / (height * height)) * 10000).toFixed(2);

    if (bmi < 18.5) {
        result.innerHTML = `Your BMI is ${bmi} and you are underweight.`;
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = `Your BMI is ${bmi} and you are normal.`;
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = `Your BMI is ${bmi} and you are overweight.`;
    }
    else {
        result.innerHTML = `Your BMI is ${bmi} and you are obese.`;
    }
}