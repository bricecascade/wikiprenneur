(function(){
	var app = angular.module("wiki");
	
	app.controller( 'ItemtreeController', function ( $scope ) {
		
	  console.log("ItemtreeController launched");
	  
	});
	
	app.directive("itemTreeview", function() {
	      return {
	        restrict: 'E',
	        templateUrl: "app/item-treeview.html",
	        controller: "ItemtreeController"
	      };
		  
	    });
		
})();