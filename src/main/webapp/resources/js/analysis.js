/**
 * Created by ljtao on 5/17/16.
 */


function analysis() {
    //var category = "sea_water_practical_salinity";

    //$.getJSON("http://localhost:8080/rtvSensorData/sea_water_practical_salinity/2016-05-01/2016-05-15", function (data) {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {
        var arr = [];
        $.each(data, function(key, val) {
            var y = val.dataDateTime;
            var name = key;
            var customTooltip = val.dataValue;
            arr.push({dataDateTime: y, dataValue: customTooltip})
        })

        $('#container-hc').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Sensor data over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'data value'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'date',
                data: data
            //    data: [
            //        [Date.UTC(2013,5,2),0.7695],
            //        [Date.UTC(2013,5,3),0.7648],
            //        [Date.UTC(2013,5,4),0.7645],
            //        [Date.UTC(2013,5,5),0.7638],
            //        [Date.UTC(2013,5,6),0.7549],
            //        [Date.UTC(2013,5,7),0.7562],
            //        [Date.UTC(2013,5,9),0.7574],
            //        [Date.UTC(2013,5,10),0.7543],
            //        [Date.UTC(2013,5,11),0.7510],
            //        [Date.UTC(2013,5,12),0.7498]]
            }]
        });
    });
}