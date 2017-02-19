(function(){
	'use strict'
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject =['$scope'];

	function LunchCheckController($scope){

		$scope.message ="";
		$scope.lunchMenu ="";
		$scope.checkIfTooMuch = function(lunchMenu){
			$scope.error="";
			$scope.message="";
			$scope.color="";
		if(lunchMenu==="" || lunchMenu===null) {
			$scope.message = "Please enter data first";
			$scope.color="red";
		} else {
		var lunchMenuItems = $scope.lunchMenu.split(",");
					$scope.color="green";
					var trimItems = validate(lunchMenuItems);
					if(trimItems.length===0){
						$scope.message = "Please enter data first";
						$scope.color="red";
					}else if(trimItems.length <=3){
						$scope.message ="Enjoy!"
					}else {
						$scope.message ="Too much!"
				}	
			
		}
	};

	function validate(lunchMenuItems){
		var items = lunchMenuItems;
		var validItems =[];
		for(var i=0; i< items.length; i++){
						if(items[i].trim()=="" || items[i]==null){
							$scope.error ="Empty item i.e. , , is not considered in the count";
						} else {
							validItems.push(items[i]);

						}
				}
			return validItems;
		}
	}

})();