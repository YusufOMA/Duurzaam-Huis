// Ali code 


Chart.defaults.font.size =15;

var ctx = document.getElementById('myChart');

var stars = [12, 16, 15, 9, 9];
var frameworks = ['Slaapkamer', 'Klaslokaal', 'Kantoor', 'WC', 'Badkamer']; 

var myChart = new Chart(ctx, {
 type: 'bar',

 data: {
    labels: frameworks,
    datasets: [{
        label: 'Binnen temperatuur in Celsius',
        data: stars,
        backgroundColor: [
   
        ],

        borderColor: [
        "rgba(66, 130, 132, 0.5)",
        "rgba(66, 130, 132, 0.5)",
        "rgba(66, 130, 132, 0.5)",
        "rgba(66, 130, 132, 0.5)",
        "rgba(66, 130, 132, 0.5)",
        "rgba(66, 130, 132, 0.5)",
        "rgba(66, 130, 132, 0.5)",
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








