(function(){
	var app = angular.module("wiki");
	
	app.controller( 'ItemtreeController', function ( $scope ) {
		
	  console.log("ItemtreeController launched");
	  this.tabs = wikistore.tabs;
	console.log(this.tabs);
	});
	
	app.directive("itemTreeview", function() {
	      return {
	        restrict: 'E',
	        templateUrl: "app/item-treeview.html",
	        controller: "ItemtreeController"
	      };
		  
	    });
		
})();