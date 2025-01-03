document.addEventListener('DOMContentLoaded', () => {
    const dayButtons = document.querySelectorAll('.day-button');
    const contentTitle = document.querySelector('.content-title');
    const contentTable = document.querySelector('.content-table');
  
    // Data for each day
    const dayData = {
      monday: {
        title: "Monday's Workout",
        tables: [
          {
            title: "Bench Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "50", "10", "8-12"],
              ["2", "55", "8", "8-12"]
            ]
          },
          {
            title: "Chest Fly",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "20", "12", "10-15"],
              ["2", "25", "10", "10-15"]
            ]
          }
        ]
      },
      tuesday: {
        title: "Tuesday's Schedule",
        tables: [
          {
            title: "Workout 1",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "10", "15", "12-20"],
              ["2", "15", "12", "12-20"]
            ]
          }
        ]
      },
      // Add similar data for other days as needed
    };
  
    dayButtons.forEach(button => {
      button.addEventListener('click', () => {
        const day = button.getAttribute('data-day');
        const data = dayData[day];
  
        // Update the title
        contentTitle.textContent = data.title;
  
        // Clear and populate tables
        contentTable.innerHTML = data.tables
          .map(tableData => {
            const tableRows = tableData.table
              .map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`)
              .join('');
            return `
              <h3>${tableData.title}</h3>
              <table>${tableRows}</table>
            `;
          })
          .join('');
      });
    });
  });
  