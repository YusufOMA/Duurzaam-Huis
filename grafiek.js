// Yusuf code 
Chart.defaults.font.size =15;

var ctx = document.getElementById('myChart4');

var stars = [7354, 3624, 9624, 4452, 9623, 6273, 5643];
var frameworks = ['Indische', 'Oost indische', 'Zeeburg', 'Transvaal', 'Dapper', 'Watergraafsmeer', 'Borneo'];

var myChart = new Chart(ctx, {
 type: 'line',

 data: {
    labels: frameworks,
    datasets: [{
        label: 'Energieverbruik van de buurt',
        data: stars,
        backgroundColor: [
   
        ],

        borderColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        ],
        borderRadius: 5,
        borderWidth: 3,
        barPercentage: 1
                }]
        },
 
 options: {
   scales: {
        x: {
        grid: {
          display: false,
              }
            },
        y: {
        grid: {
          display: false,
              }
            }
           }
         },

});
