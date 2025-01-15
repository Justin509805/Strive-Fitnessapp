function updateLineGraph(dataPoints) {
    // svgWidth and svgHeight set the width and height of the svg
    const svgWidth = 500;
    const svgHeight = 100;
    // ymin and ymax is the minimum and maximum of the line-graph
    const yMin = 75;
    const yMax = 85;
    const margin = 20; // Margin to prevent circles from being cut off
    // calculates the X distance between points depending on how many points
    const xSpacing = (svgWidth - 2 * margin) / (dataPoints.length - 1); 

    // converts value between the ymin and ymax into a place on the graph
    const scaleY = (value) => {
        return (value - yMin) / (yMax - yMin) * svgHeight; 
    };

    // pathData stores the path of each weight point and turns them into a smooth curve line
    const pathData = dataPoints
        .map((point, index) => {
            // x is horizontal point with keeping margin in mind
            // y is vertical point
            const x = margin + index * xSpacing; 
            const y = svgHeight - scaleY(point); 
            // ===0 is the first point on the graph
            if (index === 0) {
                return `M${x},${y}`; 
            } else {
                const prevX = margin + (index - 1) * xSpacing;
                const prevY = svgHeight - scaleY(dataPoints[index - 1]); // inverted Y for previous point
                // adds curve between previous and current points
                const controlX = (prevX + x) / 2;
                const controlY = (prevY + y) / 2;
                return `C${controlX},${prevY} ${controlX},${y} ${x},${y}`;
            }
        })
        .join(" ");

    // selects the <path> element with the class .graph-line
    const pathElement = document.querySelector(".graph-line");
    // updates its d with the newest pathData
    pathElement.setAttribute("d", pathData);

    // gives a big dot for each datapoint
    const pointsGroup = document.querySelector(".graph-points");
    pointsGroup.innerHTML = ""; // clear existing points
    dataPoints.forEach((point, index) => {
        const x = margin + index * xSpacing; // adjust the X position for margin
        const y = svgHeight - scaleY(point); // inverted Y for circle placement
        // selects the circle svg
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        // cx and cy set the center coordinates of the big dot
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        // r 8 is the radius of each big dot
        circle.setAttribute("r", 8);
        pointsGroup.appendChild(circle);
    });

    // displays the latest filled in weight measure
    const lastValue = dataPoints[dataPoints.length - 1];
    const weightProgressElement = document.querySelector(".weight-progress p");
    weightProgressElement.textContent = ` ${lastValue} kg`;

    // calculates the difference between the latest and first measure
    const firstValue = dataPoints[0];
    const difference = (lastValue - firstValue).toFixed(1);
    const differenceText = difference > 0 ? `+${difference}` : `${difference}`;

    // updates the difference and adds kg behind it
    const weightCalculationElement = document.querySelector(".weight-calculation p:first-child");
    weightCalculationElement.textContent = `${differenceText} kg`;
}

// fill your weight in here
updateLineGraph([70, 72, 76.5, 72.5,]);

