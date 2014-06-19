(function(){
	var app = angular.module("wiki");
	
	app.controller( 'ItemdetailController', function ( $scope ) {
		//TODO : code to manage the popup
	  console.log("ItemdetailController launched");
	  
	});
	
	
	
	
	app.directive("itemDetail", function() {
	      return {
	        restrict: 'E',
	        templateUrl: "app/item-detail.html",
	        controller: "ItemdetailController"
	     
	      };
	    });
		
	
		
})();