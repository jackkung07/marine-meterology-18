/**
 * Created by ivanybma on 5/14/16.
 */

function basicinfo(id){

        $('#basic_location').html($('#hlocation_'+id).val());
        $('#basic_made').html($('#hmade_'+id).val());
        $('#basic_model').html($('#hmodel_'+id).val());
        $('#basic_series').html($('#hseriesnumber_'+id).val());
        $('#basic_sensortype').html($('#hSensorType_'+id).val());
        $('#basic_status').html($('#hStatus_'+id).val());
        $('#basic_psensorid').html($('#hpsensorId_'+id).val());
    return true;
}

function sensorstatuschange(vid, pid, status, sensorType){

    $.ajax({url: "/chgSensorStatus/"+vid+"/"+pid+"/"+status,
        type: "POST",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){

            if(pid!="_")
            {
                if(sensorType=="sea_water_pressure")
                    Refresh_sea_water_pressure_lst();
                else if(sensorType=="sea_water_temperature")
                    Refresh_sea_water_temperature_lst();
                else if(sensorType=="sea_water_practical_salinity")
                    Refresh_sea_water_practical_salinity_lst();
                else if(sensorType=="mass_concentration_of_oxygen_in_sea_water")
                    Refresh_mass_concentration_of_oxygen_in_sea_water_lst();
                else if(sensorType=="sea_water_ph_reported_on_total_scale")
                    Refresh_sea_water_ph_reported_on_total_scale_lst();
                else if(sensorType=="turbidity")
                    Refresh_turbidity_lst();
            }


        }});

    return true;
}

function Refresh_sea_water_pressure_lst(){


    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";

    var category = "sea_water_pressure";
    $.ajax({url: "/rtvSensorLst/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){


            $("#sea_water_pressure_list_tb #dy_created_sea_water_pressure").remove();


            var virtualsensorid = result.vsensorId;
            var virtualsensorstatus = result.status;

            $("#sea_water_pressure_vsensor_div #dy_created_vsensor").remove();
            var vnewd =$('<div id = "dy_created_vsensor">');
            if(virtualsensorstatus=="Disabled")
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox">'));
            }
            else
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox" checked>'));
            }
            $("#sea_water_pressure_vsensor_div").append(vnewd);
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                var newtr = $('<tr id="dy_created_sea_water_pressure">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensorId + ' readonly>').val(psensorlst[i].psensorId)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =status_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_Status + ' readonly>').val(psensorlst[i].status))
                )

                if(psensorlst[i].status=="Disabled")
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox"></div>'))
                    );
                }
                else
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox" checked></div>'))
                    );
                }

                newtr.append(
                    $('<input type="hidden" id=hlocation_'+psensorlst[i].psensorId+' value="Latitude: '+psensorlst[i].location.latitude +
                    ' Longitude: '+psensorlst[i].location.longitude+'">'),
                    $('<input type="hidden" id=hmade_'+psensorlst[i].psensorId+' value="'+psensorlst[i].made+'">'),
                    $('<input type="hidden" id=hmodel_'+psensorlst[i].psensorId+' value="'+psensorlst[i].model+'">'),
                    $('<input type="hidden" id=hseriesnumber_'+psensorlst[i].psensorId+' value="'+psensorlst[i].seriesnumber+'">'),
                    $('<input type="hidden" id=hSensorType_'+psensorlst[i].psensorId+' value="'+psensorlst[i].sensorType+'">'),
                    $('<input type="hidden" id=hStatus_'+psensorlst[i].psensorId+' value="'+psensorlst[i].status+'">'),
                    $('<input type="hidden" id=hpsensorId_'+psensorlst[i].psensorId+' value="'+psensorlst[i].psensorId+'">')
                );
                $("#sea_water_pressure_list_tb").append(newtr);
            }

            $("[name='my-checkbox']").bootstrapSwitch();
            $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {

                if(virtualsensorid==this.id)
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, "_", "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, "_", "Disabled", sensorType);
                }
                else
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, this.id, "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, this.id, "Disabled", sensorType);
                }


                //console.log(this); // DOM element
                //console.log(event); // jQuery event
                //console.log(state); // true | false
            });

        }});
}

