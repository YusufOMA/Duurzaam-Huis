// Ali code

Chart.defaults.font.size =15;

var ctx = document.getElementById('myChart2');

var stars = [11, 15, 13, 9, 15, 17, 10];
var frameworks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];

var myChart = new Chart(ctx, {
 type: 'line',

 data: {
    labels: frameworks,
    datasets: [{
        label: 'Watergebruik in L',
        data: stars,
        backgroundColor: [
   
        ],

        borderColor: [
        "rgba(66, 130, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(150, 206, 86, 0.5)",
        "rgba(75, 255, 192, 0.5)",
        "rgba(30, 102, 255, 0.5)",
        "rgba(75, 192, 54, 0.5)",
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