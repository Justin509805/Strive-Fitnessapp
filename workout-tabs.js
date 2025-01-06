// ensures that the js only starts after the entire HTML file is loaded, avoids errors
document.addEventListener('DOMContentLoaded', () => {

  // selects all of the nessecary classes
    const dayButtons = document.querySelectorAll('.day-button');
    const contentTitle = document.querySelector('.content-title');
    const contentTable = document.querySelector('.content-table');
  
    // stores the data of each day consiting of title, tables
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
  
    // adds eventlistener click to each day button so M T W T F S S
    dayButtons.forEach(button => {
      button.addEventListener('click', () => {
        // day gets the value from which day button is clicked so when M is clicked it will get the value of monday
        // data retrieves the data that is connected with the day
        const day = button.getAttribute('data-day');
        const data = dayData[day];
  
        // updates the title to the right one like Monday's Workout
        contentTitle.textContent = data.title;
  
        // clears the current content
        // data.tables loops trough each workout section and displays the right table
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
  