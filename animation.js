// This function updates the radial graph and macronutrient calculations
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
  
    // Update the percentage number (change it dynamically)
    const percentageNumber = document.getElementById('percentage-number');
    const burntCalories = current * 0.12;  // Burnt calories based on the new formula
    percentageNumber.textContent = burntCalories.toFixed(0);  // Update with 1 decimal place

  
    // Call the updateRemainingCalories function to update remaining calories
    updateRemainingCalories(current, total);
}
  
// New function to calculate remaining calories and update the display
function updateRemainingCalories(current, total) {
    const remainingCalories = total - current; // Calculate remaining calories
    const remainingCaloriesElement = document.getElementById('remaining-calories');
    remainingCaloriesElement.textContent = remainingCalories; // Update the remaining calories
}
  
// Example usage: update with current = 1000, total = 2000
updateRadialGraph(1800, 2500);

  






