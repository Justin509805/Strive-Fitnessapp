
// this function is for the carbs protein and fat and the radial graph
function updateRadialGraph(current, total) {
    const circle = document.querySelector('.circle-progress');
    const number = document.getElementById('number');

    const carbsElement = document.getElementById('carbs');
    const proteinElement = document.getElementById('protein');
    const fatElement = document.getElementById('fat');

    const maxCarbsElement = document.getElementById('max-carbs');
    const maxProteinElement = document.getElementById('max-protein');
    const maxFatElement = document.getElementById('max-fat');
    
    // calculates percentage for graph
    const percentage = (current / total) * 100;
    const max = 100;
    const offset = ((max - percentage) / max) * 100;

    // update the radial graph
    circle.style.strokeDashoffset = offset;

    // update the text inside
    number.textContent = current; // number

    // macronutrient calculations
    const carbsCalories = total * 0.55;   // 55% of total calories
    const proteinCalories = total * 0.30; // 30% of total calories
    const fatCalories = total * 0.15;     // 15% of total calories

    const carbsGramsMax = Math.round(carbsCalories / 4);    // Convert calories to grams
    const proteinGramsMax = Math.round(proteinCalories / 4);
    const fatGramsMax = Math.round(fatCalories / 9);        // Fat has 9 kcal per gram

    const carbsGramsCurrent = Math.round((current * 0.55) / 4);
    const proteinGramsCurrent = Math.round((current * 0.30) / 4);
    const fatGramsCurrent = Math.round((current * 0.15) / 9);

    // update macronutrient display
    carbsElement.textContent = carbsGramsCurrent;       // consumed carbs in grams
    proteinElement.textContent = proteinGramsCurrent;   // consumed protein in grams
    fatElement.textContent = fatGramsCurrent;           // consumed fat in grams

    maxCarbsElement.textContent = carbsGramsMax;        // maximum carbs in grams
    maxProteinElement.textContent = proteinGramsMax;    // maximum protein in grams
    maxFatElement.textContent = fatGramsMax;            // maximum fat in grams
}

// Change this line of code and it automatically calculates the amount of carbs protein and fats based on your intake and goal
updateRadialGraph(1000, 3000);


