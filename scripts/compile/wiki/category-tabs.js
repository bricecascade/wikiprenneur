(function(){
	var app = angular.module("wiki");
	
	app.controller( 'CategoryController', function ( $scope ) {
		//TODO : code to manage the popup
	  console.log("CategoryController launched");
	  
	});
	
	
	app.directive("categoryTabs", function() {
	      return {
	        restrict: 'E',
	        templateUrl: "app/category-tabs.html",
	        controller: "CategoryController"
	     
	      };
	    });
		
	
		
})();