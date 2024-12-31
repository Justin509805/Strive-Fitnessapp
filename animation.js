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


