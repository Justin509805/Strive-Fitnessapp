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
          },
          {
            title: "Cuffed Single Arm Hammer Curls",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "15", "13", "10-15"],
              ["2", "15", "12", "10-15"],
              ["3", "15", "13", "10-15"]
            ]
          },
          {
            title: "Leaning Lateral Raises",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "7", "18", "15-20"],
              ["2", "7", "18", "15-20"],
              ["3", "7", "17", "15-20"]
            ]
          },
        ]
      },
      tuesday: {
        title: "Tuesday's Schedule",
        tables: [
          {
            title: "Lat Pulldown (Neutral)",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "85", "8", "6-10"],
              ["2", "85", "7", "6-10"],
            ]
          },
          {
            title: "Rope Pullovers",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "30", "10", "6-10"],
              ["2", "30", "9", "6-10"],
            ]
          },
          {
            title: "Barbell Rows",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "60", "14", "10-15"],
              ["2", "60", "13", "10-15"],
            ]
          },
          {
            title: "Cable Overhead Extensions",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "25", "12", "10-15"],
              ["2", "25", "9", "10-15"],
              ["3", "25", "10", "10-15"],
            ]
          },
          {
            title: "Carter Extensions",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "15", "10", "10-15"],
              ["2", "15", "10", "10-15"],
              ["3", "15", "9", "10-15"],
            ]
          },
        ]
      },
      wednesday: {
        title: "Wednesday's Workout",
        tables: [
          {
            title: "DB Shoulder Press",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "26", "8", "6-10"],
              ["2", "26", "7", "6-10"],
            ]
          },
          {
            title: "Leaning Lateral Raises",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "7", "18", "15-20"],
              ["2", "7", "18", "15-20"],
              ["3", "7", "17", "15-20"]
            ]
          },
          {
            title: "RDF Machine",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "64", "14", "6-15"],
              ["2", "64", "13", "6-15"]
            ]
          },
          {
            title: "Cable Crunches",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "37.5", "13", "10-15"],
              ["2", "37.5", "10", "10-15"],
              ["3", "37.5", "10", "10-15"]
            ]
          },
          {
            title: "Leg Raises",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "7", "15", "10-15"],
              ["2", "7", "10", "10-15"],
              ["3", "7", "8", "10-15"]
            ]
          },
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
              ["2", "68", "10", "10-15"],
              ["3", "68", "8", "10-15"]
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
          },
          {
            title: "Lat Pulldown (Neutral)",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "85", "8", "6-10"],
              ["2", "85", "7", "6-10"],
            ]
          },
          {
            title: "Rope Pullovers",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "30", "10", "6-10"],
              ["2", "30", "9", "6-10"],
              ["3", "30", "8", "6-10"],
            ]
          },
          {
            title: "Barbell Rows",
            table: [
              ["SET", "KG", "REPS", "OPTIMAL AMOUNT"],
              ["1", "60", "14", "10-15"],
              ["2", "60", "13", "10-15"],
            ]
          },
        ]
      },
      saturday: {
        title: "Saturday's my first restday",
        tables: [
          {
            title: "",
            table: [
              [],
              [],
              [],
            ]
          },
        ]
      },
      sunday: {
        title: "Sunday's my second restday",
        tables: [
          {
            title: "",
            table: [
              [],
              [],
              [],
            ]
          },
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
        // data.tables loops trough each workout section and displays the right
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
  