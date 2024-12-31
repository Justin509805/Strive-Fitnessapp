function updateRadialGraph(current, total) {
    const circle = document.querySelector('.circle-progress');
    const number = document.getElementById('number');
    
    // calculates how much percent it is 
    const percentage = (current / total) * 100;
    
    const max = 100;
    const offset = ((max - percentage) / max) * 100;

    // updates the radial graph
    circle.style.strokeDashoffset = offset;

    // updates the text
    number.textContent = current; 
}

// first number is the amount of kcal eaten, second number is your goal to eat
updateRadialGraph(985, 2800);

function updateRadialGraph(current, total) {
    const circle = document.querySelector('.circle-progress');
    const number = document.getElementById('number');

    const carbsElement = document.getElementById('carbs');
    const proteinElement = document.getElementById('protein');
    const fatElement = document.getElementById('fat');

    const maxCarbsElement = document.getElementById('max-carbs');
    const maxProteinElement = document.getElementById('max-protein');
    const maxFatElement = document.getElementById('max-fat');
    
    // Calculate percentage
    const percentage = (current / total) * 100;
    const max = 100;
    const offset = ((max - percentage) / max) * 100;

    // Update the radial graph
    circle.style.strokeDashoffset = offset;

    // Update the text
    number.textContent = current; // Show only the number

    // Macronutrient calculations
    const carbsCalories = total * 0.55;   // 55% of total calories
    const proteinCalories = total * 0.30; // 30% of total calories
    const fatCalories = total * 0.15;     // 15% of total calories

    const carbsGramsMax = Math.round(carbsCalories / 4);    // Convert calories to grams
    const proteinGramsMax = Math.round(proteinCalories / 4);
    const fatGramsMax = Math.round(fatCalories / 9);        // Fat has 9 kcal per gram

    const carbsGramsCurrent = Math.round((current * 0.55) / 4);
    const proteinGramsCurrent = Math.round((current * 0.30) / 4);
    const fatGramsCurrent = Math.round((current * 0.15) / 9);

    // Update macronutrient display
    carbsElement.textContent = carbsGramsCurrent;       // Consumed carbs in grams
    proteinElement.textContent = proteinGramsCurrent;   // Consumed protein in grams
    fatElement.textContent = fatGramsCurrent;           // Consumed fat in grams

    maxCarbsElement.textContent = carbsGramsMax;        // Maximum carbs in grams
    maxProteinElement.textContent = proteinGramsMax;    // Maximum protein in grams
    maxFatElement.textContent = fatGramsMax;            // Maximum fat in grams
}

// Example: Set the graph to 985 out of 2800 kcal
updateRadialGraph(985, 2800);


