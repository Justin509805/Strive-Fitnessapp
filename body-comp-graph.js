function updateRadialGraph(values) {
    const total = values.reduce((sum, value) => sum + value, 0); // Total of all values
    const circles = document.querySelectorAll('.segment');
    const radius = 45; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
  
    let cumulativePercent = 0; // Tracks where each segment should start
  
    values.forEach((value, index) => {
      const percentage = (value / total) * 100; // Percentage of this segment
      const segmentLength = (percentage / 100) * circumference; // Length of this segment
      const offset = (cumulativePercent / 100) * circumference; // Starting point for this segment
  
      const circle = circles[index];
      if (circle) {
        circle.style.strokeDasharray = `${segmentLength} ${circumference - segmentLength}`; // Define segment
        circle.style.strokeDashoffset = -offset; // Position segment start point
      }
  
      cumulativePercent += percentage; // Update cumulative percentage
    });
  }
  
  // Example usage
  updateRadialGraph([50, 30, 20]); // Values to represent
  