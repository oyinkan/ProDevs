    var profCanvas = document.getElementById("profChart");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.legend.display = false;

    var profData = {
      labels: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "PHP"
      ],
      datasets: [
        {
          data: [45.1, 73.6, 23.3, 54.6],
          backgroundColor: [
            "#E44D26",
            "#264DE4",
            "#E4A129",
            "#B3C3FF"
          ]
        }
      ]
    };

    var pieChart = new Chart(profCanvas, {
      type: 'pie',
      data: profData
    });

    