function Refresh_sea_water_temperature_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";

    var category = "sea_water_temperature";
    $.ajax({url: "/rtvSensorLst/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){


            $("#sea_water_temperature_list_tb #dy_created_sea_water_temperature").remove();


            var virtualsensorid = result.vsensorId;
            var virtualsensorstatus = result.status;

            $("#sea_water_temperature_vsensor_div #dy_created_vsensor").remove();
            var vnewd =$('<div id = "dy_created_vsensor">');
            if(virtualsensorstatus=="Disabled")
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox">'));
            }
            else
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox" checked>'));
            }
            $("#sea_water_temperature_vsensor_div").append(vnewd);
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                var newtr = $('<tr id="dy_created_sea_water_temperature">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensorId + ' readonly>').val(psensorlst[i].psensorId)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =status_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_Status + ' readonly>').val(psensorlst[i].status))
                )

                if(psensorlst[i].status=="Disabled")
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox"></div>'))
                    );
                }
                else
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox" checked></div>'))
                    );
                }

                newtr.append(
                    $('<input type="hidden" id=hlocation_'+psensorlst[i].psensorId+' value="Latitude: '+psensorlst[i].location.latitude +
                    ' Longitude: '+psensorlst[i].location.longitude+'">'),
                    $('<input type="hidden" id=hmade_'+psensorlst[i].psensorId+' value="'+psensorlst[i].made+'">'),
                    $('<input type="hidden" id=hmodel_'+psensorlst[i].psensorId+' value="'+psensorlst[i].model+'">'),
                    $('<input type="hidden" id=hseriesnumber_'+psensorlst[i].psensorId+' value="'+psensorlst[i].seriesnumber+'">'),
                    $('<input type="hidden" id=hSensorType_'+psensorlst[i].psensorId+' value="'+psensorlst[i].sensorType+'">'),
                    $('<input type="hidden" id=hStatus_'+psensorlst[i].psensorId+' value="'+psensorlst[i].status+'">'),
                    $('<input type="hidden" id=hpsensorId_'+psensorlst[i].psensorId+' value="'+psensorlst[i].psensorId+'">')
                );
                $("#sea_water_temperature_list_tb").append(newtr);
            }

            $("[name='my-checkbox']").bootstrapSwitch();
            $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {

                if(virtualsensorid==this.id)
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, "_", "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, "_", "Disabled", sensorType);
                }
                else
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, this.id, "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, this.id, "Disabled", sensorType);
                }


                //console.log(this); // DOM element
                //console.log(event); // jQuery event
                //console.log(state); // true | false
            });

        }});
}

function Refresh_sea_water_practical_salinity_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";

    var category = "sea_water_practical_salinity";
    $.ajax({url: "/rtvSensorLst/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){


            $("#sea_water_practical_salinity_list_tb #dy_created_sea_water_practical_salinity").remove();


            var virtualsensorid = result.vsensorId;
            var virtualsensorstatus = result.status;

            $("#sea_water_practical_salinity_vsensor_div #dy_created_vsensor").remove();
            var vnewd =$('<div id = "dy_created_vsensor">');
            if(virtualsensorstatus=="Disabled")
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox">'));
            }
            else
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox" checked>'));
            }
            $("#sea_water_practical_salinity_vsensor_div").append(vnewd);
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                var newtr = $('<tr id="dy_created_sea_water_practical_salinity">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensorId + ' readonly>').val(psensorlst[i].psensorId)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =status_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_Status + ' readonly>').val(psensorlst[i].status))
                )

                if(psensorlst[i].status=="Disabled")
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox"></div>'))
                    );
                }
                else
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox" checked></div>'))
                    );
                }

                newtr.append(
                    $('<input type="hidden" id=hlocation_'+psensorlst[i].psensorId+' value="Latitude: '+psensorlst[i].location.latitude +
                    ' Longitude: '+psensorlst[i].location.longitude+'">'),
                    $('<input type="hidden" id=hmade_'+psensorlst[i].psensorId+' value="'+psensorlst[i].made+'">'),
                    $('<input type="hidden" id=hmodel_'+psensorlst[i].psensorId+' value="'+psensorlst[i].model+'">'),
                    $('<input type="hidden" id=hseriesnumber_'+psensorlst[i].psensorId+' value="'+psensorlst[i].seriesnumber+'">'),
                    $('<input type="hidden" id=hSensorType_'+psensorlst[i].psensorId+' value="'+psensorlst[i].sensorType+'">'),
                    $('<input type="hidden" id=hStatus_'+psensorlst[i].psensorId+' value="'+psensorlst[i].status+'">'),
                    $('<input type="hidden" id=hpsensorId_'+psensorlst[i].psensorId+' value="'+psensorlst[i].psensorId+'">')
                );
                $("#sea_water_practical_salinity_list_tb").append(newtr);
            }

            $("[name='my-checkbox']").bootstrapSwitch();
            $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {

                if(virtualsensorid==this.id)
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, "_", "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, "_", "Disabled", sensorType);
                }
                else
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, this.id, "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, this.id, "Disabled", sensorType);
                }


                //console.log(this); // DOM element
                //console.log(event); // jQuery event
                //console.log(state); // true | false
            });

        }});
}

