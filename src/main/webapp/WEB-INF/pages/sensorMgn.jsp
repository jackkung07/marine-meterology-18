<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<!-- add tag spring:url -->
	<spring:url value="/resources/css/bootstrap.min.css" var="bootstrapMinCss"/>
	<spring:url value="/resources/css/dashboard.css" var="dashboardCss"/>

	<!-- finish adding spring:url tag -->

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="icon" href="../../favicon.ico">

	<title>Dashboard</title>

	<!-- Bootstrap core CSS -->
	<!-- link href="/resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" -->
	<link href="${bootstrapMinCss}" rel="stylesheet">

	<!-- Custom styles for this template -->
	<link href="${dashboardCss}" rel="stylesheet">

	<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
	<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
	<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	<style>
		#map {
			width: 880px;
			height: 300px;
		}
	</style>
</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">Sensor Cloud</a>
		</div>
		<div id="navbar" class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#">Home</a></li>
				<li><a href="#">Settings</a></li>
				<li><a href="#">Login</a></li>
				<li><a href="#">Help</a></li>
			</ul>
			<form class="navbar-form navbar-right">
				<input type="text" class="form-control" placeholder="Search...">
			</form>
		</div>
	</div>
</nav>

<div class="container-fluid">
	<div class="row">
		<div class="col-sm-3 col-md-2 sidebar">
			<ul class="nav nav-sidebar">
				<li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
				<li><a href="#">Status</a></li>
				<li><a href="#">Analytics</a></li>
				<li><a href="#">Export</a></li>
			</ul>
			<!-- <ul class="nav nav-sidebar">
              <li><a href="">Nav item</a></li>
              <li><a href="">Nav item again</a></li>
              <li><a href="">One more nav</a></li>
              <li><a href="">Another nav item</a></li>
              <li><a href="">More navigation</a></li>
            </ul> -->
			<!-- <ul class="nav nav-sidebar">
              <li><a href="">Nav item again</a></li>
              <li><a href="">One more nav</a></li>
              <li><a href="">Another nav item</a></li>
            </ul> -->
		</div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<h1 class="page-header">Dashboard</h1>

			<div class="row placeholders">
				<div id="map"></div>
				<script>
					function initMap() {
						var mapDiv = document.getElementById('map');
						var map = new google.maps.Map(mapDiv, {
							center: {lat: 44.540, lng: -78.546},
							zoom: 8
						});
					}
				</script>
				<script src="https://maps.googleapis.com/maps/api/js?callback=initMap"
						async defer></script>
			</div>

			<h2 class="sub-header">Sensor List</h2>
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
					<tr>
						<th>Data Node</th>
						<th>Sensor Id</th>
						<th>Sensor Type</th>
						<th>Status</th>
						<th align="center">Function</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>DN_001</td>
						<td>DN_001_1001</td>
						<td>Wind Sensor</td>
						<td>Enabled</td>
						<td><div class="btn-group"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#BasicModal">Basic Info</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ConfModal">Configure</button></div></td>
					</tr>
					<tr>
						<td>DN_001</td>
						<td>DN_001_1002</td>
						<td>Wind Sensor</td>
						<td>Enabled</td>
						<td><div class="btn-group"><button id="testing" type="button" class="btn btn-primary">Basic Info</button>
							<button type="button" class="btn btn-primary">Configure</button></div></td>
					</tr>
					<tr>
						<td>DN_001</td>
						<td>DN_001_1003</td>
						<td>Wind Sensor</td>
						<td>Disabled</td>
						<td><div class="btn-group"><button type="button" class="btn btn-primary">Basic Info</button>
							<button type="button" class="btn btn-primary">Configure</button></div></td>
					</tr>
					<tr>
						<td>DN_002</td>
						<td>DN_002_1001</td>
						<td>Wind Sensor</td>
						<td>Disabled</td>
						<td><div class="btn-group"><button type="button" class="btn btn-primary">Basic Info</button>
							<button type="button" class="btn btn-primary">Configure</button></div></td>
					</tr>
					<tr>
						<td>DN_002</td>
						<td>DN_002_1002</td>
						<td>Wind Sensor</td>
						<td>Enabled</td>
						<td><div class="btn-group"><button type="button" class="btn btn-primary">Basic Info</button>
							<button type="button" class="btn btn-primary">Configure</button></div></td>
					</tr>
					<tr>
						<td>DN_002</td>
						<td>DN_002_1003</td>
						<td>Wind Sensor</td>
						<td>Enabled</td>
						<td><div class="btn-group"><button type="button" class="btn btn-primary">Basic Info</button>
							<button type="button" class="btn btn-primary">Configure</button></div></td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<!-- Sensor Basic info Modal -->
<div class="modal fade" id="BasicModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times</button>
				<h3 class="modal-title">Sensor Information</h3>
			</div>
			<div class="modal-body">
				<h5 class="text-center">Sensor Id: DN_001_1001</h5>
				<table class="table table-striped" id="tblGrid">
					<thead id="tblHead">
					<tr>
						<th>Description</th>
						<th>Value</th>
						<th class="text-right">Value Date</th>
					</tr>
					</thead>
					<tbody>
					<tr><td>Made</td>
						<td>Samsung</td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Product Model</td>
						<td>PM_10003_45</td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Product Series Number</td>
						<td>PM_10003_45_XP_586</td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Data Node</td>
						<td>DN_001</td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Sensor ID</td>
						<td>DN_001_1001</td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Sensor Type</td>
						<td>Wind Sensor</td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Sensor Location</td>
						<td><a>Longitude: </a><a>0.234131</a><br><a>Latitude: </a><a>1.30433</a></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Sensor Status</td>
						<td><a id="status">Enabled</a></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					</tbody>
				</table>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default " data-dismiss="modal">Close</button>
			</div>

		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!-- Sensor info Configure Modal -->
<div class="modal fade" id="ConfModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times</button>
				<h3 class="modal-title">Big Title</h3>
			</div>
			<div class="modal-body">
				<h5 class="text-center">Hello. Some text here.</h5>
				<table class="table table-striped" id="conftblGrid">
					<thead id="contblHead">
					<tr>
						<th>Description</th>
						<th>Value</th>
						<th class="text-right">Value Date</th>
					</tr>
					</thead>
					<tbody>
					<tr><td>IP Version</td>
						<td><input type="text" class="form-control" value="IPv4 device"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>IP Address</td>
						<td><input type="text" class="form-control" value="192.168.0.1"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Report schedule</td>
						<td><input type="text" class="form-control" value="every 2mins"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Sensing arrange</td>
						<td><input type="text" class="form-control" value="10miles"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Port</td>
						<td><input type="text" class="form-control" value="8080"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Scanning interval</td>
						<td><input type="text" class="form-control" value="1sec"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Data retrieving format</td>
						<td><input type="text" class="form-control" value="JSON"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
					<tr><td>Sensor Status</td>
						<td>Enabled: <input type="checkbox" id="newstatus" checked="true"></td>
						<td class="text-right">12/4/2015</td>
					</tr>
				</table>
				<div class="form-group">
					<input type="button" class="btn btn-warning btn-sm pull-right" value="Reset">
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default " data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save Changes</button>
			</div>

		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>window.jQuery || document.write('<script type="text/javascript" src="/resources/js/jquery.min.js"><\/script>')</script>
<script type="text/javascript" src="/resources/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/resources/js/sensor_configure.js"></script>
<!-- Just to make our placeholder images work. Don't actually copy the next line! -->
<!-- <script src="../../assets/js/vendor/holder.min.js"></script> -->
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!-- <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script> -->
</body>
</html>