// script.js
document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('sparkline1').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [...Array(30).keys()], // Replace with your data
      datasets: [{
        data: [/* array of your data values */],
        borderColor: '#76d275',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        point:{
            radius: 0
        }
      }
    }
  });
});
