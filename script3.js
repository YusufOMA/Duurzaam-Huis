Chart.defaults.font.size =15;

var ctx = document.getElementById('myChart3');

var stars = [8, 4, 6, 2, 6, 9, 1];
var frameworks = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];

var myChart = new Chart(ctx, {
 type: 'bar',

 data: {
    labels: frameworks,
    datasets: [{
        label: 'De actuele lichtsterkte in een ruimte ',
        data: stars,
        backgroundColor: [

        ],

        borderColor: [
        "rgba(28, 39, 162, 0.5)",
        "rgba(28, 39, 162, 0.5)",
        "rgba(28, 39, 162, 0.5)",
        "rgba(28, 39, 162, 0.5)",
        "rgba(28, 39, 162, 0.5)",
        "rgba(28, 39, 162, 0.5)",
        "rgba(28, 39, 162, 0.5)",
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