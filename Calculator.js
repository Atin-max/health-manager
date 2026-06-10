function showTab(event, tabId) {
    let contents = document.querySelectorAll(".content");
    let tabs = document.querySelectorAll(".tab");

    contents.forEach(c => c.classList.add("hidden"));
    tabs.forEach(t => t.classList.remove("active"));

    document.getElementById(tabId).classList.remove("hidden");
    event.target.classList.add("active");
}

// BMI
function calculateBMI() {
    let h = document.getElementById("bmiHeight").value;
    let w = document.getElementById("bmiWeight").value;

    if (!h || !w) return alert("Enter all values");

    let bmi = (w / ((h / 100) ** 2)).toFixed(1);
    document.getElementById("bmiValue").innerText = bmi;

    let text = "";
    if (bmi < 18.5) text = "Underweight";
    else if (bmi < 25) text = "Normal";
    else text = "Overweight";

    document.getElementById("bmiText").innerText = text;
}

// BMR
function calculateBMR() {
    let w = document.getElementById("bmrWeight").value;
    let h = document.getElementById("bmrHeight").value;
    let age = document.getElementById("bmrAge").value;
    let gender = document.getElementById("gender").value;

    if (!w || !h || !age) return alert("Enter all values");

    let bmr = (gender === "male")
        ? (10*w + 6.25*h - 5*age + 5)
        : (10*w + 6.25*h - 5*age - 161);

    document.getElementById("bmrResult").innerText = bmr.toFixed(0);
}

// Calories
function calculateCalories() {
    let w = document.getElementById("calWeight").value;
    let h = document.getElementById("calHeight").value;
    let age = document.getElementById("calAge").value;
    let gender = document.getElementById("calGender").value;
    let activity = document.getElementById("activity").value;

    if (!w || !h || !age) return alert("Enter all values");

    let bmr = (gender === "male")
        ? (10*w + 6.25*h - 5*age + 5)
        : (10*w + 6.25*h - 5*age - 161);

    let calories = bmr * activity;
    document.getElementById("calResult").innerText = calories.toFixed(0);
}

// Water
function calculateWater() {
    let w = document.getElementById("waterWeight").value;

    if (!w) return alert("Enter weight");

    let water = w * 0.033;
    document.getElementById("waterResult").innerText = water.toFixed(2) + " L";
}