function Refresh_mass_concentration_of_oxygen_in_sea_water_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";

    var category = "mass_concentration_of_oxygen_in_sea_water";
    $.ajax({url: "/rtvSensorLst/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){


            $("#mass_concentration_of_oxygen_in_sea_water_list_tb #dy_created_mass_concentration_of_oxygen_in_sea_water").remove();


            var virtualsensorid = result.vsensorId;
            var virtualsensorstatus = result.status;

            $("#mass_concentration_of_oxygen_in_sea_water_vsensor_div #dy_created_vsensor").remove();
            var vnewd =$('<div id = "dy_created_vsensor">');
            if(virtualsensorstatus=="Disabled")
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox">'));
            }
            else
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox" checked>'));
            }
            $("#mass_concentration_of_oxygen_in_sea_water_vsensor_div").append(vnewd);
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                var newtr = $('<tr id="dy_created_mass_concentration_of_oxygen_in_sea_water">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensorId + ' readonly>').val(psensorlst[i].psensorId)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =status_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_Status + ' readonly>').val(psensorlst[i].status))
                )

                if(psensorlst[i].status=="Disabled")
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox"></div>'))
                    );
                }
                else
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox" checked></div>'))
                    );
                }

                newtr.append(
                    $('<input type="hidden" id=hlocation_'+psensorlst[i].psensorId+' value="Latitude: '+psensorlst[i].location.latitude +
                    ' Longitude: '+psensorlst[i].location.longitude+'">'),
                    $('<input type="hidden" id=hmade_'+psensorlst[i].psensorId+' value="'+psensorlst[i].made+'">'),
                    $('<input type="hidden" id=hmodel_'+psensorlst[i].psensorId+' value="'+psensorlst[i].model+'">'),
                    $('<input type="hidden" id=hseriesnumber_'+psensorlst[i].psensorId+' value="'+psensorlst[i].seriesnumber+'">'),
                    $('<input type="hidden" id=hSensorType_'+psensorlst[i].psensorId+' value="'+psensorlst[i].sensorType+'">'),
                    $('<input type="hidden" id=hStatus_'+psensorlst[i].psensorId+' value="'+psensorlst[i].status+'">'),
                    $('<input type="hidden" id=hpsensorId_'+psensorlst[i].psensorId+' value="'+psensorlst[i].psensorId+'">')
                );
                $("#mass_concentration_of_oxygen_in_sea_water_list_tb").append(newtr);
            }

            $("[name='my-checkbox']").bootstrapSwitch();
            $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {

                if(virtualsensorid==this.id)
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, "_", "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, "_", "Disabled", sensorType);
                }
                else
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, this.id, "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, this.id, "Disabled", sensorType);
                }


                //console.log(this); // DOM element
                //console.log(event); // jQuery event
                //console.log(state); // true | false
            });

        }});
}

function Refresh_sea_water_ph_reported_on_total_scale_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";

    var category = "sea_water_ph_reported_on_total_scale";
    $.ajax({url: "/rtvSensorLst/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){


            $("#sea_water_ph_reported_on_total_scale_list_tb #dy_created_sea_water_ph_reported_on_total_scale").remove();


            var virtualsensorid = result.vsensorId;
            var virtualsensorstatus = result.status;

            $("#sea_water_ph_reported_on_total_scale_vsensor_div #dy_created_vsensor").remove();
            var vnewd =$('<div id = "dy_created_vsensor">');
            if(virtualsensorstatus=="Disabled")
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox">'));
            }
            else
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox" checked>'));
            }
            $("#sea_water_ph_reported_on_total_scale_vsensor_div").append(vnewd);
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            for(var i=0; i<psensorlst.length; i++){
                var newtr = $('<tr id="dy_created_sea_water_ph_reported_on_total_scale">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensorId + ' readonly>').val(psensorlst[i].psensorId)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =status_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_Status + ' readonly>').val(psensorlst[i].status))
                )

                if(psensorlst[i].status=="Disabled")
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox"></div>'))
                    );
                }
                else
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox" checked></div>'))
                    );
                }

                newtr.append(
                    $('<input type="hidden" id=hlocation_'+psensorlst[i].psensorId+' value="Latitude: '+psensorlst[i].location.latitude +
                    ' Longitude: '+psensorlst[i].location.longitude+'">'),
                    $('<input type="hidden" id=hmade_'+psensorlst[i].psensorId+' value="'+psensorlst[i].made+'">'),
                    $('<input type="hidden" id=hmodel_'+psensorlst[i].psensorId+' value="'+psensorlst[i].model+'">'),
                    $('<input type="hidden" id=hseriesnumber_'+psensorlst[i].psensorId+' value="'+psensorlst[i].seriesnumber+'">'),
                    $('<input type="hidden" id=hSensorType_'+psensorlst[i].psensorId+' value="'+psensorlst[i].sensorType+'">'),
                    $('<input type="hidden" id=hStatus_'+psensorlst[i].psensorId+' value="'+psensorlst[i].status+'">'),
                    $('<input type="hidden" id=hpsensorId_'+psensorlst[i].psensorId+' value="'+psensorlst[i].psensorId+'">')
                );
                $("#sea_water_ph_reported_on_total_scale_list_tb").append(newtr);
            }

            $("[name='my-checkbox']").bootstrapSwitch();
            $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {

                if(virtualsensorid==this.id)
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, "_", "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, "_", "Disabled", sensorType);
                }
                else
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, this.id, "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, this.id, "Disabled", sensorType);
                }


                //console.log(this); // DOM element
                //console.log(event); // jQuery event
                //console.log(state); // true | false
            });

        }});
}

