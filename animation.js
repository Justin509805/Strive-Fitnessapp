
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
updateRadialGraph(985, 2500);


function updateLineGraph(dataPoints) {
    const svgWidth = 500;
    const svgHeight = 100;
    const yMin = 75;
    const yMax = 85;
    const margin = 20; // Margin to prevent circles from being cut off
    const xSpacing = (svgWidth - 2 * margin) / (dataPoints.length - 1); // Adjusted spacing

    // Inverted scale function for Y-coordinates (higher value should be at the top)
    const scaleY = (value) => {
        return (value - yMin) / (yMax - yMin) * svgHeight; // Scale from 0 to svgHeight
    };

    // Generate path string for the line using cubic Bezier curves
    const pathData = dataPoints
        .map((point, index) => {
            const x = margin + index * xSpacing; // Adjust the X position to take margin into account
            const y = svgHeight - scaleY(point); // Inverted Y for correct positioning
            if (index === 0) {
                return `M${x},${y}`; // Move to the first point
            } else {
                const prevX = margin + (index - 1) * xSpacing;
                const prevY = svgHeight - scaleY(dataPoints[index - 1]); // Inverted Y for previous point
                // Add cubic Bezier curve between previous and current points
                const controlX = (prevX + x) / 2;
                const controlY = (prevY + y) / 2;
                return `C${controlX},${prevY} ${controlX},${y} ${x},${y}`;
            }
        })
        .join(" ");

    // Set the line path (pathData will have smooth curves)
    const pathElement = document.querySelector(".graph-line");
    pathElement.setAttribute("d", pathData);

    // Generate points with larger circles
    const pointsGroup = document.querySelector(".graph-points");
    pointsGroup.innerHTML = ""; // Clear existing points
    dataPoints.forEach((point, index) => {
        const x = margin + index * xSpacing; // Adjust the X position for margin
        const y = svgHeight - scaleY(point); // Inverted Y for circle placement
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 8); // Increase radius to 8 for larger circles
        pointsGroup.appendChild(circle);
    });
}

// Example usage:
updateLineGraph([70, 72, 74.5, 72.5, 75, 80]); // Updates the graph with smooth curves




