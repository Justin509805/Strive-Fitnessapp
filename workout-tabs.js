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
            title: "Incline Machine Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "59", "7", "6-10"],
              ["2", "59", "7", "6-10"],
            ]
          },
          {
            title: "Incline Barbell Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "50", "7", "6-10"],
              ["2", "50", "9", "6-10"]
            ]
          },
          {
            title: "Peck Deck Fly",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "68", "10", "10-15"],
              ["2", "68", "10", "10-15"]
            ]
          },
          {
            title: "Incline Dumbell Curl",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "18", "15", "10-15"],
              ["2", "18", "11", "10-15"],
              ["3", "18", "11", "10-15"]
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
      wednesday: {
        title: "Wednesday's Workout",
        tables: [
          {
            title: "Incline Machine Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "59", "7", "6-10"],
              ["2", "59", "7", "6-10"],
            ]
          },
          {
            title: "Incline Barbell Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "50", "7", "6-10"],
              ["2", "50", "9", "6-10"]
            ]
          },
          {
            title: "Peck Deck Fly",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "68", "10", "10-15"],
              ["2", "68", "10", "10-15"]
            ]
          },
          {
            title: "Incline Dumbell Curl",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "18", "15", "10-15"],
              ["2", "18", "11", "10-15"],
              ["3", "18", "11", "10-15"]
            ]
          }
        ]
      },
      thursday: {
        title: "Thursday's Workout",
        tables: [
          {
            title: "Incline Machine Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "59", "7", "6-10"],
              ["2", "59", "7", "6-10"],
            ]
          },
          {
            title: "Incline Barbell Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "50", "7", "6-10"],
              ["2", "50", "9", "6-10"]
            ]
          },
          {
            title: "Peck Deck Fly",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "68", "10", "10-15"],
              ["2", "68", "10", "10-15"]
            ]
          },
          {
            title: "Incline Dumbell Curl",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "18", "15", "10-15"],
              ["2", "18", "11", "10-15"],
              ["3", "18", "11", "10-15"]
            ]
          }
        ]
      },
      friday: {
        title: "Friday's Workout",
        tables: [
          {
            title: "Incline Machine Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "59", "7", "6-10"],
              ["2", "59", "7", "6-10"],
            ]
          },
          {
            title: "Incline Barbell Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "50", "7", "6-10"],
              ["2", "50", "9", "6-10"]
            ]
          },
          {
            title: "Peck Deck Fly",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "68", "10", "10-15"],
              ["2", "68", "10", "10-15"]
            ]
          },
          {
            title: "Incline Dumbell Curl",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "18", "15", "10-15"],
              ["2", "18", "11", "10-15"],
              ["3", "18", "11", "10-15"]
            ]
          }
        ]
      },
      saterday: {
        title: "Saterday's Workout",
        tables: [
          {
            title: "Incline Machine Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "59", "7", "6-10"],
              ["2", "59", "7", "6-10"],
            ]
          },
          {
            title: "Incline Barbell Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "50", "7", "6-10"],
              ["2", "50", "9", "6-10"]
            ]
          },
          {
            title: "Peck Deck Fly",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "68", "10", "10-15"],
              ["2", "68", "10", "10-15"]
            ]
          },
          {
            title: "Incline Dumbell Curl",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "18", "15", "10-15"],
              ["2", "18", "11", "10-15"],
              ["3", "18", "11", "10-15"]
            ]
          }
        ]
      },
      sunday: {
        title: "Sundays's Workout",
        tables: [
          {
            title: "Incline Machine Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "59", "7", "6-10"],
              ["2", "59", "7", "6-10"],
            ]
          },
          {
            title: "Incline Barbell Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "50", "7", "6-10"],
              ["2", "50", "9", "6-10"]
            ]
          },
          {
            title: "Peck Deck Fly",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "68", "10", "10-15"],
              ["2", "68", "10", "10-15"]
            ]
          },
          {
            title: "Incline Dumbell Curl",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "18", "15", "10-15"],
              ["2", "18", "11", "10-15"],
              ["3", "18", "11", "10-15"]
            ]
          }
        ]
      },
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
  