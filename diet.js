const weeklyData = {
    loss: {
        title: "🔥 Weekly Weight Loss Plan",
        days: [
            { d: "Mon", b: "Oats + Fruit", l: "Dal + Salad", n: "Soup" },
            { d: "Tue", b: "Poha", l: "Sprouts", n: "Grilled Veggies" },
            { d: "Wed", b: "Fruit Bowl", l: "Roti + Sabzi", n: "Paneer Salad" },
            { d: "Thu", b: "Boiled Eggs", l: "Brown Rice + Dal", n: "Clear Soup" },
            { d: "Fri", b: "Smoothie", l: "Chickpea Salad", n: "Sautéed Veg" },
            { d: "Sat", b: "Upma", l: "Mixed Veg Curry", n: "Moong Dal" },
            { d: "Sun", b: "Cornflakes", l: "Tofu Salad", n: "Light Broth" }
        ]
    },
    gain: {
        title: "💪 Weekly Muscle Gain Plan",
        days: [
            { d: "Mon", b: "Eggs + Toast", l: "Paneer + Rice", n: "Milk + Nuts" },
            { d: "Tue", b: "PB Oats", l: "Banana + Rice", n: "Sweet Potato" },
            { d: "Wed", b: "Omelette", l: "Pasta + Veg", n: "Greek Yogurt" },
            { d: "Thu", b: "Protein Shake", l: "Roti + Heavy Curry", n: "Peanut Salad" },
            { d: "Fri", b: "Paratha", l: "Dal + Ghee", n: "Fruit Cream" },
            { d: "Sat", b: "Pancakes", l: "Soya + Rice", n: "Cottage Cheese" },
            { d: "Sun", b: "Masala Oats", l: "Paneer Rice", n: "Cashews + Milk" }
        ]
    },
    balanced: {
        title: "🥗 Weekly Balanced Plan",
        days: [
            { d: "Mon", b: "Fruit + Nuts", l: "Roti + Sabzi", n: "Light Salad" },
            { d: "Tue", b: "Idli Sambar", l: "Rice + Veg Dal", n: "Veg Sandwich" },
            { d: "Wed", b: "Grain Bread", l: "Curd Rice", n: "Boiled Veg" },
            { d: "Thu", b: "Smoothie Bowl", l: "Veg Pulao", n: "Corn Salad" },
            { d: "Fri", b: "Besan Chilla", l: "Green Veg + Roti", n: "Fruit Salad" },
            { d: "Sat", b: "Dosa", l: "Kadhi Chawal", n: "Soup" },
            { d: "Sun", b: "Juice + Eggs", l: "Mixed Veg", n: "Milk" }
        ]
    }
};

function showPlan(type, event) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const plan = weeklyData[type];
    let html = `<div class="planBox ${type}">
                <h3>${plan.title}</h3>
                <table>
                    <tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th></tr>`;
    
    plan.days.forEach(item => {
        html += `<tr><td><b>${item.d}</b></td><td>${item.b}</td><td>${item.l}</td><td>${item.n}</td></tr>`;
    });
    
    html += `</table></div>`;
    document.getElementById('planOutput').innerHTML = html;
}

let totalSavedCalories = 0;

function showHealthy() {
    const swaps = [
        { bad: "🍕 Pizza Slice", badDetail: "350 Cal | High Sodium", good: "🥪 Wheat Sandwich", goodDetail: "200 Cal | 4g Fiber", save: 150, iconBad: "🍕", iconGood: "🥪" },
        { bad: "🥤 Soft Drink", badDetail: "140 Cal | 39g Sugar", good: "🥥 Coconut Water", goodDetail: "45 Cal | Natural", save: 95, iconBad: "🥤", iconGood: "🥥" },
        { bad: "🍟 Fries", badDetail: "310 Cal | High Fat", good: "🥔 Roasted Wedges", goodDetail: "180 Cal | Less Oil", save: 130, iconBad: "🍟", iconGood: "🥔" }
    ];

    let html = `<div class="swap-container animate-fade">
                    <div class="impact-header">
                        <span>Total Calories Saved Today: <strong id="totalSaved">${totalSavedCalories}</strong> Kcal</span>
                    </div>`;

    swaps.forEach((item) => {
        html += `
            <div class="swap-card">
                <div class="side bad">
                    <small>AVOID</small>
                    <div class="food-info">
                        <span class="emoji">${item.iconBad}</span>
                        <div>
                            <strong>${item.bad}</strong>
                            <p>${item.badDetail}</p>
                        </div>
                    </div>
                </div>
                <div class="swap-arrow">➡</div>
                <div class="side good">
                    <small>TRY THIS</small>
                    <div class="food-info">
                        <span class="emoji">${item.iconGood}</span>
                        <div>
                            <strong>${item.good}</strong>
                            <p>${item.goodDetail}</p>
                        </div>
                    </div>
                </div>
                <button class="swap-btn" onclick="recordSwap(${item.save}, this)">Swap Selected! (+${item.save} Cal)</button>
            </div>`;
    });

    document.getElementById('foodOutput').innerHTML = html + `</div>`;
}

function recordSwap(cal, btn) {
    totalSavedCalories += cal;
    document.getElementById('totalSaved').innerText = totalSavedCalories;
    btn.innerText = "✅ Swapped!";
    btn.style.background = "#27ae60";
    btn.disabled = true;
}

