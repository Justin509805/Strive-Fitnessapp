// this function updates the radial graph and macronutrient calculations
// takes the current calories eaten and total to eat
function updateRadialGraph(current, total) {
    const circle = document.querySelector('.circle-progress');
    const number = document.getElementById('number');
  
    // consumed macronutrients
    const carbsElement = document.getElementById('carbs');
    const proteinElement = document.getElementById('protein');
    const fatElement = document.getElementById('fat');
    
     // maximum allowed macronutrients
    const maxCarbsElement = document.getElementById('max-carbs');
    const maxProteinElement = document.getElementById('max-protein');
    const maxFatElement = document.getElementById('max-fat');
  
    // calculates percentage for graph
    const percentage = (current / total) * 100;
    const max = 100;
    const offset = ((max - percentage) / max) * 100;
  
    // updates the radial graph to the right offset
    circle.style.strokeDashoffset = offset;
  
    // update the text inside
    number.textContent = current; // number of calories that are currently eaten
  
    // macronutrient calculations
    const carbsCalories = total * 0.55;   // 55% of total calories
    const proteinCalories = total * 0.30; // 30% of total calories
    const fatCalories = total * 0.15;     // 15% of total calories
  
    const carbsGramsMax = Math.round(carbsCalories / 4);    // convert calories to grams
    const proteinGramsMax = Math.round(proteinCalories / 4);
    const fatGramsMax = Math.round(fatCalories / 9);        // fat has 9 kcal per gram, protein and carb 4 kcal
  
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
  
    // update the number of cal burnt
    const percentageNumber = document.getElementById('percentage-number');
    const burntCalories = current * 0.07;  // burnt calories 7% of current
    percentageNumber.textContent = burntCalories.toFixed(0);  // Update with 0 decimal place

  
    // call the updateRemainingCalories function to update remaining calories
    updateRemainingCalories(current, total);
}
  
// calculates the remaining calories, subtract current from total
function updateRemainingCalories(current, total) {
    const remainingCalories = total - current; // Calculate remaining calories
    const remainingCaloriesElement = document.getElementById('remaining-calories');
    remainingCaloriesElement.textContent = remainingCalories; // Update the remaining calories
}
  
// first is the current second is total amount of calories
// fill in your maintainance and eaten calories here
updateRadialGraph(800, 2500);

  






