       //TRAFFIC

        var ctx = document.getElementById('traffic').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', 
        '18-24', '25-31'],
                datasets: [{
                    label: '# of Visits',
                    backgroundColor: 'rgb(226, 227, 246)',
                    borderColor: 'rgb(116, 119, 191)',
                    borderWidth: 1,
                    lineTension: 0,
                    pointBorderWidth: 2,
                    pointBackgroundColor: 'rgb(255, 255, 255)',
                    pointHoverBackgroundColor: 'rgb(116, 119, 191)',
                    pointHoverRadius: 6,
                    pointRadius: 4,
                    data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
                }]

            },

            // Configuration options go here
            options: {
                legend: {
                display: false
                }
            }
        });
       
        // DAILY TRAFFIC

        var ctx = document.getElementById('dailyTraffic');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                datasets: [{
                    label: '# Visits',
                    backgroundColor: 'rgb(116, 119, 191)',
                    borderColor: 'rgb(116, 119, 191)',
                    data: [75, 150, 175, 125, 225, 200, 100],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                display: false
                }
            }
        });

        // MOBILE USERS

        var ctx = document.getElementById('mobileUsers');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Tablets', 'Phones', 'Desktop'],
                datasets: [{
                    backgroundColor: [
                    'rgb(129, 200, 142)',
                    'rgb(116, 177, 190)',
                    'rgb(116, 119, 191)'
                    ],
                    borderColor: [
                    'rgb(129, 200, 142)',
                    'rgb(116, 177, 190)',                    
                    'rgb(116, 119, 191)'
                    ],
                    data: [1600, 1400, 7000],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                display: true,
                position: 'right'
                }
            }
        });
     