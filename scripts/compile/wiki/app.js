/**

  Angular application level code
**/
(function(){
	var app = angular.module("wiki",[]);
	
		
})();



var wikistore = {
	name : "Nexonia",
	tabs :[
	{
		name:"Montreal",
		icon:"ico1",
		children:[
		{
			name:"bloc M1",
			icon:"ico2",
			details:{
			
			},
			children:[]
		},
		{
			name:"bloc M2",
			icon:"ico3",
			details:{
			},
			children:[]
		},
		{
			name:"bloc M3",
			icon:"ico3",
			details:{
			},
			children:[]
		}
		]
	},
	{
		name:"Toronto",
		icon:"ico2",
		children:[
		{
			name:"bloc T1",
			icon:"ico2",
			details:{
			
			},
			children:[]
		}]
	}
	]
};