document.addEventListener('DOMContentLoaded', () => {
    const dayButtons = document.querySelectorAll('.day-button');
    const contentTitle = document.querySelector('.content-title');
    const contentTable = document.querySelector('.content-table');
  
    // Data for each day
    const dayData = {
      monday: {
        title: "Monday's Schedule",
        table: [
          ["Task 1", "Task 2", "Task 3"],
          ["Task 4", "Task 5", "Task 6"],
          ["Task 7", "Task 8", "Task 9"]
        ]
      },
      tuesday: {
        title: "Tuesday's Schedule",
        table: [
          ["Event 1", "Event 2", "Event 3"],
          ["Event 4", "Event 5", "Event 6"],
          ["Event 7", "Event 8", "Event 9"]
        ]
      },
      wednesday: {
        title: "Wednesday's Schedule",
        table: [
          ["Meeting 1", "Meeting 2", "Meeting 3"],
          ["Meeting 4", "Meeting 5", "Meeting 6"],
          ["Meeting 7", "Meeting 8", "Meeting 9"]
        ]
      },
      thursday: {
        title: "Thursday's Schedule",
        table: [
          ["Plan 1", "Plan 2", "Plan 3"],
          ["Plan 4", "Plan 5", "Plan 6"],
          ["Plan 7", "Plan 8", "Plan 9"]
        ]
      },
      friday: {
        title: "Friday's Schedule",
        table: [
          ["Work 1", "Work 2", "Work 3"],
          ["Work 4", "Work 5", "Work 6"],
          ["Work 7", "Work 8", "Work 9"]
        ]
      },
      saturday: {
        title: "Saturday's Schedule",
        table: [
          ["Activity 1", "Activity 2", "Activity 3"],
          ["Activity 4", "Activity 5", "Activity 6"],
          ["Activity 7", "Activity 8", "Activity 9"]
        ]
      },
      sunday: {
        title: "Sunday's Schedule",
        table: [
          ["Relax 1", "Relax 2", "Relax 3"],
          ["Relax 4", "Relax 5", "Relax 6"],
          ["Relax 7", "Relax 8", "Relax 9"]
        ]
      }
    };
  
    dayButtons.forEach(button => {
      button.addEventListener('click', () => {
        const day = button.getAttribute('data-day');
        const data = dayData[day];
  
        // Update the title
        contentTitle.textContent = data.title;
  
        // Update the table
        contentTable.innerHTML = data.table
          .map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`)
          .join('');
      });
    });
  });
  