function showJunk() {
    const impacts = [
        { organ: "🧠 THE BRAIN", title: "Sugar Crash", desc: "Excess sugar creates 'Brain Fog' and energy crashes, affecting focus.", hidden: ["Fructose Syrup", "Artificial Flavors"] },
        { organ: "🫀 THE HEART", title: "Fat Build-up", desc: "Industrial Trans Fats clog arteries, increasing cholesterol and heart risk.", hidden: ["Hydrogenated Oil", "Excess Sodium"] },
        { organ: "🩸 THE BLOOD", title: "Salt & Bloat", desc: "High salt intake causes water retention, bloating, and increased blood pressure.", hidden: ["Processed Salt", "Added MSG"] }
    ];

    const timers = ["45 Mins Walking", "20 Mins Running", "30 Mins Cycling", "1 Hour Yoga"];
    const randomTimer = timers[Math.floor(Math.random() * timers.length)];

    let html = `<div class="impact-container animate-fade">
                    <h3 style="color: #c0392b;">⚠️ Body Impact Map</h3>
                    <div class="impact-grid">`;

    impacts.forEach(item => {
        html += `
            <div class="impact-card">
                <div class="impact-header">
                    <strong>${item.organ}</strong>
                    <span>${item.title}</span>
                </div>
                <p>${item.desc}</p>
                <div class="hidden-list">
                    <small>Hidden Ingredients:</small>
                    <ul>
                        ${item.hidden.map(ing => `<li>❌ ${ing}</li>`).join('')}
                    </ul>
                </div>
            </div>`;
    });

    html += `</div>
            <div class="recovery-timer">
                ⏱️ <strong>Recovery Timer:</strong> To burn 1 Junk Meal: <span>${randomTimer}</span>
            </div>
        </div>`;

    document.getElementById('foodOutput').innerHTML = html;
}
const mealCategories = {
    main: [
        { name: "Paneer Wrap", cal: 350, badges: ["Protein", "Filling"] },
        { name: "Masala Oats", cal: 320, badges: ["Fiber", "Energy"] },
        { name: "Poha", cal: 280, badges: ["Light", "Carbs"] }
    ],
    side: [
        { name: "Fruit Bowl", cal: 90, badges: ["Vitamin C"] },
        { name: "Sprout Salad", cal: 110, badges: ["Nutrients"] },
        { name: "Boiled Egg", cal: 70, badges: ["Protein"] }
    ],
    drink: [
        { name: "Coconut Water", cal: 45, badges: ["Electrolytes"] },
        { name: "Green Tea", cal: 0, badges: ["Alertness"] },
        { name: "Lemon Water", cal: 10, badges: ["Hydration"] }
    ]
};

function suggestMeal() {
    const pick = (cat) => mealCategories[cat][Math.floor(Math.random() * mealCategories[cat].length)];
    const meal = { main: pick('main'), side: pick('side'), drink: pick('drink') };
    const totalCal = meal.main.cal + meal.side.cal + meal.drink.cal;

    let html = `
        <div class="plate-container animate-fade">
            <div class="plate-grid">
                <div class="plate-card main-border">
                    <small>MAIN DISH</small>
                    <h4>${meal.main.name}</h4>
                    <p>${meal.main.cal} Kcal</p>
                    <div class="badge-row">${meal.main.badges.map(b => `<span>${b}</span>`).join('')}</div>
                </div>
                <div class="plate-card side-border">
                    <small>HEALTHY SIDE</small>
                    <h4>${meal.side.name}</h4>
                    <p>${meal.side.cal} Kcal</p>
                    <div class="badge-row">${meal.side.badges.map(b => `<span>${b}</span>`).join('')}</div>
                </div>
                <div class="plate-card drink-border">
                    <small>REFRESHING DRINK</small>
                    <h4>${meal.drink.name}</h4>
                    <p>${meal.drink.cal} Kcal</p>
                    <div class="badge-row">${meal.drink.badges.map(b => `<span>${b}</span>`).join('')}</div>
                </div>
            </div>
            <div class="meal-actions">
                <div class="total-bar">Total Combo: <strong>${totalCal} Kcal</strong></div>
                <button class="save-meal-btn" onclick="saveFavoriteMeal('${meal.main.name}', '${meal.side.name}', '${meal.drink.name}')">⭐ Save Combo</button>
            </div>
        </div>`;
    document.getElementById('mealOutput').innerHTML = html;
}

function saveFavoriteMeal(m, s, d) {
    const container = document.getElementById('savedContainer');
    const list = document.getElementById('favoritesList');
    
    container.style.display = 'block';
    
    const li = document.createElement('li');
    li.style.listStyle = "none";
    li.style.padding = "10px";
    li.style.borderBottom = "1px solid #eee";
    li.innerHTML = `⭐ <strong>${m}</strong> with ${s} & ${d}`;
    list.appendChild(li);
    
    alert("Combo Saved!");
}
let water = 0;

function addWater() {
    if (water < 8) {
        water++;
        updateWaterUI();
    }
}

function resetWater() {
    water = 0;
    updateWaterUI();
}

function updateWaterUI() {
    const percentage = (water / 8) * 100;
    const waterLevel = document.getElementById('waterLevel');
    const percentText = document.getElementById('percentText');
    
    if (waterLevel) {
        waterLevel.style.height = percentage + "%";
    }
    
    if (percentText) {
        percentText.innerText = water > 0 ? Math.round(percentage) + "%" : "";
    }

    document.getElementById('waterCount').innerText = water;

    let msg = "";
    if (water >= 8) {
        msg = "Goal Reached! 🌊 Stay Hydrated!";
    } else if (water >= 4) {
        msg = "Halfway there! Keep drinking! 💧";
    } else {
        msg = "Time for a sip! 🧊";
    }
    
    document.getElementById('waterMsg').innerText = msg;
}

window.onload = suggestMeal;