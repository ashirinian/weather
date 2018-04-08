<!doctype html>
<html ng-app="weather" ng-controller="weatherCtrl">
	<head>
		<title>Weather</title>
		<link rel="icon" href="/favicon.png" type="image/png" sizes="256x256">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="UTF-8"> 
		<link rel="stylesheet" type="text/css" href="/assets/vendor/animate.css">
		<link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="/assets/css/style.css">
	</head>
	
	<body>
		<div class="step-card animated fadeInDown" ng-if="alert">
			<h3>Welcome to Weather!</h3>
			<button ng-click="greetPlumpa();">Set Location</button>
		</div>
		<table height="100%" width="100%" cellpadding="0" cellspacing="0" style="text-align: center;"><tbody>
			<tr>
				<td style="padding: 15px; text-align: center;">
					<?php include($_SERVER['DOCUMENT_ROOT'].'/assets/templates/current.php'); ?>
				</td>
			</tr>
			<tr>
				<td style="padding: 15px; text-align: center;">
					<?php include($_SERVER['DOCUMENT_ROOT'].'/assets/templates/weekly.php'); ?>
				</td>
			</tr>
			<tr>
				<td style="padding: 15px; text-align: center;">
					<?php include($_SERVER['DOCUMENT_ROOT'].'/assets/templates/details.php'); ?>
				</td>
			</tr>
		</tbody></table>
	</body>
	<footer>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
		<script src="/assets/js/app.js"></script>
</html>