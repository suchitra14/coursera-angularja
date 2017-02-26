(function(){
	'use strict'
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService){

		var toBuyCtrl=this;
		toBuyCtrl.toBuy=ShoppingListCheckOffService.getToBuyItems();
		toBuyCtrl.message= "Everything is bought!";
		toBuyCtrl.buyItems = function(itemIndex){
			ShoppingListCheckOffService.removeFromtoBuy(itemIndex);
		}
	};


	function AlreadyBoughtController(ShoppingListCheckOffService) {

		var boughtCtrl=this;
		boughtCtrl.bought=ShoppingListCheckOffService.getBoughtItems();
		boughtCtrl.message = "Nothing bought yet."
	};


	function ShoppingListCheckOffService(){

		var shoppingService = this;
		var toBuyItems =[
			{ name: "cookies", quantity: 10 },
			{ name: "chips", quantity: 20 },
			{ name: "biscuits", quantity: 30 },
			{ name: "chikkis", quantity: 50 },
			{ name: "peanuts", quantity: 200 }

			];
		var boughtItems =[];
		shoppingService.getToBuyItems = function(){
			return toBuyItems;
		};
		shoppingService.removeFromtoBuy = function(index){
			boughtItems.push(toBuyItems[index]);
			toBuyItems.splice(index, 1);
		};

		shoppingService.getBoughtItems = function(){
			return boughtItems;
		};

	};


})();