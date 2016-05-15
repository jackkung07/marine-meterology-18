/**
 * Created by ivanybma on 5/14/16.
 */


function Refresh_sea_water_pressure_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";
    var PhysicalSensor_latitude = "PhysicalSensor_latitude";
    var PhysicalSensor_longitude = "PhysicalSensor_longitude";


    var category = "sea_water_pressure";
    $.ajax({url: "/monitor/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){

            $("#sea_water_pressure_list_tb #dy_created_sea_water_pressure_list_tb").remove();


            var virtualsensorid = result.vsensorId;
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                //alert(psensorlst[i].status);
                var newtr = $('<tr id="dy_created_sea_water_pressure_list_tb">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =latitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_latitude + ' readonly>').val(psensorlst[i].location.latitude)),
                    $('<td>').append(
                        $('<input id =longitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_longitude + ' readonly>').val(psensorlst[i].location.longitude)),
                    $('<td>').append(
                        $('<span class="badge">'+psensorlst[i].status+'</span>')
                    )
                )

                $("#sea_water_pressure_list_tb").append(newtr);
            }

        },
        complete: function() {
            setTimeout(Refresh_sea_water_pressure_lst, 1500);
        }
    });
}

function Refresh_sea_water_temperature_lst(){
    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";
    var PhysicalSensor_latitude = "PhysicalSensor_latitude";
    var PhysicalSensor_longitude = "PhysicalSensor_longitude";


    var category = "sea_water_temperature";
    $.ajax({url: "/monitor/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){

            $("#sea_water_temperature_list_tb #dy_created_sea_water_temperature_list_tb").remove();


            var virtualsensorid = result.vsensorId;
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                //alert(psensorlst[i].status);
                var newtr = $('<tr id="dy_created_sea_water_temperature_list_tb">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =latitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_latitude + ' readonly>').val(psensorlst[i].location.latitude)),
                    $('<td>').append(
                        $('<input id =longitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_longitude + ' readonly>').val(psensorlst[i].location.longitude)),
                    $('<td>').append(
                        $('<span class="badge">'+psensorlst[i].status+'</span>')
                    )
                )

                $("#sea_water_temperature_list_tb").append(newtr);
            }

        },
        complete: function() {
            setTimeout(Refresh_sea_water_temperature_lst, 1500);
        }
    });
}

function Refresh_sea_water_practical_salinity_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";
    var PhysicalSensor_latitude = "PhysicalSensor_latitude";
    var PhysicalSensor_longitude = "PhysicalSensor_longitude";


    var category = "sea_water_practical_salinity";
    $.ajax({url: "/monitor/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){

            $("#sea_water_practical_salinity_list_tb #dy_created_sea_water_practical_salinity_list_tb").remove();


            var virtualsensorid = result.vsensorId;
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                //alert(psensorlst[i].status);
                var newtr = $('<tr id="dy_created_sea_water_practical_salinity_list_tb">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =latitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_latitude + ' readonly>').val(psensorlst[i].location.latitude)),
                    $('<td>').append(
                        $('<input id =longitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_longitude + ' readonly>').val(psensorlst[i].location.longitude)),
                    $('<td>').append(
                        $('<span class="badge">'+psensorlst[i].status+'</span>')
                    )
                )

                $("#sea_water_practical_salinity_list_tb").append(newtr);
            }

        },
        complete: function() {
            setTimeout(Refresh_sea_water_practical_salinity_lst, 1500);
        }
    });
}

function Refresh_mass_concentration_of_oxygen_in_sea_water_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";
    var PhysicalSensor_latitude = "PhysicalSensor_latitude";
    var PhysicalSensor_longitude = "PhysicalSensor_longitude";


    var category = "mass_concentration_of_oxygen_in_sea_water";
    $.ajax({url: "/monitor/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){

            $("#mass_concentration_of_oxygen_in_sea_water_list_tb #dy_created_mass_concentration_of_oxygen_in_sea_water_list_tb").remove();


            var virtualsensorid = result.vsensorId;
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                //alert(psensorlst[i].status);
                var newtr = $('<tr id="dy_created_mass_concentration_of_oxygen_in_sea_water_list_tb">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =latitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_latitude + ' readonly>').val(psensorlst[i].location.latitude)),
                    $('<td>').append(
                        $('<input id =longitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_longitude + ' readonly>').val(psensorlst[i].location.longitude)),
                    $('<td>').append(
                        $('<span class="badge">'+psensorlst[i].status+'</span>')
                    )
                )

                $("#mass_concentration_of_oxygen_in_sea_water_list_tb").append(newtr);
            }

        },
        complete: function() {
            setTimeout(Refresh_mass_concentration_of_oxygen_in_sea_water_lst, 1500);
        }
    });
}

function Refresh_sea_water_ph_reported_on_total_scale_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";
    var PhysicalSensor_latitude = "PhysicalSensor_latitude";
    var PhysicalSensor_longitude = "PhysicalSensor_longitude";


    var category = "sea_water_ph_reported_on_total_scale";
    $.ajax({url: "/monitor/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){

            $("#sea_water_ph_reported_on_total_scale_list_tb #dy_created_sea_water_ph_reported_on_total_scale_list_tb").remove();


            var virtualsensorid = result.vsensorId;
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                //alert(psensorlst[i].status);
                var newtr = $('<tr id="dy_created_sea_water_ph_reported_on_total_scale_list_tb">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =latitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_latitude + ' readonly>').val(psensorlst[i].location.latitude)),
                    $('<td>').append(
                        $('<input id =longitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_longitude + ' readonly>').val(psensorlst[i].location.longitude)),
                    $('<td>').append(
                        $('<span class="badge">'+psensorlst[i].status+'</span>')
                    )
                )

                $("#sea_water_ph_reported_on_total_scale_list_tb").append(newtr);
            }

        },
        complete: function() {
            setTimeout(Refresh_sea_water_ph_reported_on_total_scale_lst, 1500);
        }
    });
}

function Refresh_turbidity_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";
    var PhysicalSensor_latitude = "PhysicalSensor_latitude";
    var PhysicalSensor_longitude = "PhysicalSensor_longitude";


    var category = "turbidity";
    $.ajax({url: "/monitor/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){

            $("#turbidity_list_tb #dy_created_turbidity").remove();


            var virtualsensorid = result.vsensorId;
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                //alert(psensorlst[i].status);
                var newtr = $('<tr id="dy_created_turbidity">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =latitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_latitude + ' readonly>').val(psensorlst[i].location.latitude)),
                    $('<td>').append(
                        $('<input id =longitude_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_longitude + ' readonly>').val(psensorlst[i].location.longitude)),
                    $('<td>').append(
                        $('<span class="badge">'+psensorlst[i].status+'</span>')
                    )
                )

                $("#turbidity_list_tb").append(newtr);
            }

        },
        complete: function() {
            setTimeout(Refresh_turbidity_lst, 1500);
        }
    });
}



