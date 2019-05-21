$(document).ready(function(){
var get_url_tahunan = $('#get_url_tahunan').val();
var get_url_bulanan = $('#get_url_bulanan').val();
var get_url_mingguan = $('#get_url_mingguan').val();
var url = '';
var ctx = '';

$(function () {
    
    // new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
    ctx = document.getElementById('line_chart').getContext('2d');
    chartTahunan();
    // new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
    // new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
    // new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
});

$(document).on('change', '#selectTime', function(){
    jenis_chart = $(this).val();
    if(jenis_chart == 'week'){
        ctx = document.getElementById('line_chart').getContext('2d');
        chartMingguan();
    }else if(jenis_chart == 'month'){
        ctx = document.getElementById('line_chart').getContext('2d');
        chartBulanan();
    }else{
        ctx = document.getElementById('line_chart').getContext('2d');
        chartTahunan();
        
    }
    
});

function chartTahunan(){
     $.ajax({
            url:get_url_tahunan,
            method:"POST",
            dataType:"json",
            success: function(result)
            {
                chart = '';
                if(window.ctx != undefined)
                    window.ctx.destroy();
                window.ctx = new Chart(ctx, {
                                // The type of chart we want to create
                                type: 'line',

                                // The data for our dataset
                                data: {
                                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Augst", "Sept", "Okt", "Nov", "Des"],
                                    datasets: [{
                                        label: "Pengunjung",
                                        data: result.totCheckIn,
                                        borderColor: 'rgba(0, 188, 212, 0.75)',
                                        backgroundColor: 'rgba(0, 188, 212, 0.3)',
                                        pointBorderColor: 'rgba(0, 188, 212, 0)',
                                        pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                                        pointBorderWidth: 1
                                    }]
                                },
                                options: {
                                    responsive: true,
                                    legend: false
                                }
                            });

                
               
            }
        });
}

function chartBulanan(){
     $.ajax({
            url:get_url_bulanan,
            method:"POST",
            dataType:"json",
            success: function(result)
            {
                chart = '';
                if(window.ctx != undefined)
                    window.ctx.destroy();
                window.ctx = new Chart(ctx, {
                                // The type of chart we want to create
                                type: 'line',

                                // The data for our dataset
                                data: {
                                    labels: ["Minggu I", "Minggu II", "Minggu III", "Minggu IV" ],
                                    datasets: [{
                                        label: "Pengunjung",
                                        data: result.totCheckIn,
                                        borderColor: 'rgba(233, 30, 99, 0.75)',
                                        backgroundColor: 'rgba(233, 30, 99, 0.3)',
                                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                                        pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                                        pointBorderWidth: 1
                                    }]
                                },
                                options: {
                                    responsive: true,
                                    legend: false
                                }
                            });

                
               
            }
        });
}
function chartMingguan(){
     $.ajax({
            url:get_url_mingguan,
            method:"POST",
            dataType:"json",
            success: function(result)
            {
                chart = '';
                if(window.ctx != undefined)
                    window.ctx.destroy();
                window.ctx = new Chart(ctx, {
                                // The type of chart we want to create
                                type: 'line',

                                // The data for our dataset
                                data: {
                                    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu" ],
                                    datasets: [{
                                        label: "Pengunjung",
                                        data: result.totCheckIn,
                                        borderColor: 'rgba(233, 30, 99, 0.75)',
                                        backgroundColor: 'rgba(233, 30, 99, 0.3)',
                                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                                        pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                                        pointBorderWidth: 1
                                    }]
                                },
                                options: {
                                    responsive: true,
                                    legend: false
                                }
                            });

                
               
            }
        });
}
function getChartJs(type) {
    var config = null;
    
    if (type === 'line') {
        config = {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Augst", "Sept", "Okt", "Nov", "Des"],
                datasets: [{
                    label: "Tahunan",
                    data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27],
                    borderColor: 'rgba(0, 188, 212, 0.75)',
                    backgroundColor: 'rgba(0, 188, 212, 0.3)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                    pointBorderWidth: 1
                }]
            },
            options: {
                // responsive: true,
                // legend: false
            }
        }
    }
    else if (type === 'line2') {
        config = {
            type: 'line',
            data: {
                labels: ["Minggu I", "Minggu II", "Minggu III", "Minggu IV" ],
                datasets: [{
                    label: "Bulanan",
                    data: [28, 48, 40, 19],
                    borderColor: 'rgba(233, 30, 99, 0.75)',
                    backgroundColor: 'rgba(233, 30, 99, 0.3)',
                    pointBorderColor: 'rgba(233, 30, 99, 0)',
                    pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                // legend: false
            }
        }
    }
    else if (type === 'line3') {
        config = {
            type: 'line',
            data: {
                labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"],
                datasets: [{
                    label: "Mingguan",
                    data: [48, 34, 81, 56, 55, 40, 28],
                    borderColor: 'rgba(255, 152, 0, 0.75)',
                    backgroundColor: 'rgba(255, 152, 0, 0.3)',
                    pointBorderColor: 'rgba(255, 152, 0, 0)',
                    pointBackgroundColor: 'rgba(255, 152, 0, 0.9)',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                // legend: false
            }
        }
    }
    return config;
}

});