function Refresh_turbidity_lst(){

    var VirtualSensorId = "VirtualSensorId";
    var PhysicalSensorId="PhysicalSensorId";
    var PhysicalSensor_Location="PhysicalSensor_Location";
    var PhysicalSensor_Status = "PhysicalSensor_Status";

    var category = "turbidity";
    $.ajax({url: "/rtvSensorLst/"+category,
        type: "GET",
        DataType: "json",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){


            $("#turbidity_list_tb #dy_created_turbidity").remove();


            var virtualsensorid = result.vsensorId;
            var virtualsensorstatus = result.status;

            $("#turbidity_vsensor_div #dy_created_vsensor").remove();
            var vnewd =$('<div id = "dy_created_vsensor">');
            if(virtualsensorstatus=="Disabled")
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox">'));
            }
            else
            {
                vnewd.append($('<input id ='+virtualsensorid+ ' type="checkbox" name="my-checkbox" checked>'));
            }
            $("#turbidity_vsensor_div").append(vnewd);
            var sensorType = result.sensorType;
            var status = result.status;
            var psensorlst = result.psensorList;

            //alert(psensorlst);
            //alert(result.psensorList[0].model);
            //alert(result.psensorList[0].psensorId);


            for(var i=0; i<psensorlst.length; i++){
                var newtr = $('<tr id="dy_created_turbidity">').append(
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensorId + ' readonly>').val(psensorlst[i].psensorId)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + PhysicalSensor_Location +
                        ' readonly>').val(psensorlst[i].location.location)),
                    $('<td>').append(
                        $('<input id =status_'+psensorlst[i].psensorId+ 'type="text" class="form-control" name=' + PhysicalSensor_Status + ' readonly>').val(psensorlst[i].status))
                )

                if(psensorlst[i].status=="Disabled")
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox"></div>'))
                    );
                }
                else
                {
                    newtr.append(
                        $('<td>').append($('<div class="btn-group"><button id ='+psensorlst[i].psensorId+
                        ' type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal" onclick="basicinfo(this.id)">Basic Info</button>' +
                        '<input id ='+psensorlst[i].psensorId+ ' type="checkbox" name="my-checkbox" checked></div>'))
                    );
                }

                    newtr.append(
                        $('<input type="hidden" id=hlocation_'+psensorlst[i].psensorId+' value="Latitude: '+psensorlst[i].location.latitude +
                    ' Longitude: '+psensorlst[i].location.longitude+'">'),
                    $('<input type="hidden" id=hmade_'+psensorlst[i].psensorId+' value="'+psensorlst[i].made+'">'),
                    $('<input type="hidden" id=hmodel_'+psensorlst[i].psensorId+' value="'+psensorlst[i].model+'">'),
                    $('<input type="hidden" id=hseriesnumber_'+psensorlst[i].psensorId+' value="'+psensorlst[i].seriesnumber+'">'),
                    $('<input type="hidden" id=hSensorType_'+psensorlst[i].psensorId+' value="'+psensorlst[i].sensorType+'">'),
                    $('<input type="hidden" id=hStatus_'+psensorlst[i].psensorId+' value="'+psensorlst[i].status+'">'),
                    $('<input type="hidden" id=hpsensorId_'+psensorlst[i].psensorId+' value="'+psensorlst[i].psensorId+'">')
                );
                $("#turbidity_list_tb").append(newtr);
            }

            $("[name='my-checkbox']").bootstrapSwitch();
            $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {

                if(virtualsensorid==this.id)
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, "_", "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, "_", "Disabled", sensorType);
                }
                else
                {
                    if(state==true)
                        sensorstatuschange(virtualsensorid, this.id, "Enabled", sensorType);
                    else
                        sensorstatuschange(virtualsensorid, this.id, "Disabled", sensorType);
                }


                //console.log(this); // DOM element
                //console.log(event); // jQuery event
                //console.log(state); // true | false
            });

        }});
}



