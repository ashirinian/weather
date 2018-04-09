var app = angular.module('plumpa', []);

app.controller('plumpaCtrl', function($scope) {
	
	$scope.plumpaColor = '#FFEB3B';
	$scope.skyColor = '#03A9F4';
	$scope.groundColor = '#607D8B';
	$scope.partSelected = 'plumpaColor';
	$scope.alert = true;
	
	$scope.colors = [
		{
			name: 'Red',
			hex: '#F44336'
		}, {
			name: 'Magenta',
			hex: '#E91E63'
		}, {
			name: 'Purple',
			hex: '#9C27B0'
		}, {
			name: 'Deep Purple',
			hex: '#673AB7'
		}, {
			name: 'Indigo',
			hex: '#3F51B5'
		}, {
			name: 'Blue',
			hex: '#2196F3'
		}, {
			name: 'Light Blue',
			hex: '#03A9F4'
		}, {
			name: 'Cyan',
			hex: '#00BCD4'
		}, {
			name: 'Teal',
			hex: '#009688'
		}, {
			name: 'Green',
			hex: '#4CAF50'
		}, {
			name: 'Light Green',
			hex: '#8BC34A'
		}, {
			name: 'Lime',
			hex: '#CDDC39'
		}, {
			name: 'Yellow',
			hex: '#FFEB3B'
		}, {
			name: 'Amber',
			hex: '#FFC107'
		}, {
			name: 'Orange',
			hex: '#FF9800'
		}, {
			name: 'Deep Orange',
			hex: '#FF5722'
		}, {
			name: 'Brown',
			hex: '#795548'
		}, {
			name: 'Grey',
			hex: '#9E9E9E'
		}, {
			name: 'Blue Grey',
			hex: '#607D8B'
		}
	];
	
	$scope.selectPart = function(part) {
		if(!part) return;
		$scope.partSelected = part;
		console.log('part changed to ' + part);
	};
	
	$scope.changeColor = function(part, hex) {
		if(!part || !hex) return;
		
		if(part == 'plumpaColor') $scope.plumpaColor = hex;
		if(part == 'skyColor') $scope.skyColor = hex;
		if(part == 'groundColor') $scope.groundColor = hex;
		
		console.log(part + ' changed to ' + hex);
	};
	
	$scope.greetPlumpa = function() {
		
		$scope.alert = false;
		
		console.log('plumpawumpa says hello');
	};
	
});