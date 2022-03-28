// Ali code 


Chart.defaults.font.size =15;

var ctx = document.getElementById('myChart');

var stars = [4, 2, 3, 6, 5, 6, 7];
var frameworks = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag']; 

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
        "rgba(100, 100, 1, 0.5)",
        "rgba(100, 100, 1, 0.5)",
        "rgba(100, 100, 1, 0.5)",
        "rgba(100, 100, 1, 0.5)",
        "rgba(100, 100, 1, 0.5)",
        "rgba(100, 100, 1, 0.5)",
        "rgba(100, 100, 1, 0.5)",
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








