// function for the line graph
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
updateLineGraph([70, 72, 74.5, 72.5, 75, 80, 70, 72.5]); // Updates the graph with smooth curves