//function Attach_Event(){
//
//    $('#drink_add').click(function(){
//        var fname = $('#new_drink_photo').val();
//        var type = fname.substring(fname.lastIndexOf('.')+1);
//
//        if($('#new_drink_name').val()==""||!$.isNumeric($('#new_drink_price').val())||!$.isNumeric($('#new_drink_cal').val())||!$.isNumeric($('#new_drink_pretime').val()))
//        {
//            $('#drink_errmsg').css("color","red");
//            $('#drink_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
//            return false;
//        }
//        else if(type != "jpg" && type != "png" && type != "jpeg")
//        {
//            $('#drink_errmsg').css("color","red");
//            $('#drink_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
//            return false;
//        }
//        else {
//            //var newmenu = new menu("", $('#new_drink_name').val(), $('#new_drink_picture').val(), $('#new_drink_price').val(), $('#new_drink_cal').val(), $('#new_drink_pretime').val(), "Drink");
//            return true;
//        }
//
//    });
//
//    $('#appetizer_add').click(function(){
//        var fname = $('#new_appetizer_photo').val();
//        var type = fname.substring(fname.lastIndexOf('.')+1);
//
//        if($('#new_appetizer_name').val()==""||!$.isNumeric($('#new_appetizer_price').val())||!$.isNumeric($('#new_appetizer_cal').val())||!$.isNumeric($('#new_appetizer_pretime').val()))
//        {
//            $('#appetizer_errmsg').css("color","red");
//            $('#appetizer_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
//            return false;
//        }
//        else if(type != "jpg" && type != "png" && type != "jpeg")
//        {
//            $('#appetizer_errmsg').css("color","red");
//            $('#appetizer_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
//            return false;
//        }
//        else {
//            return true;
//        }
//
//    });
//
//    $('#main_course_add').click(function(){
//        var fname = $('#new_main_course_photo').val();
//        var type = fname.substring(fname.lastIndexOf('.')+1);
//
//        if($('#new_main_course_name').val()==""||!$.isNumeric($('#new_main_course_price').val())||!$.isNumeric($('#new_main_course_cal').val())||!$.isNumeric($('#new_main_course_pretime').val()))
//        {
//            $('#main_course_errmsg').css("color","red");
//            $('#main_course_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
//            return false;
//        }
//        else if(type != "jpg" && type != "png" && type != "jpeg")
//        {
//            $('#main_course_errmsg').css("color","red");
//            $('#main_course_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
//            return false;
//        }
//        else {
//            return true;
//        }
//
//    });
//
//    $('#desert_add').click(function(){
//        var fname = $('#new_desert_photo').val();
//        var type = fname.substring(fname.lastIndexOf('.')+1);
//
//        if($('#new_desert_name').val()==""||!$.isNumeric($('#new_desert_price').val())||!$.isNumeric($('#new_desert_cal').val())||!$.isNumeric($('#new_desert_pretime').val()))
//        {
//            $('#desert_errmsg').css("color","red");
//            $('#desert_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
//            return false;
//        }
//        else if(type != "jpg" && type != "png" && type != "jpeg")
//        {
//            $('#desert_errmsg').css("color","red");
//            $('#desert_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
//            return false;
//        }
//        else {
//            return true;
//        }
//
//    });
//
//
//
//
//    $('#reset_order_queue').click(function(){
//        $.ajax({url: "/order/deleteall",
//            type: "DELETE",
//            DataType: "text",
//            error: function(xhr){
//                alert("An error occured: " + xhr.status + " " + xhr.statusText);
//            },
//            success: function(result){
//
//                // alert("Order queue has been cleared successfully.");
//                $('#order_msg').css("color","green");
//                $('#order_msg').html("Order queue has been cleared successfully.").show();
//
//            }});
//        return false;
//
//    });
//
//    $('#myModal').click(function(){this.style.display = "none";});
//
//
//
//}



