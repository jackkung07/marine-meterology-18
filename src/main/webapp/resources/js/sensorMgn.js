/**
 * Created by ivanybma on 5/14/16.
 */
function Refresh_sea_water_pressure_lst(){

    var id_name = "id";
    var name_name = "nname";
    var picture_name="pname";
    var price_name="price";
    var calo_name="calo";
    var pre_time_name="pre_time"

    var category = "Drink";
    $.ajax({url: "/menu/findmenu/"+category,
        type: "GET",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){
            //alert(result);
            var url = location.href;
            var baseURL= url.substring(0, url.indexOf('/', 14));
            $("#drink_list_tb #dy_created_drink").remove();
            for(var i=0; i<result.length; i++){
                //alert(result[i].name);
                var newtr = $('<tr id="dy_created_drink">').append(
                    $('<td>').append(result[i].id),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + name_name + ' readonly>').val(result[i].name)),
                    $('<td>').append(
                        $('<img src="'+baseURL+'/images/'+ result[i].id + '" class="img-rounded" onclick="largephoto(this.id)" alt="Image" width="40" height="40" id=img_'+result[i].id+'>')
                    ),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + price_name + ' readonly>').val(result[i].price)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + calo_name + ' readonly>').val(result[i].calories)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + pre_time_name + ' readonly>').val(result[i].prepTime)),
                    $('<td>').append($('<a id='+result[i].id+' class="btn btn-large" onclick="menudelete(this.id)">Delete</a>'))
                );
                $("#drink_list_tb").append(newtr);
            }


        }});
}

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

function psensorstatuschange(vid, pid, status, sensorType){

    $.ajax({url: "/chgSensorStatus/"+vid+"/"+pid+"/"+status,
        type: "POST",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){
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

        }});

    return true;
}

function Refresh_sea_water_pressure_lst(){


    var name_name = "nname";
    var price_name="price";
    var calo_name="calo";
    var pre_time_name="pre_time"

    var category = "Appetizer";
    $.ajax({url: "/menu/findmenu/"+category,
        type: "GET",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){
            var url = location.href;
            var baseURL= url.substring(0, url.indexOf('/', 14));
            $("#appetizer_list_tb #dy_created_appetizer").remove();
            for(var i=0; i<result.length; i++){
                var newtr = $('<tr id="dy_created_appetizer">').append(
                    $('<td>').append(result[i].id),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + name_name + ' readonly>').val(result[i].name)),
                    $('<td>').append(
                        $('<img src="'+baseURL+'/images/'+ result[i].id + '" class="img-rounded" onclick="largephoto(this.id)" alt="Image" width="40" height="40" id=img_'+result[i].id+'>')
                    ),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + price_name + ' readonly>').val(result[i].price)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + calo_name + ' readonly>').val(result[i].calories)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + pre_time_name + ' readonly>').val(result[i].prepTime)),
                    $('<td>').append($('<a id='+result[i].id+' class="btn btn-large" onclick="menudelete(this.id)">Delete</a>'))
                );
                $("#appetizer_list_tb").append(newtr);
            }


        }});
}

function Refresh_sea_water_temperature_lst(){


    var name_name = "nname";
    var price_name="price";
    var calo_name="calo";
    var pre_time_name="pre_time"

    var category = "Appetizer";
    $.ajax({url: "/menu/findmenu/"+category,
        type: "GET",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){
            var url = location.href;
            var baseURL= url.substring(0, url.indexOf('/', 14));
            $("#appetizer_list_tb #dy_created_appetizer").remove();
            for(var i=0; i<result.length; i++){
                var newtr = $('<tr id="dy_created_appetizer">').append(
                    $('<td>').append(result[i].id),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + name_name + ' readonly>').val(result[i].name)),
                    $('<td>').append(
                        $('<img src="'+baseURL+'/images/'+ result[i].id + '" class="img-rounded" onclick="largephoto(this.id)" alt="Image" width="40" height="40" id=img_'+result[i].id+'>')
                    ),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + price_name + ' readonly>').val(result[i].price)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + calo_name + ' readonly>').val(result[i].calories)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + pre_time_name + ' readonly>').val(result[i].prepTime)),
                    $('<td>').append($('<a id='+result[i].id+' class="btn btn-large" onclick="menudelete(this.id)">Delete</a>'))
                );
                $("#appetizer_list_tb").append(newtr);
            }


        }});
}

