// Login Success Rate Ring Chart
const ctxSuccess = document.getElementById('successRateRing').getContext('2d');
const successRate = 40; // Replace this with the actual data
const successRateRing = new Chart(ctxSuccess, {
    type: 'doughnut',
    data: {
        labels: ['Successful Logins', 'Failed Logins'],
        datasets: [{
            label: 'Login Success Rate',
            data: [successRate, 100 - successRate],
            backgroundColor: ['#4caf50', '#f44336'],
            borderWidth: 0,
        }]
    },
    options: {
        cutout: '70%', // Makes it a ring chart
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Hide legend if not needed
            }
        }
    }
});

// Attack IPs by Browser Chart (example, fill with actual data)
const ctxAttackIPs = document.getElementById('attackIPsByBrowser').getContext('2d');
const attackIPsData = {
    labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'],
    datasets: [{
        label: 'Attack IPs by Browser',
        data: [30, 25, 20, 15, 10], // Replace with actual attack IP data
        backgroundColor: ['#2196F3', '#FF9800', '#9C27B0', '#FF5722', '#607D8B'],
        borderWidth: 0,
    }]
};

const attackIPsChart = new Chart(ctxAttackIPs, {
    type: 'doughnut',
    data: attackIPsData,
    options: {
        cutout: '70%', // Makes it a ring chart
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Hide legend if not needed
            }
        }
    }
});