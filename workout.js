const plans = {
 fat: {
  monday: ["Jumping Jacks – 30 sec", "Squats – 15", "Push-ups – 10", "Plank – 30 sec", "Jogging – 20 min"],
  tuesday: ["Mountain Climbers – 30 sec", "Bicycle Crunch – 15", "Burpees – 10", "High Knees – 30 sec"],
  wednesday: ["Light walking", "Stretching", "Yoga"],
  thursday: ["Lunges – 12 each leg", "Squats – 15", "Glute bridges – 12", "Skipping – 10 min"],
  friday: ["Push-ups – 10", "Shoulder taps – 12", "Triceps dips – 10"],
  saturday: ["Running – 30 min", "HIIT – 15 min"],
  sunday: ["Rest Day 🛌"]
 },

 muscle: {
  monday: ["Bench Press – 10", "Push-ups – 12", "Tricep Dips – 10"],
  tuesday: ["Pull-ups – 8", "Dumbbell Rows – 10", "Bicep Curls – 12"],
  wednesday: ["Rest"],
  thursday: ["Squats – 10", "Lunges – 12", "Deadlifts – 8"],
  friday: ["Overhead Press – 10", "Lateral Raises – 12"],
  saturday: ["Plank – 45 sec", "Leg Raises – 12"],
  sunday: ["Rest Day 🛌"]
 }
};

function generatePlan() {
 const goal = document.getElementById("goal").value;
 const level = document.getElementById("level").value;
 const container = document.getElementById("planContainer");

 container.innerHTML = "";

 const plan = plans[goal];

 for (let day in plan) {
  let card = document.createElement("div");
  card.className = `day-card ${day}`;

  let title = document.createElement("h3");
  title.textContent = day.toUpperCase();
  card.appendChild(title);

  plan[day].forEach(ex => {
   let div = document.createElement("div");
   div.className = "exercise";

   if(level === "intermediate") ex += " ⚡";
   if(level === "advanced") ex += " 🔥🔥";

   div.textContent = ex;
   card.appendChild(div);
  });

  if (plan[day][0].includes("Rest")) {
   card.classList.add("rest");
  }

  container.appendChild(card);
 }
}