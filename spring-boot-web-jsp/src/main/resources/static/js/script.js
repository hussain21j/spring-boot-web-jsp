/* ------------------------------------------------------- 

 * Description:  This file contains all the controller and Java script code for the Sorting Application
 * Author:       Tayab Hussain

 ---------------------------------------------------------*/

var app = angular.module('NumberSortApp', []);

app.controller('MainCtrl', function($scope, $http) {
	/**
	 * This variable holds the number of maximum rows to be displayed in history
	 * of sort section
	 */
	$scope.rowCount = 10;
	$scope.sortColumnName = "Id";
	$scope.numbers = [ {
		id : 'number1'
	}, {
		id : 'number2'
	} ];
	$scope.addNewNumber = function() {
		var newItemNo = $scope.numbers.length + 1;
		$scope.numbers.push({
			'id' : 'number' + newItemNo
		});
	};

	$scope.removeNumber = function() {
		var lastItem = $scope.numbers.length - 1;
		$scope.numbers.splice(lastItem);
	};

	$scope.getSorted = function() {
		if(validateNumberList($scope.numbers)){
			/*
			 * call the rest service and set a response into a variable
			 */
			var response = $http.post('http://localhost:8080/sort/sortdata',
					$scope.numbers)

			response.success(function(data, status, headers, config) {
				$scope.sortedInfoData = data;
			});

			response.error(function(data, status, headers, config) {
				alert("Please check your Data");
			});
		}
		else{
			alert("Please fill all numbers correctly");
		}
	};

	$scope.getHistorySorts = function() {
		/*
		 * call the rest service and set a response into a variable
		 */
		$http.get('http://localhost:8080/sort/getSortHistory').then(
				function(response) {
					if(response.data.errorCode != null){
						alert("Something went wrong ! code:"+response.data.errorCode +" : "+response.data.message);
					}
					else{
						$scope.sortDataInfoList = response.data;
					}
				});
	};
});

/**
 * This function validates the number list and checks for any null value
 * @param numberList
 * @returns
 */
function validateNumberList(numberList){
	var status = true;
	for(var number of numberList){
		if(number.value == null)
			status =  false; 
		}
	return status;
}