function Refresh_sea_water_practical_salinity_lst(){

    var name_name = "nname";
    var price_name="price";
    var calo_name="calo";
    var pre_time_name="pre_time"

    var category = "Main_Course";
    $.ajax({url: "/menu/findmenu/"+category,
        type: "GET",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){
            var url = location.href;
            var baseURL= url.substring(0, url.indexOf('/', 14));
            $("#main_course_list_tb #dy_created_main_course").remove();
            for(var i=0; i<result.length; i++){
                var newtr = $('<tr id="dy_created_main_course">').append(
                    $('<td>').append(result[i].id),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + name_name + ' readonly>').val(result[i].name)),
                    $('<td>').append(
                        $('<img src="'+baseURL+'/images/'+ result[i].id + '" class="img-rounded" onclick="largephoto(this.id)" alt="Image" width="40" height="40" id=img_'+result[i].id+'>')
                    ),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + price_name + ' readonly>').val(result[i].price)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + calo_name + ' readonly>').val(result[i].calories)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + pre_time_name + ' readonly>').val(result[i].prepTime)),
                    $('<td>').append($('<a id='+result[i].id+' class="btn btn-large" onclick="menudelete(this.id)">Delete</a>'))
                );
                $("#main_course_list_tb").append(newtr);
            }
        }});
}

function Refresh_mass_concentration_of_oxygen_in_sea_water_lst(){

    var name_name = "nname";
    var price_name="price";
    var calo_name="calo";
    var pre_time_name="pre_time"

    var category = "Desert";
    $.ajax({url: "/menu/findmenu/"+category,
        type: "GET",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){
            var url = location.href;
            var baseURL= url.substring(0, url.indexOf('/', 14));
            $("#desert_list_tb #dy_created_desert").remove();
            for(var i=0; i<result.length; i++){
                var newtr = $('<tr id="dy_created_desert">').append(
                    $('<td>').append(result[i].id),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + name_name + ' readonly>').val(result[i].name)),
                    $('<td>').append(
                        $('<img src="'+baseURL+'/images/'+ result[i].id + '" class="img-rounded" onclick="largephoto(this.id)" alt="Image" width="40" height="40" id=img_'+result[i].id+'>')
                    ),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + price_name + ' readonly>').val(result[i].price)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + calo_name + ' readonly>').val(result[i].calories)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + pre_time_name + ' readonly>').val(result[i].prepTime)),
                    $('<td>').append($('<a id='+result[i].id+' class="btn btn-large" onclick="menudelete(this.id)">Delete</a>'))
                );
                $("#desert_list_tb").append(newtr);
            }


        }});
}

function Refresh_sea_water_ph_reported_on_total_scale_lst(){

    var name_name = "nname";
    var price_name="price";
    var calo_name="calo";
    var pre_time_name="pre_time"

    var category = "Desert";
    $.ajax({url: "/menu/findmenu/"+category,
        type: "GET",
        DataType: "text",
        error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function(result){
            var url = location.href;
            var baseURL= url.substring(0, url.indexOf('/', 14));
            $("#desert_list_tb #dy_created_desert").remove();
            for(var i=0; i<result.length; i++){
                var newtr = $('<tr id="dy_created_desert">').append(
                    $('<td>').append(result[i].id),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + name_name + ' readonly>').val(result[i].name)),
                    $('<td>').append(
                        $('<img src="'+baseURL+'/images/'+ result[i].id + '" class="img-rounded" onclick="largephoto(this.id)" alt="Image" width="40" height="40" id=img_'+result[i].id+'>')
                    ),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + price_name + ' readonly>').val(result[i].price)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + calo_name + ' readonly>').val(result[i].calories)),
                    $('<td>').append(
                        $('<input type="text" class="form-control" name=' + pre_time_name + ' readonly>').val(result[i].prepTime)),
                    $('<td>').append($('<a id='+result[i].id+' class="btn btn-large" onclick="menudelete(this.id)">Delete</a>'))
                );
                $("#desert_list_tb").append(newtr);
            }


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

               // alert(state);
                if(state==true)
                    psensorstatuschange(virtualsensorid, this.id, "Enabled", sensorType);
                else
                    psensorstatuschange(virtualsensorid, this.id, "Disabled", sensorType);

                //console.log(this); // DOM element
                //console.log(event); // jQuery event
                //console.log(state); // true | false
            });

        }});
}



