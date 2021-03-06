// Notification Bell

$(document).ready(function(){
    $('.profile a').click(function(){
        if ($('#notification-box').children().length === 1) {
            $('#no-notification').slideToggle(300);
        } else {
            $('#notification-box').slideToggle(300);
        }
    });
    $('#notification-box p span').click(function(){
        $(this).parent().slideUp(300, function(){
            $(this).remove();
            if ($('#notification-box').children().length === 1){
                $('.notification-circle').addClass('notification-hide');
            }
        });
         
    });
    
});

// Alert Bar

$('#close-alert').click(function() {
    $('#alert-bar').slideUp();
});

// Changing Traffic Chart

$('.traffic-nav li').click(function() {
    $('.traffic-nav li').removeClass('clicked');
    $(this).addClass('clicked');
    if(this.textContent === "Hourly") {
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficHourlyData,
            options: trafficOptions
        });
    } else if (this.textContent === "Daily") {
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficDailyData,
            options: trafficOptions
        });
    } else if (this.textContent === "Weekly") {
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficWeeklyData,
            options: trafficOptions
        });
    } else {
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficMonthlyData,
            options: trafficOptions
        });
    };
});

// Traffic Chart

let trafficCanvas = document.getElementById('traffic-chart');
const trafficWeeklyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18,24", "25-31"],
    datasets: [{
        data: [0, 750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2260],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'rgba(255, 255, 255)',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 6,
        hoverRadius: 6,
        pointBorderWidth: 2,
        hoverBorderWidth: 2,
        borderColor: 'rgba(116, 119, 191, 1)', 
        borderWidth: 1,
        tension: 0,
    }]
};
const trafficDailyData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'rgba(255, 255, 255)',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 6,
        hoverRadius: 6,
        pointBorderWidth: 2,
        hoverBorderWidth: 2,
        borderColor: 'rgba(116, 119, 191, 1)', 
        borderWidth: 1,
        tension: 0,
    }]
};
const trafficHourlyData = {
    labels: ["0-3", "3-6", "6-9", "9-12", "12-15", "15-18", "18-21", "21-24"],
    datasets: [{
        data: [0, 20, 10, 30, 60, 50, 80, 75, 20],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'rgba(255, 255, 255)',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 6,
        hoverRadius: 6,
        pointBorderWidth: 2,
        hoverBorderWidth: 2,
        borderColor: 'rgba(116, 119, 191, 1)', 
        borderWidth: 1,
        tension: 0,
    }]
};
const trafficMonthlyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
        data: [4750, 3500, 4000, 4500, 5000, 6000, 5500, 6250, 5750, 6100, 6900, 5300],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'rgba(255, 255, 255)',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 6,
        hoverRadius: 6,
        pointBorderWidth: 2,
        hoverBorderWidth: 2,
        borderColor: 'rgba(116, 119, 191, 1)', 
        borderWidth: 1,
        tension: 0,
    }]
};
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {duration: 0},
    scales: {
        yAxes: [{
            ticks: {
                fontFamily: 'Quicksand',
                beginAtZero: true,
            },
        }],
        xAxes: [{
            ticks: {
                fontFamily: 'Quicksand',
            }
        }]
    },
    legend: {display: false},
    maintainAspectRatio: false,
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficHourlyData,
    options: trafficOptions
});

// Daily Chart

const dailyCanvas = document.getElementById('daily-chart');
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "# of Hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1,
        maxBarThickness: 40
    }]
};
const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
    maintainAspectRatio: false,
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Chart

const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ],
    }]
};

let mobileOptions = {};
if ($(window).width() > 768 ) {
    mobileOptions = {
        legend: {
            position: 'right',
            labels: {
                fontFamily: 'Quicksand',
                fontSize: 17,
                boxWidth: 30,
                fontStyle: 'bold',
                padding: 40
            }
        },
        maintainAspectRatio: false,
    };
} else {
    mobileOptions = {
        legend: {
            position: 'bottom',
            labels: {
                fontFamily: 'Quicksand',
                fontSize: 13,
                boxWidth: 13,
                fontStyle: 'bold',
                padding: 13
            }
        },
        maintainAspectRatio: false,
    };
}


let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Message Section

$('#message-btn').click(function (e) {
    e.preventDefault();
    if ($('#user-input').val() === "" && $('#message-input').val() === "") {
        alert("Please fill both fields");
    } else if ($('#user-input').val() === "") {
        alert("Please fill User field");
    } else if ($('#message-input').val() === "") {
        alert("Please fill Message field");
    } else {
        alert("Message successfully sent to " + $('#user-input').val());
    }
    });
    

    

// Autocomplete

$("#user-input").autoComplete({
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});

// Local Storage

$(document).ready(function(){
    $("#save").click(function(){
    localStorage.setItem("emailNotification", $("#email").is(':checked'));
    localStorage.setItem("publicProfile", $("#profile").is(':checked'));
    localStorage.setItem("timezone", $('#timezone').val());

 });
});

function load(){    
    var checkedemail = JSON.parse(localStorage.getItem('emailNotification'));
    var checkedprofile = JSON.parse(localStorage.getItem('publicProfile'));
    document.getElementById('email').checked = checkedemail;
    document.getElementById('profile').checked = checkedprofile;
    $('#timezone').val(localStorage.getItem('timezone'));
}

$(document).ready(function(){

    $("#cancel").click(function(){

    localStorage.removeItem("emailNotification");
    localStorage.removeItem("publicProfile");
    localStorage.removeItem("timezone");

    document.getElementById('email').checked = false;
    document.getElementById('profile').checked = false;
    $('#timezone').val("Select a Timezone");
   });
});

load();