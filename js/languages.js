	var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar', 

      // The data for our dataset
      data: {
        labels: ["HTML", "CSS", "JS", "PHP", "RUBY", "PYTHON", "JAVA", "RUBY"],
        // Information about the dataset
        datasets: [{
          label: "",
          backgroundColor: '#1EAEE7',
          borderColor: 'royalblue',
          data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8],
        }]
      },

      // Configuration options
      options: {
        layout: {
          padding: 10,
        },
        legend: {
          position: '',
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            },
            scaleLabel: {
              display: true
            }
          }]
        }
      }
    });