function Attach_Event(){
    $('#drink_add').click(function(){
        var fname = $('#new_drink_photo').val();
        var type = fname.substring(fname.lastIndexOf('.')+1);

        if($('#new_drink_name').val()==""||!$.isNumeric($('#new_drink_price').val())||!$.isNumeric($('#new_drink_cal').val())||!$.isNumeric($('#new_drink_pretime').val()))
        {
            $('#drink_errmsg').css("color","red");
            $('#drink_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
            return false;
        }
        else if(type != "jpg" && type != "png" && type != "jpeg")
        {
            $('#drink_errmsg').css("color","red");
            $('#drink_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
            return false;
        }
        else {
            //var newmenu = new menu("", $('#new_drink_name').val(), $('#new_drink_picture').val(), $('#new_drink_price').val(), $('#new_drink_cal').val(), $('#new_drink_pretime').val(), "Drink");
            return true;
        }

    });

    $('#appetizer_add').click(function(){
        var fname = $('#new_appetizer_photo').val();
        var type = fname.substring(fname.lastIndexOf('.')+1);

        if($('#new_appetizer_name').val()==""||!$.isNumeric($('#new_appetizer_price').val())||!$.isNumeric($('#new_appetizer_cal').val())||!$.isNumeric($('#new_appetizer_pretime').val()))
        {
            $('#appetizer_errmsg').css("color","red");
            $('#appetizer_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
            return false;
        }
        else if(type != "jpg" && type != "png" && type != "jpeg")
        {
            $('#appetizer_errmsg').css("color","red");
            $('#appetizer_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
            return false;
        }
        else {
            return true;
        }

    });

    $('#main_course_add').click(function(){
        var fname = $('#new_main_course_photo').val();
        var type = fname.substring(fname.lastIndexOf('.')+1);

        if($('#new_main_course_name').val()==""||!$.isNumeric($('#new_main_course_price').val())||!$.isNumeric($('#new_main_course_cal').val())||!$.isNumeric($('#new_main_course_pretime').val()))
        {
            $('#main_course_errmsg').css("color","red");
            $('#main_course_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
            return false;
        }
        else if(type != "jpg" && type != "png" && type != "jpeg")
        {
            $('#main_course_errmsg').css("color","red");
            $('#main_course_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
            return false;
        }
        else {
            return true;
        }

    });

    $('#desert_add').click(function(){
        var fname = $('#new_desert_photo').val();
        var type = fname.substring(fname.lastIndexOf('.')+1);

        if($('#new_desert_name').val()==""||!$.isNumeric($('#new_desert_price').val())||!$.isNumeric($('#new_desert_cal').val())||!$.isNumeric($('#new_desert_pretime').val()))
        {
            $('#desert_errmsg').css("color","red");
            $('#desert_errmsg').html("Please make sure to fill all the fields.  Only number can be accepted by fiels: Unit Price/Calories/Preparation Time").show();
            return false;
        }
        else if(type != "jpg" && type != "png" && type != "jpeg")
        {
            $('#desert_errmsg').css("color","red");
            $('#desert_errmsg').html("Please make sure the photo type belong to one of PNG, JPG or JPEG").show();
            return false;
        }
        else {
            return true;
        }

    });




    $('#reset_order_queue').click(function(){
        $.ajax({url: "/order/deleteall",
            type: "DELETE",
            DataType: "text",
            error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);
            },
            success: function(result){

                // alert("Order queue has been cleared successfully.");
                $('#order_msg').css("color","green");
                $('#order_msg').html("Order queue has been cleared successfully.").show();

            }});
        return false;

    });

    $('#myModal').click(function(){this.style.display = "none";});




}



