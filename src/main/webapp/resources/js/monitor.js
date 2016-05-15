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



